/**
 * Add a description.
 *
 * @author   My name (<https://github.com/PatrikGallik>)
 * @version  0.0.1
 * @license  MIT
 */

;(function (global) {
	'use strict'

	// add your code here.
	// this is some code to make sure testing works.
	
	var _privateString = 'I am batman!';

	var MyModule = {
		testMe: function() {
			return _privateString;
		}
	};

	if (typeof module === 'object' && typeof module.exports === 'object') {
		module.exports = MyModule;
	} else if (typeof define === 'function' && define.amd) {
		define(function () { return MyModule });
	} else {
		global.MyModule = MyModule;
	}

}(typeof window !== "undefined" ? window : this));