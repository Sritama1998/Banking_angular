import { Component } from '@angular/core';

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.css']
})
export class FundTransferComponent {
  amount: number=0;
  selectedFromBank: string="";
  selectedToBank: string="";
  frombanks: string[] = ['Bank A', 'Bank B', 'Bank C', 'Bank D'];
  tobanks: any[] = [
    {id:'1',name:'sritama'},
    {id:'2',name:'jayant'},
    {id:'3',name:'arka'}
  ]
  transfer() {
    // Logic for transferring funds goes here
    console.log(`Transferring ${this.amount} from ${this.selectedFromBank} to ${this.selectedToBank}`);
  }
}
