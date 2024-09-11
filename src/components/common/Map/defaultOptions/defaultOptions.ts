import { Style } from "../MapTheme/darkTheme";

export interface DefaultOptions {
  panControl: boolean;
  zoomControl: boolean;
  mapTypeControl: boolean;
  scaleControl: boolean;
  streetViewControl: boolean;
  rotateControl: boolean;
  styles: Style[];
}
