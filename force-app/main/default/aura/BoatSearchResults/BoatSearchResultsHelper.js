({
    onSearch : function(component, boatType) {
        var getBoats = component.get("c.getBoats");
        getBoats.setParams({'boatTypeId' : boatType})
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
        
    }
})