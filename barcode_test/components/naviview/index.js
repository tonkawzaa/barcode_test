'use strict';

app.naviview = kendo.observable({
    secondview : function() {
        /*
        var activeView = '#view2';
        $(activeView).show().siblings().hide();
        */
        var navi_parameters = "components/home/view.html";
         app.mobileApp.navigate(navi_parameters);
    },
    
    firstview : function() {
        var activeView = '#view1';
        $(activeView).show().siblings().hide();
    },
    
    thirdview : function() {
        var activeView = '#view3';
        $(activeView).show().siblings().hide();
    },
    
    onShow: function(e) {
        var item = e.view.params.id;
        navigator.notification.alert(item);
        
        	$.ajax({
               type: "POST",
               url: "https://greenapi.odooportal.com/api/v1/product_by_barcode",
               contentType: "application/json",
               data: JSON.stringify({ barcode: item }),
               success: function(result) {
                            
                navigator.notification.alert(result.data);
                            
                     var product_by_barcode  = result.data;
                     kendo.bind($("#view1"),product_by_barcode);	
                             },
                error: function(result) {
                      navigator.notification.alert(result.error_message);

                         },
             });
        
    },
    afterShow: function() {}
});
