'use strict';

app.home = kendo.observable({
    
    scan: function() {
            cordova.plugins.barcodeScanner.scan(
                function(result) {
                    //navigator.notification.alert(result.text);
                    var navi_parameters = "components/naviview/view.html?id="+result.text;
                   app.mobileApp.navigate(navi_parameters);
                }, 
                function(error) {
                    	navigator.notification.alert(error);
                });
        },
    
    onShow: function() {
        
    },
    afterShow: function() {}
    
});

// START_CUSTOM_CODE_home
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_home