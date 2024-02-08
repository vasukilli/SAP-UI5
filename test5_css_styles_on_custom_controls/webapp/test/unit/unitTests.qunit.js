/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"test5_css_styles_on_custom_controls/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
