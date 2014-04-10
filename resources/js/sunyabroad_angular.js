var app = angular.module('sunyabroad',
	[
		'firebase',
		'ngRoute',
		'SAControllers',
		'ngAnimate',
	]
);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/main.php',
        controller: 'MainController'
      }).
      when('/pages/:id', {
        templateUrl: 'partials/page.html',
        controller: 'PagesController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
app.animation('.my-show-hide-animation', function() {
	console.log('helo');
  return {
    beforeAddClass : function(element, className, done) {
      if(className == 'ng-hide') {
        jQuery(element).hide("500");
      }
      else {
        done();
      }
    },
    removeClass : function(element, className, done) {
      if(className == 'ng-hide') {
        jQuery(element).show("500");
      }
      else {
        done();
      }
    }
  };
});


var SAControllers = angular.module('SAControllers', []);
SAControllers.controller('MainController',['$scope','$firebase','$sce',
	function($scope,$firebase,$sce) {
		
		$scope.trustedHTML = {};
		$scope.posts = $firebase(new Firebase("https://sunyabroad.firebaseio.com/posts"));
		$scope.posts.$on('loaded',function(){
			
			var keys = $scope.posts.$getIndex();
			keys.forEach(function(key, i) {
				console.log($scope.posts[key].body);
				$scope.post[key].body =  $sce.trustAsHtml($scope.posts[key].body);
				
			});
			console.log($scope.trustedHTML);
		});
		
	}
])
.controller('PagesController',['$scope', '$firebase','$routeParams','$sce',
	function($scope, $firebase,$routeParams,$sce) {
		//$scope.text = "";

		var pageref = new Firebase("https://sunyabroad.firebaseio.com/pages");
		$scope.pages = $firebase(pageref);
		$scope.pages.$on('loaded', function() {

			var current_page = '';
			var keys = $scope.pages.$getIndex();
			keys.forEach(function(key, i) {
				if($scope.pages[key].url == $routeParams.id){
					current_page = key;
				}
			});
			$scope.title = $scope.pages[current_page].title;
			$scope.html_content = $scope.pages[current_page].body;
			$scope.trustedHtml = $sce.trustAsHtml($scope.html_content);
			console.log($scope.pages[current_page]);
		});
	}
])
.controller('MenuController',['$scope', '$firebase','$routeParams',
	function($scope, $firebase,$routeParams) {
		$scope.currentMenu = '';
		$scope.menuItems = $firebase(new Firebase("https://sunyabroad.firebaseio.com/menu"));
		$scope.menuItems.$on('loaded',function(){
			$scope.submenuItems = $firebase(new Firebase("https://sunyabroad.firebaseio.com/submenu"));
			$scope.submenuItems.$on('loaded',function(){

				keys = $scope.menuItems.$getIndex();
				$scope.currentMenu = keys[0];
				console.log('menu keys',keys);
			});
		});
		$scope.setMenu = function(key){
			$scope.currentMenu = key;
		};
		$scope.showMenu = function(key){
			if($scope.currentMenu == key){
				return true;
			}
			return false;
		};
	}
]);

