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
app.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});

app.filter('reverse', function() {
      function toArray(list) {
         var k, out = [];
         if( list ) {
            if( angular.isArray(list) ) {
               out = list;
            }
            else if( typeof(list) === 'object' ) {
               for (k in list) {
                  if (list.hasOwnProperty(k)) { out.push(list[k]); }
               }
            }
         }
         return out;
      }
      return function(items) {
         return toArray(items).slice().reverse();
      };
   });
var SAControllers = angular.module('SAControllers', []);
SAControllers.controller('MainController',['$scope','$firebase','$sce',
	function($scope,$firebase,$sce) {
		
		$scope.currentPage = 0;
	    $scope.pageSize = 3;
	    $scope.data = [];
	    $scope.keys = [];
	    $scope.numberOfPages=function(){
	        return Math.ceil($scope.keys.length/$scope.pageSize);                
	    }

		$scope.trustedHTML = {};
		$scope.posts = $firebase(new Firebase("https://sunyabroad.firebaseio.com/posts"));
		$scope.posts.$on('loaded',function(){
			
			$scope.keys = $scope.posts.$getIndex();
			$scope.keys.forEach(function(key, i) {
				
				$scope.posts[key].trustedHTML =  $sce.trustAsHtml($scope.posts[key].body.replace(/<\/?span[^>]*>/g,""));
				console.log($scope.posts[key].trustedHTML);
			});
			
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
			$scope.img = $scope.pages[current_page].img;
			$scope.html_content = $scope.pages[current_page].body.replace(/<\/?span[^>]*>/g,"");
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
])
.controller('HeaderController',['$scope', '$firebase','$routeParams',
	function($scope, $firebase,$routeParams) {
		$scope.headerItems = $firebase(new Firebase("https://sunyabroad.firebaseio.com/headerImage"));
		$scope.headerItems.$on('loaded',function(){
			initCarousel();
		});

	}
])
.controller('CalendarController',['$scope', '$firebase','$routeParams',
	function($scope, $firebase,$routeParams) {
		$scope.calItems = $firebase(new Firebase("https://sunyabroad.firebaseio.com/calendar"));
		$scope.calItems.$on('loaded',function(){
			
		});

	}
]);

