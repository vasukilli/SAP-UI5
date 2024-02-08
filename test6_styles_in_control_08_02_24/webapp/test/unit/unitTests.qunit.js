/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"test6_styles_in_control_08_02_24/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
