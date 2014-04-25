
<h2>
  NEWS
</h2>
<!-- news block -->
<ul class="news-block">
  <li ng-repeat="key in keys | orderByPriority | reverse | startFrom:currentPage*pageSize | limitTo:pageSize ">
    <div>
      <h3><a href="{{posts[key].url}}+'"><p>{{posts[key].title}}</p></a></h3>
      <strong class="subject" style="text-transform:uppercase;">{{posts[key].subtitle}}</strong>
      <img ng-show="posts[key].img" ng-src="{{posts[key].img}}" width="509" height="300">
      {{posts[key].createdAt | date:'medium' }}
      
    </div>
    <div width="500">
      
      <p></p>
      <p><div ng-bind-html="posts[key].trustedHTML" style="font-size:1.4em; line-height:1.4em"></div><p></p>
      </div>
  </li>
  <!-- gets content dynamically -->
</ul>
<button ng-disabled="currentPage == 0" ng-click="currentPage=currentPage-1">
    Previous
</button>
{{currentPage+1}}/{{numberOfPages()}}
<button ng-disabled="currentPage >= keys.length/pageSize - 1" ng-click="currentPage=currentPage+1">
    Next
</button>
