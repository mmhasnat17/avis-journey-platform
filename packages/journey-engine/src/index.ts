import {
  ContentBanner,
  Customer,
  JourneyAction,
  Reservation,
} from "@avis/types";

export function getJourneyActions(
  reservation: Reservation,
  customer: Customer,
): JourneyAction[] {
  const actions: JourneyAction[] = [];

  if (reservation.preCheckInAvailable && reservation.status !== "CheckedIn") {
    actions.push({
      id: "precheckin",
      title: "Complete pre-check-in",
      description: "Save time at pickup by completing your check-in online.",
      ctaLabel: "Start check-in",
      href: `/journey/${reservation.id}/checkin`,
      priority: 1,
      status: "recommended",
    });
  }

  if (reservation.canUpgrade) {
    actions.push({
      id: "upgrade",
      title: "Upgrade vehicle",
      description: `Enhance this trip from ${reservation.vehicleClass} to a premium class.`,
      ctaLabel: "See upgrades",
      href: `/journey/${reservation.id}/upgrade`,
      priority: 2,
      status: customer.loyaltyTier !== "None" ? "recommended" : "ready",
    });
  }

  actions.push({
    id: "ereceipt",
    title: "Enable e-receipt",
    description: customer.eReceiptEnabled
      ? "Your e-receipt preference is already enabled."
      : "Get faster digital receipts after your rental.",
    ctaLabel: customer.eReceiptEnabled ? "Enabled" : "Enable now",
    href: `/journey/${reservation.id}/ereceipt`,
    priority: 3,
    status: customer.eReceiptEnabled ? "complete" : "ready",
  });

  actions.push({
    id: "biometric",
    title: "Biometric readiness",
    description: customer.biometricEligible
      ? "Eligible locations can support faster pickup experiences."
      : "Biometric pickup is not enabled for this profile yet.",
    ctaLabel: "Learn more",
    href: `/journey/${reservation.id}#biometric`,
    priority: 4,
    status: customer.biometricEligible ? "complete" : "ready",
  });

  return actions.sort((a, b) => a.priority - b.priority);
}

export function getJourneyBanner(
  reservation: Reservation,
  customer: Customer,
): ContentBanner {
  if (reservation.canUpgrade && customer.loyaltyTier !== "None") {
    return {
      eyebrow: "Recommended action",
      title: "Skip the counter and customize your trip",
      message:
        "Complete pre-check-in and review your personalized upgrade offer before pickup.",
    };
  }

  return {
    eyebrow: "Digital journey",
    title: "Manage your trip before arrival",
    message:
      "Use self-service actions like pre-check-in and e-receipt to streamline pickup.",
  };
}
