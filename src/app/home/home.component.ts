import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HealthCheckComponent } from '../health-check/health-check.component';
import { NewDeactivateComponent } from '../new-deactivate/new-deactivate.component';

export interface PeriodicElement {
  application: string;
  no: number;
  server: any;
  lastScan: string;
  status: string;
  action: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { no: 1, application: 'Application name goes here', server:'3 Servers', lastScan: '11/12/20 3:57', status: 'Healthy', action: 'Result' },
  { no: 1, application: 'Application name goes here', server:'3 Servers', lastScan: '11/12/20 3:57', status: 'Healthy', action: 'Result' },
  { no: 1, application: 'Application name goes here', server:'3 Servers', lastScan: '11/12/20 3:57', status: 'Healthy', action: 'Result' },
  { no: 1, application: 'Application name goes here', server:'3 Servers', lastScan: '11/12/20 3:57', status: 'Healthy', action: 'Result' },
  { no: 1, application: 'Application name goes here', server:'3 Servers', lastScan: '11/12/20 3:57', status: 'Healthy', action: 'Result' },
  { no: 1, application: 'Application name goes here', server:'3 Servers', lastScan: '11/12/20 3:57', status: 'Healthy', action: 'Result' },
  { no: 1, application: 'Application name goes here', server:'3 Servers', lastScan: '11/12/20 3:57', status: 'Healthy', action: 'Result' },
  { no: 1, application: 'Application name goes here', server:'3 Servers', lastScan: '11/12/20 3:57', status: 'Healthy', action: 'Result' },
  { no: 1, application: 'Application name goes here', server:'3 Servers', lastScan: '11/12/20 3:57', status: 'Healthy', action: 'Result' },
  { no: 1, application: 'Application name goes here', server:'3 Servers', lastScan: '11/12/20 3:57', status: 'Healthy', action: 'Result' },
  { no: 2, application: 'Application name goes here', server:'3 Servers', lastScan: '11/12/20 3:57', status: 'Healthy', action: 'Result' },

];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  displayedColumns: string[] = ['no', 'application', 'server', 'lastScan', 'status', 'action'];
  dataSource = ELEMENT_DATA;


  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(NewDeactivateComponent, {
      width: '550px',
      height: '300px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  resultDialog() {
    this.dialog.open(HealthCheckComponent, {
      width: '1000px',
      height: '650px'
    });
  }
}

