<h2>
  Program Map
</h2>
<div class="text_map">
  <div id="imapfilters">Program Term: 
    <select name="programterm" id="programterm" onChange="drawVisualization()">
      <option value="all" selected>All Programs</option>
      <option value="sem">Semester Length Programs</option>
      <option value="sum">Summer Length Programs</option>
      <option value="win">Winter Session Programs</option>
    </select>
    Region:
    <select name="regionmap" id="regionmap" onChange="drawVisualization()">
      <option value="world" selected>World</option>
      <option value="002">Africa</option>
      <option value="019">Americas</option>
      <option value="021">North America</option>
      <option value="013">Central America</option>
      <option value="005">South America</option>
      <option value="029">The Caribbean</option>
      <option value="142">Asia</option>
      <option value="150">Europe</option>
      <option value="145">Middle East</option>
    </select></div> 
    <div id='visualization'></div>
    <div id='imapmessage'>Click each location for more information</div>
</div>
<h2>
  NEWS
</h2>
<!-- news block -->
<ul class="news-block">
  <li ng-repeat="(key,post) in posts | orderByPriority">
    <div>
      <img ng-src="{{post.img}}" width="163" height="112">
    </div>
    <div class="text-place">
      <strong class="subject" style="text-transform:uppercase;">{{post.subtitle}}</strong>
      <h3><a href="{{post.url}}+'"><p>{{post.title}}</p></a></h3>
      <p></p>
      <p><div ng-bind-html="post.body" style="font-size:1.4em"></div><p></p>
      </div>
  </li>
  <!-- gets content dynamically -->
</ul>