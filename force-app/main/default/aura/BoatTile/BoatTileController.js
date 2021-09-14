({
    onBoatClick : function(component, event, helper) {
        // Get the component event by using the
        // name value from aura:registerEvent
        var boat = component.get("v.boat");
        console.log('im in tile');
        var boatClickEvent = component.getEvent("boatselect");
        boatClickEvent.setParams({"boatId" : boat.Id });
        boatClickEvent.fire();
        console.log('im in tile');
        var appEvent = $A.get("e.c:BoatSelected");
        appEvent.setParams({"boat" : boat });
        appEvent.fire();
        console.log('im in tile');
        var mapEvent = $A.get("e.c:PlotMapMarker");
        mapEvent.setParams({"sObjectId" : boat.Id,
                                "lat" : boat.Geolocation__Latitude__s,
                                "long" : boat.Geolocation__Longitude__s,
                                "label" : boat.Name });
        mapEvent.fire();
        
},
})