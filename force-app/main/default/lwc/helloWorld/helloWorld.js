import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';

export default class HelloWorld extends LightningElement {
  greeting = 'World';
  changeHandler(event) {this.greeting = event.target.value;}
  @wire(getAccountList) accounts;
}
    