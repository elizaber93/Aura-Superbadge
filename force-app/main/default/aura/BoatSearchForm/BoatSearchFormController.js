({
    doInit : function(component, event, helper) {
        var createRecordEvent = $A.get('e.force:createRecord');
        if ( createRecordEvent ) {
            component.set("v.showNewButton",true);
        }
        var getBoatTypes = component.get("c.getBoatTypes");
        getBoatTypes.setCallback(this, function(response) {
            var state = response.getState();
            if(state === 'SUCCESS'){
                var list = response.getReturnValue();
                component.set("v.boatTypes", list);
            }
            else if(state === 'ERROR'){
                alert('ERROR OCCURED.');
            }
        })
        $A.enqueueAction(getBoatTypes);
    },
    onFormSubmit : function(component, event, helper) {
            // Get the component event by using the
            // name value from aura:registerEvent
            var formSubmitEvent = component.getEvent("formsubmit");
            console.log(component.find("type").get("v.value"));
            formSubmitEvent.setParams({"formData" : component.find("type").get("v.value")});
            formSubmitEvent.fire();
    },
    handleCreate : function(component, event, helper) {
        var createRecordEvent = $A.get('e.force:createRecord');
        if ( createRecordEvent ) {
            createRecordEvent.setParams({
                'entityApiName': 'Boat__c',
                'defaultFieldValues' : {
                    'BoatType__c' : component.find("type").get("v.value")
                }
            });
            createRecordEvent.fire();
        } else {
            /* Create Record Event is not supported */
            alert("Boat creation not supported");
        }
    },

    
})