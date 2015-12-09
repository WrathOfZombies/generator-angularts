/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../../_references.d.ts" />

/**
 * Creates a namespace for all the functional logic to fall within a closure. 
 */
namespace MyTemplate {

	/**
	* Helper to find html template paths. Can be invoked using MyTemplate.resolvePath()
	*/
	export function resolvePath(path: string): string {
		return '/templates/' + path + '.html';
	}

	/**
	 * Angular module construction. Resuse this throught your app if necessary, although the 
	 * module class below should perform all your registrations in one place. Opinionated 
	 * thought that its better that way.
	 */
	export let App = angular.module('MyTemplate', ['ngRoute']);

	/**
	 * Module class that manages bootstrapping and module registration and configuration.
	 */
	class Module {
		constructor(private module: ng.IModule) {
			this.module
				.config(['$routeProvider', '$locationProvider', this.registerRoutes]);
		}

		registerRoutes($routeProvider: ng.route.IRouteProvider, $locationProvider: ng.ILocationProvider) {
			$routeProvider.when('/home', {
				templateUrl: resolvePath('views/home')
			});

			$routeProvider.otherwise('/home');

			$locationProvider.html5Mode(true).hashPrefix('!');
		}
	}
	
	new Module(App);
}