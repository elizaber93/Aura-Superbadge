public with sharing class BoatDataService {
    
    @AuraEnabled
    public static List<BoatType__c> getBoatTypes() {
        List<BoatTYpe__c> boatTypes= [SELECT Id, Name FROM BoatType__c];
        return boatTypes;
    }
}