import { Module } from "@nestjs/common";
import { ReservationModule } from "./reservation/reservation.module";
import { JourneyModule } from "./journey/journey.module";

@Module({
  imports: [ReservationModule, JourneyModule],
})
export class AppModule {}
