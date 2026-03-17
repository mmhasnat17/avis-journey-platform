export type VehicleClass =
  | "Economy"
  | "Intermediate"
  | "SUV"
  | "Luxury";

export interface Customer {
  id: string;
  name: string;
  loyaltyTier: "None" | "Preferred" | "President's Club";
  biometricEligible: boolean;
  eReceiptEnabled: boolean;
}

export interface Reservation {
  id: string;
  lastName: string;
  status: "Booked" | "CheckedIn";
  pickupLocation: string;
  pickupDate: string;
  returnDate: string;
  vehicleClass: VehicleClass;
  canUpgrade: boolean;
  preCheckInAvailable: boolean;
}

export type JourneyActionType =
  | "precheckin"
  | "upgrade"
  | "ereceipt"
  | "biometric";

export interface JourneyAction {
  id: JourneyActionType;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
  priority: number;
  status: "ready" | "complete" | "recommended";
}

export interface ContentBanner {
  title: string;
  message: string;
  eyebrow: string;
}

export interface JourneyResponse {
  reservation: Reservation;
  customer: Customer;
  actions: JourneyAction[];
  banner: ContentBanner;
}

export interface UpgradeRequest {
  vehicleClass: VehicleClass;
}
