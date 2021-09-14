({
    onFullDetails: function(component, event, helper) {
        var seeDetailsEvent = $A.get('e.force:navigateToSObject');
        if ( seeDetailsEvent ) {

            seeDetailsEvent.setParams({
                'entityApiName': 'Boat__c',
                'recordId' : component.get("v.boat").Id
            });
            seeDetailsEvent.fire();
        }
    },

    doInit : function(component, event, helper) {
        if ($A.get('e.force:navigateToSObject')) {
            component.set("v.eventEnable",true);
        }
    }


})