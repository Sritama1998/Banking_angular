import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-add-update-delete-tpt',
  templateUrl: './add-update-delete-tpt.component.html',
  styleUrls: ['./add-update-delete-tpt.component.css']
})


export class AddUpdateDeleteTPTComponent {
  beneficiaries: any[] = [
    { name: 'Sritama', accountNumber: 123456789, ifsc: 'ABCD1234567' },
    { name: 'Arka', accountNumber: 987654321, ifsc: 'EFGH9876543' },
    { name: 'Tripti', accountNumber: 456789123, ifsc: 'IJKL4567890' },
  ];

  newBeneficiary: any = {};

  selectedBeneficiary: any = {};

  showEditForm = false;

  constructor() { }

  ngOnInit() {
  }

  addBeneficiary() {
    this.beneficiaries.push(this.newBeneficiary);
    this.newBeneficiary = {};
  }

  editBeneficiary(beneficiary: any) {
    this.selectedBeneficiary = Object.assign({}, beneficiary);
    this.showEditForm = true;
  }

  updateBeneficiary() {
    const index = this.beneficiaries.findIndex(b => b === this.selectedBeneficiary);
    this.beneficiaries[index] = this.selectedBeneficiary;
    this.selectedBeneficiary = {};
    this.showEditForm = false;
  }

  deleteBeneficiary(beneficiary: any) {
    const index = this.beneficiaries.findIndex(b => b === beneficiary);
    this.beneficiaries.splice(index, 1);
  }

  cancelEdit() {
    this.selectedBeneficiary = {};
    this.showEditForm = false;
  }

}





