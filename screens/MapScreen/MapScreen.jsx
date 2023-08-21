import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE, Heatmap } from "react-native-maps";
import { locations } from "../../data/locations";

const customGradient = {
  colors: ["rgba(0, 255, 0, 0)", "yellow", "red"],
  startPoints: [0.01, 0.2, 1],
  colorMapSize: 256,
};

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 24.8307323,
          longitude: 67.10113298,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Heatmap
          points={locations}
          radius={40}
          opacity={0.9}
          gradient={customGradient}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
