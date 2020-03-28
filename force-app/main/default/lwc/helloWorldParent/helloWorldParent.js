import { LightningElement } from 'lwc';
 /* eslint-disable no-console */
 /* eslint-disable no-alert */
export default class HelloWorldParent extends LightningElement {
    greeting = 'TEST GREETING';

    testHandler(){
        this.greeting = 'HELLO';
    }
}