import type { FC } from 'react';
import React, { useCallback, useRef } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import styles from './Map.module.scss';
import { defaultOptions } from './defaultOptions/defaultOptions';

const containerStyle = {
  width: '100%',
  height: '404px',
};

interface MapProps {
  center: { lat: number; lng: number };
}

const API_KEY = process.env.NEXT_PUBLIC_PROJECT_APP_API_KEY || '';

const libraries: string[] = ['places'];

export const Map: FC<MapProps> = ({ center }) => {
  const mapRef = useRef<google.maps.Map | undefined>(undefined);

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
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};