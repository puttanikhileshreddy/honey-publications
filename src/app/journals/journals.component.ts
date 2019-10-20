import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import * as data  from "./data.json";

export interface DialogData {
  data: string;
  name: string;
}


@Component({
  selector: 'app-journals',
  templateUrl: './journals.component.html',
  styleUrls: ['./journals.component.scss']
})
export class JournalsComponent implements OnInit {
  data1: string;
  name: string;
  json: any = data;
  
  constructor(public dialog: MatDialog) { }
  openDialog(r): void {
    
 
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '900px',
      data: {name: this.json.default.Journalsdata, topic : r}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  jsondata(){
    // console.log(JSON.stringify(this.json));

  }
  ngOnInit() {
    this.jsondata();
  }

}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}