import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Song } from 'src/app/models/song';
import { ListTrackerService } from 'src/app/services/list-tracker.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() song: Song;
  @Output() itemSaved: EventEmitter<any> = new EventEmitter(); // this is a field on the class

  
  constructor(private listTrackerServ: ListTrackerService) { }

  ngOnInit(): void {
  }

  saveItem(song:Song): void {
    // this will add the item to mySavedList in the service
    this.listTrackerServ.mySavedList.push(song);
    // if you want, you can also make sure it's working by adding a console.log here
    console.log(this.listTrackerServ.mySavedList);
    this.itemSaved.emit();

}


}
