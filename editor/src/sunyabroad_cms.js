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
		$scope.pages = $firebase(new Firebase("https://sunyabroad.firebaseio.com/pages"));
		$scope.addPage = function(e) {
		if (e.keyCode != 13) return;
			$scope.pages.$add({title: $scope.pageTitle,createdAt:new Date(),editedAt:new Date(),url:encodeURIComponent($scope.pageTitle.replaceAll(" ","_").toLowerCase().replaceAll("?","").replaceAll("&","and"))});
			$scope.pageTitle= "";
		};

	}
]);

CMSControllers.controller('EditorController',['$scope', '$firebase','$routeParams',
	function($scope, $firebase,$routeParams) {
		$scope.title = $routeParams.id;
		//$scope.text = "";
		var pageref = new Firebase("https://sunyabroad.firebaseio.com/pages");
		$scope.pages = $firebase(pageref);
		$scope.pages.$on('loaded', function() {

			$scope.title = $scope.pages[$routeParams.id].title;
			$scope.html_content = $scope.pages[$routeParams.id].body;
			console.log($scope.pages[$routeParams.id]);
			$scope.savePage = function() {
				
				console.log($scope.html_content);
				$scope.pages[$routeParams.id].body = $scope.html_content;
				$scope.pages[$routeParams.id].title = $scope.title;
				$scope.pages[$routeParams.id].url = encodeURIComponent($scope.title.replaceAll(" ","_").toLowerCase().replaceAll("?","").replaceAll("&","and"))
				$scope.pages.$save($routeParams.id);
				console.log($scope.pages[$routeParams.id]);
			};
		});
	}
]);

String.prototype.replaceAll = function (sfind, sreplace) {
     var str = this;
    while (str.indexOf(sfind)>-1) str=str.replace(sfind, sreplace);
    return str;
};

