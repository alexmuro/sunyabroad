<div class="calendar">
          
  <h2>
    CALENDAR
  </h2>
  
  <ul ng-controller='CalendarController'>
    <li ng-repeat='item in displayItems'>
      <span style="margin-left:5px;font-size:16px;line-height:16px;color:#9e0f0f;">
          {{item.editedAt | date:'MMMM d'}}
      </span>
      <div class="info" style="margin-left: 24px;">
        <img ng-show="item.img" ng-src="{{item.img}}" style="width:154px;height:120px;">
         <strong class="title">
            <p>{{item.title}}</p>
        </strong>
        <span ng-bind-html="item.html"></span>
      </div>
    </li> 
    
  </ul>
  
  
  
</div>