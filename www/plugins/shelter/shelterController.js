//  Copyright (c) 2014 Thomas Baker
//  
//  Permission is hereby granted, free of charge, to any person obtaining a copy
//  of this software and associated documentation files (the "Software"), to deal
//  in the Software without restriction, including without limitation the rights
//  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//  copies of the Software, and to permit persons to whom the Software is
//  furnished to do so, subject to the following conditions:
//  
//  The above copyright notice and this permission notice shall be included in
//  all copies or substantial portions of the Software.
//  
//  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
//  THE SOFTWARE.
"use strict";

;
(function ($, window, document, undefined) {
    
    var forms = {"shelter-form":{form_path:"/cr/shelter/create.s3json?options=true&references=true"},
                 "gis-location-form":{form_path:"/gis/location/create.s3json?options=true&references=true"}};
    
    var shelterTable = [{name:"name",     data_path:"$_cr_shelter/field", form:"shelter-form"},
                 {name:"status",          data_path:"$_cr_shelter/field", form:"shelter-form"},
                 {name:"shelter_type_id", data_path:"$_cr_shelter/field", form:"shelter-form"},
                 {name:"population",      data_path:"$_cr_shelter/field", form:"shelter-form"},
                 {name:"L0",              data_path:"$_gis_location/field", form:"gis-location-form", common_name: "Country"},
                 {name:"addr_street",     data_path:"$_gis_location/field", form:"gis-location-form"}];

    // The master application controller
    function controller() {
        //console.log("settings controller");
        this._pages = {};
        this._formURL = "/cr/shelter/create.s3json?options=true&references=true";
    };

    controller.prototype.init = function (options) {
        console.log("shelterController init");

        // Register models for this controller
        //app.controller.setControllerByModel("shelter", this);
        for (var formName in forms) {
            app.controller.setControllerByModel(formName, this);
        }

        // Load the saved data or initialize data
        var rawData = app.storage.read("shelter-form");
        if (rawData) {
            this.parseForm();
        }

        // update all data from server if connected
        this.updateAll();
    };

    controller.prototype.updatePath = function (name) {
        //console.log("settings controller onLoad");
        var path = app.controller.getHostURL();
        
        var formSpec = forms[name];
        if (formSpec) {
            path += formSpec["form_path"];
        }
        else {
                alert("nope");
                path = "";
            }


        return path;
    };

    controller.prototype.updateResponse = function (name, data, rawData) {
        //console.log("settings controller updateResponse");
        var formSpec = forms[name];

    };

    controller.prototype.submitPath = function (type) {
        var path = "";

        return path;
    };

    controller.prototype.submitResponse = function (status, model, rawData) {

    };

    //-------------------------------------------------------------------------

    controller.prototype.updateList = function () {

    };

    controller.prototype.storeOffline = function (model, rawText) {
        var page = app.view.getPage("page-cases");
        var path = model.getKey();
        if (!rawText) {
            rawText = JSON.stringify(model.toJSON());
        }
        app.storage.write(path, rawText);
    };


    controller.prototype.loadForm = function (event) {
        console.log("loadForm");
    };

    controller.prototype.parseRecord = function (record) {
        var references = {};

        return references;
    };

    controller.prototype.parseForm = function () {
 
        return model;
    };


    controller.prototype.onFormSubmit = function (page) {

    };

    controller.prototype.onUpdateSubmit = function (page) {

    };

    controller.prototype.updateAll = function () {
        
        app.controller.updateData(Object.keys(forms));
    };

    controller.prototype.newItem = function () {
 

    };

    controller.prototype.editItem = function (model) {

    };

    app.pluginManager.addObject(controller);

})(jQuery, window, document);
