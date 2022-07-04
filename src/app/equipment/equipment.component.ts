import { DomElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipmentList: string[] = [ 
    "Habitat dome", "Drones", "Food containers", "Oxygen tanks"
  ];

  itemBeingEdited: string = null;

  constructor() { }

  ngOnInit() {
  }

  addEquipment(equipmentName: string) {
    this.equipmentList.push(equipmentName);

  }

  edit(item: string) {
    this.itemBeingEdited = item;
  }

  save(updatedItem: string, item: string) {
    let index = this.equipmentList.indexOf(item);
    this.equipmentList[index] = updatedItem;
    this.itemBeingEdited = null;
  }

  remove(item: string) {
    let index = this.equipmentList.indexOf(item);
    this.equipmentList.splice(index, 1);
  }


}
