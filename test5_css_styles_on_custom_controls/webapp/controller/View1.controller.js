sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("test5cssstylesoncustomcontrols.controller.View1", {
            onInit: function () {

                // //1.creating controls..
                // var olabel = new sap.m.Label({
                //     text : "Enter your name ",
                //     busy : false ,
                //     busyIndicatorDelay : 20000 ,
                //     showColon : true ,
                //     required : true
                // });
                // this.getView().byId("page").addContent(olabel);
                // var oButton = new sap.m.Button(
                //     {
                //       text : "Register",
                //       required : true
                //     });
                // this.getView().byId("page").addContent(oButton);


                // //2.creating custom controls
                // sap.ui.core.Control.extend("sap.rao.vasuDeva",{
                //     metadata :{
                //         properties :{
                //             desc : {type : "string" , defaultValue : "SMAx"},
                //             width : "string"
                //         }
                //     },
                //     //<button style="width : 50%"></button>
                //     renderer : function(oRm , oControl){
                //         //oRm-object render managment
                //         //ocontrol-object control
                //         oRm.write("<button style='width:50%'>"+oControl.getDesc()+"</button>");
                //     }
                // });
                // //let oVasu = new sap.rao.vasuDeva();
                // // oVasu.setDesc("Login");
                // //this.getView().byId("page").addContent(oVasu);
                // this.getView().byId("page").addContent(new sap.rao.vasuDeva({ })); //class: "buttonWidth" 

                // //this.getView().byId("page").addContent(new sap.m.Button({text :"super" , width : "50%"}));







                // // 3.creating custom control 
                // sap.ui.core.Control.extend("sap.ui.Kalyani",{
                //     metadata :{
                //         properties :{
                //             content : "String"
                //         }
                //     },
                //     renderer : function(oRm,oControl){
                //         oRm.write("<p>"+oControl.getContent()+"</p>");
                //     }
                    
                // });
                // let oKalyani = new sap.ui.Kalyani();
                // oKalyani.setContent("Hi everyone , i am vasudevarao killi , i am very intrested to learning SAP UI5 under the guidense of kalyani killi");
                // this.getView().byId("page").addContent(oKalyani);
            }
            

       });
    });
