import { Injectable, NotFoundException } from "@nestjs/common";
import { JourneyResponse, UpgradeRequest } from "@avis/types";
import { getJourneyActions, getJourneyBanner } from "@avis/journey-engine";
import { customers, reservations } from "../data/mock-data";

@Injectable()
export class ReservationService {
  getJourney(reservationId: string): JourneyResponse {
    const reservation = reservations[reservationId];
    const customer = customers[reservationId];

    if (!reservation || !customer) {
      throw new NotFoundException(`Reservation ${reservationId} was not found`);
    }

    return {
      reservation,
      customer,
      actions: getJourneyActions(reservation, customer),
      banner: getJourneyBanner(reservation, customer),
    };
  }

  upgradeReservation(
    reservationId: string,
    body: UpgradeRequest,
  ): JourneyResponse {
    const reservation = reservations[reservationId];
    const customer = customers[reservationId];

    if (!reservation || !customer) {
      throw new NotFoundException(`Reservation ${reservationId} was not found`);
    }

    reservation.vehicleClass = body.vehicleClass;

    return {
      reservation,
      customer,
      actions: getJourneyActions(reservation, customer),
      banner: getJourneyBanner(reservation, customer),
    };
  }
}
