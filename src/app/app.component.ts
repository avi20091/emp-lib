import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'grid';
  columnHeader1 = { 'empID': 'Employee ID', 'empName': 'Employee Name', 'bankName': 'Bank Name', 'branch': 'Branch' };

  tableData1: any[] = [
    { empID: 1, empName: 'Pramod Sharma', bankName: "HDFC Bank", branch: 'Mumbai' },
    { empID: 2, empName: 'Satish Diwan', bankName: "ICICI Bank", branch: 'Pune' },
    { empID: 3, empName: 'Sachin Pandey', bankName: "IDFC Bank", branch: 'Hyderabad' },
    { empID: 4, empName: 'Nitin Naik', bankName: "Yes Bank", branch: 'Kolhapur' },
    { empID: 5, empName: 'Amrut Joshi', bankName: "Axis Bank", branch: 'Delhi' },
    { empID: 6, empName: 'Ajit Patil', bankName: "City Bank", branch: 'Surat' },
  ];
}
