'use strict';


var svg = {
	login: '<svg class="svg-icon" viewBox="0 0 100 100"><defs></defs><path d="M76.5,50c0,1.1-0.4,2.1-1.2,2.9L40.6,87.6c-0.8,0.8-1.8,1.2-2.9,1.2c-1.1,0-2.1-0.4-2.9-1.2c-0.8-0.8-1.2-1.8-1.2-2.9V66.3H5.1c-1.1,0-2.1-0.4-2.9-1.2C1.4,64.3,1,63.4,1,62.2V37.8c0-1.1,0.4-2.1,1.2-2.9C3,34.1,4,33.7,5.1,33.7h28.6V15.3c0-1.1,0.4-2.1,1.2-2.9c0.8-0.8,1.8-1.2,2.9-1.2c1.1,0,2.1,0.4,2.9,1.2l34.7,34.7C76.1,47.9,76.5,48.9,76.5,50z M99,27.5v44.9c0,5.1-1.8,9.4-5.4,13c-3.6,3.6-7.9,5.4-13,5.4H60.2c-0.6,0-1-0.2-1.4-0.6c-0.4-0.4-0.6-0.9-0.6-1.4c0-0.2,0-0.6-0.1-1.3c0-0.7-0.1-1.2,0-1.7c0-0.4,0.1-0.9,0.2-1.5c0.1-0.6,0.3-1,0.6-1.2c0.3-0.3,0.8-0.4,1.3-0.4h20.4c2.8,0,5.2-1,7.2-3c2-2,3-4.4,3-7.2V27.5c0-2.8-1-5.2-3-7.2c-2-2-4.4-3-7.2-3H62.2c0,0-0.3,0-0.7,0c-0.4,0-0.7,0-0.8,0c-0.1,0-0.4,0-0.7-0.1c-0.4,0-0.6-0.1-0.7-0.2c-0.1-0.1-0.3-0.2-0.5-0.4c-0.2-0.1-0.4-0.3-0.4-0.6c-0.1-0.2-0.1-0.5-0.1-0.9c0-0.2,0-0.6-0.1-1.3c0-0.7-0.1-1.2,0-1.7c0-0.4,0.1-0.9,0.2-1.5c0.1-0.6,0.3-1,0.6-1.2c0.3-0.3,0.8-0.4,1.3-0.4h20.4c5.1,0,9.4,1.8,13,5.4C97.2,18.2,99,22.5,99,27.5z"/></svg>',
	close: '<svg class="svg-icon" viewBox="0 0 100 100"><path d="M99,79.9c0,2.2-0.8,4.1-2.3,5.6L85.5,96.7c-1.5,1.5-3.4,2.3-5.6,2.3c-2.2,0-4.1-0.8-5.6-2.3L50,72.4L25.7,96.7c-1.5,1.5-3.4,2.3-5.6,2.3c-2.2,0-4.1-0.8-5.6-2.3L3.3,85.5C1.8,83.9,1,82.1,1,79.9c0-2.2,0.8-4.1,2.3-5.6L27.6,50L3.3,25.7C1.8,24.2,1,22.3,1,20.1c0-2.2,0.8-4.1,2.3-5.6L14.5,3.3C16.1,1.8,17.9,1,20.1,1c2.2,0,4.1,0.8,5.6,2.3L50,27.6L74.3,3.3C75.8,1.8,77.7,1,79.9,1c2.2,0,4.1,0.8,5.6,2.3l11.2,11.2c1.5,1.5,2.3,3.4,2.3,5.6c0,2.2-0.8,4.1-2.3,5.6L72.4,50l24.3,24.3C98.2,75.8,99,77.7,99,79.9z"/></svg>',
	register: '<svg class="svg-icon" viewBox="0 0 100 100"><defs></defs><path d="M99,27.6v44.9c0,5.1-1.8,9.4-5.4,13c-3.6,3.6-7.9,5.4-13,5.4H60.2c-0.6,0-1-0.2-1.4-0.6c-0.4-0.4-0.6-0.9-0.6-1.4c0-0.2,0-0.6-0.1-1.3c0-0.7-0.1-1.2,0-1.7c0-0.4,0.1-0.9,0.2-1.5c0.1-0.6,0.3-1,0.6-1.2c0.3-0.3,0.8-0.4,1.3-0.4h20.4c2.8,0,5.2-1,7.2-3c2-2,3-4.4,3-7.2V27.6c0-2.8-1-5.2-3-7.2c-2-2-4.4-3-7.2-3H62.3c0,0-0.3,0-0.7,0c-0.4,0-0.7,0-0.8,0c-0.1,0-0.4,0-0.7-0.1c-0.4,0-0.6-0.1-0.7-0.2c-0.1-0.1-0.3-0.2-0.5-0.4c-0.2-0.1-0.4-0.3-0.4-0.6c-0.1-0.2-0.1-0.5-0.1-0.9c0-0.2,0-0.6-0.1-1.3c0-0.7-0.1-1.2,0-1.7c0-0.4,0.1-0.9,0.2-1.5c0.1-0.6,0.3-1,0.6-1.2c0.3-0.3,0.8-0.4,1.3-0.4h20.4c5.1,0,9.4,1.8,13,5.4C97.2,18.2,99,22.5,99,27.6z M80.2,44.6v10.8c0,1.5-0.5,2.8-1.6,3.8c-1,1-2.3,1.6-3.8,1.6H51.5V84c0,1.5-0.5,2.8-1.6,3.8c-1,1-2.3,1.6-3.8,1.6H35.4c-1.5,0-2.8-0.5-3.8-1.6c-1-1-1.6-2.3-1.6-3.8V60.7H6.6c-1.5,0-2.8-0.5-3.8-1.6c-1-1-1.6-2.3-1.6-3.8V44.6c0-1.5,0.5-2.8,1.6-3.8c1-1,2.3-1.6,3.8-1.6H30V15.8c0-1.5,0.5-2.8,1.6-3.8c1-1,2.3-1.6,3.8-1.6h10.8c1.5,0,2.8,0.5,3.8,1.6c1,1,1.6,2.3,1.6,3.8v23.3h23.3c1.5,0,2.8,0.5,3.8,1.6C79.7,41.8,80.2,43.1,80.2,44.6z"/></svg>',
	loader: '<svg viewBox="0 0 40 40"> <path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946 s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634 c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/> <path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0 C22.32,8.481,24.301,9.057,26.013,10.047z"> <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="0.5s" repeatCount="indefinite"/> </path></svg>',
};



var translations = {

	'Password': {
		de: 'Passwort'
	},
	'eMail': {
		de: 'eMail'
	},
	'Login': {
		de: 'Anmelden'
	},
	'Register': {
		de: 'Registrieren'
	},
	'Enter your eMail-Address':{
		de: 'Gib deine eMail-Adresse ein'
	},
	'Your secret': {
		de: 'Dein Passwort'
	}

};

function scorePassword(pass) {
    var score = 0;
    if (!pass) {
        return score;
    }

    // award every unique letter until 5 repetitions
    var letters = {};
    for (var i=0; i<pass.length; i++) {
        letters[pass[i]] = (letters[pass[i]] || 0) + 1;
        score += 5.0 / letters[pass[i]];
    }

    // bonus points for mixing it up
    var variations = {
        digits: /\d/.test(pass),
        lower: /[a-z]/.test(pass),
        upper: /[A-Z]/.test(pass),
        nonWords: /\W/.test(pass),
    };

    var variationCount = 0;
    for (var check in variations) {
        variationCount += (variations[check] === true) ? 1 : 0;
    }
    score += (variationCount - 1) * 10;

    score = (score > 100) ? 100 : score;

    return parseInt(score);
}




module.exports = function() {
	return {
		restrict: 'E',
		scope: {},
		template:
		'<div ng-show="status" class="pd-doorman">'+
			'<div class="dialog">'+

				'<header>'+
					'<li ng-click="tab=undefined" ng-class="{active: tab===undefined}">'+
						svg.login+
						'<span>{{ i18n("Login") }}</span>'+
					'</li>'+
					'<li ng-click="tab=\'register\'" ng-class="{active: tab===\'register\'}">'+
						svg.register+
						'<span>{{ i18n("Register") }}</span>'+
					'</li>'+
				'</header>'+

				'<main ng-switch="tab">'+

					'<div ng-switch-default>'+
						'<form name="loginForm" ng-submit="login()">'+
							'<h1>{{ i18n("Login") }}</h1>'+
							'<label>'+
								'{{ i18n("eMail") }}'+
								'<input type="email" required="true" ng-model="login.tmp.email" placeholder="{{ i18n(\'Enter your eMail-Address\') }}" />'+
							'</label>'+

							'<label>'+
								'{{ i18n("Password") }}'+
								'<input type="password" required="true" autocomplete="off" ng-model="login.tmp.password" placeholder="{{ i18n(\'Your secret\') }}" />'+
							'</label>'+

							'<label class="flex-horizontal">'+
								'<button class="flex-item" type="submit" ng-disabled="loginForm.$invalid">{{ i18n("Login") }}</button>'+
								'<div class="flex-item doorman-loader" ng-if="login.loading">'+svg.loader+'</div>'+
								'<div class="flex-item-stretch form-error" ng-if="login.error">'+
									'{{ login.error.message || login.error.toString() }}'+
								'</div>'+
							'</label>'+

						'</form>'+
					'</div>'+

					'<div ng-switch-when="register">'+
						'<form name="registerForm" ng-submit="register()">'+
							'<h1>{{ i18n("Register") }}</h1>'+

							'<label>'+
								'{{ i18n("Username") }}'+
								'<input type="text" required="true" ng-model="register.tmp.username" placeholder="{{ i18n(\'Choose a username\') }}" />'+
							'</label>'+

							'<label>'+
								'{{ i18n("eMail") }}'+
								'<input type="email" required="true" ng-model="register.tmp.email" placeholder="{{ i18n(\'Enter your eMail-Address\') }}" />'+
							'</label>'+

							'<label>'+
								'{{ i18n("Password") }}'+
								'<div class="flex-horizontal">'+
									'<input class="flex-item-stretch" autocomplete="off" type="password" required="true" ng-model="register.tmp.password" placeholder="{{ i18n(\'Your secret\') }}" />'+
									'<div class="flex-item passwordScore" ng-if="register.tmp.password">{{ register.checkPasswordStrength(register.tmp.password) }}</div>'+
								'</div>'+
							'</label>'+

							'<label class="flex-horizontal">'+
								'<button type="submit" ng-disabled="registerForm.$invalid || !register.passwordStrength">{{ i18n("Register") }}</button>'+
								'<div class="flex-item doorman-loader" ng-if="register.loading">'+svg.loader+'</div>'+
								'<div class="flex-item-stretch form-error" ng-if="register.error">'+
									'{{ register.error.message || register.error.toString() }}'+
								'</div>'+
							'</label>'+

						'</form>'+
					'</div>'+

				'</main>'+
				'<header class="header-mobile">'+
					'<li ng-click="$broadcast(\'pdDoorman:close\');">'+
						svg.close+
					'</li>'+
				'</header>'+
			'</div>'+
		'</div>',
		compile: function() {
			return function postCompile(scope, el) {
				el.replaceWith(el.children());
			};
		},

		controller: [
			'$scope',
			'Account',
			'$locale',
			'Doorman',
			function($scope, Account, $locale, Doorman) {

			var language = navigator.language || navigator.userLanguage;

			$scope.i18n = function(id) {

				if(language === 'en') {
					return id;
				} else {
					if( translations[id] ) {
						return translations[id][language] || id;
					} else {
						return id;
					}
				}
			};


			$scope.status = false;

			$scope.$on('pdDoorman:open', function() {
				showDoorman();
			});

			$scope.$on('pdDoorman:close', function() {
				hideDoorman();
			});


			function showDoorman() {

				$scope.tab = undefined;
				$scope.status = true;

				$(document).on('keyup.doormanEsc', function(e){
					if(e.which === 27) {
						$scope.$apply(function() {
							$scope.$broadcast('pdDoorman:close');
						});
					}
				});
			}

			function hideDoorman() {
				$scope.login.reset();
				$scope.register.reset();

				$scope.status = false;
				$(document).off('keyup.doormanEsc');
			}



			var login = function() {

				var email = login.tmp.email;
				var password = login.tmp.password;

				login.tmp.password = '';
				login.loading = true;
				login.error = undefined;

				return Doorman.login(email, password)
					.then(function() {
						Doorman.close();
					}, function(err) {
						login.error = err;
					})
					.then(function() {
						login.loading = false;
					});

			};
			login.tmp = {};
			login.reset = function() {
				this.loading = false;
				this.tmp = undefined;
				login.error = undefined;
			};

			$scope.login = login;


			var register = function() {
				var username = register.tmp.username;
				var email = register.tmp.email;
				var password = register.tmp.password;

				register.tmp.password = '';
				register.loading = true;
				register.error = undefined;

				return Doorman.register(username, email, password)
					.then(function() {
						Doorman.close();
					}, function(err) {
						register.error = err;
					})
					.then(function() {
						register.loading = false;
					});
			};
			register.reset = function() {
				this.loading = false;
				this.tmp = undefined;
				login.error = undefined;
			};
			$scope.register = register;



			$scope.scorePassword = function(pw) {
				return scorePassword(pw);
			};


			$scope.passwordStrengthToWords = function(score) {

				var result = score + '/100 ';
				if(score <= 0) {
					result += 'Very Weak';
				} else if(score <= 25) {
					result += 'Weak';
				} else if(score <= 50) {
					result += 'Average';
				} else if(score <= 60) {
					result += 'Strong';
				} else if(score <= 70) {
					result += 'Very Strong';
				} else if(score <= 80) {
					result += 'Secure';
				} else if(score <= 90 || score >= 90) {
					result += 'Very Secure';
				}

				return result;
			};

			$scope.register.checkPasswordStrength = function(password) {
				var score = scorePassword(password);
				$scope.register.passwordStrength = (score >= 70) ? true : false;
				return $scope.passwordStrengthToWords(score);
			};

		}]

	};
};
