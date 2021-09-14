public with sharing class BoatSearchResults {
    private static final String SELECT_BOATS = 'SELECT Id, '+
                                                'Name, '+
                                                'BoatType__r.Name, '+
                                                'Contact__r.Name, '+
                                                'Description__c, '+
                                                'Length__c, '+
                                                'Picture__c, '+
                                                'Price__c, '+
                                                'Geolocation__Longitude__s,' +
                                                'Geolocation__Latitude__s,' +
                                                ' Year_Built__c '+
                                                'FROM Boat__c ';
    

    @AuraEnabled
    public static List<Boat__c> getBoats(String boatTypeId){
           
            String query = SELECT_BOATS;
            if (boatTypeId != '') {
                query += 'WHERE BoatType__c = :boatTypeId';
            } 
             System.debug(query);
            return Database.query(query);

    }
}