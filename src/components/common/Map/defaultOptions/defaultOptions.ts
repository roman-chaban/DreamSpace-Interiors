import { Style } from "../MapTheme/DarkTheme";

export interface DefaultOptions {
  panControl: boolean;
  zoomControl: boolean;
  mapTypeControl: boolean;
  scaleControl: boolean;
  streetViewControl: boolean;
  rotateControl: boolean;
  styles: Style[];
}
