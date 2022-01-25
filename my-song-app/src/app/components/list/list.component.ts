import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/models/song';
import { ListTrackerService } from 'src/app/services/list-tracker.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  mySavedList: Song[] =[];

mySongs: Song[] = [];

constructor(private listTrackerServ: ListTrackerService) { }
// other code probably
updateItems(): void {
    this.mySavedList = this.listTrackerServ.mySavedList;
}

  ngOnInit(): void {
    this.mySongs = [
      {id:1, name:'Believer', description:'Imagine Dragons', price:0.99},
      {id:5, name:'Thunder', description:'Imagine Dragons', price:2.99},
      {id:10, name:'Natural', description:'Imagine Dragons', price:5.00}
  ];

  }
  removeSong(song:Song){
    this.listTrackerServ.removeSong(song);
  }
  
}
