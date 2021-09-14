({
    getAll : function(component, event, helper) {
        var getBoats = component.get("c.getBoats");
        getBoats.setParams({'boatTypeId' : ''})
        getBoats.setCallback(this, function(response) {
            var state = response.getState();
            if(state === 'SUCCESS'){
                var list = response.getReturnValue();
                component.set('v.boats', list);
            }
            else if(state === 'ERROR'){
                alert('ERROR OCCURED.');
            }
        })
        $A.enqueueAction(getBoats);
    },
    onBoatSelect : function(component, event, helper) {
        console.log(event.getParam("boatId"));
        var boatId = event.getParam("boatId");
        component.set("v.selectedBoatId", boatId);
    },
    onFormSubmit : function(component, event, helper) {
        
    },
    doSearch : function(component, event, helper) {
        var params = event.getParam('arguments');
        console.log(event.getParam('arguments').boatTypeId);
        
        helper.onSearch(component, params.boatTypeId);
        
        
    }
})