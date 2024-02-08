sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("test4customcontrol010224.controller.View1", {
            onInit: function () 
            {
                var oLabel = new sap.m.Label({
                    text : "Enter name",
                    showColon : true,
                    required : true,
                    busy : true
                });

                var oInpu = new sap.m.Input({
                    required : true ,
                    busy : false,
                    busyIndicatorDelay : 5000
                })

                this.getView().byId("page").addContent(oLabel);
                this.getView().byId("page").addContent(oInpu);

                //1.custom control
                sap.ui.core.Control.extend("sap.ui.SMaxButton" ,
                {
                   metadata :
                   {
                    properties :
                    {
                        desc : "String"
                    }
                   },
                

                renderer: function(oRam , oControl)
                {
                  //orm - object required model
                  //oControl - object controll
                  oRam.write("<button>Login</button>");
                }
                });
                // let oSmax = new sap.ui.SMaxButton();
                // oSmax.placeAt("content1");
                let oSmax = new sap.ui.SMaxButton({
                    desc : "Login"
                });
                this.getView().byId("page").addContent(oSmax);
                
                //2.custom control 
                sap.ui.core.Control.extend("vasuKilli" ,{
                    metadata :{
                        properties :{
                            para : "String",
                           
                        }
                    },
                    renderer : function(oRm , oControl){
                        oRm.write("<button>"+oControl.getPara()+"</button>");
                        
                    }
                });
                let oVasu = new vasuKilli({
                    para : "Register"
                });
                this.getView().byId("page").addContent(oVasu);

                //3.custom control
                sap.ui.core.Control.extend("sap.vi.Vasudeva" , {
                    metadata :{
                        properties:{
                            note : "String" //getNote() , setNote()
                        }
                    },
                    renderer : function(oRam , oControl){
                        //orm - object render management
                        //ocontrol - object control
                        oRam.write("<p>This is custome paragraph , it is created by sap.vi.vasudeva</p>");
                    }
                    
                });
                let oPara = new sap.vi.Vasudeva({});
                this.getView().byId("page").addContent(oPara);

                //4.custom control
                sap.ui.core.Control.extend("sap.ch.chandrasekhar" , {
                       metadata :{
                        properties:{
                            concept : "String" //getConcept(),setConcept()
                        }
                       },
                       renderer : function(oRm , oControl){
                        oRm.write("<p>"+oControl.getConcept()+"</p>");
                       }
                });
                let oConce = new sap.ch.chandrasekhar({
                    concept : "This is another custom paragraph , it is created by sap.ch.chandrasekhar"
                });
                this.getView().byId("page").addContent(oConce);

                //5.custom control
                sap.ui.core.Control.extend("sap.dr.drakshamma",{
                    metadata :{
                        properties :{
                            kosamala : "String"
                        }
                    },
                    renderer : function(oRm , oControl){
                        oRm.write("<button>Peddatamara Palli</button>");
                    }
                });
                let oDra = new sap.dr.drakshamma({});
                this.getView().byId("page").addContent(oDra);

                //6.custom control

                sap.ui.core.Control.extend("sap.ka.kalyani",{
                    metadata :{
                        properties :{
                            bootle : "String"
                        }
                    },
                    renderer : function(oRm , oControl){
                        oRm.write("<button>"+ oControl.getBootle()+"</button>");
                    }

                });
                var oka = new sap.ka.kalyani({
                    bootle : "Software Employee"
                });
                this.getView().byId("page").addContent(oka);

            }

        });
    });
