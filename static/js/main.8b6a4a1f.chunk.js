(this["webpackJsonpresume-web"]=this["webpackJsonpresume-web"]||[]).push([[0],{100:function(e,a,t){},101:function(e,a,t){},112:function(e,a,t){},113:function(e,a,t){},114:function(e,a,t){},115:function(e,a,t){},116:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(11),i=t.n(r);t(69),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(70);var s=t(16),o=t(17),c=t(21),m=t(20),d=(t(71),t(12)),u=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={isClose:!0},e.handleUserClick=function(a){window.innerWidth<=850&&e.setState({isClose:!e.state.isClose})},e.toggleHamburgerIconClass=function(a){e.setState({isClose:!e.state.isClose})},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("scroll",this.handleScrollEvent)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("scroll",this.handleScrollEvent)}},{key:"handleScrollEvent",value:function(){var e=document.getElementById("navbar");window.pageYOffset>=window.innerHeight?e.classList.add("sticky"):e.classList.remove("sticky")}},{key:"handleSetActive",value:function(e){window.innerWidth>850&&"nav-Main"===e&&!this.state.isClose&&this.setState({isClose:!this.state.isClose})}},{key:"handleSetInactive",value:function(e){window.innerWidth>850&&"nav-Main"===e&&this.state.isClose&&this.setState({isClose:!this.state.isClose})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{id:"navbar",className:"navbar"},l.a.createElement("div",{className:"hamburger-menu"},l.a.createElement("div",{id:"hamburger-icon",className:this.state.isClose?"":"open",onClick:this.toggleHamburgerIconClass},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null))),l.a.createElement("nav",{className:"nav-menu",style:this.state.isClose?{display:"none"}:{display:"block"}},l.a.createElement("div",{id:"nav-Main"},l.a.createElement(d.Link,{activeClass:"active",to:"Main",spy:!0,smooth:!0,offset:0,duration:500,onSetActive:function(){return e.handleSetActive("nav-Main")},onSetInactive:function(){return e.handleSetInactive("nav-Main")}})),l.a.createElement(d.Link,{activeClass:"active",to:"Profile",spy:!0,smooth:!0,offset:0,duration:500,onClick:this.handleUserClick},l.a.createElement("div",{className:"nav-item"},l.a.createElement("div",{className:"title"},"Profile "))),l.a.createElement(d.Link,{activeClass:"active",to:"Experiences",spy:!0,smooth:!0,offset:0,duration:500,onClick:this.handleUserClick},l.a.createElement("div",{className:"nav-item"},l.a.createElement("div",{className:"title"},"Experience"))),l.a.createElement(d.Link,{activeClass:"active",to:"Projects",spy:!0,smooth:!0,offset:0,duration:500,onClick:this.handleUserClick},l.a.createElement("div",{className:"nav-item"},l.a.createElement("div",{className:"title"},"Projects"))),l.a.createElement(d.Link,{activeClass:"active",to:"Skills",spy:!0,smooth:!0,offset:0,duration:500,onClick:this.handleUserClick},l.a.createElement("div",{className:"nav-item"},l.a.createElement("div",{className:"title"},"Skills"))),l.a.createElement(d.Link,{activeClass:"active",to:"Volunteer",spy:!0,smooth:!0,offset:0,duration:500,onClick:this.handleUserClick},l.a.createElement("div",{className:"nav-item"},l.a.createElement("div",{className:"title"},"Volunteer"))),l.a.createElement(d.Link,{activeClass:"active",to:"Contact",spy:!0,smooth:!0,offset:0,duration:500,onClick:this.handleUserClick},l.a.createElement("div",{className:"nav-item"},l.a.createElement("div",{className:"title"},"Contact")))))}}]),t}(l.a.Component),p=(t(82),t(46)),E=(t(83),t(47));function h(){return l.a.createElement("div",{className:"jumbotron main-card"},l.a.createElement("p",{className:"name"},"Ali Khutaba"),l.a.createElement("hr",{className:"line"}),l.a.createElement("h4",{className:"status"},"Software Engineer"),l.a.createElement("h5",{className:"status1"},"Looking for my next Challenge"),l.a.createElement(d.Link,{activeClass:"active",to:"Profile",spy:!0,smooth:!0,offset:0,duration:500},l.a.createElement("div",{className:"scroll"},l.a.createElement("h6",{className:"scrollText"},"Resume"),l.a.createElement("div",{className:"scrollIcon"},l.a.createElement(E.a,{size:40})))))}function v(){return l.a.createElement("div",{id:"Main",className:"Main"},l.a.createElement(h,null),l.a.createElement(p.a,{className:"ParticlesBg",color:"#ff6600",type:"cobweb",bg:!1}))}t(84);var g=t(48),f=t.n(g),b=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"Profile",id:"Profile"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"profile-title"},"Profile"),l.a.createElement("hr",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-4 about-me-col"},l.a.createElement("h2",{className:"sub-title"},"About me"),l.a.createElement("p",{className:"about-me"},"Hi, I am "),l.a.createElement("span",{className:"highlighted"},"Ali"),l.a.createElement("p",{className:"about-me"},".A Software Engineer student at Afeka College of Engineering \u2013 Tel Aviv."),l.a.createElement("p",{className:"about-me"},"I am a junior full stack web developer who loves Structures, Orders and Algorithms. Moreover, teamwork where I can learn faster and deeper."),l.a.createElement("p",{className:"about-me"},"Looking for a new challenge as a Software engineer or a full stack position prefer to server side, possibility to Full-time job.")),l.a.createElement("div",{className:"col-sm-5 image-col"},l.a.createElement("img",{className:"proflie-img",src:f.a,alt:"profile"})),l.a.createElement("div",{className:"col-sm-3 details-col"},l.a.createElement("h2",{className:"sub-title"},"Detials"),l.a.createElement("div",null,l.a.createElement("h5",null,"Name"),l.a.createElement("h6",null,"Ali Khutaba")),l.a.createElement("div",null,l.a.createElement("h5",null,"Age"),l.a.createElement("h6",null,"25 Years")),l.a.createElement("div",null,l.a.createElement("h5",null,"Location"),l.a.createElement("h6",null,"Tel-Aviv, Israel"))))))}}]),t}(l.a.Component);t(85);function N(e){var a=e.title,t=e.quotes,n=e.quotesAuthor;return l.a.createElement("div",null,l.a.createElement("h1",{className:"section-title"},a),l.a.createElement("div",{className:"quotes"},l.a.createElement("h5",{className:"quotes"},t),l.a.createElement("h6",{className:"quotes"},n)),l.a.createElement("hr",null))}t(86);var y=t(52),k=t(49);function C(e){var a=e.title,t=e.subTitle,n=e.date,r=e.location,i=e.details,s=e.detailsType,o=e.myVideoId;return l.a.createElement("div",{className:"row card-row"},l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("h4",{className:"card-name"},a),l.a.createElement("p",{className:"card-date"},n),l.a.createElement("div",{className:"card-location"},l.a.createElement(y.a,null)," ",r)),l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("div",{className:"card-details"},l.a.createElement("h6",{className:"card-details-title"},t),"p"===s?i.map((function(e){return l.a.createElement("p",{className:"par-details"},e)})):"li"===s?l.a.createElement("ul",{className:"list"},i.map((function(e){return l.a.createElement("li",null,e)}))):null,l.a.createElement("div",{style:""===o?{display:"none"}:{}},l.a.createElement(k.a,{className:"youtubeVideo",videoId:o,opts:{width:"100%"}})))))}function w(){return l.a.createElement("div",{className:"section",id:"Experiences",style:{backgroundColor:"#e0e0e0"}},l.a.createElement("div",{className:"container"},l.a.createElement(N,{title:"Experience",quotes:S,quotesAuthor:O}),l.a.createElement("h2",{style:{color:"#ff6600",marginBottom:"30px",marginTop:"30px"}},"Career"),l.a.createElement(C,{title:"Hackathon",subTitle:"Participated in Hasoub Campus Startup Cup.",date:"Oct.2020 \u2013 Dec.2020",location:"Online",details:T,detailsType:"li",myVideoId:"qqhczg75bdI"}),l.a.createElement(C,{title:"Outstanding program",subTitle:"\u201cSmart Up\u201d program of outstanding student - Afeka College.",date:"Oct.2016 \u2013 Jun.2018",location:"Tel-Aviv",details:A,detailsType:"li",myVideoId:"xCZ-_0Aayvk"}),l.a.createElement(C,{title:"Teaching Assistant",subTitle:"Teaching Assistant at Afeka College of Engineering.",date:"Oct.2016 \u2013 Jun.2018",location:"Tel-Aviv",details:x,detailsType:"li",myVideoId:""}),l.a.createElement(C,{title:"Coordinator",subTitle:"Coordinator of the Arab students at Afeka College.",date:"Aug.2016 \u2013 October.2019",location:"Tel-Aviv",details:I,detailsType:"li",myVideoId:""}),l.a.createElement("hr",null),l.a.createElement("h2",{style:{color:"#ff6600",marginBottom:"30px",marginTop:"30px"}},"Education"),l.a.createElement(C,{title:"Afeka College",subTitle:"B.Sc. Software Engineering.",date:"Oct.2015 \u2013 Jun.2021",location:"Tel-Aviv",details:j,detailsType:"p",myVideoId:""}),l.a.createElement(C,{title:"Ibn khaldun",subTitle:"\u201cHigh School Diploma.",date:"Oct.2010 \u2013 Jun.2013",location:"Arraba",details:P,detailsType:"p",myVideoId:""})))}var S='"Experience is one thing you can\'t get for nothing."',O="Paulo Coelho.",T=["We won second place.","Built an app for meditation and relaxing."],A=["Designed and constructed a driving simulator adapted for users with CP to make physical therapy more effective and enjoyable.","Conducted research about \u201cBaras Paradox\u201d demonstration on high voltage electricity grid."," Went through management, leadership, entrepreneurship, and scientific writing workshops and Lectures in various engineer fields such as electricity and machinery.","The program required: Thinking out of the box, self-learning abilities, teamwork, ability to work under pressure, high motivation and responsibility."],P=["Majored in Biology and Chemistry, five-unit level.","Mathematics and English \u2013 five-unit level."],j=[" GPA: 85, Excelling student with a yearly certificate of excellence.","Recommendations will be provided upon request.","Top Courses: Data Structures, Algorithms, Machine learning, OOP, Operating System, Linux, Database Systems, Parallel Computation."],x=["Led weekly office hours to 15 students: training OOP, homework assistance.","Checked and graded data structures homework for 100+ students."],I=["Helped Arab students at Afeka College with their various needs.","Multiplicated the number of Arabs students per year and reduced the failingpercentage of first year students."],L=t(53),D=t.n(L),M=t(54),R=t.n(M),q=t(55),H=t.n(q);t(98);function V(e){var a=e.name,t=e.details,n=e.projectLink,r=e.pic;return console.log(a),console.log(n),console.log("------------------"),l.a.createElement("div",{className:"row project"},l.a.createElement("div",{className:"col-sm-4 project-detials"},l.a.createElement("h5",null,a),t.map((function(e){return l.a.createElement("p",null,e)})),l.a.createElement("button",{style:void 0===n?{display:"none"}:{display:"block"},onClick:function(){return window.open({projectLink:n})},type:"button",className:"btn btn-outline-danger"},"Website")),l.a.createElement("div",{className:"col-sm-8 project-pic"},void 0===n?l.a.createElement("div",{className:"image"},l.a.createElement("img",{src:r,alt:"sorting project",className:"project-img"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"text"}))):void 0!==n?l.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("div",{className:"image"},l.a.createElement("img",{src:r,alt:a,className:"project-img"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"text"},"Website")))):null))}var B=t(29),F=t(56),_=t(57),W=(t(99),l.a.createElement(B.b,{size:70})),z=l.a.createElement(B.a,{size:70}),J=l.a.createElement(F.a,{size:70}),U=l.a.createElement(_.a,{size:70});function G(e){var a=e.myClassName,t=e.myHref,n="linkedin"===a?W:"github"===a?z:"mail"===a?J:"phone"===a?U:null;return l.a.createElement("a",{className:a,href:t,target:"_blank",rel:"noopener noreferrer"},n)}function K(){return l.a.createElement("div",{id:"Projects",className:"section"},l.a.createElement("div",{className:"container"},l.a.createElement(N,{title:"Projects",quotes:Z,quotesAuthor:X}),l.a.createElement(V,{name:"Pathfinding Visualizer",details:Q,projectLink:"https://alikhutaba.github.io/Pathfinding-Viusualizer/",pic:D.a}),l.a.createElement("hr",null),l.a.createElement(V,{name:"An EMR application for allergies vaccinations",details:Y,pic:H.a}),l.a.createElement("hr",null),l.a.createElement(V,{name:"Sorting Visualizer",details:$,projectLink:"https://alikhutaba.github.io/sorting-visualizer/",pic:R.a}),l.a.createElement("hr",null),l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("h5",null,"See more projects"),l.a.createElement(G,{myClassName:"github",myHref:"https://github.com/alikhutaba"}))))}var Q=["Built React/ Redux application for visualizing pathfinding algorithms.","Implemented Algorithm:","A* Search.","Dijkstra\u2019s Algorithm.","Breadth First Search (BFS).","Depth First Search (DFS)."],Y=["DSS for managing allergic vaccination processes and tracking treatments for patients in Meir hospital, that will reduce more than 90 % of human errors.","Designing and implementing a Client-Server application, Using Java to build a REST web server that connects to a React client and a MySQL database."],$=["Built React application for visualizing sorting algorithms.","Implemented Algorithm:","Selection Sort, Bubble Sort.","Insertion Sort, Merge Sort.","Quick Sort, Heap Sort."],Z='"Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program."',X="Linus Torvalds",ee=(t(100),t(22)),ae=(t(101),t(8)),te=t(14),ne=t(33),le=t.n(ne),re=t(138),ie=t(142),se=t(141),oe=t(140),ce=t(59),me=t.n(ce),de=t(60),ue=t.n(de),pe=t(40),Ee={disabled:{"&:before":{backgroundColor:"transparent !important"}},underline:{"&:hover:not($disabled):before,&:before":{borderColor:"#D2D2D2 !important",borderWidth:"1px !important"},"&:after":{borderColor:"#ff6600"}},labelRoot:Object(pe.a)(Object(pe.a)({},{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontWeight:"300",lineHeight:"1.5em"}),{},{color:"#AAAAAA !important",fontWeight:"400",fontSize:"14px",lineHeight:"1.42857",letterSpacing:"unset"}),feedback:{position:"absolute",top:"18px",right:"0",zIndex:"2",display:"block",width:"24px",height:"24px",textAlign:"center",pointerEvents:"none"},marginTop:{marginTop:"16px"},formControl:{paddingBottom:"10px",margin:"27px 0 0 0",position:"relative",verticalAlign:"unset"}},he=Object(re.a)(Ee);function ve(e){var a,t,n=he(),r=e.formControlProps,i=e.labelText,s=e.id,o=e.name,c=e.labelProps,m=e.inputProps,d=e.error,u=e.success,p=le()((a={},Object(te.a)(a," "+n.labelRootError,d),Object(te.a)(a," "+n.labelRootSuccess,u&&!d),a)),E=le()((t={},Object(te.a)(t,n.underlineError,d),Object(te.a)(t,n.underlineSuccess,u&&!d),Object(te.a)(t,n.underline,!0),t)),h=le()(Object(te.a)({},n.marginTop,void 0===i));return l.a.createElement(ie.a,Object.assign({},r,{className:r.className+" "+n.formControl}),void 0!==i?l.a.createElement(se.a,Object.assign({className:n.labelRoot+p,htmlFor:s},c),i):null,l.a.createElement(oe.a,Object.assign({classes:{root:h,disabled:n.disabled,underline:E},id:s,name:o},m)),d?l.a.createElement(me.a,{className:n.feedback+" "+n.labelRootError}):u?l.a.createElement(ue.a,{className:n.feedback+" "+n.labelRootSuccess}):null)}t(105);var ge=t(61);t(108).config(),ae.a.configure();var fe=function(e){Object(c.a)(n,e);var a=Object(m.a)(n);function n(e){var t;return Object(s.a)(this,n),(t=a.call(this,e)).handleOnSubmit=t.handleOnSubmit.bind(Object(ee.a)(t)),t.validateEmail=t.validateEmail.bind(Object(ee.a)(t)),t.validateForm=t.validateForm.bind(Object(ee.a)(t)),t}return Object(o.a)(n,[{key:"validateForm",value:function(e){var a=new FormData(e.target);ae.a.configure();var t=!0,n=a.get("first-name"),l=a.get("last-name"),r=a.get("email-address"),i=a.get("message");return""===n?(t=!1,ae.a.error("first name required..!",{position:ae.a.POSITION.TOP_CENTER,autoClose:2e3})):""===l?(t=!1,ae.a.error("last name required..!",{position:ae.a.POSITION.TOP_CENTER,autoClose:2e3})):""===r?(t=!1,ae.a.error("E-mail Address required..!",{position:ae.a.POSITION.TOP_CENTER,autoClose:2e3})):this.validateEmail(r)?""===i&&(t=!1,ae.a.error("message required..!",{position:ae.a.POSITION.TOP_CENTER,autoClose:2e3})):(t=!1,ae.a.error("E-mail Address unvalid..!",{position:ae.a.POSITION.TOP_CENTER,autoClose:2e3})),t}},{key:"validateEmail",value:function(e){return t(111).validate(e)}},{key:"handleOnSubmit",value:function(e){e.preventDefault(),this.validateForm(e)&&(ge.sendForm("ResumeContact","template_hfbwddk",e.target,"user_wDDwFELMoJ1mgAOb87KPU").then((function(){ae.a.success("Sent!",{position:ae.a.POSITION.TOP_CENTER,autoClose:5e3})}),(function(e){ae.a.error("Sorry, we are unable to send the message now, please try later.",{position:ae.a.POSITION.TOP_CENTER,autoClose:1e4})})),e.target.reset())}},{key:"render",value:function(){return l.a.createElement("form",{id:"myForm",className:"card",onSubmit:this.handleOnSubmit},l.a.createElement("div",{className:"cardHeader"},l.a.createElement("h5",{style:{color:"white"}},"I am sure that the combination of my skills and motivation with your company vision will lead to the greatest technologies that change the world for the better.")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-6"},l.a.createElement(ve,{labelText:"First Name",id:"first-name",name:"first-name",formControlProps:{fullWidth:!0}})),l.a.createElement("div",{className:"col-sm-6"},l.a.createElement(ve,{labelText:"Last Name",id:"last-name",name:"last-name",formControlProps:{fullWidth:!0}}))),l.a.createElement(ve,{labelText:"Email address",id:"email-address",name:"email-address",formControlProps:{fullWidth:!0}}),l.a.createElement(ve,{labelText:"Message",id:"message",name:"message",formControlProps:{fullWidth:!0},inputProps:{multiline:!0,rows:5}}),l.a.createElement("div",{className:"send-button-div"},l.a.createElement("button",{className:"sendButton"},"SEND")))}}]),n}(l.a.Component);function be(){return l.a.createElement("div",{className:"section",id:"Contact",style:{textAlign:"center",backgroundColor:"#e0e0e0"}},l.a.createElement("div",{className:"container"},l.a.createElement(N,{title:"Lets work together",quotes:"",quotesAuthor:""}),l.a.createElement(fe,null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-6"},l.a.createElement(G,{myClassName:"linkedin",myHref:"https://www.linkedin.com/in/ali-khutaba-843627173/"}),l.a.createElement(G,{myClassName:"github",myHref:"https://github.com/alikhutaba"})),l.a.createElement("div",{className:"col-sm-6"},l.a.createElement(G,{myClassName:"mail",myHref:"mailto:khutaba.ali@gmail.com"}),l.a.createElement(G,{myClassName:"phone",myHref:"tel:+972502862222"}))),l.a.createElement("h6",{className:"info"},"Khutaba.Ali@gmail.com"),l.a.createElement("h6",{className:"info"},"+972 50-286-2222"),l.a.createElement("button",{onClick:function(){return window.open("https://drive.google.com/file/d/1G_VykYITQGpk_IjbpJo9hMW3hnJyHrmE/view?usp=sharing")},type:"button",className:"btn btn-outline-danger"},"View full CV"),l.a.createElement("hr",null)))}t(112),t(113);function Ne(e){var a=e.name,t=e.percent;return l.a.createElement("div",{className:"row skill"},l.a.createElement("span",{className:"col-sm-1"}),l.a.createElement("span",{className:"col-sm-4 skill-name"},a),l.a.createElement("span",{className:"col-sm-6 skill-progress"},l.a.createElement("div",{className:"progress"},l.a.createElement("div",{className:"progress-bar",style:{width:t+"%"}}))),l.a.createElement("span",{className:"col-sm-1"}))}t(114);function ye(e){var a=e.name,t=e.percent,n=e.level;return l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("div",{className:"row language"},l.a.createElement("span",{className:"col-sm-1"}),l.a.createElement("span",{className:"col-sm-3 language-name"},a),l.a.createElement("span",{className:"col-sm-7 language-progress-div"},l.a.createElement("div",{className:"progress language-progress "},l.a.createElement("div",{className:"progress-bar",style:{width:t+"%"}},n))),l.a.createElement("span",{className:"col-sm-1"})))}t(115);function ke(){return l.a.createElement("div",{className:"progress animation-progress",style:{height:"25px"}},l.a.createElement("div",{className:"progress-bar animation-progress-bar"},l.a.createElement("div",{className:"progress-text"}," Self Learning - 100%")))}function Ce(){return l.a.createElement("div",{className:"section",id:"Skills",style:{backgroundColor:"#e0e0e0"}},l.a.createElement("div",{className:"container"},l.a.createElement(N,{title:"Skills",quotes:"",quotesAuthor:""}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-6 skils-col"},l.a.createElement(Ne,{name:"java",percent:"90"}),l.a.createElement(Ne,{name:"C",percent:"100"}),l.a.createElement(Ne,{name:"C++",percent:"85"}),l.a.createElement(Ne,{name:"Python",percent:"70"}),l.a.createElement("hr",null),l.a.createElement(Ne,{name:"My SQL",percent:"100"}),l.a.createElement(Ne,{name:"PostgreSQL",percent:"90"}),l.a.createElement(Ne,{name:"H2 Database",percent:"80"}),l.a.createElement(Ne,{name:"Firebase",percent:"60"}),l.a.createElement("hr",null)),l.a.createElement("div",{className:"col-sm-6 skils-col"},l.a.createElement(Ne,{name:"Android",percent:"85"}),l.a.createElement(Ne,{name:"Swift",percent:"40"}),l.a.createElement("hr",null),l.a.createElement(Ne,{name:"React / Redux",percent:"85"}),l.a.createElement(Ne,{name:"JavaScript",percent:"85"}),l.a.createElement(Ne,{name:"HTML(5)",percent:"100"}),l.a.createElement(Ne,{name:"CSS(3)",percent:"100"}),l.a.createElement(Ne,{name:"Bootstrap(4)",percent:"100"}),l.a.createElement(Ne,{name:"jquery",percent:"10"}),l.a.createElement("hr",null))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-6 skils-col"},l.a.createElement(Ne,{name:"Spring Boot",percent:"100"}),l.a.createElement(Ne,{name:"Spring Security",percent:"30"}),l.a.createElement(Ne,{name:"RESTful API",percent:"100"}),l.a.createElement(Ne,{name:"Maven",percent:"100"}),l.a.createElement(Ne,{name:"Git",percent:"100"})),l.a.createElement("div",{className:"col-sm-6 skils-col"},l.a.createElement(Ne,{name:"OOP",percent:"100"}),l.a.createElement(Ne,{name:"Linux",percent:"50"}),l.a.createElement(Ne,{name:"Agile (Scrum)",percent:"80"}),l.a.createElement(Ne,{name:"Trello",percent:"100"}),l.a.createElement(Ne,{name:"Overleaf",percent:"100"}))),l.a.createElement(ke,null),l.a.createElement("div",{className:"row"},l.a.createElement(ye,{name:"Arabic",percent:"100",level:"Native"}),l.a.createElement(ye,{name:"Hebrew",percent:"95",level:"Fluent"}),l.a.createElement(ye,{name:"English",percent:"90",level:"Fluent"}))))}function we(){return l.a.createElement("div",{className:"section",id:"Volunteer"},l.a.createElement("div",{className:"container"},l.a.createElement(N,{title:"volunteering",quotes:Se,quotesAuthor:Oe}),l.a.createElement(C,{title:"Digital Starter",subTitle:"Volunteered at \u201cDigital Starter\u201d Program.",date:"Sep.2017 \u2013 Sep.2019",location:"Online",details:Te,detailsType:"p",myVideoId:""}),l.a.createElement(C,{title:"Volunteer Leadership",subTitle:"Participated in the Volunteer Leadership Program.",date:"Oct.2015 \u2013 Jun.2017",location:"Arraba",details:Ae,detailsType:"p",myVideoId:""}),l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("h5",null,"Deer & Beer make me happy"),l.a.createElement("form",{action:"https://www.paypal.com/donate",method:"post",target:"_top"},l.a.createElement("input",{type:"hidden",name:"hosted_button_id",value:"DY7D23A8MUT92"}),l.a.createElement("input",{type:"image",src:"https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif",border:"0",name:"submit",title:"PayPal - The safer, easier way to pay online!",alt:"Donate with PayPal button"}),l.a.createElement("img",{alt:"",border:"0",src:"https://www.paypal.com/en_IL/i/scr/pixel.gif",width:"1",height:"1"})))))}var Se='"Remember that the happiest people are not those getting more, but those giving more."',Oe="H. Jackson Brown Jr.",Te=["Accompanying small businesses in the periphery and setting up digital tools such as a landing page through Wix, a Facebook business page, Google my business profile."],Ae=[" workshops for high school youth to give them the spirit of volunteering and a volunteer days in schools and institutions for disabilities."];i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement("div",null,l.a.createElement(v,null),l.a.createElement(u,null),l.a.createElement(b,null),l.a.createElement(w,null),l.a.createElement(K,null),l.a.createElement(Ce,null),l.a.createElement(we,null),l.a.createElement(be,null),l.a.createElement("footer",{id:"footer"},l.a.createElement("h6",{className:"rights"},"Copyright \xa9 ",(new Date).getFullYear()," Ali Khutaba")))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},48:function(e,a,t){e.exports=t.p+"static/media/ali-proflie.af1d5f09.png"},53:function(e,a,t){e.exports=t.p+"static/media/pathfinding.dd209bf0.png"},54:function(e,a,t){e.exports=t.p+"static/media/sorting.4dac4ace.png"},55:function(e,a,t){e.exports=t.p+"static/media/ERM.85cdacc9.png"},64:function(e,a,t){e.exports=t(116)},69:function(e,a,t){},71:function(e,a,t){},82:function(e,a,t){},83:function(e,a,t){},84:function(e,a,t){},85:function(e,a,t){},86:function(e,a,t){},98:function(e,a,t){},99:function(e,a,t){}},[[64,1,2]]]);
//# sourceMappingURL=main.8b6a4a1f.chunk.js.map