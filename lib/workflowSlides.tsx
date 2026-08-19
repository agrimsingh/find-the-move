import type { SlideDef } from "../components/Slide";
import { proofSlides } from "./proofSlides";
import { ritualSlides } from "./ritualSlides";
import { routingSlides } from "./routingSlides";

export const workflowSlides = [
  ...ritualSlides,
  ...proofSlides,
  ...routingSlides
] satisfies readonly SlideDef[];
