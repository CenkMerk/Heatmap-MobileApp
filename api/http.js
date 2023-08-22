import axios from "axios";

const url = "https://heatmap-9cea2-default-rtdb.firebaseio.com/";

export function storeLocationHistory(locationHistory) {
  axios.post(url + "/locations.json", locationHistory);
}

export async function getLocations() {
  const response = await axios.get(url + "/locations.json");
  const locations = [];

  for (const key in response.data) {
    const locationObj = {
      latitude: response.data[key].latitude,
      longitude: response.data[key].longitude,
    };
    locations.push(locationObj);
  }

  return locations;
}

export function deleteLocations() {
  return axios.delete(url + "/locations.json");
}
