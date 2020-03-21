public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList() {
        return [SELECT Id, Name FROM Account LIMIT 100];
    }
    @AuraEnabled(cacheable=true)
    public static Id findAccount(String searchKey) {
        String key = '%' + searchKey + '%';
        List<Account> accounts = [
            SELECT Id, Name
            FROM Account
            WHERE Name LIKE :key
            LIMIT 1
        ];

        system.debug('TEST');
        system.debug('account: ' + accounts[0].Id);
        
        return accounts[0].Id;
    }
}