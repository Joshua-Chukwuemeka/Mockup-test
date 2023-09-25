import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-deactivate',
  templateUrl: './new-deactivate.component.html',
  styleUrls: ['./new-deactivate.component.scss']
})
export class NewDeactivateComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewDeactivateComponent>) { }

  ngOnInit(): void {
  }

}
