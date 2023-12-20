import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Trek} from "../../models/Trek";

@Component({
  selector: 'app-trek-edit-dialog',
  templateUrl: './trek-edit-dialog.component.html',
  styleUrls: ['./trek-edit-dialog.component.css']
})
export class TrekEditDialogComponent {
  title: string = "";
  date: Date;

  constructor(
    private dialogRef: MatDialogRef<TrekEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: {trek: Trek}
  ) {
    if(data.trek.title)
      this.title = data.trek.title;
    if(this.data.trek.date) {
      this.date = new Date(this.data.trek.date);
    } else {
      this.date = new Date();
    }
  }

  onCancel() {
    this.dialogRef.close();
  }

  save() {
    this.data.trek.title = this.title;
    this.data.trek.date = this.date.getTime();
    this.dialogRef.close(this.data.trek);
  }
}
