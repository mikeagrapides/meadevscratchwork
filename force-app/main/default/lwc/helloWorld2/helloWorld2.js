import { LightningElement } from 'lwc';
 /* eslint-disable no-console */
 /* eslint-disable no-alert */

export default class HelloWorld2 extends LightningElement {
    greeting = '';
    //console.log(‘test’);

    testHandler(){
        this.greeting = 'HELLO';
    }
}