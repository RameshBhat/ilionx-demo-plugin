console.log("Getting inside the SampleICNPlugin Scope");

var widgetsContextRoot = "/SampleICN";
var loadPath = {sampleicn: widgetsContextRoot+"/sampleicn"};
require({paths:loadPath});

require(["dojo/_base/declare", "dojo/_base/lang"], function(declare, lang) {
  
        //Use this function to add any global JavaScript methods your plug-in requires.

		console.log("SampleICNPlugin Scope - End");
	});
