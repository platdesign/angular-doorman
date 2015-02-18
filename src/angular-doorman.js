'use strict';



var ngModule;

try {
	ngModule = angular.module('pd');
} catch(err) {
	ngModule = angular.module('pd', []);
}

module.exports = ngModule;



ngModule.provider('Doorman', require('./providers/doorman.js') );

ngModule.directive('pdDoorman', require('./directives/doorman.js') );


