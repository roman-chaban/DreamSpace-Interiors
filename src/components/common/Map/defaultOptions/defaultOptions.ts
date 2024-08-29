import { defaultTheme, Style } from '../MapTheme/Theme';

interface DefaultOptions {
  panControl: boolean;
  zoomControl: boolean;
  mapTypeControl: boolean;
  scaleControl: boolean;
  streetViewControl: boolean;
  rotateControl: boolean;
  styles: Style[];
}

export const defaultOptions: DefaultOptions = {
  panControl: true,
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  styles: defaultTheme,
};
