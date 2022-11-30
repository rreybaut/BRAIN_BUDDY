import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = {
    apiKey: String,
    markers: Array
  }

  connect() {
    mapboxgl.accessToken = "pk.eyJ1IjoiZWdsZXIiLCJhIjoiY2xiMmRnM2Z1MDNzMzNwcXRzcGZpNjA1MyJ9.OgPtKkpm5SBI_o_rk1tAiw"

    this.map = new mapboxgl.Map({
      container: this.element,
      style: "mapbox://styles/mapbox/streets-v10",
      center: [7.26, 43.72],
      zoom: 10
    })
    this.#addMarkersToMap()
  }
  #addMarkersToMap() {
    this.markersValue.forEach((marker) => {
      new mapboxgl.Marker()
        .setLngLat([ marker.lng, marker.lat ])
        .addTo(this.map)
    })
  }
}
