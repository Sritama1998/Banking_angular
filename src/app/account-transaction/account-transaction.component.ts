import { Component } from '@angular/core';

@Component({
  selector: 'app-account-transaction',
  templateUrl: './account-transaction.component.html',
  styleUrls: ['./account-transaction.component.css']
})


export class AccountTransactionComponent {
  startDate: string = "";
  endDate: string = "";
  filter: string = "";
  tableData: any[] = [
    { date: '2022-03-15', Serial_no: '1', ID: "AAAA", amount:"67345"},
    { date: '2022-03-12', Serial_no: '2', ID: "BBBB",amount:"67345" },
    { date: '2022-03-10', Serial_no: '3', ID: "CCCC",amount:"67345"},
    { date: '2022-03-05', Serial_no: '4', ID: "DDDD" ,amount:"67345"},
    { date: '2022-03-01', Serial_no: '5', ID: "EEEE",amount:"67345"},
    { date: '2023-03-01', Serial_no: '6', ID: "FFFF",amount:"67345" }
  ];
  
  filterTable(): void {
    const startDate = new Date(this.startDate);
    const endDate = new Date(this.endDate);
    const filter = this.filter.toUpperCase();
    this.tableData.forEach(row => {
      const dateValue = new Date(row.date);
      if (
        (isNaN(startDate.getTime()) || dateValue >= startDate) &&
        (isNaN(endDate.getTime()) || dateValue <= endDate) &&
        (filter === "" || row.description.toUpperCase().indexOf(filter) > -1)
      ) {
        row.show = true;
      } else {
        row.show = false;
      }
    });
  }

  downloadCSV() {
    const headers = ['Date', 'Description', 'Amount'];
    const rows = this.tableData.filter(row => row.show).map(row => [row.date, row.description, row.amount]);

    const csvContent = "data:text/csv;charset=utf-8," + headers.join(',') + '\n' + rows.map(row => row.join(',')).join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "account_transactions.csv");
    document.body.appendChild(link); // Required for FF
    link.click();
  }

}

