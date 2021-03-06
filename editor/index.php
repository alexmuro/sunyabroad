<!DOCTYPE html>
<html ng-app="sunyabroad_cms">

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Study Abroad Page Editor</title>
    <!-- Core CSS - Include with every page -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="font-awesome/css/font-awesome.css" rel="stylesheet">
    
    <!-- Page-Level Plugin CSS - Tables -->
    <link href="css/plugins/dataTables/dataTables.bootstrap.css" rel="stylesheet">
    <link rel="stylesheet" href="css/medium-editor.css">
    <link rel="stylesheet" type="text/css" href="css/firepano.css">

    
    <!-- SB Admin CSS - Include with every page -->
    <link href="css/sb-admin.css" rel="stylesheet">

    <!-- Javascripts  -->
    <!-- Core Scripts - Include with every page -->
    <script src="js/jquery-1.10.2.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/spin.js/1.2.7/spin.min.js"></script>
    <script src="//cdn.firebase.com/v0/firebase.js"></script>
    <script src="js/sha256.js"></script>
    <script src="js/firepano.js"></script>
    <script src="js/plugins/metisMenu/jquery.metisMenu.js"></script>
    <script src='js/medium-editor.js'></script>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.10/angular.js"></script>
    <script src="js/angular-bootstrap.tpl.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0rc1/angular-route.min.js"></script>
    <script src='https://cdn.firebase.com/v0/firebase.js'></script>
    <script src='https://cdn.firebase.com/libs/angularfire/0.6.0/angularfire.min.js'></script>
    
    
  
    <script src='js/angular-medium-editor.js'></script> 
    <script src='src/sunyabroad_cms.js'></script>
</head>

<body>

    <div id="wrapper">

        <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="index.html">Study Abroad CMS</a>
            </div>
            <!-- /.navbar-header

            <ul class="nav navbar-top-links navbar-right">
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i class="fa fa-user fa-fw"></i>  <i class="fa fa-caret-down"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-user">
                        <li><a href="#"><i class="fa fa-user fa-fw"></i> User Profile</a>
                        </li>
                        <li><a href="#"><i class="fa fa-gear fa-fw"></i> Settings</a>
                        </li>
                        <li class="divider"></li>
                        <li><a href="login.html"><i class="fa fa-sign-out fa-fw"></i> Logout</a>
                        </li>
                    </ul>
                    <!-- /.dropdown-user -->
                </li>
                <!-- /.dropdown -->
            </ul>
            <!-- /.navbar-top-links -->

        </nav>
        <!-- /.navbar-static-top -->

        <nav class="navbar-default navbar-static-side" role="navigation">
            <div class="sidebar-collapse">
                <ul class="nav" id="side-menu">
                    
                    <li>
                        <a href="#"><i class="fa fa-dashboard fa-edit"></i> Pages</a>
                    </li>
                     <li>
                        <a href="#/posts"><i class="fa fa-home"></i> Blog</a>
                    </li>
                    <li>
                        <a href="#/menu"><i class="fa fa-list"></i> Menu</a>
                    </li>
                    <li>
                        <a href="#/images/header"><i class="fa fa-camera-retro fa-edit"></i> Header Images</a>
                    </li>
                    <li>
                        <a href="#/calendar"><i class="fa fa-calendar fa-edit"></i> Calendar</a>
                    </li>
                    <li>
                        <a href="#/images/featured"><i class="fa fa-camera"></i> Featured Photos</a>
                    </li>
                    <li>
                        <a href="#/resources"><i class="fa fa-edit"></i> Resources</a>
                    </li>
                   
                    
                </ul>
                <!-- /#side-menu -->
            </div>
            <!-- /.sidebar-collapse -->
        </nav>
        <!-- /.navbar-static-side -->

        <div id="page-wrapper">
            
                <div ng-view></div>
            
            <!-- /.row -->
            
            <!-- /.row -->
        </div>
        <!-- /#page-wrapper -->

    </div>
    <!-- /#wrapper -->

    

    <!-- Page-Level Plugin Scripts - Tables -->
    <script src="js/plugins/dataTables/jquery.dataTables.js"></script>
    <script src="js/plugins/dataTables/dataTables.bootstrap.js"></script>

    <!-- SB Admin Scripts - Include with every page -->
    <script src="js/sb-admin.js"></script>

    <!-- Page-Level Demo Scripts - Tables - Use for reference -->
    <script>
    $(document).ready(function() {
        $('#dataTables-example').dataTable();
    });
    </script>

</body>

</html>
