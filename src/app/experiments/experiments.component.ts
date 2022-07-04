import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  experiments: string[] = [
    "Mars soil sample", "Plant growth in habitat", "Human bone density"
  ]

  itemBeingEdited: string = null;

  constructor() { }

  ngOnInit() {
  }
  add(item: string) {
    this.experiments.push(item);
  }

  edit(item: string) {
    this.itemBeingEdited = item;
  }

  save(updatedItem: string, item: string) {
    let index = this.experiments.indexOf(item);
    this.experiments[index] = updatedItem;
    this.itemBeingEdited = null;
  }

  remove(item: string) {
    let index = this.experiments.indexOf(item);
    this.experiments.splice(index, 1);
  }
}
