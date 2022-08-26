import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-table-section',
  templateUrl: './table-section.component.html',
  styleUrls: ['./table-section.component.scss']
})
export class TableSectionComponent implements OnInit {

  @Input() columns: any;
  @Input() buttons: any;
  @Input() data: Product[] | undefined;
  @Output() headerBtnEmitter = new EventEmitter()
  @Output() actionEmitter = new EventEmitter()
  
  dropdownIcon = false
  constructor() { }

  ngOnInit(): void {
  }

  orderBy = (e: any, data: any) => {
    this.headerBtnEmitter.emit(data)
  }

  actions = (event: any, type: any) => {
    this.actionEmitter.emit({...event, type})
  }

  getDataLength() {
    return !this.data?.length;
  }

  tableRowData =(data: any): string[] => {
    // console.log(this.columns, "the columns")
    // let result: string[] = [] 
    // for(let col in this.columns){
    //   if(Object.keys(data).includes(this.columns[parseInt(col)])){
    //     console.log(result.push(data[this.columns[parseInt(col)]]), "lets try")
    let result: string[] = []
    for(let col of this.columns){
    //   if(Object.keys(data).includes(col.key)){
    //     result.push(data[col.key])
    //   }
    // }
    if(Object.keys(data).includes(this.columns[parseInt(col)])){
      console.log(result.push(data[this.columns[parseInt(col)]]), "lets try")
      
    }
  }
    return result;
  }

}
