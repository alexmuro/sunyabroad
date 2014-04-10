
<ul class="side-menu" ng-controller="MenuController">

  <li class="side-head" ng-repeat="item in menuItems| orderByPriority">
    <a ng-click="setMenu(item.$id)" ng-href="{{item.url}}">
      <div class="textspan" style="display:inline;">
        <p>
          <strong>
          {{item.name}}
          </strong>
        </p>
      </div>
    </a>
    <ul class="side_sub my-show-hide-animation" ng-show="showMenu(item.$id)">
      <li ng-show="subitem.parent == item.$id" ng-repeat="subitem in submenuItems |  orderByPriority">
        <a ng-href="{{subitem.url}}">
          {{subitem.name}}
        </a>
      </li>
    </ul>
  </li>
</ul>
