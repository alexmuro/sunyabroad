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
        controller: 'MainController',
        resolve: {
		    loadPosts:  function(postsFb) {
		      return postsFb.promiseToHavePosts();
		    }  
		},
      }).
      when('/pages/:id', {
        templateUrl: 'partials/page.html',
        controller: 'PagesController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
app.factory('postsFb', function($firebase, $q) {
  return {
    posts: null,
    menuItems: null,
    promiseToHavePosts: function() {
      var deferred = $q.defer();

      if (this.posts === null) {
        this.posts = $firebase(new Firebase("https://sunyabroad.firebaseio.com/posts"));
        this.posts.$on('loaded', function(loadedData) {
          deferred.resolve();
        });
      }
      else {
        deferred.resolve();
      }

      return deferred.promise;
    },
   	promiseToHaveMenuItems : function(){
   	  var deferred = $q.defer();

      if (this.posts === null) {
        this.posts = $firebase(new Firebase("https://sunyabroad.firebaseio.com/menu"))
        this.posts.$on('loaded', function(loadedData) {
          deferred.resolve();
        });
      }
      else {
        deferred.resolve();
      }
      return deferred.promise
   	}
  };
});
app.animation('.my-show-hide-animation', function() {
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
      };behaviorController
   });
var SAControllers = angular.module('SAControllers', []);
SAControllers.controller('behaviorController',['$scope','$route',
	function($scope,$route) {
		$scope.mainPage = true;
		$scope.$on('$routeChangeSuccess', function (ev, current, prev) {
		   $scope.mainPage = $route.current.loadedTemplateUrl == "partials/main.php";
		});
		
	}
]);
SAControllers.controller('MainController',['$scope','$firebase','$sce','postsFb',
	function($scope,$firebase,$sce,postsFb) {
		
		$scope.currentPage = 0;
	    $scope.pageSize = 3;
	    $scope.data = [];
	    $scope.keys = [];
	    $scope.numberOfPages=function(){
	        return Math.ceil($scope.keys.length/$scope.pageSize);                
	    }

		$scope.trustedHTML = {};
		$scope.posts = postsFb.posts;
		$scope.keys = $scope.posts.$getIndex();
		$scope.keys.forEach(function(key, i) {
			$scope.posts[key].trustedHTML =  $sce.trustAsHtml($scope.posts[key].body.replace(/<\/?span[^>]*>/g,""));
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
		//------------------------------------------------------------------
		// Menu Item Shite
		//------------------------------------------------------------------
		$scope.currentMenu = '';
		console.log(content);
		$scope.menuItems = content.menuItems;
		$scope.submenuItems = content.submenuItems;
		

		var keys = [];
		for(var k in $scope.menuItems) keys.push(k);
		$scope.currentMenu = keys[0];
		
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
.controller('PhotosController',['$scope', '$firebase','$routeParams',
	function($scope, $firebase,$routeParams) {
		$scope.photos = $firebase(new Firebase("https://sunyabroad.firebaseio.com/featuredImage"));
		$scope.photos.$on('loaded',function(){
			
		});

	}
])
.controller('CalendarController',['$scope', '$firebase','$routeParams','$sce',
	function($scope, $firebase,$routeParams,$sce) {
		$scope.calItems = $firebase(new Firebase("https://sunyabroad.firebaseio.com/calendar"));
		$scope.displayItems = [];
		var today = new Date();
		$scope.calItems.$on('loaded',function(){
			var keys = $scope.calItems.$getIndex();
			keys.forEach(function(key, i) {
				
				$scope.html_content = $scope.calItems[key].body.replace(/<\/?span[^>]*>/g,"");
				$scope.calItems[key].html = $sce.trustAsHtml($scope.html_content);
				if(new Date($scope.calItems[key].editedAt).valueOf() > today.valueOf()){
					$scope.displayItems.push($scope.calItems[key]);
				}
			});
			$scope.displayItems.sort(function(a,b){
			  return new Date(b.editedAt) - new Date(a.editedAt);
			});
			$scope.displayItems.reverse();
		});

	}
]);

