var app = angular.module('sunyabroad_cms',
	[
		'firebase',
		'ngRoute',
		'CMSControllers',
		'angular-medium-editor',
		'ui.bootstrap'
	]
);
app.directive('ngModelOnblur', function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, elm, attr, ngModelCtrl) {
            if (attr.type === 'radio' || attr.type === 'checkbox') return;

            elm.unbind('input').unbind('keydown').unbind('change');
            elm.bind('blur', function() {
                scope.$apply(function() {
                    ngModelCtrl.$setViewValue(elm.val());
                });
            });
        }
    };
});

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/pages', {
        templateUrl: 'partials/pages.html',
        controller: 'PagesController'
      })
     .when('/posts', {
        templateUrl: 'partials/posts.html',
        controller: 'PostsController'
      })
      .when('/menu', {
        templateUrl: 'partials/menu.html',
        controller: 'MenuController'
      })
      .when('/images/:type', {
        templateUrl: 'partials/header_images.html',
        controller: 'HeaderController'
      })
      .when('/calendar', {
        templateUrl: 'partials/calendar.html',
        controller: 'CalendarController'
      })
      .when('/edit/:type/:id', {
        templateUrl: 'partials/editor.html',
        controller: 'EditorController'
      })
      .when('/resources', {
        templateUrl: 'partials/resources.html',
        controller: 'ResourcesController'
      })
      .otherwise({
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
])
.controller('PostsController',['$scope', '$firebase',
	function($scope, $firebase) {
		$('#newPost').hide();
		$scope.posts = $firebase(new Firebase("https://sunyabroad.firebaseio.com/posts"));
		$scope.addPage = function(e) {
		if (e.keyCode != 13) return;
			$scope.posts.$add({title: $scope.pageTitle,createdAt:new Date(),editedAt:new Date(),url:encodeURIComponent($scope.pageTitle.replaceAll(" ","_").toLowerCase().replaceAll("?","").replaceAll("&","and"))});
			$scope.pageTitle= "";
		};
	}
])
.controller('CalendarController',['$scope', '$firebase',
	function($scope, $firebase) {
		$('#newPost').hide();
		$scope.posts = $firebase(new Firebase("https://sunyabroad.firebaseio.com/calendar"));
		$scope.addPage = function(e) {
		if (e.keyCode != 13) return;
			$scope.posts.$add({title: $scope.pageTitle,createdAt:new Date(),editedAt:'',url:encodeURIComponent($scope.pageTitle.replaceAll(" ","_").toLowerCase().replaceAll("?","").replaceAll("&","and"))});
			$scope.pageTitle= "";
		};
	}
])
.controller('EditorController',['$scope', '$firebase','$routeParams',
	function($scope, $firebase,$routeParams) {
		$scope.title = $routeParams.id;
		$scope.type = $routeParams.type;
		$scope.subtitle = '';
		//$scope.text = "";
		var pageref = new Firebase("https://sunyabroad.firebaseio.com/"+$scope.type);
		$scope.pages = $firebase(pageref);
		$scope.today = function() {
    		$scope.dt = new Date();
  		};
  		$scope.today();
	  	$scope.open = function($event) {
	    	$event.preventDefault();
	    	$event.stopPropagation();

	    	$scope.opened = true;
	  	};


		$scope.pages.$on('loaded', function() {

			$scope.title = $scope.pages[$routeParams.id].title;
			$scope.html_content = $scope.pages[$routeParams.id].body;
			$scope.img = $scope.pages[$routeParams.id].img;
			$scope.eventDate = $scope.pages[$routeParams.id].editedAt;
			$scope.savePage = function() {
				
				$scope.pages[$routeParams.id].body = $scope.html_content;
				$scope.pages[$routeParams.id].title = $scope.title;
				$scope.pages[$routeParams.id].url = encodeURIComponent($scope.title.replaceAll(" ","_").toLowerCase().replaceAll("?","").replaceAll("&","and"));
				$scope.pages[$routeParams.id].subtitle = $scope.subtitle;
				$scope.pages[$routeParams.id].img = $scope.img;
				$scope.pages[$routeParams.id].editedAt = $scope.eventDate;
				$scope.pages.$save($routeParams.id);
				console.log($scope.pages[$routeParams.id]);
			};
		});
		document.getElementById("file-upload").addEventListener('change', handleFileSelect, false);
		function handleFileSelect(evt) {
		  
		  var f = evt.target.files[0];
		  var reader = new FileReader();
		  reader.onload = (function(theFile) {
		    return function(e) {
		      $scope.img =  e.target.result;
		      document.getElementById("pano").src = e.target.result;
		    };
		  })(f);
		  reader.readAsDataURL(f);
		}
		


	}	
])
.controller('ResourcesController',['$scope', '$firebase','$routeParams','$http',
	function($scope, $firebase,$routeParams,$http) {
		$scope.Message = "";
		$('#newMenuItem').hide();
		$scope.menuItems = $firebase(new Firebase("https://sunyabroad.firebaseio.com/resources"));
		$scope.menuItems.$on('loaded',function(){

				$scope.currentOrder = $scope.getCurrentIndex();
				$scope.addPage = function(e) {
				if (e.keyCode != 13) return;
					$scope.menuItems.$add({name: $scope.menuItemName,createdAt:new Date(),editedAt:new Date(),style:'',url:'',$priority:$scope.getCurrentIndex()+1});
					$scope.menuItemName= "";
					$scope.currentOrder = $scope.getCurrentIndex()+1;
				};
		});

		$scope.editItem = function(e,key){
			$scope.menuItems.$save(key);
		};
		
		$scope.publishMenu = function(){
			console.log(JSON.stringify($scope.menuItems));
			$http.post('bridge/publishResources.php',{menu:JSON.stringify($scope.menuItems)})
			.success(function(data) {
		      $scope.Message = "Resource Changes Published";
		      setTimeout(function(){
		      	$scope.Message = "";
		      },1000);
		    })
		    .error(function(data) {
		      console.log('failure',data);
		    });
			//console.log(JSON.stringify($scope.menuItems));
		};
		$scope.getCurrentIndex = function(){
			currentOrder = 0;
			var keys = $scope.menuItems.$getIndex();
			keys.forEach(function(key, i) {
				if(typeof $scope.menuItems[key] != 'undefined'){
					if($scope.menuItems[key].$priority >= currentOrder){
						currentOrder = $scope.menuItems[key].$priority;
					}
				}
			});
			return currentOrder;
		};
		$scope.getKeyIndex = function(input_id){
			currentOrder = 0;
			
			var keys = $scope.submenuItems.$getIndex();
			keys.forEach(function(key, i) {
				if(typeof $scope.submenuItems[key] != 'undefined'){
					if($scope.submenuItems[key]['parent'] == input_id && $scope.submenuItems[key].$priority >= currentOrder){
						currentOrder = $scope.submenuItems[key].$priority;
					}
				}
			});
			return currentOrder;
		};

		$scope.moveUp = function(key){

				var current_val = $scope.menuItems[key].$priority-1;
				keys = $scope.menuItems.$getIndex();
				keys.forEach(function(dex, i) {
					if($scope.menuItems[dex].$priority == current_val){
						$scope.menuItems[dex].$priority++;
						$scope.menuItems[key].$priority--;
					}
				});
			$scope.menuItems.$save();
		};

		$scope.moveDown = function (key){
				
				var current_val = $scope.menuItems[key].$priority+1;
				keys = $scope.menuItems.$getIndex();
				keys.forEach(function(dex, i) {
					if($scope.menuItems[dex]['parent'] == in_parent &&$scope.menuItems[dex].$priority == current_val){
						$scope.menuItems[dex].$priority--;
						$scope.menuItems[key].$priority++;
					}
				});
			$scope.menuItems.$save();
		};
		
		$scope.deleteItem = function(key){
			
			var current_val = $scope.menuItems[key].$priority;
			keys = $scope.menuItems.$getIndex();
			keys.forEach(function(dex, i) {
				if($scope.menuItems[dex].$priority >= current_val){
					$scope.menuItems[dex].$priority--;
				}
			});
			$scope.currentOrder--;

			$scope.menuItems.$save().then(function(){
				$scope.menuItems.$remove(key);
			});
		};
	}
])
.controller('MenuController',['$scope', '$firebase','$routeParams','$http',
	function($scope, $firebase,$routeParams,$http) {
		$scope.Message = "";
		$('#newMenuItem').hide();
		$scope.menuItems = $firebase(new Firebase("https://sunyabroad.firebaseio.com/menu"));
		$scope.menuItems.$on('loaded',function(){
			$scope.submenuItems = $firebase(new Firebase("https://sunyabroad.firebaseio.com/submenu"));
			$scope.submenuItems.$on('loaded',function(){
				var keys = $scope.menuItems.$getIndex();
				// keys.forEach(function(key, i) {
				// 	console.log($scope.menuItems[key]);
				// });
				$scope.currentOrder = $scope.getCurrentIndex();
				$scope.addPage = function(e) {
				if (e.keyCode != 13) return;
					$scope.menuItems.$add({name: $scope.menuItemName,createdAt:new Date(),editedAt:new Date(),style:'',parent:'',url:'',$priority:$scope.getCurrentIndex()+1});
					$scope.menuItemName= "";
					$scope.currentOrder = $scope.getCurrentIndex()+1;
					console.log($scope.currentOrder);
				};
			});
		});
		$scope.editItem = function(e,key){
			$scope.menuItems.$save(key);
		};
		$scope.editSub = function(e,key){
			$scope.submenuItems.$save(key);
		};

		$scope.publishMenu = function(){
			$http.post('bridge/publishMenu.php',{menu:JSON.stringify($scope.menuItems),subMenu:JSON.stringify($scope.submenuItems)})
			.success(function(data) {
		      console.log('success',data);
		      $scope.Message = "Menu Changes Published";
		      setTimeout(function(){
		      	$scope.Message = "";
		      },1000);
		    })
		    .error(function(data) {
		      console.log('failure',data);
		    });
			//console.log(JSON.stringify($scope.menuItems));
		};
		$scope.getCurrentIndex = function(){
			currentOrder = 0;
			var keys = $scope.menuItems.$getIndex();
			keys.forEach(function(key, i) {
				if(typeof $scope.menuItems[key] != 'undefined'){
					if($scope.menuItems[key].$priority >= currentOrder){
						currentOrder = $scope.menuItems[key].$priority;
					}
				}
			});
			return currentOrder;
		};
		$scope.getKeyIndex = function(input_id){
			currentOrder = 0;
			
			var keys = $scope.submenuItems.$getIndex();
			keys.forEach(function(key, i) {
				if(typeof $scope.submenuItems[key] != 'undefined'){
					if($scope.submenuItems[key]['parent'] == input_id && $scope.submenuItems[key].$priority >= currentOrder){
						currentOrder = $scope.submenuItems[key].$priority;
					}
				}
			});
			return currentOrder;
		};

		$scope.addChild = function(parent_id){
			$scope.submenuItems.$add({name: 'New Child',createdAt:new Date(),editedAt:new Date(),style:'',parent:parent_id,url:'',$priority:($scope.getKeyIndex(parent_id))+1});
		};

		$scope.moveUp = function(key){

				var current_val = $scope.menuItems[key].$priority-1;
				keys = $scope.menuItems.$getIndex();
				keys.forEach(function(dex, i) {
					if($scope.menuItems[dex].$priority == current_val){
						$scope.menuItems[dex].$priority++;
						$scope.menuItems[key].$priority--;
					}
				});
			$scope.menuItems.$save();
		};

		$scope.moveChildUp = function(in_parent,key){
				
				var current_val = $scope.submenuItems[key].$priority-1;
				keys = $scope.submenuItems.$getIndex();
				keys.forEach(function(dex, i) {
					if($scope.submenuItems[dex]['parent'] == in_parent && $scope.submenuItems[dex].$priority == current_val){
						$scope.submenuItems[dex].$priority++;
						$scope.submenuItems[key].$priority--;
					}
				});
			$scope.submenuItems.$save();
		};
		$scope.moveDown = function (key){
				
				var current_val = $scope.menuItems[key].$priority+1;
				keys = $scope.menuItems.$getIndex();
				keys.forEach(function(dex, i) {
					if($scope.menuItems[dex]['parent'] == in_parent &&$scope.menuItems[dex].$priority == current_val){
						$scope.menuItems[dex].$priority--;
						$scope.menuItems[key].$priority++;
					}
				});
			$scope.menuItems.$save();
		};
		$scope.moveChildDown = function (in_parent,key){
				
				var current_val = $scope.submenuItems[key].$priority+1;
				keys = $scope.submenuItems.$getIndex();
				keys.forEach(function(dex, i) {
					if($scope.submenuItems[dex]['parent'] == in_parent && $scope.submenuItems[dex].$priority == current_val){
						$scope.submenuItems[dex].$priority--;
						$scope.submenuItems[key].$priority++;
					}
				});
			$scope.submenuItems.$save();
		};
		$scope.deleteItem = function(key){
			
			var current_val = $scope.menuItems[key].$priority;
			keys = $scope.menuItems.$getIndex();
			keys.forEach(function(dex, i) {
				if($scope.menuItems[dex].$priority >= current_val){
					$scope.menuItems[dex].$priority--;
				}
			});
			$scope.currentOrder--;

			$scope.menuItems.$save().then(function(){
				$scope.menuItems.$remove(key);
			});
		};
		$scope.deleteChild = function(in_parent,key){
			var current_val = $scope.submenuItems[key].$priority;
			keys = $scope.submenuItems.$getIndex();
			keys.forEach(function(dex, i) {
				if($scope.submenuItems[dex]['parent'] == in_parent && $scope.submenuItems[dex].$priority >= current_val){
					$scope.submenuItems[dex].$priority--;
				}
			});
			$scope.currentOrder--;

			$scope.submenuItems.$save().then(function(){
				$scope.submenuItems.$remove(key);
			});
		}
	}
])
.controller('HeaderController',['$scope', '$firebase','$routeParams',
	function($scope, $firebase,$routeParams) {
		$('#newMenuItem').hide();
		$scope.type = $routeParams['type'];
		$scope.title = "Featued Images"
		if($scope.type == 'header'){
			$scope.title = 'headers';
		}
		$scope.headerItems = $firebase(new Firebase("https://sunyabroad.firebaseio.com/"+$scope.type+"Image"));
		$scope.headerItems.$on('loaded',function(){

			var keys = $scope.headerItems.$getIndex();
			
			$scope.currentOrder = $scope.getCurrentIndex();
			$scope.addHeader = function() {
				$scope.headerItems.$add({img: $scope.img,createdAt:new Date(),editedAt:new Date(),$priority:$scope.getCurrentIndex()+1});
				$scope.currentOrder = $scope.getCurrentIndex()+1;
				$('#newMenuItem').hide()
				
			};

		});
		
		$scope.getCurrentIndex = function(){
			currentOrder = 0;
			var keys = $scope.headerItems.$getIndex();
			keys.forEach(function(key, i) {
				if(typeof $scope.headerItems[key] != 'undefined'){
					if($scope.headerItems[key].$priority >= currentOrder){
						currentOrder = $scope.headerItems[key].$priority;
					}
				}
			});
			return currentOrder;
		};
		$scope.deleteItem = function(key){
			
			var current_val = $scope.headerItems[key].$priority;
			keys = $scope.headerItems.$getIndex();
			keys.forEach(function(dex, i) {
				if($scope.headerItems[dex].$priority >= current_val){
					$scope.headerItems[dex].$priority--;
				}
			});
			$scope.currentOrder--;
			$scope.headerItems.$save().then(function(){
				$scope.headerItems.$remove(key);
			});
		};
		$scope.moveDown = function (key){
				
				var current_val = $scope.headerItems[key].$priority+1;
				keys = $scope.headerItems.$getIndex();
				keys.forEach(function(dex, i) {
					if($scope.headerItems[dex].$priority == current_val){
						$scope.headerItems[dex].$priority--;
						$scope.headerItems[key].$priority++;
					}
				});
			$scope.headerItems.$save();
		};

		$scope.moveUp = function(key){

				var current_val = $scope.headerItems[key].$priority-1;
				keys = $scope.headerItems.$getIndex();
				keys.forEach(function(dex, i) {
					if($scope.headerItems[dex].$priority == current_val){
						$scope.headerItems[dex].$priority++;
						$scope.headerItems[key].$priority--;
					}
				});
			$scope.headerItems.$save();
		};


		document.getElementById("file-upload").addEventListener('change', handleFileSelect, false);
		function handleFileSelect(evt) {
		  
		  var f = evt.target.files[0];
		  var reader = new FileReader();
		  reader.onload = (function(theFile) {
		    return function(e) {
		      $scope.img =  e.target.result;
		      document.getElementById("pano").src = e.target.result;
		    };
		  })(f);
		  reader.readAsDataURL(f);
		}
}
]);
String.prototype.replaceAll = function (sfind, sreplace) {
     var str = this;
    while (str.indexOf(sfind)>-1) str=str.replace(sfind, sreplace);
    return str;
};

