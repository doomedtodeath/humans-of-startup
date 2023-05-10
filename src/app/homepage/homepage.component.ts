import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedin, faYoutube, faSpotify, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { data } from '../../assets/data';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  faCoffee = faCoffee;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  faYoutube = faYoutube;
  faSpotify = faSpotify;
  faInstagram =faInstagram;
  dataSource = data;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  navigateToEpisode(id: string){
    this.route.navigate(['/episode'], {queryParams: {id: id}})
  }


}
