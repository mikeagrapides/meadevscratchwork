import { LightningElement, wire, api } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';
import findAccount from '@salesforce/apex/AccountController.findAccount';
const DELAY = 300;

export default class HelloWorld extends LightningElement {
  greeting = 'World';
  changeHandler(event) {this.greeting = event.target.value;}

  @wire(getAccountList) accounts;

  @api recordId = '';

  searchKey = '';

  @wire(findAccount, { searchKey: '$searchKey' })
  recordId;

  handleKeyChange(event) {
      // Debouncing this method: Do not update the reactive property as long as this function is
      // being called within a delay of DELAY. This is to avoid a very large number of Apex method calls.
      window.clearTimeout(this.delayTimeout);
      const searchKey = event.target.value;
      this.delayTimeout = setTimeout(() => {
          this.searchKey = searchKey;
      }, DELAY);
  }
  
}
    