import { describe, expect, it } from "vitest";
import { Customer, Reservation } from "@avis/types";
import { getJourneyActions } from "./index";

const reservation: Reservation = {
  id: "ABC123",
  lastName: "Khanam",
  status: "Booked",
  pickupLocation: "ORD",
  pickupDate: "2026-03-20T10:00:00.000Z",
  returnDate: "2026-03-24T10:00:00.000Z",
  vehicleClass: "Intermediate",
  canUpgrade: true,
  preCheckInAvailable: true,
};

const customer: Customer = {
  id: "CUS100",
  name: "Aysha Khanam",
  loyaltyTier: "Preferred",
  biometricEligible: true,
  eReceiptEnabled: false,
};

describe("getJourneyActions", () => {
  it("returns upgrade and ereceipt actions for an eligible customer", () => {
    const actions = getJourneyActions(reservation, customer);
    expect(actions.find((a) => a.id === "upgrade")).toBeTruthy();
    expect(actions.find((a) => a.id === "ereceipt")?.status).toBe("ready");
    expect(actions[0].id).toBe("precheckin");
  });
});
