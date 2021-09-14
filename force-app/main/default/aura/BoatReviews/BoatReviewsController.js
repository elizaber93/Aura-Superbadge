({
    doInit : function(component, event, helper) {
        var navEvt = $A.get("e.force:navigateToSObject");
        if(navEvt) {
            component.set("v.eventEnable", true);
        }
        console.log('im in controller');
        helper.onInit(component, event, helper);
    },
    onUserInfoClick : function(component, event, helper) {
        var userId = event.currentTarget.getAttribute("data-userid");
        var navEvt = $A.get("e.force:navigateToSObject");
        if (navEvt) {
            navEvt.setParams({
              "recordId": userId
            });
            navEvt.fire();
        }
    }
})