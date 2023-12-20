import {AfterViewInit, Component, Input} from '@angular/core';
import * as Leaflet from "leaflet"
import "leaflet-gpx";

@Component({
  selector: 'app-open-street-map',
  templateUrl: './open-street-map.component.html',
  styleUrls: ['./open-street-map.component.css']
})
export class OpenStreetMapComponent implements AfterViewInit{
  private map!: Leaflet.Map;
  private displayedTrekLayer: Leaflet.GPX[] = []

  @Input() set gpx(datas: string[]) {

    this.displayedTrekLayer.forEach(gpx => this.map.removeLayer(gpx));

    this.displayedTrekLayer = datas.map((data) => {
       return new Leaflet
        .GPX(data, {async: true})
        .on('loaded', (e) => {
          this.map.fitBounds(e.target.getBounds())
        })
    });



    this.displayedTrekLayer.map((gpx) => gpx.addTo(this.map));

  }

    ngAfterViewInit(): void {
    this.initMap();
  }


  private initMap() {
    console.log("starting open street map");
    this.map = Leaflet.map('map', {center: [39.8282, -98.5795],  zoom: 3});

    const tiles = Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

  }
}

