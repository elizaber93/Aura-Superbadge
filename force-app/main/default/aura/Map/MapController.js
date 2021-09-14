({
    onPlotMapMarker: function (component,event,helper) {
        var id = event.getParam("sObjectId");
        var longitude = event.getParam("long");
        var latitude = event.getParam("lat");
        var label = event.getParam("label");
        console.log(longitude);

        component.set("v.mapMarkers", [{location: {
                                        Latitude: latitude,
                                        Longitude: longitude
                                        },
                                        title : label
                                    }]);
        component.set("v.label", label);
     }   
})