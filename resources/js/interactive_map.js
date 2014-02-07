function loadMap (){
	
	//google.setOnLoadCallback(drawVisualization);
};

function drawVisualization() {
    var region = document.getElementsByName('regionmap')[0].value;
    var defdiv = 'Click each location for more information';
    var emptysem = '<font color="black">(No semester option available - please choose a different program term from the "Program Term" menu)';
    var emptysum = '<font color="black">(No summer option available - please choose a different program term from the "Program Term" menu)';
    var emptywin = '<font color="black">(No winter option available - please choose a different program term from the "Program Term" menu)';
    var data = new google.visualization.DataTable();
    var programterm = document.getElementsByName('programterm')[0].value;
    data.addColumn('number', 'Lat');
    data.addColumn('number', 'Lon');
    data.addColumn('string', 'Country');
    data.addColumn('number', 'Value');
    data.addColumn({
        type: 'string',
        role: 'tooltip'
    });
    var ivalue = new Array();
    var ivalueimg = new Array();
    var ivaluesem = new Array();
    var ivaluesum = new Array();
    var ivaluewin = new Array();
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10143\" target=\"_blank\">Cultural Immersion Program in Argentina: PIC Option at USAL</a> <br>  <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10007\" target=\"_blank\">Universidad del Salvador (USAL) (Exchange)</a>", "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10079\" target=\"_blank\">Intensive Spanish at Universidad del Salvador (CIE)</a> ", "") == true) {
        data.addRows([
            [-34.6036, -58.3817, 'Argentina - Buenos Aires', 0, 'Multiple options (click for more info)']
        ]);
    }
    ivalue['-34.6036'] = 'Argentina - Buenos Aires:';

    ivalueimg['-34.6036'] = 'http://www.albany.edu/studyabroad/images/map/Buenos%20Aires.jpg';

    ivaluesem['-34.6036'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10143\" target=\"_blank\">Cultural Immersion Program in Argentina: PIC Option at USAL</a> <br>  <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10007\" target=\"_blank\">Universidad del Salvador (USAL) (Exchange)</a>';

    ivaluesum['-34.6036'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10079\" target=\"_blank\">Intensive Spanish at Universidad del Salvador (CIE)</a> ';

    ivaluewin['-34.6036'] = '';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10097\" target=\"_blank\">Spanish Language and Chilean Culture at ECELA (Semester)</a> ", " <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10122\" target=\"_blank\">Spanish Language and Chilean Culture at ECELA (Summer)</a> ", "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10095\" target=\"_blank\">Spanish Language and Culture at ECELA (Wintersession)</a>") == true) {
        data.addRows([
            [-33.45, -70.6667, 'Chile - Santiago', 1, 'Multiple options (click for more info)']
        ]);
    }
    ivalue['-33.45'] = 'Chile - Santiago:';

    ivalueimg['-33.45'] = 'http://www.albany.edu/studyabroad/images/map/Santiago.jpg';

    ivaluesem['-33.45'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10097\" target=\"_blank\">Spanish Language and Chilean Culture at ECELA (Semester)</a> ';

    ivaluesum['-33.45'] = ' <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10122\" target=\"_blank\">Spanish Language and Chilean Culture at ECELA (Summer)</a> ';

    ivaluewin['-33.45'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10095\" target=\"_blank\">Spanish Language and Culture at ECELA (Wintersession)</a>';
    if (programterm == "all" || checkterm(programterm, "", "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10169\" target=\"_blank\">International Business and Marketing in Brazil</a>", "") == true) {
        data.addRows([
            [-23.5, -46.6167, 'Brazil - Sao Paulo', 2, 'Mackenzie Presbyterian University']
        ]);
    }
    ivalue['-23.5'] = 'Brazil - Sao Paulo:';

    ivalueimg['-23.5'] = 'http://www.albany.edu/studyabroad/images/map/Sao%20Paulo.jpg';

    ivaluesem['-23.5'] = '';

    ivaluesum['-23.5'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10169\" target=\"_blank\">International Business and Marketing in Brazil</a>';

    ivaluewin['-23.5'] = '';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10148\" target=\"_blank\">Cambodia Service Learning Program--Semester</a>", "", "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10154\" target=\"_blank\">Faculty Led: Experiencing Southeast Asia</a>") == true) {
        data.addRows([
            [11.55, 104.9167, 'Cambodia - Phnom Penh', 3, 'Cambodia Service Learning Program--Semester']
        ]);
    }
    ivalue['11.55'] = 'Cambodia - Phnom Penh:';

    ivalueimg['11.55'] = 'http://www.albany.edu/studyabroad/images/map/Cambodia.jpg';

    ivaluesem['11.55'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10148\" target=\"_blank\">Cambodia Service Learning Program--Semester</a>';

    ivaluesum['11.55'] = '';

    ivaluewin['11.55'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10154\" target=\"_blank\">Faculty Led: Experiencing Southeast Asia</a>';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10009\" target=\"_blank\">Quebec Student Exchange Programs (CREPUQ-SEP)</a>", "", "") == true) {
        data.addRows([
            [46.8902, -71.2189, 'Canada - Quebec - Chicoutimi/Montreal/Quebec City', 4, 'Quebec Student Exchange Programs (CREPUQ-SEP)']
        ]);
    }
    ivalue['46.8902'] = 'Quebec - Chicoutimi/Montreal/Quebec City:';

    ivalueimg['46.8902'] = 'http://www.albany.edu/studyabroad/images/map/Quebec.jpg';

    ivaluesem['46.8902'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10009\" target=\"_blank\">Quebec Student Exchange Programs (CREPUQ-SEP)</a>';

    ivaluesum['46.8902'] = '';

    ivaluewin['46.8902'] = '';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10011\" target=\"_blank\">Beijing Normal University (Exchange)</a>  <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10013\" target=\"_blank\">Peking University</a> ", "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10087\" target=\"_blank\">Peking University International Summer School</a>", "") == true) {
        data.addRows([
            [39.91, 116.4, 'China - Beijing	', 5, 'Multiple options (click for more info)']
        ]);
    }
    ivalue['39.91'] = 'China - Beijing:';

    ivalueimg['39.91'] = 'http://www.albany.edu/studyabroad/images/map/Beijing.jpg';

    ivaluesem['39.91'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10011\" target=\"_blank\">Beijing Normal University (Exchange)</a>  <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10013\" target=\"_blank\">Peking University</a> ';

    ivaluesum['39.91'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10087\" target=\"_blank\">Peking University International Summer School</a>';

    ivaluewin['39.91'] = '';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10150\" target=\"_blank\">East China Normal University</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10012\" target=\"_blank\">Fudan University (Exchange)</a> ", "", "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10014\" target=\"_blank\">Introduction to Chinese Culture&#44 History and Language (Exchange)</a> ") == true) {
        data.addRows([
            [31.2, 121.5, 'China - Shanghai', 6, 'Multiple options (click for more info)']
        ]);
    }
    ivalue['31.2'] = 'China - Shanghai:';

    ivalueimg['31.2'] = 'http://www.albany.edu/studyabroad/images/map/Shanghai.jpg';

    ivaluesem['31.2'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10150\" target=\"_blank\">East China Normal University</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10012\" target=\"_blank\">Fudan University (Exchange)</a> ';

    ivaluesum['31.2'] = '';

    ivaluewin['31.2'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10014\" target=\"_blank\">Introduction to Chinese Culture, History and Language (Exchange)</a> ';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10022\" target=\"_blank\">Hong Kong Baptist University (Exchange)</a>", "", "") == true) {
        data.addRows([
            [22.3, 114.1667, 'China - Hong Kong', 7, 'Hong Kong Baptist University (Exchange)']
        ]);
    }
    ivalue['22.3'] = 'China - Hong Kong:';

    ivalueimg['22.3'] = 'http://www.albany.edu/studyabroad/images/map/Hong%20Kong.jpg';

    ivaluesem['22.3'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10022\" target=\"_blank\">Hong Kong Baptist University (Exchange)</a>';

    ivaluesum['22.3'] = '';

    ivaluewin['22.3'] = '';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10138\" target=\"_blank\">Sichuan University (Exchange)</a> ", "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10116\" target=\"_blank\">Summer Community Service Program in Chengdu&#44 China (Exchange)</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10088\" target=\"_blank\">Summer Intensive Chinese Language Program at Sichuan University (Exchange)   </a>", "") == true) {
        data.addRows([
            [30.6636, 104.0667, 'China - Chengdu', 8, 'Multiple options (click for more info)']
        ]);
    }
    ivalue['30.6636'] = 'China - Chengdu:';

    ivalueimg['30.6636'] = 'http://www.albany.edu/studyabroad/images/map/Chengdu.jpg';

    ivaluesem['30.6636'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10138\" target=\"_blank\">Sichuan University (Exchange)</a> ';

    ivaluesum['30.6636'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10116\" target=\"_blank\">Summer Community Service Program in Chengdu, China (Exchange)</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10088\" target=\"_blank\">Summer Intensive Chinese Language Program at Sichuan University (Exchange)   </a>';

    ivaluewin['30.6636'] = '';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10118\" target=\"_blank\">University of Costa Rica in San Ramon</a>", "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10157\" target=\"_blank\">Faculty Led: Spanish Language and Social Welfare Studies in Costa Rica</a>", "") == true) {
        data.addRows([
            [10.51316, -84.281203, 'Costa Rica - San Ramon', 9, 'University of Costa Rica in San Ramon']
        ]);
    }
    ivalue['10.51316'] = 'Costa Rica - San Ramon:';

    ivalueimg['10.51316'] = 'http://www.albany.edu/studyabroad/images/map/San%20Ramon.jpg';

    ivaluesem['10.51316'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10118\" target=\"_blank\">University of Costa Rica in San Ramon</a>';

    ivaluesum['10.51316'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10157\" target=\"_blank\">Faculty Led: Spanish Language and Social Welfare Studies in Costa Rica</a>';

    ivaluewin['10.51316'] = '';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10065\" target=\"_blank\">University of Costa Rica (Exchange)</a>", "", "") == true) {
        data.addRows([
            [9.9247, -84.0781, 'Costa Rica - San Jose', 10, 'University of Costa Rica (Exchange)']
        ]);
    }
    ivalue['9.9247'] = 'Costa Rica - San Jose:';

    ivalueimg['9.9247'] = 'http://www.albany.edu/studyabroad/images/map/San%20Jose.jpg';

    ivaluesem['9.9247'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10065\" target=\"_blank\">University of Costa Rica (Exchange)</a>';

    ivaluesum['9.9247'] = '';

    ivaluewin['9.9247'] = '';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10159\" target=\"_blank\">Faculty Led: History. Politics. and Culture of Cuba (Semester)</a>", "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10159\" target=\"_blank\">Faculty Led: History. Politics. and Culture of Cuba (Summer)</a>", "") == true) {
        data.addRows([
            [23.1225, -82.3864, 'Cuba - Havana', 11, 'Faculty Led: History. Politics. and Culture of Cuba']
        ]);
    }
    ivalue['23.1225'] = 'Cuba - Havana:';

    ivalueimg['23.1225'] = 'http://www.albany.edu/studyabroad/images/map/Havana.jpg';

    ivaluesem['23.1225'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10159\" target=\"_blank\">Faculty Led: History. Politics. and Culture of Cuba (Semester)</a>';

    ivaluesum['23.1225'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10159\" target=\"_blank\">Faculty Led: History. Politics. and Culture of Cuba (Summer)</a>';

    ivaluewin['23.1225'] = '';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10015\" target=\"_blank\">Danish Institute for Study Abroad (DIS) (Semester) </a>", "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10015\" target=\"_blank\">Danish Institute for Study Abroad (DIS) (Summer)</a>", "") == true) {
        data.addRows([
            [55.675, 12.5687, 'Denmark - Copenhagen', 12, 'Danish Institute for Study Abroad (DIS)']
        ]);
    }
    ivalue['55.675'] = 'Denmark - Copenhagen:';

    ivalueimg['55.675'] = 'http://www.albany.edu/studyabroad/images/map/Copenhagen.jpg';

    ivaluesem['55.675'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10015\" target=\"_blank\">Danish Institute for Study Abroad (DIS) (Semester) </a>';

    ivaluesum['55.675'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10015\" target=\"_blank\">Danish Institute for Study Abroad (DIS) (Summer)</a>';

    ivaluewin['55.675'] = '';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10105\" target=\"_blank\">Universidad Madre y Maestra (PUCMM) Santiago Campus (Semester)</a>", "", "") == true) {
        data.addRows([
            [19.4567, -70.7028, 'Dominican Republic - Santiago', 13, 'Universidad Madre y Maestra (PUCMM) Santiago Campus']
        ]);
    }
    ivalue['19.4567'] = 'Dominican Republic - Santiago:';

    ivalueimg['19.4567'] = 'http://www.albany.edu/studyabroad/images/map/Santiago%20(DR).jpg';

    ivaluesem['19.4567'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10105\" target=\"_blank\">Universidad Madre y Maestra (PUCMM) Santiago Campus (Semester)</a>';

    ivaluesum['19.4567'] = '';

    ivaluewin['19.4567'] = '';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10002\" target=\"_blank\">Universidad Madre y Maestra (PUCMM) Santo Domingo Campus (Semester)</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10106\" target=\"_blank\">Dominican Republic Language and Culture Program at the PUCMM</a> ", "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10106\" target=\"_blank\">Dominican Republic Language and Culture Program at the PUCMM (Summer)</a> ", "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10005\" target=\"_blank\">Dominican Republic Wintersession Volunteer Abroad</a>") == true) {
        data.addRows([
            [18.4833, -69.9167, 'Dominican Republic - Santo Domingo', 14, 'Multiple options (click for more info)']
        ]);
    }
    ivalue['18.4833'] = 'Dominican Republic - Santo Domingo:';

    ivalueimg['18.4833'] = 'http://www.albany.edu/studyabroad/images/map/Santo%20Domingo.jpg';

    ivaluesem['18.4833'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10002\" target=\"_blank\">Universidad Madre y Maestra (PUCMM) Santo Domingo Campus (Semester)</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10106\" target=\"_blank\">Dominican Republic Language and Culture Program at the PUCMM</a> ';

    ivaluesum['18.4833'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10106\" target=\"_blank\">Dominican Republic Language and Culture Program at the PUCMM (Summer)</a> ';

    ivaluewin['18.4833'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10005\" target=\"_blank\">Dominican Republic Wintersession Volunteer Abroad</a>';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10016\" target=\"_blank\">Abo Akademi University (Exchange)</a>", "", "") == true) {
        data.addRows([
            [60.45, 22.25, 'Finland - Abo', 15, 'Abo Akademi University (Exchange)']
        ]);
    }
    ivalue['60.45'] = 'Finland - Abo:';

    ivalueimg['60.45'] = 'http://www.albany.edu/studyabroad/images/map/Abo.jpg';

    ivaluesem['60.45'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10016\" target=\"_blank\">Abo Akademi University (Exchange)</a>';

    ivaluesum['60.45'] = '';

    ivaluewin['60.45'] = '';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10017\" target=\"_blank\">Oulu University (Exchange) (Semester)</a>", "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10017\" target=\"_blank\">Oulu University (Exchange) (Summer) </a>", "") == true) {
        data.addRows([
            [65.05, 25.4667, 'Finland - Oulu', 16, 'Oulu University (Exchange)	']
        ]);
    }
    ivalue['65.05'] = 'Finland - Oulu:';

    ivalueimg['65.05'] = 'http://www.albany.edu/studyabroad/images/map/Oulu.jpg';

    ivaluesem['65.05'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10017\" target=\"_blank\">Oulu University (Exchange) (Semester)</a>';

    ivaluesum['65.05'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10017\" target=\"_blank\">Oulu University (Exchange) (Summer) </a>';

    ivaluewin['65.05'] = '';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10001\" target=\"_blank\">University of Grenoble (Exchange)</a>", "", "") == true) {
        data.addRows([
            [45.19, 5.72, 'France - Grenoble', 17, 'University of Grenoble (Exchange)']
        ]);
    }
    ivalue['45.19'] = 'France - Grenoble:';

    ivalueimg['45.19'] = 'http://www.albany.edu/studyabroad/images/map/Grenoble.jpg';

    ivaluesem['45.19'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10001\" target=\"_blank\">University of Grenoble (Exchange)</a>';

    ivaluesum['45.19'] = '';

    ivaluewin['45.19'] = '';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10004\" target=\"_blank\">French Language Studies at the Mediterranean Language Institute (IML)</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10075\" target=\"_blank\">Business Studies in Montpellier (Exchange) </a> ", "", "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10152\" target=\"_blank\">French Culture and Volunteer Service in Montpellier</a>") == true) {
        data.addRows([
            [43.6119, 3.8772, 'France - Montpellier', 18, 'Multiple options (click for more info)']
        ]);
    }
    ivalue['43.6119'] = 'France - Montpellier:';

    ivalueimg['43.6119'] = 'http://www.albany.edu/studyabroad/images/map/Montpellier.jpg';

    ivaluesem['43.6119'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10004\" target=\"_blank\">French Language Studies at the Mediterranean Language Institute (IML)</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10075\" target=\"_blank\">Business Studies in Montpellier (Exchange) </a> ';

    ivaluesum['43.6119'] = '';

    ivaluewin['43.6119'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10152\" target=\"_blank\">French Culture and Volunteer Service in Montpellier</a>';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10102\" target=\"_blank\">American Intercontinental University&#44 London & Paris A & C</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10092\" target=\"_blank\">American Intercontinental University. Paris A & C</a>", "", "") == true) {
        data.addRows([
            [48.8742, 2.347, 'France - Paris', 19, 'Multiple options (click for more info)']
        ]);
    }
    ivalue['48.8742'] = 'France - Paris:';

    ivalueimg['48.8742'] = 'http://www.albany.edu/studyabroad/images/map/Paris.jpg';

    ivaluesem['48.8742'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10102\" target=\"_blank\">American Intercontinental University, London & Paris A & C</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10092\" target=\"_blank\">American Intercontinental University. Paris A & C</a>';

    ivaluesum['48.8742'] = '';

    ivaluewin['48.8742'] = '';
    if (programterm == "all" || checkterm(programterm, "", "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10018\" target=\"_blank\">Science and Engineering Research in Germany (SENSE) (Exchange)</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10019\" target=\"_blank\">Language and Cultural Studies in Braunschweig (Exchange) </a> ", "") == true) {
        data.addRows([
            [52.2667, 10.5325, 'Germany - Braunschweig', 20, 'Multiple options (click for more info)']
        ]);
    }
    ivalue['52.2667'] = 'Germany - Braunschweig:';

    ivalueimg['52.2667'] = 'http://www.albany.edu/studyabroad/images/map/Braunschweig.jpg';

    ivaluesem['52.2667'] = '';

    ivaluesum['52.2667'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10018\" target=\"_blank\">Science and Engineering Research in Germany (SENSE) (Exchange)</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10019\" target=\"_blank\">Language and Cultural Studies in Braunschweig (Exchange) </a> ';

    ivaluewin['52.2667'] = '';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10020\" target=\"_blank\">Wuerzburg University (Exchange)</a>", "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10115\" target=\"_blank\">Wuerzburg University Summer Option</a> ", "") == true) {
        data.addRows([
            [49.7941, 9.9272, 'Germany - Wuerzburg', 21, 'Multiple options (click for more info)']
        ]);
    }
    ivalue['49.7941'] = 'Germany - Wuerzburg:';

    ivalueimg['49.7941'] = 'http://www.albany.edu/studyabroad/images/map/Wurzburg.jpg';

    ivaluesem['49.7941'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10020\" target=\"_blank\">Wuerzburg University (Exchange)</a>';

    ivaluesum['49.7941'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10115\" target=\"_blank\">Wuerzburg University Summer Option</a> ';

    ivaluewin['49.7941'] = '';
    if (programterm == "all" || checkterm(programterm, "", "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10132\" target=\"_blank\">Haiti Service Learning Project</a>", "") == true) {
        data.addRows([
            [18.5425, -72.3386, 'Haiti (Various locations)', 22, 'Haiti Service Learning Project']
        ]);
    }
    ivalue['18.5425'] = 'Haiti (Various locations):';

    ivalueimg['18.5425'] = 'http://www.albany.edu/studyabroad/images/map/Haiti.jpg';

    ivaluesem['18.5425'] = '';

    ivaluesum['18.5425'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10132\" target=\"_blank\">Haiti Service Learning Project</a>';

    ivaluewin['18.5425'] = '';
    if (programterm == "all" || checkterm(programterm, " <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10171\" target=\"_blank\">Semester Program & Internship Experience with Capgemini</a>", " <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10170\" target=\"_blank\">Summer Emerging-Market Immersion Experience</a>", "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10082\" target=\"_blank\">India: Field Study of Development Issues (Winter)</a>") == true) {
        data.addRows([
            [21.7679, 78.8718, 'India (Various locations)', 23, 'India: Field Study of Development Issues']
        ]);
    }
    ivalue['21.7679'] = 'India (Various locations):';

    ivalueimg['21.7679'] = 'http://www.albany.edu/studyabroad/images/map/India%20(various).jpg';

    ivaluesem['21.7679'] = ' <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10171\" target=\"_blank\">Semester Program & Internship Experience with Capgemini</a>';

    ivaluesum['21.7679'] = ' <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10170\" target=\"_blank\">Summer Emerging-Market Immersion Experience</a>';

    ivaluewin['21.7679'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10082\" target=\"_blank\">India: Field Study of Development Issues (Winter)</a>';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10081\" target=\"_blank\">KEI / UAlbany at Symbiosis University (Semester)</a> ", "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10081\" target=\"_blank\">KEI / UAlbany at Symbiosis University (Summer)</a>", "") == true) {
        data.addRows([
            [18.5236, 73.8478, 'India - Pune', 24, 'KEI / UAlbany at Symbiosis University']
        ]);
    }
    ivalue['18.5236'] = 'India - Pune:';

    ivalueimg['18.5236'] = 'http://www.albany.edu/studyabroad/images/map/Pune.jpg';

    ivaluesem['18.5236'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10081\" target=\"_blank\">KEI / UAlbany at Symbiosis University (Semester)</a> ';

    ivaluesum['18.5236'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10081\" target=\"_blank\">KEI / UAlbany at Symbiosis University (Summer)</a>';

    ivaluewin['18.5236'] = '';
    if (programterm == "all" || checkterm(programterm, "", "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10061\" target=\"_blank\">WE BUILD 2012</a>", "") == true) {
        data.addRows([
            [12.9833, 77.5833, 'India - Bangalore', 25, 'WE BUILD 2012']
        ]);
    }
    ivalue['12.9833'] = 'India - Bangalore:';

    ivalueimg['12.9833'] = 'http://www.albany.edu/studyabroad/images/map/Bangalore.jpg';

    ivaluesem['12.9833'] = '';

    ivaluesum['12.9833'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10061\" target=\"_blank\">WE BUILD 2012</a>';

    ivaluewin['12.9833'] = '';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10023\" target=\"_blank\">National University of Ireland. Galway (Exchange)</a> ", "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10073\" target=\"_blank\">Irish Language at National University of Ireland</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10072\" target=\"_blank\">Irish Studies at National University of Ireland</a>  <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10175\" target=\"_blank\">NUI Galway Field School in Historical Archaeology</a> ", "") == true) {
        data.addRows([
            [53.2734, -9.0503, 'Ireland - Galway', 26, 'Multiple options (click for more info)']
        ]);
    }
    ivalue['53.2734'] = 'Ireland - Galway:';

    ivalueimg['53.2734'] = 'http://www.albany.edu/studyabroad/images/map/Galway.jpg';

    ivaluesem['53.2734'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10023\" target=\"_blank\">National University of Ireland. Galway (Exchange)</a> ';

    ivaluesum['53.2734'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10073\" target=\"_blank\">Irish Language at National University of Ireland</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10072\" target=\"_blank\">Irish Studies at National University of Ireland</a>  <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10175\" target=\"_blank\">NUI Galway Field School in Historical Archaeology</a> ';

    ivaluewin['53.2734'] = '';
    if (programterm == "all" || checkterm(programterm, "", "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10024\" target=\"_blank\">Foundation for International Education (FIE)&#44 Dublin Summer</a>", "") == true) {
        data.addRows([
            [53.3428, -6.2661, 'Ireland - Dublin', 27, 'Foundation for International Education (FIE). Dublin']
        ]);
    }
    ivalue['53.3428'] = 'Ireland - Dublin:';

    ivalueimg['53.3428'] = 'http://www.albany.edu/studyabroad/images/map/Dublin.jpg';

    ivaluesem['53.3428'] = '';

    ivaluesum['53.3428'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10024\" target=\"_blank\">Foundation for International Education (FIE), Dublin Summer</a>';

    ivaluewin['53.3428'] = '';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10025\" target=\"_blank\">Ben Gurion University of the Negev (Semester)</a>", "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10025\" target=\"_blank\">Ben Gurion University of the Negev (Summer)</a>", "") == true) {
        data.addRows([
            [31.2333, 34.7833, 'Israel - Beer Sheva', 28, 'Ben Gurion University of the Negev']
        ]);
    }
    ivalue['31.2333'] = 'Israel - Beer Sheva:';

    ivalueimg['31.2333'] = 'http://www.albany.edu/studyabroad/images/map/Beer%20Sheva.jpg';

    ivaluesem['31.2333'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10025\" target=\"_blank\">Ben Gurion University of the Negev (Semester)</a>';

    ivaluesum['31.2333'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10025\" target=\"_blank\">Ben Gurion University of the Negev (Summer)</a>';

    ivaluewin['31.2333'] = '';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10068\" target=\"_blank\">The Hebrew University of Jerusalem (Semester)</a>", "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10068\" target=\"_blank\">The Hebrew University of Jerusalem (Summer)</a>", "") == true) {
        data.addRows([
            [31.7833, 35.2167, 'Israel - Jerusalem', 29, 'The Hebrew University of Jerusalem']
        ]);
    }
    ivalue['31.7833'] = 'Israel - Jerusalem:';

    ivalueimg['31.7833'] = 'http://www.albany.edu/studyabroad/images/map/Jerusalem.jpg';

    ivaluesem['31.7833'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10068\" target=\"_blank\">The Hebrew University of Jerusalem (Semester)</a>';

    ivaluesum['31.7833'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10068\" target=\"_blank\">The Hebrew University of Jerusalem (Summer)</a>';

    ivaluewin['31.7833'] = '';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10069\" target=\"_blank\">Tel Aviv University (Semester)</a>", "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10069\" target=\"_blank\">Tel Aviv University (Summer)</a>", "") == true) {
        data.addRows([
            [32.0833, 34.8, 'Israel - Tel Aviv', 30, 'Tel Aviv University']
        ]);
    }
    ivalue['32.0833'] = 'Israel - Tel Aviv:';

    ivalueimg['32.0833'] = 'http://www.albany.edu/studyabroad/images/map/Tel%20Aviv.jpg';

    ivaluesem['32.0833'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10069\" target=\"_blank\">Tel Aviv University (Semester)</a>';

    ivaluesum['32.0833'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10069\" target=\"_blank\">Tel Aviv University (Summer)</a>';

    ivaluewin['32.0833'] = '';
    if (programterm == "all" || checkterm(programterm, " <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10070\" target=\"_blank\">University of Haifa (Semester)</a>", " <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10070\" target=\"_blank\">University of Haifa (Summer)</a>", "") == true) {
        data.addRows([
            [32.8, 34.9833, 'Israel - Haifa', 31, 'University of Haifa']
        ]);
    }
    ivalue['32.8'] = 'Israel - Haifa:';

    ivalueimg['32.8'] = 'http://www.albany.edu/studyabroad/images/map/Haifa.jpg';

    ivaluesem['32.8'] = ' <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10070\" target=\"_blank\">University of Haifa (Semester)</a>';

    ivaluesum['32.8'] = ' <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10070\" target=\"_blank\">University of Haifa (Summer)</a>';

    ivaluewin['32.8'] = '';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10027\" target=\"_blank\">Bocconi University (Exchange)</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10026\" target=\"_blank\">Universita Cattolica del Sacro Cuore (Exchange)</a>", "", "") == true) {
        data.addRows([
            [45.464, 9.1916, 'Italy - Milan', 32, 'Multiple options (click for more info)']
        ]);
    }
    ivalue['45.464'] = 'Italy - Milan:';

    ivalueimg['45.464'] = 'http://www.albany.edu/studyabroad/images/map/Milan.jpg';

    ivaluesem['45.464'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10027\" target=\"_blank\">Bocconi University (Exchange)</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10026\" target=\"_blank\">Universita Cattolica del Sacro Cuore (Exchange)</a>';

    ivaluesum['45.464'] = '';

    ivaluewin['45.464'] = '';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10031\" target=\"_blank\">Kansai Gaidai University (Exchange)</a>", "", "") == true) {
        data.addRows([
            [34.8146, 135.6508, 'Japan - Hirakata City (Osaka Region)', 33, 'Kansai Gaidai University (Exchange)']
        ]);
    }
    ivalue['34.8146'] = 'Japan - Hirakata City (Osaka Region):';

    ivalueimg['34.8146'] = 'http://www.albany.edu/studyabroad/images/map/Hirakata%20City.jpg';

    ivaluesem['34.8146'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10031\" target=\"_blank\">Kansai Gaidai University (Exchange)</a>';

    ivaluesum['34.8146'] = '';

    ivaluewin['34.8146'] = '';
    if (programterm == "all" || checkterm(programterm, "", "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10128\" target=\"_blank\">Foundation for International Education. London/Amman Summer Program</a>", "") == true) {
        data.addRows([
            [31.95, 35.9333, 'Jordan - Amman', 34, 'Foundation for International Education. London/Amman Summer Program']
        ]);
    }
    ivalue['31.95'] = 'Jordan - Amman:';

    ivalueimg['31.95'] = 'http://www.albany.edu/studyabroad/images/map/Jordan.jpg';

    ivaluesem['31.95'] = '';

    ivaluesum['31.95'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10128\" target=\"_blank\">Foundation for International Education. London/Amman Summer Program</a>';

    ivaluewin['31.95'] = '';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10139\" target=\"_blank\">United States International University (Semester)</a>", "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10139\" target=\"_blank\">United States International University (Summer)</a>", "") == true) {
        data.addRows([
            [1.2833, 36.8167, 'Kenya - Nairobi', 35, 'United States International University']
        ]);
    }
    ivalue['1.2833'] = 'Kenya - Nairobi:';

    ivalueimg['1.2833'] = 'http://www.albany.edu/studyabroad/images/map/Nairobi.jpg';

    ivaluesem['1.2833'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10139\" target=\"_blank\">United States International University (Semester)</a>';

    ivaluesum['1.2833'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10139\" target=\"_blank\">United States International University (Summer)</a>';

    ivaluewin['1.2833'] = '';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10033\" target=\"_blank\">Hallym University (Exchange) (Semester)</a>", "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10033\" target=\"_blank\">Hallym University (Exchange) (Summer)</a>", "") == true) {
        data.addRows([
            [37.8667, 127.7333, 'Korea - Chuncheon', 36, 'Hallym University (Exchange)']
        ]);
    }
    ivalue['37.8667'] = 'Korea - Chuncheon:';

    ivalueimg['37.8667'] = 'http://www.albany.edu/studyabroad/images/map/Chuncheon.jpg';

    ivaluesem['37.8667'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10033\" target=\"_blank\">Hallym University (Exchange) (Semester)</a>';

    ivaluesum['37.8667'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10033\" target=\"_blank\">Hallym University (Exchange) (Summer)</a>';

    ivaluewin['37.8667'] = '';
    if (programterm == "all" || checkterm(programterm, "", " <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10078\" target=\"_blank\">Yeungnam University Summer Options (Exchange)</a>", "") == true) {
        data.addRows([
            [35.8167, 128.7333, 'Korea - Gyeongsan', 37, 'Yeungnam University Summer Options (Exchange)']
        ]);
    }
    ivalue['35.8167'] = 'Korea - Gyeongsan:';

    ivalueimg['35.8167'] = 'http://www.albany.edu/studyabroad/images/map/Gyeongsan.jpg';

    ivaluesem['35.8167'] = '';

    ivaluesum['35.8167'] = ' <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10078\" target=\"_blank\">Yeungnam University Summer Options (Exchange)</a>';

    ivaluewin['35.8167'] = '';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10060\" target=\"_blank\">Yonsei University (Exchange)</a> ", "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10066\" target=\"_blank\">Yonsei International Summer School (Exchange)</a>", "") == true) {
        data.addRows([
            [37.5833, 127, 'Korea - Seoul', 38, 'Multiple options (click for more info)']
        ]);
    }
    ivalue['37.5833'] = 'Korea - Seoul:';

    ivalueimg['37.5833'] = 'http://www.albany.edu/studyabroad/images/map/Seoul.jpg';

    ivaluesem['37.5833'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10060\" target=\"_blank\">Yonsei University (Exchange)</a> ';

    ivaluesum['37.5833'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10066\" target=\"_blank\">Yonsei International Summer School (Exchange)</a>';

    ivaluewin['37.5833'] = '';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10036\" target=\"_blank\">Mexico Solidarity Network. Semester/Academic Year</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10035\" target=\"_blank\">Mayan Route (Exchange)</a> ", "", "") == true) {
        data.addRows([
            [21, -101, 'Mexico (Various locations)', 39, 'Multiple options (click for more info)']
        ]);
    }
    ivalue['21'] = 'Mexico (Various locations):';

    ivalueimg['21'] = 'http://www.albany.edu/studyabroad/images/map/Mexico%20(Various).jpg';

    ivaluesem['21'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10036\" target=\"_blank\">Mexico Solidarity Network. Semester/Academic Year</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10035\" target=\"_blank\">Mayan Route (Exchange)</a> ';

    ivaluesum['21'] = '';

    ivaluewin['21'] = '';
    if (programterm == "all" || checkterm(programterm, "", "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10110\" target=\"_blank\">Mexico Solidarity Network. Zapatista (Summer)</a>", "") == true) {
        data.addRows([
            [16.41, -92.4086, 'Mexico - Chiapas', 40, 'Mexico Solidarity Network. Zapatista (Summer)']
        ]);
    }
    ivalue['16.41'] = 'Mexico - Chiapas:';

    ivalueimg['16.41'] = 'http://www.albany.edu/studyabroad/images/map/Chiapas.jpg';

    ivaluesem['16.41'] = '';

    ivaluesum['16.41'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10110\" target=\"_blank\">Mexico Solidarity Network. Zapatista (Summer)</a>';

    ivaluewin['16.41'] = '';
    if (programterm == "all" || checkterm(programterm, "", "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10111\" target=\"_blank\">Mexico Solidarity Network. Mexican Social Movements (Summer)</a>", "") == true) {
        data.addRows([
            [19.13, -99.4, 'Mexico - Mexico City', 41, 'Mexico Solidarity Network. Mexican Social Movements (Summer)']
        ]);
    }
    ivalue['19.13'] = 'Mexico - Mexico City:';

    ivalueimg['19.13'] = 'http://www.albany.edu/studyabroad/images/map/Mexico%20City.jpg';

    ivaluesem['19.13'] = '';

    ivaluesum['19.13'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10111\" target=\"_blank\">Mexico Solidarity Network. Mexican Social Movements (Summer)</a>';

    ivaluewin['19.13'] = '';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10038\" target=\"_blank\">HAN University of Applied Sciences (Exchange)</a>", "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10076\" target=\"_blank\">Doing Business in Europe (Exchange)</a>", "") == true) {
        data.addRows([
            [51.9833, 5.9167, 'Netherlands - Arnhem / Nijmegen', 42, 'HAN University of Applied Sciences (Exchange)']
        ]);
    }
    ivalue['51.9833'] = 'Netherlands - Arnhem / Nijmegen:';

    ivalueimg['51.9833'] = 'http://www.albany.edu/studyabroad/images/map/Nijmegen.jpg';

    ivaluesem['51.9833'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10038\" target=\"_blank\">HAN University of Applied Sciences (Exchange)</a>';

    ivaluesum['51.9833'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10076\" target=\"_blank\">Doing Business in Europe (Exchange)</a>';

    ivaluewin['51.9833'] = '';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10039\" target=\"_blank\">Netherlands - Tilburg</a>", "", "") == true) {
        data.addRows([
            [51.55, 5.1167, 'Netherlands - Tilburg', 43, 'Tilburg University (Exchange)']
        ]);
    }
    ivalue['51.55'] = 'Netherlands - Tilburg:';

    ivalueimg['51.55'] = 'http://www.albany.edu/studyabroad/images/map/Nijmegen.jpg';

    ivaluesem['51.55'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10039\" target=\"_blank\">Netherlands - Tilburg</a>';

    ivaluesum['51.55'] = '';

    ivaluewin['51.55'] = '';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10040\" target=\"_blank\">University of Bergen (Exchange)</a>", "", "") == true) {
        data.addRows([
            [60.38, 5.34, 'Norway - Bergen', 44, 'University of Bergen (Exchange)']
        ]);
    }
    ivalue['60.38'] = 'Norway - Bergen:';

    ivalueimg['60.38'] = 'http://www.albany.edu/studyabroad/images/map/Bergen.jpg';

    ivaluesem['60.38'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10040\" target=\"_blank\">University of Bergen (Exchange)</a>';

    ivaluesum['60.38'] = '';

    ivaluewin['60.38'] = '';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10042\" target=\"_blank\">Moscow State University (Exchange)</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10127\" target=\"_blank\">Internship Program in Russia for Beginner and Advanced Russian Language   Students (8-week)</a> ", "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10127\" target=\"_blank\">Internship Program in Russia for Beginner and Advanced Russian Language  Students (8-week)</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10043\" target=\"_blank\">Internship Program in Russia for Intermediate Russian Langauge Students   (9-week)</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10130\" target=\"_blank\">Moscow State University (Summer)</a> ", "") == true) {
        data.addRows([
            [55.7517, 37.6178, 'Russia - Moscow', 45, 'Multiple options (click for more info)']
        ]);
    }
    ivalue['55.7517'] = 'Russia - Moscow:';

    ivalueimg['55.7517'] = 'http://www.albany.edu/studyabroad/images/map/Moscow.jpg';

    ivaluesem['55.7517'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10042\" target=\"_blank\">Moscow State University (Exchange)</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10127\" target=\"_blank\">Internship Program in Russia for Beginner and Advanced Russian Language   Students (8-week)</a> ';

    ivaluesum['55.7517'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10127\" target=\"_blank\">Internship Program in Russia for Beginner and Advanced Russian Language  Students (8-week)</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10043\" target=\"_blank\">Internship Program in Russia for Intermediate Russian Langauge Students   (9-week)</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10130\" target=\"_blank\">Moscow State University (Summer)</a> ';

    ivaluewin['55.7517'] = '';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10044\" target=\"_blank\">National University of Singapore</a>", "", "") == true) {
        data.addRows([
            [1.3667, 103.75, 'Singapore', 46, 'National University of Singapore']
        ]);
    }
    ivalue['1.3667'] = 'Singapore:';

    ivalueimg['1.3667'] = 'http://www.albany.edu/studyabroad/images/map/Singapore.jpg';

    ivaluesem['1.3667'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10044\" target=\"_blank\">National University of Singapore</a>';

    ivaluesum['1.3667'] = '';

    ivaluewin['1.3667'] = '';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10045\" target=\"_blank\">University of Cape Town</a>", "", "") == true) {
        data.addRows([
            [-33.9767, 18.4244, 'South Africa - Cape Town', 47, 'University of Cape Town']
        ]);
    }
    ivalue['-33.9767'] = 'South Africa - Cape Town:';

    ivalueimg['-33.9767'] = 'http://www.albany.edu/studyabroad/images/map/Cape%20Town.jpg';

    ivaluesem['-33.9767'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10045\" target=\"_blank\">University of Cape Town</a>';

    ivaluesum['-33.9767'] = '';

    ivaluewin['-33.9767'] = '';
    if (programterm == "all" || checkterm(programterm, "", "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10046\" target=\"_blank\">University of KwaZulu-Natal (UKZN)</a>", "") == true) {
        data.addRows([
            [-29.8697, 31.0236, 'South Africa - Durban', 48, 'University of KwaZulu-Natal (UKZN)']
        ]);
    }
    ivalue['-29.8697'] = 'South Africa - Durban:';

    ivalueimg['-29.8697'] = 'http://www.albany.edu/studyabroad/images/map/Durban.jpg';

    ivaluesem['-29.8697'] = '';

    ivaluesum['-29.8697'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10046\" target=\"_blank\">University of KwaZulu-Natal (UKZN)</a>';

    ivaluewin['-29.8697'] = '';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10047\" target=\"_blank\">University at Albany at the International Institute. Madrid</a>", "", "") == true) {
        data.addRows([
            [40.4, -3.6833, 'Spain - Madrid', 49, 'University at Albany at the International Institute. Madrid']
        ]);
    }
    ivalue['40.4'] = 'Spain - Madrid:';

    ivalueimg['40.4'] = 'http://www.albany.edu/studyabroad/images/map/Madrid.jpg';

    ivaluesem['40.4'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10047\" target=\"_blank\">University at Albany at the International Institute. Madrid</a>';

    ivaluesum['40.4'] = '';

    ivaluewin['40.4'] = '';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10048\" target=\"_blank\">AIP Language Institute</a> ", "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10071\" target=\"_blank\">AIP Language Institute Summer Studies</a>", "") == true) {
        data.addRows([
            [39.4767, -0.3744, 'Spain - Valencia', 50, 'Multiple options (click for more info)']
        ]);
    }
    ivalue['39.4767'] = 'Spain - Valencia:';

    ivalueimg['39.4767'] = 'http://www.albany.edu/studyabroad/images/map/Valencia.jpg';

    ivaluesem['39.4767'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10048\" target=\"_blank\">AIP Language Institute</a> ';

    ivaluesum['39.4767'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10071\" target=\"_blank\">AIP Language Institute Summer Studies</a>';

    ivaluewin['39.4767'] = '';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10093\" target=\"_blank\">SUNY-CRUE Language Teacher Training Partnership (Exchange)</a>", "", "") == true) {
        data.addRows([
            [42.8833, -8.5333, 'Spain - Santiago de Compostela (plus other options)', 51, 'SUNY-CRUE Language Teacher Training Partnership (Exchange)']
        ]);
    }
    ivalue['42.8833'] = 'Spain - Santiago de Compostela (plus other options):';

    ivalueimg['42.8833'] = 'http://www.albany.edu/studyabroad/images/map/Santiago%20de%20Compostela.jpg';

    ivaluesem['42.8833'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10093\" target=\"_blank\">SUNY-CRUE Language Teacher Training Partnership (Exchange)</a>';

    ivaluesum['42.8833'] = '';

    ivaluewin['42.8833'] = '';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10049\" target=\"_blank\">Gothenburg University (Exchange)</a>", "", "") == true) {
        data.addRows([
            [57.6967, 11.9869, 'Sweden - Gothenburg', 52, 'Gothenburg University (Exchange)']
        ]);
    }
    ivalue['57.6967'] = 'Sweden - Gothenburg:';

    ivalueimg['57.6967'] = 'http://www.albany.edu/studyabroad/images/map/Gothenburg.jpg';

    ivaluesem['57.6967'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10049\" target=\"_blank\">Gothenburg University (Exchange)</a>';

    ivaluesum['57.6967'] = '';

    ivaluewin['57.6967'] = '';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10050\" target=\"_blank\">National Taiwan University (Exchange)</a>", "", "") == true) {
        data.addRows([
            [25.0333, 121.5333, 'Taiwan - Taipei City', 53, 'National Taiwan University (Exchange)']
        ]);
    }
    ivalue['25.0333'] = 'Taiwan - Taipei City:';

    ivalueimg['25.0333'] = 'http://www.albany.edu/studyabroad/images/map/Taipei%20City.jpg';

    ivaluesem['25.0333'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10050\" target=\"_blank\">National Taiwan University (Exchange)</a>';

    ivaluesum['25.0333'] = '';

    ivaluewin['25.0333'] = '';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10136\">Tanzania Service Learning Program--Semester</a> ", "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10131\">Tanzania Service Learning Program--Summer</a>", "") == true) {
        data.addRows([
            [-3.3667, 36.6833, 'Tanzania - Arusha/Maasailand', 54, 'Multiple options (click for more info)']
        ]);
    }
    ivalue['-3.3667'] = 'Tanzania - Arusha/Maasailand';

    ivalueimg['-3.3667'] = 'http://www.albany.edu/studyabroad/images/map/Arusha.jpg';

    ivaluesem['-3.3667'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10136\">Tanzania Service Learning Program--Semester</a> ';

    ivaluesum['-3.3667'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10131\">Tanzania Service Learning Program--Summer</a>';

    ivaluewin['-3.3667'] = '';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10140\" target=\"_blank\">University of Dar es Salaam</a> ", "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10141\" target=\"_blank\">University of Dar es Salaam--Summer</a> ", "") == true) {
        data.addRows([
            [-6.8, 39.2833, 'Tanzania - Dar es Salaam', 55, 'Multiple options (click for more info)']
        ]);
    }
    ivalue['-6.8'] = 'Tanzania - Dar es Salaam:';

    ivalueimg['-6.8'] = 'http://www.albany.edu/studyabroad/images/map/Dar%20es%20salaam.jpg';

    ivaluesem['-6.8'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10140\" target=\"_blank\">University of Dar es Salaam</a> ';

    ivaluesum['-6.8'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10141\" target=\"_blank\">University of Dar es Salaam--Summer</a> ';

    ivaluewin['-6.8'] = '';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10021\" target=\"_blank\">Global Service Corps--Independent Studies Opportunities (Semester)</a> <br>", "", "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10021\" target=\"_blank\">Global Service Corps--Independent Studies Opportunities (Winter)</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10154\">Faculty Led: Experiencing Southeast Asia</a>") == true) {
        data.addRows([
            [13.9202, 101.0168, 'Thailand (Various locations)', 56, 'Multiple options (click for more info)']
        ]);
    }
    ivalue['13.9202'] = 'Thailand (Various locations):';

    ivalueimg['13.9202'] = 'http://www.albany.edu/studyabroad/images/map/Thailand.jpg';

    ivaluesem['13.9202'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10021\" target=\"_blank\">Global Service Corps--Independent Studies Opportunities (Semester)</a> <br>';

    ivaluesum['13.9202'] = '';

    ivaluewin['13.9202'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10021\" target=\"_blank\">Global Service Corps--Independent Studies Opportunities (Winter)</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10154\">Faculty Led: Experiencing Southeast Asia</a>';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10051\" target=\"_blank\">University of the West Indies. St. Augustine (Exchange)</a>", "", "") == true) {
        data.addRows([
            [10.65, -61.4, 'Trinidad and Tobago - St. Augustine', 57, 'University of the West Indies. St. Augustine (Exchange)']
        ]);
    }
    ivalue['10.65'] = 'Trinidad and Tobago - St. Augustine:';

    ivalueimg['10.65'] = 'http://www.albany.edu/studyabroad/images/map/St.%20Augustine.jpg';

    ivaluesem['10.65'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10051\" target=\"_blank\">University of the West Indies. St. Augustine (Exchange)</a>';

    ivaluesum['10.65'] = '';

    ivaluewin['10.65'] = '';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10123\" target=\"_blank\">Bader International Study Centre (BISC) at Herstmonceux Castle--Summer</a>", "", "") == true) {
        data.addRows([
            [50.77, 0.1, 'England - East Sussex', 58, 'Multiple options (click for more info)']
        ]);
    }
    ivalue['50.77'] = 'England - East Sussex:';

    ivalueimg['50.77'] = 'http://www.albany.edu/studyabroad/images/map/East%20Sussex.jpg';

    ivaluesem['50.77'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10123\" target=\"_blank\">Bader International Study Centre (BISC) at Herstmonceux Castle--Summer</a>';

    ivaluesum['50.77'] = '';

    ivaluewin['50.77'] = '';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10054\" target=\"_blank\">University of Hull (Exchange)</a>", "", "") == true) {
        data.addRows([
            [53.75, -0.36, 'England - Kingston on Hull', 59, 'University of Hull (Exchange)']
        ]);
    }
    ivalue['53.75'] = 'England - Kingston on Hull:';

    ivalueimg['53.75'] = 'http://www.albany.edu/studyabroad/images/map/Kingston%20on%20Hull.jpg';

    ivaluesem['53.75'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10054\" target=\"_blank\">University of Hull (Exchange)</a>';

    ivaluesum['53.75'] = '';

    ivaluewin['53.75'] = '';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10055\" target=\"_blank\">University of Nottingham (Exchange)</a>", "", "") == true) {
        data.addRows([
            [52.97, -1.18, 'England - Nottingham', 60, 'University of Nottingham (Exchange)']
        ]);
    }
    ivalue['52.97'] = 'England - Nottingham';

    ivalueimg['52.97'] = 'http://www.albany.edu/studyabroad/images/map/Nottingham.jpg';

    ivaluesem['52.97'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10055\" target=\"_blank\">University of Nottingham (Exchange)</a>';

    ivaluesum['52.97'] = '';

    ivaluewin['52.97'] = '';
    if (programterm == "all" || checkterm(programterm, " <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10056\" target=\"_blank\">Regent\'s University (Formerly AIU)&#44 Fall (10 weeks)</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10099\" target=\"_blank\">Regent\'s University (Formerly AIU)&#44 American College London</a> <br>  <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10098\" target=\"_blank\">Regent\'s University (Formerly AIU)&#44 School of Fashion and Design&#44 Spring I (10 weeks)</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10104\" target=\"_blank\">Regent\'s University (Formerly AIU)&#44 School of Fashion and Design&#44 Spring II (10 weeks)</a>", "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10064\" target=\"_blank\">Faculty Led: Origins of the English Imagination</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10080\" target=\"_blank\">Foundation for International Education (FIE)&#44 London Summer</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10128\" target=\"_blank\">Foundation for International Education&#44 London/Amman Summer Program</a>  ", "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10064\" target=\"_blank\">Faculty Led: Origins of the English Imagination</a> ") == true) {
        data.addRows([
            [51.5171, -0.1062, 'England - London', 61, 'Multiple options (click for more info)']
        ]);
    }
    ivalue['51.5171'] = 'England - London:';

    ivalueimg['51.5171'] = 'http://www.albany.edu/studyabroad/images/map/London.jpg';

    ivaluesem['51.5171'] = ' <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10056\" target=\"_blank\">Regent\'s University (Formerly AIU), Fall (10 weeks)</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10099\" target=\"_blank\">Regent\'s University (Formerly AIU), American College London</a> <br>  <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10098\" target=\"_blank\">Regent\'s University (Formerly AIU), School of Fashion and Design, Spring I (10 weeks)</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10104\" target=\"_blank\">Regent\'s University (Formerly AIU), School of Fashion and Design, Spring II (10 weeks)</a>';

    ivaluesum['51.5171'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10064\" target=\"_blank\">Faculty Led: Origins of the English Imagination</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10080\" target=\"_blank\">Foundation for International Education (FIE), London Summer</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10128\" target=\"_blank\">Foundation for International Education, London/Amman Summer Program</a>  ';

    ivaluewin['51.5171'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10064\" target=\"_blank\">Faculty Led: Origins of the English Imagination</a> ';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10058\" target=\"_blank\">University of Glasgow (Exchange)</a>", "", "") == true) {
        data.addRows([
            [55.87, -4.27, 'Scotland - Glasgow', 62, 'University of Glasgow (Exchange)']
        ]);
    }
    ivalue['55.87'] = 'Scotland - Glasgow:';

    ivalueimg['55.87'] = 'http://www.albany.edu/studyabroad/images/map/Glasgow.jpg';

    ivaluesem['55.87'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10058\" target=\"_blank\">University of Glasgow (Exchange)</a>';

    ivaluesum['55.87'] = '';

    ivaluewin['55.87'] = '';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10059\" target=\"_blank\">Swansea University (Exchange)</a>", "", "") == true) {
        data.addRows([
            [51.6167, -3.95, 'Wales - Swansea', 63, 'Swansea University (Exchange)']
        ]);
    }
    ivalue['51.6167'] = 'Wales - Swansea:';

    ivalueimg['51.6167'] = 'http://www.albany.edu/studyabroad/images/map/Swansea.jpg';

    ivaluesem['51.6167'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10059\" target=\"_blank\">Swansea University (Exchange)</a>';

    ivaluesum['51.6167'] = '';

    ivaluewin['51.6167'] = '';
    if (programterm == "all" || checkterm(programterm, "", "", "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10126\" target=\"_blank\">Japan Winter: Fukushima Ambassador\'s Program (Exchange)</a>") == true) {
        data.addRows([
            [37.7667, 140.4667, 'Japan - Fukushima', 64, 'Japan Winter: Fukushima Ambassador\'s Program (Exchange)']
        ]);
    }
    ivalue['37.7667'] = 'Japan - Fukushima:';

    ivalueimg['37.7667'] = 'http://www.albany.edu/studyabroad/images/map/Fukushima%20.jpg';

    ivaluesem['37.7667'] = '';

    ivaluesum['37.7667'] = '';

    ivaluewin['37.7667'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10126\" target=\"_blank\">Japan Winter: Fukushima Ambassador\'s Program (Exchange)</a>';
    if (programterm == "all" || checkterm(programterm, "", "", "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10154\" target=\"_blank\">Faculty Led: Experiencing Southeast Asia</a>") == true) {
        data.addRows([
            [21.0409, 105.7981, 'Vietnam (Various locations - Thailand/Vietnam/Cambodia)', 65, 'Faculty Led: Experiencing Southeast Asia']
        ]);
    }
    ivalue['21.0409'] = 'Vietnam (Various locations - Thailand/Vietnam/Cambodia):';

    ivalueimg['21.0409'] = 'http://www.albany.edu/studyabroad/images/map/Danang.jpg';

    ivaluesem['21.0409'] = '';

    ivaluesum['21.0409'] = '';

    ivaluewin['21.0409'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10154\" target=\"_blank\">Faculty Led: Experiencing Southeast Asia</a>';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10148\" target=\"_blank\">Cambodia Service Learning Program--Semester</a>", "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10021\" target=\"_blank\">Global Service Corps--Independent Studies Opportunities</a>", "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10154\" target=\"_blank\">Faculty Led: Experiencing Southeast Asia</a>") == true) {
        data.addRows([
            [12.4317, 104.5291, 'Cambodia (Various locations - Thailand/Vietnam/Cambodia)', 66, 'Multiple options (click for more info)']
        ]);
    }
    ivalue['12.4317'] = 'Cambodia (Various locations - Thailand/Vietnam/Cambodia):';

    ivalueimg['12.4317'] = 'http://www.albany.edu/studyabroad/images/map/Cambodia.jpg';

    ivaluesem['12.4317'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10148\" target=\"_blank\">Cambodia Service Learning Program--Semester</a>';

    ivaluesum['12.4317'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10021\" target=\"_blank\">Global Service Corps--Independent Studies Opportunities</a>';

    ivaluewin['12.4317'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10154\" target=\"_blank\">Faculty Led: Experiencing Southeast Asia</a>';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10032\" target=\"_blank\">Tokyo University of Foreign Studies (TUFS) (Exchange)</a> <br>  <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10173\" target=\"_blank\">Waseda University)</a>", "", "") == true) {
        data.addRows([
            [35.6833, 139.7667, 'Japan - Tokyo', 67, 'Tokyo University of Foreign Studies (TUFS) (Exchange)']
        ]);
    }
    ivalue['35.6833'] = 'Japan - Tokyo:';

    ivalueimg['35.6833'] = 'http://www.albany.edu/studyabroad/images/map/Tokyo.jpg';

    ivaluesem['35.6833'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10032\" target=\"_blank\">Tokyo University of Foreign Studies (TUFS) (Exchange)</a> <br>  <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10173\" target=\"_blank\">Waseda University)</a>';

    ivaluesum['35.6833'] = '';

    ivaluewin['35.6833'] = '';
    if (programterm == "all" || checkterm(programterm, "", "", "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10000\" target=\"_blank\">Antarctica Excursion</a>") == true) {
        data.addRows([
            [-55, -54, 'Antarctica', 68, 'Antarctica Excursion']
        ]);
    }
    ivalue['-55'] = 'Antarctica:';

    ivalueimg['-55'] = 'http://www.albany.edu/studyabroad/images/map/Antarctica.jpg';

    ivaluesem['-55'] = '';

    ivaluesum['-55'] = '';

    ivaluewin['-55'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10000\" target=\"_blank\">Antarctica Excursion</a>';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10151\" target=\"_blank\">Universitat Pompeu Fabra (ESCI) Barcelona (Exchange)</a>", "", "") == true) {
        data.addRows([
            [41.3857, 2.1699, 'Spain - Barcelona', 69, 'Universitat Pompeu Fabra (ESCI) Barcelona (Exchange)']
        ]);
    }
    ivalue['41.3857'] = 'Spain - Barcelona:';

    ivalueimg['41.3857'] = 'http://www.albany.edu/studyabroad/images/map/Barcelona.jpg';

    ivaluesem['41.3857'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10151\" target=\"_blank\">Universitat Pompeu Fabra (ESCI) Barcelona (Exchange)</a>';

    ivaluesum['41.3857'] = '';

    ivaluewin['41.3857'] = '';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10052\" target=\"_blank\">American University in Dubai (Exchange)</a>", "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10114\" target=\"_blank\">American University in Dubai Summer Session I</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10114\" target=\"_blank\">American University in Dubai Summer Session II</a> ", "") == true) {
        data.addRows([
            [25.2697, 55.3095, 'United Arab Emirates - Dubai', 70, 'American University in Dubai (Exchange)']
        ]);
    }
    ivalue['25.2697'] = 'United Arab Emirates - Dubai:';

    ivalueimg['25.2697'] = 'http://www.albany.edu/studyabroad/images/map/Dubai.jpg';

    ivaluesem['25.2697'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10052\" target=\"_blank\">American University in Dubai (Exchange)</a>';

    ivaluesum['25.2697'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10114\" target=\"_blank\">American University in Dubai Summer Session I</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10114\" target=\"_blank\">American University in Dubai Summer Session II</a> ';

    ivaluewin['25.2697'] = '';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10041\" target=\"_blank\">Universidad del Sagrado Corazon (Exchange)</a>", "", "") == true) {
        data.addRows([
            [18.4517, -66.0689, 'Puerto Rico - San Juan', 71, 'Universidad del Sagrado Corazon (Exchange)']
        ]);
    }
    ivalue['18.4517'] = 'Puerto Rico - San Juan';

    ivalueimg['18.4517'] = 'http://www.albany.edu/studyabroad/images/map/San%20Juan.jpg';

    ivaluesem['18.4517'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10041\" target=\"_blank\">Universidad del Sagrado Corazon (Exchange)</a>';

    ivaluesum['18.4517'] = '';

    ivaluewin['18.4517'] = '';
    if (programterm == "all" || checkterm(programterm, "", "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10117\" target=\"_blank\">Faculty Led: Connecting Cities&#44 Culture and Health</a>", "") == true) {
        data.addRows([
            [43.7717, 11.2536, 'Italy - Florence', 72, 'Faculty Led: Connecting Cities. Culture and Health']
        ]);
    }
    ivalue['43.7717'] = 'Italy - Florence';

    ivalueimg['43.7717'] = 'http://www.albany.edu/studyabroad/images/map/Florence.jpg';

    ivaluesem['43.7717'] = '';

    ivaluesum['43.7717'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10117\" target=\"_blank\">Faculty Led: Connecting Cities, Culture and Health</a>';

    ivaluewin['43.7717'] = '';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10156\" target=\"_blank\">Bahcesehir University (Semester) (Exchange)</a>", "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10168\" target=\"_blank\">Bahcesehir University (Summer)</a>", "") == true) {
        data.addRows([
            [41.0128, 28.9744, 'Turkey - Istanbul', 73, 'Bahcesehir University (Exchange)']
        ]);
    }
    ivalue['41.0128'] = 'Turkey - Istanbul: ';

    ivalueimg['41.0128'] = 'http://www.albany.edu/studyabroad/images/map/Istanbul.jpg';

    ivaluesem['41.0128'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10156\" target=\"_blank\">Bahcesehir University (Semester) (Exchange)</a>';

    ivaluesum['41.0128'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10168\" target=\"_blank\">Bahcesehir University (Summer)</a>';

    ivaluewin['41.0128'] = '';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10161\" target=\"_blank\">Vietnam---Brockport in Vietnam (13-week session for semester)</a>", "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10161\" target=\"_blank\">Vietnam---Brockport in Vietnam (13-week session for summer)</a> <BR> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10167\">Vietnam---Brockport in Vietnam (4-week summer session)</a>", "") == true) {
        data.addRows([
            [16.0667, 108.2333, 'Vietnam - Danang ', 74, 'Multiple options (click for more info)']
        ]);
    }
    ivalue['16.0667'] = 'Vietnam - Danang:';

    ivalueimg['16.0667'] = 'http://www.albany.edu/studyabroad/images/map/Danang.jpg';

    ivaluesem['16.0667'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10161\" target=\"_blank\">Vietnam---Brockport in Vietnam (13-week session for semester)</a>';

    ivaluesum['16.0667'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10161\" target=\"_blank\">Vietnam---Brockport in Vietnam (13-week session for summer)</a> <BR> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10167\">Vietnam---Brockport in Vietnam (4-week summer session)</a>';

    ivaluewin['16.0667'] = '';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10174\" target=\"_blank\">Tohoku University</a>", "", "") == true) {
        data.addRows([
            [38.2667, 140.8667, 'Japan - Sendai City', 75, 'Tohoku University']
        ]);
    }
    ivalue['38.2667'] = 'Japan - Sendai City';

    ivalueimg['38.2667'] = 'http://www.albany.edu/studyabroad/images/map/Sendai%20City.JPG';

    ivaluesem['38.2667'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10174\" target=\"_blank\">Tohoku University</a>';

    ivaluesum['38.2667'] = '';

    ivaluewin['38.2667'] = '';
    if (programterm == "all" || checkterm(programterm, " <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10164\" target=\"_blank\">Radboud University Nijmegen</a>", "", "") == true) {
        data.addRows([
            [51.825, 5.8556, 'Netherlands - Nijmegen', 76, 'Radboud University Nijmegen']
        ]);
    }
    ivalue['51.825'] = 'Netherlands - Nijmegen';

    ivalueimg['51.825'] = 'http://www.albany.edu/studyabroad/images/map/Nijmegen.jpg';

    ivaluesem['51.825'] = ' <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10164\" target=\"_blank\">Radboud University Nijmegen</a>';

    ivaluesum['51.825'] = '';

    ivaluewin['51.825'] = '';
    if (programterm == "all" || checkterm(programterm, " <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10163\" target=\"_blank\">German Universities of Applied Sciences (UAS7) Internship Program (IP) (Semester)</a>  <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10165\" target=\"_blank\">German Universities of Applied Sciences (UAS7) Study and Internship Program (SIP)</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10166\" target=\"_blank\">German Universities of Applied Sciences (UAS7) Study Program (SP)</a> ", " <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10163\" target=\"_blank\">German Universities of Applied Sciences (UAS7) Internship Program (IP) (Summer)</a> ", "") == true) {
        data.addRows([
            [53.0758, 8.8075, 'Germany - Bremen', 77, 'German Universities of Applied Sciences']
        ]);
    }
    ivalue['53.0758'] = 'Germany - Bremen';

    ivalueimg['53.0758'] = 'http://www.albany.edu/studyabroad/images/map/Bremen.JPG';

    ivaluesem['53.0758'] = ' <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10163\" target=\"_blank\">German Universities of Applied Sciences (UAS7) Internship Program (IP) (Semester)</a>  <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10165\" target=\"_blank\">German Universities of Applied Sciences (UAS7) Study and Internship Program (SIP)</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10166\" target=\"_blank\">German Universities of Applied Sciences (UAS7) Study Program (SP)</a> ';

    ivaluesum['53.0758'] = ' <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10163\" target=\"_blank\">German Universities of Applied Sciences (UAS7) Internship Program (IP) (Summer)</a> ';

    ivaluewin['53.0758'] = '';
    if (programterm == "all" || checkterm(programterm, " <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10163\" target=\"_blank\">German Universities of Applied Sciences (UAS7) Internship Program (IP) (Semester)</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10165\" target=\"_blank\">German Universities of Applied Sciences (UAS7) Study and Internship Program (SIP)</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10166\" target=\"_blank\">German Universities of Applied Sciences (UAS7) Study Program (SP)</a> ", " <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10163\" target=\"_blank\">German Universities of Applied Sciences (UAS7) Internship Program (IP) (Summer)</a> ", "") == true) {
        data.addRows([
            [50.95, 6.9667, 'Germany - Cologne', 78, 'German Universities of Applied Sciences']
        ]);
    }
    ivalue['50.95'] = 'Germany - Cologne';

    ivalueimg['50.95'] = 'http://www.albany.edu/studyabroad/images/map/Cologne.JPG';

    ivaluesem['50.95'] = ' <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10163\" target=\"_blank\">German Universities of Applied Sciences (UAS7) Internship Program (IP) (Semester)</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10165\" target=\"_blank\">German Universities of Applied Sciences (UAS7) Study and Internship Program (SIP)</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10166\" target=\"_blank\">German Universities of Applied Sciences (UAS7) Study Program (SP)</a> ';

    ivaluesum['50.95'] = ' <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10163\" target=\"_blank\">German Universities of Applied Sciences (UAS7) Internship Program (IP) (Summer)</a> ';

    ivaluewin['50.95'] = '';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10165\" target=\"_blank\">German Universities of Applied Sciences (UAS7) Study and Internship Program (SIP)</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10166\" target=\"_blank\">Germany: German Universities of Applied Sciences (UAS7) Study Program (SP)</a> ", "", "") == true) {
        data.addRows([
            [52.5167, 13.3833, 'Germany - Berlin', 79, 'German Universities of Applied Sciences']
        ]);
    }
    ivalue['52.5167'] = 'Germany - Berlin';

    ivalueimg['52.5167'] = 'http://www.albany.edu/studyabroad/images/map/Berlin.JPG';

    ivaluesem['52.5167'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10165\" target=\"_blank\">German Universities of Applied Sciences (UAS7) Study and Internship Program (SIP)</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10166\" target=\"_blank\">Germany: German Universities of Applied Sciences (UAS7) Study Program (SP)</a> ';

    ivaluesum['52.5167'] = '';

    ivaluewin['52.5167'] = '';
    if (programterm == "all" || checkterm(programterm, " <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10163\" target=\"_blank\">German Universities of Applied Sciences (UAS7) Internship Program (IP) (Semester)</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10165\" target=\"_blank\">German Universities of Applied Sciences (UAS7) Study and Internship Program (SIP)</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10166\" target=\"_blank\">German Universities of Applied Sciences (UAS7) Study Program (SP)</a>", " <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10163\" target=\"_blank\">German Universities of Applied Sciences (UAS7) Internship Program (IP) (Summer)</a> ", "") == true) {
        data.addRows([
            [51.9667, 7.6333, 'Germany - Münster', 80, 'German Universities of Applied Sciences']
        ]);
    }
    ivalue['51.9667'] = 'Germany - Münster';

    ivalueimg['51.9667'] = 'http://www.albany.edu/studyabroad/images/map/Munster.JPG';

    ivaluesem['51.9667'] = ' <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10163\" target=\"_blank\">German Universities of Applied Sciences (UAS7) Internship Program (IP) (Semester)</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10165\" target=\"_blank\">German Universities of Applied Sciences (UAS7) Study and Internship Program (SIP)</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10166\" target=\"_blank\">German Universities of Applied Sciences (UAS7) Study Program (SP)</a>';

    ivaluesum['51.9667'] = ' <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10163\" target=\"_blank\">German Universities of Applied Sciences (UAS7) Internship Program (IP) (Summer)</a> ';

    ivaluewin['51.9667'] = '';
    if (programterm == "all" || checkterm(programterm, " <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10163\" target=\"_blank\">German Universities of Applied Sciences (UAS7) Internship Program (IP) (Semester)</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10165\" target=\"_blank\">German Universities of Applied Sciences (UAS7) Study and Internship Program (SIP)</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10166\" target=\"_blank\">German Universities of Applied Sciences (UAS7) Study Program (SP)</a> ", " <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10163\" target=\"_blank\">German Universities of Applied Sciences (UAS7) Internship Program (IP) (Summer)</a> ", "") == true) {
        data.addRows([
            [48.1333, 11.5667, 'Germany - Munich', 81, 'German Universities of Applied Sciences']
        ]);
    }
    ivalue['48.1333'] = 'Germany - Munich';

    ivalueimg['48.1333'] = 'http://www.albany.edu/studyabroad/images/map/Munich.JPG';

    ivaluesem['48.1333'] = ' <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10163\" target=\"_blank\">German Universities of Applied Sciences (UAS7) Internship Program (IP) (Semester)</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10165\" target=\"_blank\">German Universities of Applied Sciences (UAS7) Study and Internship Program (SIP)</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10166\" target=\"_blank\">German Universities of Applied Sciences (UAS7) Study Program (SP)</a> ';

    ivaluesum['48.1333'] = ' <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10163\" target=\"_blank\">German Universities of Applied Sciences (UAS7) Internship Program (IP) (Summer)</a> ';

    ivaluewin['48.1333'] = '';
    if (programterm == "all" || checkterm(programterm, " <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10163\" target=\"_blank\">German Universities of Applied Sciences (UAS7) Internship Program (IP) (Semester)</a>  <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10165\" target=\"_blank\">German Universities of Applied Sciences (UAS7) Study and Internship Program (SIP)</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10166\" target=\"_blank\">German Universities of Applied Sciences (UAS7) Study Program (SP)</a> ", " <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10163\" target=\"_blank\">German Universities of Applied Sciences (UAS7) Internship Program (IP) (Summer)</a> ", "") == true) {
        data.addRows([
            [53.5653, 10.0014, 'Germany - Hamburg', 82, 'German Universities of Applied Sciences']
        ]);
    }
    ivalue['53.5653'] = 'Germany - Hamburg';

    ivalueimg['53.5653'] = 'http://www.albany.edu/studyabroad/images/map/Hamburg.JPG';

    ivaluesem['53.5653'] = ' <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10163\" target=\"_blank\">German Universities of Applied Sciences (UAS7) Internship Program (IP) (Semester)</a>  <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10165\" target=\"_blank\">German Universities of Applied Sciences (UAS7) Study and Internship Program (SIP)</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10166\" target=\"_blank\">German Universities of Applied Sciences (UAS7) Study Program (SP)</a> ';

    ivaluesum['53.5653'] = ' <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10163\" target=\"_blank\">German Universities of Applied Sciences (UAS7) Internship Program (IP) (Summer)</a> ';

    ivaluewin['53.5653'] = '';
    if (programterm == "all" || checkterm(programterm, "<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10163\" target=\"_blank\">German Universities of Applied Sciences (UAS7) Internship Program (IP) (Semester)</a>  <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10165\" target=\"_blank\">German Universities of Applied Sciences (UAS7) Study and Internship Program (SIP)</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10166\" target=\"_blank\">German Universities of Applied Sciences (UAS7) Study Program (SP)</a> ", " <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10163\" target=\"_blank\">German Universities of Applied Sciences (UAS7) Internship Program (IP) (Summer)</a> ", "") == true) {
        data.addRows([
            [52.2789, 8.0431, 'Germany - Osnabrück', 83, 'German Universities of Applied Sciences']
        ]);
    }
    ivalue['52.2789'] = 'Germany - Osnabrück';

    ivalueimg['52.2789'] = 'http://www.albany.edu/studyabroad/images/map/Osnabrueck.JPG';

    ivaluesem['52.2789'] = '<a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10163\" target=\"_blank\">German Universities of Applied Sciences (UAS7) Internship Program (IP) (Semester)</a>  <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10165\" target=\"_blank\">German Universities of Applied Sciences (UAS7) Study and Internship Program (SIP)</a> <br> <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10166\" target=\"_blank\">German Universities of Applied Sciences (UAS7) Study Program (SP)</a> ';

    ivaluesum['52.2789'] = ' <a href=\"https://ualbany.studioabroad.com/index.cfm?FuseAction=Programs.ViewProgram&Program_ID=10163\" target=\"_blank\">German Universities of Applied Sciences (UAS7) Internship Program (IP) (Summer)</a> ';

    ivaluewin['52.2789'] = '';

    var options = {
        backgroundColor: {
            fill: 'transparent',
            stroke: '#FFFFFF',
            strokeWidth: 1
        },
        colorAxis: {
            minValue: 0,
            maxValue: 83,
            colors: ['#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', '#C42121', ]
        },
        legend: 'none',
        datalessRegionColor: '#9FD454',
        displayMode: 'markers',
        enableRegionInteractivity: 'true',
        resolution: 'countries',
        sizeAxis: {
            minValue: 1,
            maxValue: 1,
            minSize: 3,
            maxSize: 3
        },
        region: region,
        keepAspectRatio: true,
        width: 520,
        height: 400,
        tooltip: {
            textStyle: {
                color: '#444444'
            },
            trigger: 'focus'
        }
    };
    var chart = new google.visualization.GeoChart(document.getElementById('visualization'));
    google.visualization.events.addListener(chart, "select", function () {
        var selection = chart.getSelection();
        if (selection.length == 1) {
            var selectedRow = selection[0].row;
            var selectedRegion = data.getValue(selectedRow, 0);
            if (ivalue[selectedRegion] != "") {
                var img = "";
                var title = "<span class='imaptitle'>" + ivalue[selectedRegion] + "</span><br />";
                var sem = "";
                var sum = "";
                var win = "";
                if (ivalueimg[selectedRegion] != "") {
                    img = "<img src='" + ivalueimg[selectedRegion] + "'>";
                }
                if ((ivaluesem[selectedRegion] != "") && (programterm == "sem" || programterm == "all")) {
                    sem = ivaluesem[selectedRegion] + "<br />";
                }
                if ((ivaluesum[selectedRegion] != "") && (programterm == "sum" || programterm == "all")) {
                    sum = ivaluesum[selectedRegion] + "<br />";
                }
                if ((ivaluewin[selectedRegion] != "") && (programterm == "win" || programterm == "all")) {
                    win = ivaluewin[selectedRegion];
                }
                document.getElementById('imapmessage').innerHTML = img + title + sem + sum + win;
                $("#imapmessage").css("padding-bottom", "110px");
                imapmarkerclicked = selectedRegion;
            }
        }
    });

    if (imapmarkerclicked != "") {
        var img = "";
        var title = "<span class='imaptitle'>" + ivalue[imapmarkerclicked] + "</span><br />";
        var sem = "";
        var sum = "";
        var win = "";
        if (ivalueimg[imapmarkerclicked] != "") {
            img = "<img src='" + ivalueimg[imapmarkerclicked] + "'>";
        }
        if (programterm == "sem" || programterm == "all") {
            if (ivaluesem[imapmarkerclicked] != "") {
                sem = ivaluesem[imapmarkerclicked] + "<br />";
            }
            if (ivaluesem[imapmarkerclicked] == "" && programterm == "sem") {
                sem = "<span class='imapempty'>" + emptysem + "</span><br />";
            }
        }
        if (programterm == "sum" || programterm == "all") {
            if (ivaluesum[imapmarkerclicked] != "") {
                sum = ivaluesum[imapmarkerclicked] + "<br />";
            }
            if (ivaluesum[imapmarkerclicked] == "" && programterm == "sum") {
                sum = "<span class='imapempty'>" + emptysum + "</span><br />";
            }
        }
        if (programterm == "win" || programterm == "all") {
            if (ivaluewin[imapmarkerclicked] != "") {
                win = ivaluewin[imapmarkerclicked];
            }
            if (ivaluewin[imapmarkerclicked] == "" && programterm == "win") {
                win = "<span class='imapempty'>" + emptywin + "</span>";
            }
        }
        document.getElementById("imapmessage").innerHTML = img + title + sem + sum + win;
    }
    chart.draw(data, options);
    google.visualization.events.addListener(chart, 'ready', function () {
        var svgbg = document.getElementsByTagName('svg');
        if (svgbg[0]) {
            if (region == 'world' || region == '005') {
                if (region == 'world') {
                    svgbg[0].style.backgroundImage = "url('images/antarctica.png')";
                }
                if (region == '005') {
                    svgbg[0].style.backgroundImage = "url('images/peninsula.png')";
                }
            } else {
                svgbg[0].style.backgroundImage = "none";
            }
        }
    });
}

function checkterm(termchosen, sem, sum, win) {
    if (termchosen == "all") {
        return true;
    }
    if (termchosen == "sem") {
        if (sem.length >= 1) {
            return true;
        } else {
            return false;
        }
    }
    if (termchosen == "sum") {
        if (sum.length >= 1) {
            return true;
        } else {
            return false;
        }
    }
    if (termchosen == "win") {
        if (win.length >= 1) {
            return true;
        } else {
            return false;
        }
    }
}
var imapmarkerclicked = '';