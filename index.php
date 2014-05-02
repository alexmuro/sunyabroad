<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!-- saved from url=(0022)http://www.albany.edu/ -->
<html xmlns="http://www.w3.org/1999/xhtml" ng-app="sunyabroad">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=9; IE=8; IE=7; IE=EDGE">
    <meta name="keywords" content="study abroad, international, inexpensive, travel, University at Albany, Africa, Antarctica, Asia, Central America, Europe, Middle East, North America, South America, West Indies, Albany, Antarctica, Argentina, Belarus, Brazil, Cambodia, Canada, Chile, China, Costa, Rica, Dominican, Republic, Denmark, Ethiopia, Finland, France, Germany, India, Ireland, Israel, Italy, Japan, Korea, Mexico, Namibia, Netherlands, Norway, Puerto, Rico, Russia, Singapore, South, Africa, Spain, Sweden, Taiwan, Tanzania, Thailand, Trinidad and Tobago, United Arab Emirates, United Kingdom, England, Scotland, Abo, Arnhem, Bangalore, Beer Sheva, Beijing, Braunschweig, Buenos Aires, Campinas, Cape Town, Chengdu, Chicoutimi, Chuncheon, Copenhagen, Dubai, Dublin, Durban, East Sussex, Florence, Galway, Glasgow, Gothenburg, Grenoble, Guadalajara, Gyeongsan, Haifa, Hirakata, Osaka, Hong Kong, Jerusalem, Kingston on Hull, London, Madrid, Milan, Montpellier, Montreal, Moscow, Nanjing, Nijmegen, Nottingham, Oulu, Pune, Quebec City, Queretaro, San Jose, San Juan, Santiago, Santo Domingo, Seoul, Shanghai, Singapore, St. Augustine, Swansea, Wales, Taipei City, Tel Aviv, Tilburg, Tokyo, Valencia, Wuerzburg">
    <title>University at Albany - SUNY - Home Page</title>
    
    <link media="all" rel="stylesheet" type="text/css" href="resources/css/all.css">
    
    <script src="resources/js/jquery-latest.min.js"></script>
    <script type="text/javascript" src="resources/js/jquery.main.js"></script>
    <script type="text/javascript" src="resources/js/accordian.js"></script>
    <script type="text/javascript" src="resources/js/content.js"></script>
    <script type='text/javascript' src='http://www.google.com/jsapi'></script>
    <script>
      google.load('visualization', '1', {'packages': ['geochart']});
    </script>
    <script type="text/javascript" src="resources/js/interactive_map.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.10/angular.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0rc1/angular-route.min.js"></script>
    <script type="text/javascript" src="http://code.angularjs.org/1.2.1/angular-animate.js"></script>
    <script src='https://cdn.firebase.com/v0/firebase.js'></script>
    <script src='https://cdn.firebase.com/libs/angularfire/0.6.0/angularfire.min.js'></script>
    <script src='resources/js/sunyabroad_angular.js'></script>  

    <!-- Begin Mobile Detection Scripts -->
  </head>

  <body ng-cloak>
  <!-- wrapper block -->
  <div id="page" ng-controller="behaviorController" ng-cloak class="ng-cloak">
    
    <!-- holding block -->
    <div id="wrapper">
    <?php include 'partials/header.php' ?>  
    <!-- main block -->
    <div id="main">
      <div id="twocolumns">
        <div id="content" style="padding-bottom:100px;">
          <span id="mapstuff" ng-show="mainPage">
          <h2>
            Interactive Program Map
          </h2>
          <div class="text_map" style="margin-bottom: 20px;">
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
          </span>
          <div ng-view ng-cloak class="ng-cloak"></div>
        </div>
          <!-- RIGHT COLUMN BEGINS -->
          
          <div id="alert_box" style="display:none;">
            <!-- PUBLISHED DATE TIME Wednesday, July 17, 2013 12:24 PM -->
            <img class="alert_icon" src="resources/img/alert_sign_triangle.png" alt="UAlbany Alert">
            
            <div class="alert_box_top">
            </div>
            
            <div class="alert_box_middle">
              
              <div class="alert_box_text">
                
                <div class="alert_box_titleandtext">
                  <span class="alert_box_title">
                    University Council Meeting
                  </span>
                  <br>
                  <span class="alert_box_message textspan">
                    Today’s University Council meeting at 10AM will be 
                    <a href="http://mediasite.suny.edu/mediasite/Viewer/?peid=9e2afc8cc851483dbc4eb24eeab9497c1d" target="_blank">
                      available online
                    </a>
                    .
                  </span>
                </div>
              </div>
              <!-- DIV alert_box_text ENDS -->
            </div>
            <!-- DIV alert_box_middle ENDS -->
            
            <div class="alert_box_bottom">
            </div>
          </div>
          <!-- DIV alert_box ENDS -->
          
          
          
          
          <!-- aside -->
          <div class="aside">
            <div id="social-media-icons" style="margin: 0px 0px 3px 0px;">
              
              <a href="http://www.albany.edu/main/facebook.shtml">
                <img style="margin: 0px 1px;" src="resources/img/facebook.png" width="31" height="31" alt="Facebook icon">
              </a>
              
              <a href="http://www.albany.edu/main/twitter.shtml">
                <img style="margin-right: 1px;" src="resources/img/twitter.png" width="31" height="31" alt="Twitter icon">
              </a>
              
              <a href="http://www.albany.edu/main/linkedin.shtml">
                <img style="margin-right: 1px;" src="resources/img/linkedin.png" width="31" height="31" alt="LinkedIn icon">
              </a>
              
              <a href="http://www.albany.edu/main/instagram.shtml">
                <img style="margin-right: 1px;" src="resources/img/instagram.png" width="31" height="31" alt="Instagram icon">
              </a>
              
              <a href="http://www.albany.edu/main/pinterest.shtml">
                <img style="margin-right: 1px;" src="resources/img/pinterest.png" width="31" height="31" alt="Pinterest icon">
              </a>
              
              <a href="http://www.albany.edu/main/youtube.shtml">
                <img style="margin-right: 0px;" src="resources/img/youtube.png" width="31" height="31" alt="YouTube icon">
              </a>
              
            </div>
            <!-- DIV social-media-icons ENDS -->

            <div id="research_and_business" class="box">
            <h2>Resources</h2>
            
            <div>

              <ul style="margin-bottom: 60px;" class="additional-links">
                <li><a href="#/pages/how_to_use_the_interactive_map">How To Use Interactive Map</a></li>
                 <li><a href="pdf/forms/GenInfoHdbk WIN &amp; SP 09.pdf" target="_blank">Student Handbook</a></span>
                           <li><a href="http://www.albany.edu/intled/saebios.shtml">About Us</a></span></li>
                           <li><a href="http://www.albany.edu/international">UAlbany International Education</a></span></li>
                           <li><a href="http://www.albany.edu/isss">International Student &amp; Scholar Services</a></span></li>
                           <li><a href="http://www.albany.edu/ielp">Intensive English Language Program</a></span></li>
                          <li>Need data about Study Abroad at UAlbany?<br></li>
                          <li><a href="pdf/reports/Annual Study Abroad Report 2011-2012 with summary.pdf" target="_blank">Study Abroad Annual Report 2011-12</a><br></li>
                          <li><a href="pdf/reports/Annual Study Abroad Report 2012-2013 with summary.pdf" target="_blank">Study Abroad Annual Report 2012-13</a></span></li> 
              </ul>
            
            </div>          
            </div>
            <div class="box">
              <h2>
                FEATURED VIDEOS
              </h2>
              <div class="small-gallery" style="position:relative;">
                <div class="mask" style="height:130px;background-color:#666666;">
                  <ul id="videoList">
                    
                    
                    
                    <li>
                    </li>
                  </ul>
                  <div class="control-block">
                    
                    <a href="http://www.albany.edu/ualbanytv/index.php?WT.source=home&WT.svl=vod">
                      SEE ALL
                    </a>
                    <div class="holder">
                      
                      <a href="http://www.albany.edu/#" class="next">
                        next
                      </a>
                      
                      <a href="http://www.albany.edu/#" class="prev">
                        previous
                      </a>
                      <div class="counter">
                        <span class="cur-num">
                          1
                        </span>
                        of 
                        <span class="all-num" id="numVideos">
                          8
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="box">
              <h2>
                PHOTOS of the DAY
              </h2>
              <?php include 'partials/photos.html'; ?>
            </div>
            
            
            <script>
              var ul = document.getElementById("videoList");
              var liNodes = [];
              
              for (var i = 0; i < ul.childNodes.length; i++) {
                if (ul.childNodes[i].nodeName == "LI") {
                  liNodes.push(ul.childNodes[i]);
                }
              }
              
              
              var count = liNodes.length;
              document.getElementById("numVideos").innerHTML=count;
              
              
            </script>
            
           
          </div>
      </div>
      <!-- sidebar -->
      <div id="sidebar">
        <!-- Getting Started BEGINS *********************************** -->
        <a href="/sunyabroad/">
        <div class="heading-block" style="background-image:url(&#39;http://www.albany.edu/hpfiles/assets/Getting-Started-at-UAlbany.png&#39;);">
          
        </div>
        </a>
        <!-- Side Navigation -->
        
        <?php include 'partials/side_nav.php';?>
        
        <!-- Getting Started ******************************************************************* ENDS -->
        
        <!-- calendar -->
        <?php include 'partials/calendar.php'; ?>
        <!-- END DIV calendar -->
        
      </div>
    </div>
    <!-- footer -->
    <div id="footer">
      <img src="resources/img/study_abroad_logo.jpg" style="width:250px;float:right" > 
      <address>
        <strong>
          University at Albany Office of Internation Education, Study Abroad &amp; Exchanges
        </strong><br>
        Science Library G40 · 1400 Washington Ave., · Albany, NY 12222 · Phone (518) 591-8170
        <br><a href="mailto:studyabroad@albany.edu">studyabroad@albany.edu</a>
      </address>

      
      <span>
        ©&nbsp;2014 University at Albany
      </span>
      
    </div>
  </div>
  </div>
  
  <!-- END OF SmartSource Data Collector TAG -->
  </body>
</html>