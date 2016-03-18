'use strict';

app.home = kendo.observable({
    
    scan: function() {
        	if (window.navigator.simulator === true) {
            alert("Not Supported in Simulator.");
        	}
        	else {
            cordova.plugins.barcodeScanner.scan(
                function(result) {
                		//navigator.notification.alert(result.text);
                    	$.ajax({
                        type: "POST",
                        url: "https://greenapi.odooportal.com/api/v1/product_by_barcode",
                        contentType: "application/json",
                		data: JSON.stringify({ barcode: result.text }),
                        success: function(result) {
                            
                            navigator.notification.alert(result.data);
                            var product_by_barcode  = result.data;
                      		kendo.bind($("#productbybarcodeview"),product_by_barcode);
                            
                            var activeView = '#productbybarcodeview';
                			$(activeView).show().siblings().hide();
                            //$(".productbybarcodeview").show().siblings().hide();
                             },
                         error: function(result) {
                                    navigator.notification.alert(result.error_message);

                                }
                                });
                     
                    
                }, 
                function(error) {
                    	navigator.notification.alert(error);
                });
        }
        },
    
    backtoscan: function() {
        navigator.notification.alert("backscan");
    },
    
    onShow: function() {
        
    },
    afterShow: function() {}
    
});

// START_CUSTOM_CODE_home
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_home