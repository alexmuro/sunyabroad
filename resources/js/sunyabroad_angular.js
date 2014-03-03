var app = angular.module('sunyabroad',
	[
		'firebase',
		'ngRoute',
		'SAControllers',
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


var SAControllers = angular.module('SAControllers', []);
SAControllers.controller('MainController',['$scope',
	function($scope) {
		var content = [{"url":"http://poststar.com/news/local/taking-courses-in-cambodia-local-student-flying-to-southeast-asia/article_370ae9a0-1706-11e3-8d66-0019bb2963f4.html",    "program":"",    "img":"resources/img/BenCramer.jpg",    "title":"Taking courses in Cambodia: Local student flying to Southeast Asia for service, study",    "content":"<p>QUEENSBURY -- Cambodia 101 is the course on University at Albany junior Ben Cramer’s schedule this semester.Cramer,   of Queensbury, was scheduled to leave Friday on a nearly daylong flight   for Cambodia, where he will be helping to teach English with the Global   Service Corps until December.Cramer, a graduate of Glens Falls   High School, said he first became interested in traveling abroad for a   service project when a friend, also a student at UAlbany, traveled to   Tanzania. <p>From the 9/6/2013 <a href='http://poststar.com/'>Glens Falls Post-Star </a></p>"     },    {"url":"http://www.albany.edu/studyabroad/alumni/ericamiller.shtml",   "img":"resources/img/sm_patagonia2.jpg" ,    "title": "Erica Miller- In My Own Words",    "program":"Universidad del Salvador (USAL), Buenos Aires, Argentina",    "content":"<p>I  studied abroad at the Universidad del Salvador in Buenos Aires, Argentina  during the 2012-2013 academic year. As a Spanish major, I went hoping to  improve my fluency in Spanish, but in the end, I got so much more out of it. I  found myself in an amazing, colorful, chaotic city that never ceased to  fascinate me, even after being there for almost a year.&nbsp; Buenos Aires is a blend of Europe and South  America and the whole country is a place rich in history and culture. It is a place  that is politically charged, caught between a recent turbulent past and their  future. I was inspired by how passionate and involved all young people were in  politics and government. Through my classes, talking with friends, witnessing  strikes and protests over government, economics and class struggle, I learned  to really educate myself on current events and politics, and formed my own  political opinions, things that we don’t always encourage young people to do in  the US."},    {    "url":"http://www.albany.edu/studyabroad/alumni/emmerlinenelson.shtml",    "img":"resources/img/photo-(8).jpg",    "title": "Emmerline Francesca Nelson  - In My Own Words",    "program":"United States International University, Kenya, Africa",    "content":"<p>I studied abroad in the beautiful city of Nairobi, Kenya located in East Africa in the spring of 2013. I have always desired to study abroad but I believed that I lacked funding to do so. However, I put all of my doubts and negative thoughts aside and decided to visit the study abroad fair during the Fall semester of 2012. I learned about KEI (Knowledge Exchange Institute) in partnership with SUNY Albany’s study abroad program offered at the United States International University (USIU) in Nairobi, Kenya. At that moment I promised myself that I would do anything in my power to participate in the program. Although I became excited and eager after being accepted into the program, on the plane I became sad and felt alone. It hit me that I would be living in a foreign country without any family or friends for three months. I was scared. However, upon arrival I realized that I was not alone."    }];
		content.forEach(function(d,i){
			var output = '<li><div><img src="'+d.img+'" width="163" height="112"></div><div class="text-place"><strong class="subject" style="text-transform:uppercase;">'+d.program+'</strong><h3><a href="'+d.url+'"><p>'+d.title+'</p></a></h3><p></p><p>'+d.content+'<p></p></div></li>';
			$(".news-block").prepend(output);
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
	}
]);

