'use strict';

module.exports = function() {

	var registerHandler = function() {},
		loginHandler = function() {};

	this.onRegister = function(handler) {
		registerHandler = handler;
		return this;
	};

	this.onLogin = function(handler) {
		loginHandler = handler;
		return this;
	};





	this.$get = ['$q', '$exceptionHandler', '$rootScope', function($q, $exceptionHandler, $rootScope) {

		function fcall(handler) {
			var promise;
			try {
				promise = $q.when(handler());
			} catch ( error ) {
				promise = $q.reject( error );
				$exceptionHandler( error );
			} finally {
				return promise;
			}
		}

		var service = {	};

		service.onLogin = function(handler) {
			loginHandler = handler;
			return this;
		};

		service.onRegister 	= function(handler) {
			registerHandler = handler;
			return this;
		};


		service.login = function(email, password) {
			return fcall(function() {
				return loginHandler(email, password);
			});
		};

		service.register = function(username, email, password) {
			return fcall(function() {
				return registerHandler(username, email, password);
			});
		};

		service.close = function() {
			$rootScope.$broadcast('pdDoorman:close');
		};

		service.open = function() {
			$rootScope.$broadcast('pdDoorman:open');
		};

		return service;
	}];

};
