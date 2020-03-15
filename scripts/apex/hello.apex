// Use .apex files to store anonymous Apex.
// You can execute anonymous Apex in VS Code by selecting the
//     apex text and running the command:
//     SFDX: Execute Anonymous Apex with Currently Selected Text
// You can also execute the entire file by running the command:
//     SFDX: Execute Anonymous Apex with Editor Contents

List<Account> accountList = new List<Account>();
List<Contact> contactList = new List<Contact>();

for (Integer i = 0; i < 10; i++) {
    Account acct = new Account(Name='Test Account ' + i,
                               ShippingLatitude = i + 0.555,
                               ShippingLongitude = i + 0.999);
    accountList.add(acct);
    System.debug(i+1);
}

insert accountList;
