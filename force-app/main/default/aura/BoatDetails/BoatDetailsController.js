({
    onBoatSelected : function(component, event, helper) {
        component.set("v.selectedTab","detailtab");
        console.log('onboatselected');
        var boat = event.getParam("boat");
        console.log(event.getParam("boat").Name);
        component.set("v.id", boat.Id);
        component.find("service").reloadRecord();
    },

    onRecordUpdated : function(component, event, helper) {
        component.find("boatReviewComponent").refresh();
    },
    onBoatReviewAdded : function(component, event, helper) {
        component.set("v.selectedTab",'boatreviewtab');
        component.find("boatReviewComponent").refresh();
    }
})