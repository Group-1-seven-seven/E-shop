import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductItem } from 'src/app/models/product-item';

@Component({
  selector: 'app-table-section',
  templateUrl: './table-section.component.html',
  styleUrls: ['./table-section.component.scss']
})
export class TableSectionComponent implements OnInit {
@Input() data: ProductItem[] | undefined;
@Input() columns: any;
@Input() buttons: any;
@Output() headerBtnEmitter = new EventEmitter()
@Output() actionEmitter = new EventEmitter()

dropdownIcon = false
  constructor() { 
    
  }

  ngOnInit(): void {
  }

  getDataLength() {
    return !this.data?.length;
  }

  tableRowData =(data: any): any[] => {
    let resultArray: any[] = []
    for(let col of this.columns){
      if(Object.keys(data).includes(col.key)){
        if(col.badge) {
          resultArray.push({val: data[col.key], key: col.key})
        }else {
          resultArray.push({val: data[col.key]})
        }
      }
    }
    return resultArray;
  }

  orderBy = (e: any, data: any) => {
    this.headerBtnEmitter.emit(data)
  }

  actions = (event: any, type: any) => {
    this.actionEmitter.emit({...event, type})
  }

}
