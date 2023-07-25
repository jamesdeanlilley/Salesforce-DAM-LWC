import { LightningElement, wire } from 'lwc';
import getFinanceFields from '@salesforce/apex/AccountController.getFinanceFields';
import getHealthcareFields from '@salesforce/apex/AccountController.getHealthcareFields';
// Import more Apex methods for each industry

export default class AccountFields extends LightningElement {
    industryOptions = [
        { label: 'Finance', value: 'Finance' },
        { label: 'Healthcare', value: 'Healthcare' },
        // Add more options for each industry
    ];
    selectedIndustries = [];

    @wire(getFinanceFields)
    financeFields;

    @wire(getHealthcareFields)
    healthcareFields;
    // Add more @wire methods for each industry

    handleIndustryChange(event) {
        this.selectedIndustries = event.detail.value;
    }
}