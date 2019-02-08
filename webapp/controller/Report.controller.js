sap.ui.define([
	"wip/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"wip/model/formatter",
	
	"sap/ui/model/Filter",
	"wip/model/ReportModel",
	"sap/ui/model/FilterOperator"
	

], function(BaseController, JSONModel, formatter, Filter,ReportModel, FilterOperator ) {
	"use strict";

	return BaseController.extend("wip.controller.Report", {
		onInit: function() {
			debugger;
		//	var omodel = new sap.ui.model.json.JSONModel();
		this.getView().setModel(new ReportModel().getModel(), "settingsModel");
	
			

		}

		// gotoPress: function() {
		// 	debugger;
		// 	var value = this.getView().byId("SmartFilterBar").getControlByKey("Pspid").getValue();
		// 	var aFilter = [];
		// 	var oList = this.getView().byId("list");
		// 	//var oBinding = oList.getBinding("items");
		// 	// if (value) {
		// 	// 	aFilter.push(new Filter("Matter", sap.ui.model.FilterOperator.Contains, value));
		// 	// }
		// }

	});

});