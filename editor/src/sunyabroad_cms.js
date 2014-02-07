var app = angular.module('sunyabroad_cms',
	[
		'firebase',
		'ngRoute',
		'CMSControllers',
		'angular-medium-editor'
	]
);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/pages', {
        templateUrl: 'partials/pages.html',
        controller: 'PagesController'
      }).
      when('/pages/:id', {
        templateUrl: 'partials/editor.html',
        controller: 'EditorController'
      }).
      otherwise({
        redirectTo: '/pages'
      });
  }]);


var CMSControllers = angular.module('CMSControllers', []);
CMSControllers.controller('PagesController',['$scope', '$firebase',
	function($scope, $firebase) {
		$('#newPage').hide();
		$scope.pages = $firebase(new Firebase("https://sunyabroad.firebaseio.com/"));
		$scope.addPage = function(e) {
		if (e.keyCode != 13) return;
			$scope.pages.$add({title: $scope.pageTitle,createdAt:new Date(),editedAt:new Date()});
			$scope.pageTitle= "";
		};

	}
]);

CMSControllers.controller('EditorController',['$scope', '$firebase','$routeParams',
	function($scope, $firebase,$routeParams) {
		$scope.title = $routeParams.id;
		//$scope.text = "";

		$scope.pages = $firebase(new Firebase("https://sunyabroad.firebaseio.com/"));
		$scope.pages.$on('loaded', function() {
			$scope.page = $scope.pages[$routeParams.id];
			$scope.title = $scope.page.title;
			//$scope.text = $scope.page.body;
			$scope.editPage = function(e) {
				//if (e.keyCode != 13) return;
				//$scope.page.body = $scope.text;
				//$scope.page.$save;
				console.log($scope.text)
			}	
		}); 
	}
]);

