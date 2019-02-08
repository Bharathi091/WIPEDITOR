sap.ui.define([
	"wip/model/BaseObject",
	"sap/ui/model/resource/ResourceModel"
], function(BaseObject, ResourceModel) {
	"use strict";
	return BaseObject.extend("wip.model.ReportModel", {

		constructor: function(data) {
			BaseObject.call(this);
		
			this.settings = {
				ignoreColumns:"TkSearch,OpgrpblSearch,TkRateSrch,BandlRateSrch,ValidOn",
				RadioButtonSel1:true,
				RadioButtonSel2:false,
				CheckBoxes:{
                   TkRateSrch:true,
                   BandlRateSrch:true
                }
			};

		}
	});
});