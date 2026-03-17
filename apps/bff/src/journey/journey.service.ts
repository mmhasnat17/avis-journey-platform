import { Injectable } from "@nestjs/common";

@Injectable()
export class JourneyService {
  explain() {
    return {
      summary:
        "This service exists to show where journey orchestration logic can evolve if the BFF grows beyond simple reservation composition.",
    };
  }
}
