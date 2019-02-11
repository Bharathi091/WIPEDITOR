sap.ui.define([
	"wip/model/BaseObject",
	"sap/ui/model/resource/ResourceModel"
], function(BaseObject, ResourceModel) {
	"use strict";
	return BaseObject.extend("wip.model.ReportModel", {

		constructor: function(data) {
			BaseObject.call(this);
		
			this.Inputs = {
				hideFilterBar: true,
				IconTabs: {
					Home: true,
					Narrative_Edits: false,
					Line_Item_Edits: false,
					Line_Item_Transfers: false
				},
				Countries_collection: [{
				    Key: "dataEn",
				    Text:"English" 
				},
				{
				    Key: "dataFr",
				    Text:"French" 
				},
				{
				    Key: "dataIt",
				    Text:"Italin" 
				}
				],
				Toolbar:{
					Reviewed: false,
					Unreview: false,
					Save: false,
					Save_Layout: true,
					Modify_Reverse: false,
					Consolidate: false,
					Updatecodes: false,
					GlobalSpellCheck: false,
					Mass_Transfer: false,
					Split_Transfer: false,
					Replace_Words:false
				},
				
				ToolbarEnable:{
					Reviewed: false,
					Unreview: false,
					Replace_Words:false,
					Modify_Reverse: false,
					Updatecodes: false,
					Consolidate: false,
					Mass_Transfer: false,
					Split_Transfer: false
				}
					
				

			};

		}
	});
});