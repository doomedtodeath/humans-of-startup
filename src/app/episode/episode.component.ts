import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router, Routes} from "@angular/router";
import { data } from '../../assets/data';
// import { filter } from 'lodash';
@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {
  dataSource = data;
  episode: any;

  constructor(private route: ActivatedRoute) {
    this.subscribeToRoutes();
  }

  ngOnInit(): void {
  }

  subscribeToRoutes() {
    this.route.queryParams.subscribe((qparam)=>{
      if(qparam['id']) {
        this.episode = this.dataSource.find( (episode) => episode.id === qparam['id']);
        console.log(this.episode);
      }
    })
  }

}
