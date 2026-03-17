import { Customer, Reservation } from "@avis/types";

export const customers: Record<string, Customer> = {
  ABC123: {
    id: "CUS100",
    name: "NANDA BHAVNEET",
    loyaltyTier: "Preferred",
    biometricEligible: true,
    eReceiptEnabled: false,
  },
  VIP777: {
    id: "CUS777",
    name: "PNAKAJ SUPRIYA",
    loyaltyTier: "President's Club",
    biometricEligible: true,
    eReceiptEnabled: true,
  },
};

export const reservations: Record<string, Reservation> = {
  ABC123: {
    id: "ABC123",
    lastName: "BHAVNEET",
    status: "Booked",
    pickupLocation: "Chicago O'Hare",
    pickupDate: "2026-03-20T10:00:00.000Z",
    returnDate: "2026-03-24T10:00:00.000Z",
    vehicleClass: "Intermediate",
    canUpgrade: true,
    preCheckInAvailable: true,
  },
  VIP777: {
    id: "VIP777",
    lastName: "SUPRIYA",
    status: "Booked",
    pickupLocation: "Dallas Love Field",
    pickupDate: "2026-03-21T09:00:00.000Z",
    returnDate: "2026-03-25T09:00:00.000Z",
    vehicleClass: "SUV",
    canUpgrade: true,
    preCheckInAvailable: true,
  },
};
