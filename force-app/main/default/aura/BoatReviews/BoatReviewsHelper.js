({
    onInit : function(component, event, helper) {
        var boat = component.get("v.boat");
        console.log('in in helper');
        var getReviews = component.get("c.getAll");
        getReviews.setParams({"boatId" : boat.Id});
        getReviews.setCallback(this, function(response) {
            var state = response.getState();
            if(state === 'SUCCESS'){
                var list = response.getReturnValue();
                component.set("v.boatReviews", list);
            }
            else if(state === 'ERROR'){
                alert('ERROR OCCURED.');
            }
        })
        $A.enqueueAction(getReviews);
    }
})