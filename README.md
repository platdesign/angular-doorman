#angular-doorman

angular doorman (login/signup)


## Install

	npm install --save-dev platdesign/angular-doorman
	

## Usage
### Browserify
	
	var doorman = require('angular-doorman');
	
	var app = angular.module('myApp', [doorman.name]);
	...

### Standalone

	<script src="/path/to/lib/dist/angular-doorman.js>
	<script>
		var app = angular.module('myApp', ['pd']);
	</script>

### SCSS

Import `angular-doorman.scss` to your scss file:

	@import './path/to/lib/src/angular-doorman.scss';
	
There are some scss variables to customize the appearance of doorman-dialog.	
> *You have to define these variables before you `@import` the lib!*

- **$doorman-nav-bg-color** Sets the `background-color` of nav item when it's not active.
- **$doorman-nav-font-color** Sets the `font-color` of nav item when it's not active. 



## What's included

### pd-doorman (directive)
Embed this directive to the `body` of your application. It shouldn't be wrapped by a `relative` positioned container. It creates the dialog/popup for authentication.

	<pd-doorman></pd-doorman>

To open or close the dialog `pd-doorman` listens on two events.

- `pdDoorman:open` To open the dialog.
- `pdDoorman:close` Surprisingly to close the dialog. ;)


### DoormanProvider

- **onLogin(closure)** To register a closure which is called on submitting login-form. If the handler returns a promise it will be considered.
- **onRegister(closure)** Same as `onLogin`.

### Doorman (Service)

- **open()** / **close()** Handy caller for broadcasting the `open`/`close`-events on `$rootScope`.
- **onLogin(closure)** / **onRegister(closure)** Same as on `DoormanProvider`.


		app.run(function(Doorman, $http) {
			Doorman
				.onLogin(function(email, password){
					return $http.post('/login', { 
						email:email, 
						password:password
					});
				})
				. onRegister(function(username, email, password){
					return $http.post('/register', { 
						username : username, 
						email:email, 
						password:password 
					});
				});
		});


##License
This project is under the MIT license. Let me know if you'll use it. =)


##Contributors
This is a project by [Christian Blaschke](http://platdesign.de).	 
Get in touch: [mail@platdesign.de](mailto:mail@platdesign.de) or [@platdesign](https://twitter.com/platdesign)

