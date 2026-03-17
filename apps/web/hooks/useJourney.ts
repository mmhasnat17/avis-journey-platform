"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { JourneyResponse, UpgradeRequest } from "@avis/types";
import { getJourney, upgradeVehicle } from "@/lib/api";

export function useJourney(reservationId: string) {
  const [data, setData] = useState<JourneyResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [mutating, setMutating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await getJourney(reservationId);
      setData(result);
    } catch {
      setError("Unable to load reservation journey.");
    } finally {
      setLoading(false);
    }
  }, [reservationId]);

  useEffect(() => {
    void load();
  }, [load]);

  const upgrade = useCallback(
    async (payload: UpgradeRequest) => {
      try {
        setMutating(true);
        setError(null);
        const result = await upgradeVehicle(reservationId, payload);
        setData(result);
        return result;
      } catch {
        setError("Unable to complete upgrade.");
        return null;
      } finally {
        setMutating(false);
      }
    },
    [reservationId],
  );

  const actions = useMemo(() => data?.actions ?? [], [data]);

  return {
    data,
    actions,
    loading,
    mutating,
    error,
    reload: load,
    upgrade,
  };
}
