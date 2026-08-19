import type { SlideDef } from "../components/Slide";
import { benchmarkSlides } from "./benchmarkSlides";
import { proofSlides } from "./proofSlides";
import { ritualSlides } from "./ritualSlides";
import { routingSlides } from "./routingSlides";

export const workflowSlides = [
  ...ritualSlides,
  ...proofSlides,
  ...benchmarkSlides,
  ...routingSlides
] satisfies readonly SlideDef[];
