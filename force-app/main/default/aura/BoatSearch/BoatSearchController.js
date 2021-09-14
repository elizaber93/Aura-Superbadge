({
    onFormSubmit : function(component, event, helper) {

        console.log('search');
        var boatType = event.getParam("formData");
        const searchResultsComponent = component.find("boatSearchResults");
        searchResultsComponent.search(boatType);
    }
})