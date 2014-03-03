<ul class="side-menu" ng-controller="MenuController">
  <li class="side-head" ng-repeat="item in menuItems| orderByPriority">
    <a>
      <div class="textspan" style="display:inline;">
        <p>
          <strong>
          {{item.name}}
          </strong>
        </p>
      </div>
    </a>
    <ul class="side_sub">
      <li ng-show="subitem.parent == item.$id" ng-repeat="subitem in submenuItems |  orderByPriority">
        <a>
          {{subitem.name}}
        </a>
      </li>
    </ul>
  </li>
</ul>
          <!-- <li class="side-head">
            <a>
              <div class="textspan" style="display:inline;">
                <p>
                  <strong>
                  Study Abroad Programs
                  </strong>
                </p>
              </div>
            </a>
            <ul class="side_sub">
              <li>
                <a href="https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.AdvancedSearch">
                  All Programs
                </a>
              </li>
              <li>
                <a href="https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.SearchResults&amp;Program_Name=&amp;Program_Type_ID=O&amp;pi=%7F&amp;pc=%7F&amp;pr=%7F&amp;pt=Academic+Year%7F&amp;pt=Fall%7F&amp;pt=Spring%7F&amp;Partner_ID=&amp;p_10004=%7F&amp;p_10004_t=MULTI&amp;p_10005=%7F&amp;p_10005_t=MULTI&amp;p_10011=%7F&amp;p_10011_t=MULTI&amp;Sort=Program_Name&amp;Order=asc&amp;pp=10004%2C10005%2C10011">
                  Semester &amp; Academic Year
                </a>
              </li>
              <li>
                <a href="https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.SearchResults&amp;Program_Name=&amp;Program_Type_ID=O&amp;pi=%7F&amp;pc=%7F&amp;pr=%7F&amp;pt=Summer%7F&amp;Partner_ID=&amp;p_10004=%7F&amp;p_10004_t=MULTI&amp;p_10005=%7F&amp;p_10005_t=MULTI&amp;p_10011=%7F&amp;p_10011_t=MULTI&amp;Sort=Program_Name&amp;Order=asc&amp;pp=10004%2C10005%2C10011">
                  Summer Sessions
                </a>
              </li>
              <li>
                <a href="https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.SearchResults&amp;Program_Name=&amp;Program_Type_ID=O&amp;pi=%7F&amp;pc=%7F&amp;pr=%7F&amp;pt=Winter%7F&amp;Partner_ID=&amp;p_10004=%7F&amp;p_10004_t=MULTI&amp;p_10005=%7F&amp;p_10005_t=MULTI&amp;p_10011=%7F&amp;p_10011_t=MULTI&amp;Sort=Program_Name&amp;Order=asc&amp;pp=10004%2C10005%2C10011">
                  Wintersession
                </a>
              </li>
              <li>
                <a href="#/pages/other_suny_programs">
                  Other SUNY Programs
                </a>
              </li>
            </ul>
          </li>
          <li class="side-head">
            <a href="https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.SearchResults&Program_Name=&Program_Type_ID=O&pi=%7F&pc=%7F&pr=%7F&pt=%7F&Partner_ID=ANY&p_10004=%7F&p_10004_t=MULTI&p_10005=%7F&p_10005_t=MULTI&p_10011=Internships+are+available%7F&p_10011=Service+Learning+or+other+volunteer+opportunities+are+available%7F&p_10011_t=MULTI&Sort=Program_Name&Order=asc&pp=10004%2C10005%2C10011">
              <div class="textspan" style="display:inline;">
                <p>
                 Service Learning &amp; Internships
                  
                </p>
              </div>
            </a>
          
          <li class="side-head">
            <a>
              <div class="textspan" style="display:inline;">
                <p>
                  Prospective 
                  <strong>
                    Students
                  </strong>
                </p>
              </div>
            </a>
            <ul class="side_sub" contentindex="1c">
              <li>
                <a href="#/pages/why_study_abroad">
                  Why Study Abroad
                </a>
              </li>
              <li>
                <a href="https://ualbany.studioabroad.com/">
                  Getting Started
                </a>
              </li>
              <li>
                <a href="https://ualbany.studioabroad.com/?go=cost%5Festimates">
                  Program Costs
                </a>
              </li>
              <li>
                <a href="https://ualbany.studioabroad.com/?go=Financial%20Aid">
                  Financial Aid
                </a>
              </li>
              <li>
                <a href="#/pages/grants_and_scholarships">
                  Grants &amp; Scholarships
                </a>
              </li>
              <li>
                <a href="#/pages/health_and_saftey">
                  Health &amp; Safety
                </a>
              </li>
              <li>
                <a href="https://ualbany.studioabroad.com/index.cfm?FuseAction=Abroad.ViewLink&amp;Parent_ID=065807C1-26B9-58D3-F5AF767D00CA612B&amp;Link_ID=0675530E-26B9-58D3-F5847509BCF20449&amp;pID=3&amp;lID=13">
                  Parents
                </a>
              </li>
              <li>
                <a href="http://www.albany.edu/studyabroad/prospective/FAQ.html">
                  FAQ
                </a>
              </li>
              <li>
                <a href="http://www.albany.edu/studyabroad/prospective/FAQ.html">
                  Apply For a Different SUNY or Non-SUNY Program
                </a>
              </li>
            </ul>
          </li>
          <li class="side-head">
            <a>
              <div class="textspan" style="display:inline;">
                <p id="tuition">
                  Current Participants
                </p>
              </div>
            </a>
            <ul class="side_sub" contentindex="2c">
              <li>
                <a href="https://ualbany.studioabroad.com/index.cfm?FuseAction=Abroad.ViewLink&amp;Parent_ID=0&amp;Link_ID=70CA3DC1-BCDE-E7F3-5AFE914AC3B9A462">
                  Academics/Credit Recognition
                </a>
              </li>
              <li>
                <a href="https://ualbany.studioabroad.com/index.cfm?FuseAction=Abroad.ViewLink&amp;Parent_ID=0&amp;Link_ID=71BF67C8-BCDE-E7F3-5E1F1D32A5D2AAEE">
                  Costs &amp; Financial Management
                </a>
              </li>
              <li>
                <a href="http://www.albany.edu/studyabroad/current/forms.html">
                  Forms &amp; Downloadable Material
                </a>
              </li>
              <li>
                <a href="http://www.albany.edu/studyabroad/pdf/forms/GenInfoHdbk%20WIN%20&amp;%20SP%2009.pdf" target="_blank">
                  General Information Handbook
                </a>
              </li>
              <li>
                <a href="http://www.albany.edu/studyabroad/current/health.html">
                  Health &amp; Safety Abroad
                </a>
              </li>
              <li>
                <a href="https://ualbany.studioabroad.com/?go=cultural">
                  Cultural Issues &amp; Concerns
                </a>
              </li>
              <li>
                <a href="https://ualbany.studioabroad.com/index.cfm?FuseAction=Abroad.ViewLink&amp;Parent_ID=0&amp;Link_ID=C72860C8-26B9-564D-D67248D8B4D66D12">
                  Returning from Abroad
                </a>
              </li>
              <li>
                <a href="https://docs.google.com/spreadsheet/viewform?formkey=dEVJYnh1RWxJZXhPdkRiM2hQYmx4SXc6MQ#gid=0" target="_blank">
                  Report My Side Trips
                </a>
              </li>
              <li>
                <a href="http://www.albany.edu/studyabroad/current/emergencies.html">
                  EMERGENCIES
                </a>
              </li>
              <li>
                <a href="http://www.albany.edu/studyabroad/current/emergencies.html">
                  Going on Another SUNY Program
                </a>
              </li>
            </ul>
          </li>
          <li class="side-head">
            <a>
              <div class="textspan" style="display:inline;">
                <p>
                  Incoming Students
                </p>
              </div>
            </a>
            <ul class="side_sub" contentindex="3c">
              <li class="selected">
                <a href="https://ualbany.studioabroad.com/index.cfm?FuseAction=Abroad.ViewLink&amp;Parent_ID=929B573D-BCDE-E7F3-5E41557CB4F3BBB0&amp;Link_ID=92A44B69-BCDE-E7F3-52C4D2F7C0EA7F6E&amp;pID=3&amp;lID=11">
                  Become an Exchange Student
                </a>
              </li>
              
              
            </ul>
          </li>
          <li class="side-head">
            <a>
              <div class="textspan" style="display:inline;">
                <p>
                  Student Testimonials
                </p>
              </div>
            </a>
          </li>
          <li class="side-head">
            <a>
              <div class="textspan" style="display:inline;">
                <p>
                  Alumni Connection
                </p>
              </div>
            </a>
          </li>
          <li class="side-head">
            <a href="https://ualbany.studioabroad.com/index.cfm?FuseAction=Security.Login">
              <div class="textspan" style="display:inline;">
                <p>
                  Login to My Application
                </p>
              </div>
            </a>
          </li> -->
        </ul>