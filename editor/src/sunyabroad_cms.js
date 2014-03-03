var app = angular.module('sunyabroad_cms',
	[
		'firebase',
		'ngRoute',
		'CMSControllers',
		'angular-medium-editor'
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
      }).
        when('/menu', {
        templateUrl: 'partials/menu.html',
        controller: 'MenuController'
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
])
.controller('EditorController',['$scope', '$firebase','$routeParams',
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
				
				$scope.pages[$routeParams.id].body = $scope.html_content;
				$scope.pages[$routeParams.id].title = $scope.title;
				$scope.pages[$routeParams.id].url = encodeURIComponent($scope.title.replaceAll(" ","_").toLowerCase().replaceAll("?","").replaceAll("&","and"));
				$scope.pages.$save($routeParams.id);
				console.log($scope.pages[$routeParams.id]);
			};
		});
	}
])
.controller('MenuController',['$scope', '$firebase','$routeParams',
	function($scope, $firebase,$routeParams) {
		$('#newMenuItem').hide();
		$scope.menuItems = $firebase(new Firebase("https://sunyabroad.firebaseio.com/menu"));
		$scope.menuItems.$on('loaded',function(){
			$scope.submenuItems = $firebase(new Firebase("https://sunyabroad.firebaseio.com/submenu"));
			$scope.submenuItems.$on('loaded',function(){
				var keys = $scope.menuItems.$getIndex();
				keys.forEach(function(key, i) {
					console.log($scope.menuItems[key]);
				});
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
			
			var current_val = $scope.submenuItems[key].$priority;
			keys = $scope.submenuItems.$getIndex();
			keys.forEach(function(dex, i) {
				if($scope.submenuItems[dex].$priority >= current_val){
					$scope.submenuItems[dex].$priority--;
				}
			});
			$scope.currentOrder--;

			$scope.submenuItems.$save().then(function(){
				$scope.submenuItems.$remove(key);
			});
		};
		$scope.deleteChild = function(in_parent,key){
			var current_val = $scope.menuItems[key].$priority;
			keys = $scope.menuItems.$getIndex();
			keys.forEach(function(dex, i) {
				if($scope.menuItems[dex]['parent'] == in_parent && $scope.menuItems[dex].$priority >= current_val){
					$scope.menuItems[dex].$priority--;
				}
			});
			$scope.currentOrder--;

			$scope.menuItems.$save().then(function(){
				$scope.menuItems.$remove(key);
			});
		}
	}
]);

String.prototype.replaceAll = function (sfind, sreplace) {
     var str = this;
    while (str.indexOf(sfind)>-1) str=str.replace(sfind, sreplace);
    return str;
};

