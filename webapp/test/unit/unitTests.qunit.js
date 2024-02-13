/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"test8_3dpyramid_css_09_02_24/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
