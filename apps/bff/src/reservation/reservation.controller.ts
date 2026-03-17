import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UpgradeRequest } from "@avis/types";
import { ReservationService } from "./reservation.service";

@Controller()
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @Get("journey/:id")
  getJourney(@Param("id") id: string) {
    return this.reservationService.getJourney(id.toUpperCase());
  }

  @Post("reservation/:id/upgrade")
  upgradeReservation(
    @Param("id") id: string,
    @Body() body: UpgradeRequest,
  ) {
    return this.reservationService.upgradeReservation(id.toUpperCase(), body);
  }
}
