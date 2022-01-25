import { Injectable } from '@angular/core';
import { Song } from '../models/song';

@Injectable({
  providedIn: 'root'
})
export class ListTrackerService {

  mySavedList: Song[] =[];


  constructor() { }

  saveItem(song: Song): void {
      this.mySavedList.push(song);
      console.log(this.mySavedList);
  }
  removeSong(song: Song): void{
this.mySavedList.splice(song.id);
  }

}
