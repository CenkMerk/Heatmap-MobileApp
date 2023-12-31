import React, { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import styles from "./style";
//react native maps
import MapView, { PROVIDER_GOOGLE, Heatmap, Marker } from "react-native-maps";
//expo location
import * as Location from "expo-location";
//firebase
import { getLocations, storeLocationHistory } from "../../api/http";

const customGradient = {
  colors: ["rgba(0, 255, 0, 0)", "yellow", "red"],
  startPoints: [0.01, 0.3, 1],
  colorMapSize: 256,
};

export default function MapScreen() {
  const [location, setLocation] = useState(null);
  const [locationsHistory, setLocationsHistory] = useState([]);

  useEffect(() => {
    const getPermissions = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Please grant location permissions");
        return;
      }
      let currentLocation = await Location.getCurrentPositionAsync({});

      setLocation(currentLocation);

      storeLocationHistory({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      });

      const locations = await getLocations();
      setLocationsHistory(locations);
    };

    getPermissions();
    const interval = setInterval(getPermissions, 10000);

    return () => clearInterval(interval);
    
  }, []);

  return (
    <View style={styles.container}>
      {location ? (
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Heatmap
            points={locationsHistory}
            radius={30}
            opacity={0.7}
            gradient={customGradient}
          />
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="You are here"
            description="Your location"
          />
        </MapView>
      ) : (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#FF6464" />
        </View>
      )}
    </View>
  );
}
