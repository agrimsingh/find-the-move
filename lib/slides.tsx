import type { SlideDef } from "../components/Slide";
import { storySlides } from "./storySlides";
import { workflowSlides } from "./workflowSlides";

export const slides: SlideDef[] = [
  ...storySlides,
  ...workflowSlides
];

export const slideCount = slides.length;
