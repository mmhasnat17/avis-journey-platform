import { JourneyResponse, UpgradeRequest } from "@avis/types";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001";

export async function getJourney(reservationId: string): Promise<JourneyResponse> {
  const response = await fetch(`${API_BASE_URL}/journey/${reservationId}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to load journey");
  }

  return response.json();
}

export async function upgradeVehicle(
  reservationId: string,
  payload: UpgradeRequest,
): Promise<JourneyResponse> {
  const response = await fetch(`${API_BASE_URL}/reservation/${reservationId}/upgrade`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Failed to update reservation");
  }

  return response.json();
}
