/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"test4_customcontrol_01_02_24/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
