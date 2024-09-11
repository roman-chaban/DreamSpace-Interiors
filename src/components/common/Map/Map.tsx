import type { FC } from 'react';
import React, { useCallback, useRef } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import styles from './Map.module.scss';
import { DefaultOptions } from './defaultOptions/defaultOptions';
import { MapLoader } from './MapLoader/MapLoader';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import { lightTheme } from './MapTheme/lightTheme';
import { darkTheme } from './MapTheme/darkTheme';

const containerStyle = {
  width: '100%',
  height: '404px',
};

interface MapProps {
  center: { lat: number; lng: number };
}

const API_KEY = 'AIzaSyBp2mAlPSQtPGwHhLdsauOP8bTANnLpkQk' || '';

const libraries: string[] = ['places'];

export const Map: FC<MapProps> = ({ center }) => {
  const mapRef = useRef<google.maps.Map | undefined>(undefined);
  const mapTheme = useAppSelector((state) => state.theme.theme);

  const defaultOptions: DefaultOptions = {
    panControl: true,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    styles: mapTheme === 'dark' ? lightTheme : darkTheme,
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY,
  });

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(function callback() {
    mapRef.current = undefined;
  }, []);

  return (
    <div className={styles.mapContainer}>
      <div className={styles.map}>
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={9}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={defaultOptions}
          >
            <></>
          </GoogleMap>
        ) : (
          <MapLoader />
        )}
      </div>
    </div>
  );
};
