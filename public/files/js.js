var proslo=0;
var phone=0;
var menuop=0;
var langset=false;
function menu() {
  burger.classList.toggle("change");
  linksHolder.classList.toggle("changeHolder");
  menuop=!menuop;
}

function checkmenu(){
	if(menuop==1)
	menu();
}

function playvideo(x){

	if(proslo!="-1"&&x=="0")
	{
		if(window.innerWidth<=650)
			document.getElementById("name").style.top="-10vw";
		else
			document.getElementById("name").style.left="50%";
		document.getElementById("quote").style.color="rgba(255,255,255,1)";
		document.getElementById("quote").style.textShadow="3px 3px 5px rgba(0,0,0,1)";
	}
	if(proslo=="1")
	{
		myVideo.play();
		proslo=-1;
	}
	else if(proslo!="-1")
		setTimeout("playvideo(1)",200);
}

var pausing_function = function(){
	var videoCurrentTime = document.getElementById('myVideo').currentTime;
	if (videoCurrentTime >= 6.3 && proslo=="0")
	{
		document.getElementById('myVideo').pause();
		proslo=1;
	}
}

var ended_function = function(){
	document.getElementById('replaybtn').style.display="block";
}

function replay(){
	document.getElementById('myVideo').pause();
	document.getElementById('myVideo').currentTime=0;
	document.getElementById('myVideo').play();
	document.getElementById('replaybtn').style.display="none";
	if(window.innerWidth>650)
		document.getElementById("name").style.left="0vw";
	document.getElementById("name").style.top="0vw";
	document.getElementById("quote").style.color="rgba(255,255,255,0)";
	document.getElementById("quote").style.textShadow="3px 3px 5px rgba(0,0,0,0)";
	proslo=0;
}

var lastinw=0;
var currlang=0;
function setload(){
	if(window.innerWidth<=650)
	{
		phone=1;
		myVideo.src="files/video2.mp4";
	}
	resizefun();

	//setting language
	let x;
	if(localStorage.getItem("language")===null)
	{
		x="engLang";
		currlang=0;
		localStorage.setItem("language",x);
	}
	else x=localStorage.getItem("language");
	setLangColor(x);
	svgsMove();
}

function iphonecheck(){
	if(iOS())
	document.getElementById('play').style.display="block";
}


function playiphone(){
	myVideo.play();
	document.getElementById('play').style.display="none";
}
var bod=0,pro1=0,pro2=0,pro3=0,pro4=0;
var completed=0;

function resizefun(){
	bod = document.body.getBoundingClientRect();
	ab=aboutme.getBoundingClientRect().top*1.5-bod.top;
	pro1=icer.getBoundingClientRect().top-bod.top;
	pro2=virtualtour.getBoundingClientRect().top-bod.top;
	pro3=ebook.getBoundingClientRect().top-bod.top;
	pro4=letter.getBoundingClientRect().top-bod.top;
	if(window.innerWidth!=lastinw)
	{
		if(window.innerWidth<=650)
		{
			if(phone=="0")
			{
				document.getElementById("name").style.top="0vw";
				document.getElementById("name").style.left="50%";
				document.getElementById("quote").style.color="rgba(255,255,255,0)";
				document.getElementById("quote").style.textShadow="3px 3px 5px rgba(0,0,0,0)";
				document.getElementById('myVideo').pause();
				document.getElementById('myVideo').currentTime=0;
				myVideo.src="files/video2.mp4";
				lastinw=window.innerWidth;
				phone=1;
				proslo=0;
			}
		}
		else
		{
			if(phone=="1")
			{
				document.getElementById('myVideo').pause();
				document.getElementById('myVideo').currentTime=0;
				myVideo.src="files/video.mp4";
				document.getElementById("name").style.left="0vw";
				document.getElementById("name").style.top="0vw";
				document.getElementById("quote").style.color="rgba(255,255,255,0)";
				document.getElementById("quote").style.textShadow="3px 3px 5px rgba(0,0,0,0)";
				lastinw=window.innerWidth;
				proslo=0;
				phone=0;
			}
		}
	}
}

var scrollScript = function(){
	if(completed!=5)
	{
		resizefun();
		var scr=window.scrollY*0.85+window.innerHeight;
		if(completed<1)
		if(scr>ab)
		{
			displaytext(currlang);
			document.getElementById('aboutme').style.opacity="1";
			completed=1;
		}
		if(completed<2)
		if(scr>pro1)
		{
			document.getElementById('icerdiv').style.opacity="1";
			document.querySelector('.img4').style.left="50vw";
			completed=2;
		}
		if(completed<3)
		if(scr>pro2)
		{
			document.getElementById('virtdiv').style.opacity="1";
			document.querySelector('.img3').style.left="0";
			completed=3;
		}
		if(completed<4)
		if(scr>pro3)
		{
			document.getElementById('ebookdiv').style.opacity="1";
			document.querySelector('.img2').style.left="50vw";
			completed=4;
		}
		if(completed<5)
		if(scr>pro4)
		{
			document.getElementById('letterdiv').style.opacity="1";
			document.querySelector('.img1').style.left="0";
			completed=5;
		}
	}
}

function resumeover(){
	document.getElementById("triangles").style.fontSize="6vw";
	document.getElementById("triangles").style.marginTop="7vw";
	document.getElementById("triangles").style.marginLeft="-21vw";
	document.getElementById("triangles").style.color="#aaaaaa";
}

function resumeout(){
	document.getElementById("triangles").style.fontSize="4vw";
	document.getElementById("triangles").style.marginTop="8vw";
	document.getElementById("triangles").style.marginLeft="0";
	document.getElementById("triangles").style.color="#444444";
}

function iOS() {
  return [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ].includes(navigator.platform)
  || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}

function setLang(x){
	localStorage.setItem("language",x);
	setLangColor(x);
}

function setLangColor(x){
	if(x=="engLang")
	{
		currlang=0;
		engLang.classList.add("activeLang");
		srbLang.classList.remove("activeLang");
		changelanguage(0);
	}
	else if(x=="srbLang")
	{
		currlang=1;
		srbLang.classList.add("activeLang");
		engLang.classList.remove("activeLang");
		changelanguage(1);
	}
}

function changelanguage(x){
	try{
	clearTimeout(tajmer);
	console.log("da");
	}
	catch(err){}
	if(x)
	{
		quote.innerHTML="\"Uvek postoji jednostavnije rešenje.\"";
		name2.innerHTML="Mihajlo Bonđi";
		if(completed!=0)
		displaytext(1);
		universityname.innerHTML="Univerzitet u Beogradu, Elektrotehnički fakultet";
		highschoolname.innerHTML="Elektrotehnička škola „Nikola Tesla“, Beograd";
		projectstext.innerHTML="Projekti";
		icer.innerHTML="Informativni veb-sajt za ICER";
		icerdesc.innerHTML="ICER - Inovacioni centar za edukaciju i razvoj je centar gde mladi mogu besplatno da slušaju kurseve na teme koje ih zanimaju.";
		virtualtour.innerHTML="Platforma za virtuelnu galeriju";
		virtualtourdesc.innerHTML="Veb-sajt za Centar za kulturu sa pogledom od 360 stepeni i ostalim informacijama vezanih za centar.";
		ebook.innerHTML="E-knjiga, Zavod za udžbenike";
		ebookdesc.innerHTML="Interaktivna e-knjiga sa kvizovima, mozgalicama i alatima za učenje.";
		letter.innerHTML="Platforma za učenje slova, E-bukvar, Zavod za udžbenike";
		letterdesc.innerHTML="Interaktivna e-knjiga sa preko 500 mini-igrica/kvizova, animacijama pisanja slova, alatima za učenje i testovima.";
		checkresume.innerHTML="<span></span>Moj CV<br>";
		checkresume.style.marginTop="11vw";
		homehead.innerHTML="Početna";
		abouthead.innerHTML="O meni";
		projectshead.innerHTML="Projekti";
		resumehead.innerHTML="CV";
		contacthead.innerHTML="Kontakt";
    planguageshead.innerHTML="Jezici";
    checkresume.href="cv/srb.html";
    floatlanguages.innerHTML="Jezici";
	}
	else
	{
		quote.innerHTML="\"There is always a simpler solution.\"";
		name2.innerHTML="Mihajlo Bondji";
		if(completed!=0)
		displaytext(0);
		universityname.innerHTML="University of Belgrade, School of Electrical Engineering";
		highschoolname.innerHTML="High School of Electrical Engineering „Nikola Tesla“";
		projectstext.innerHTML="Projects";
		icer.innerHTML="Info website for ICER";
		icerdesc.innerHTML="ICER is an innovative center for education and development where young people can attend on free courses on any topic they're interested in.";
		virtualtour.innerHTML="Virtual tour platform";
		virtualtourdesc.innerHTML="Website for a gallery with a 360-degree view tour and other gallery information.";
		ebook.innerHTML="E-book for a book publisher";
		ebookdesc.innerHTML="Interactive e-book with puzzles, quizzes and learning tools.";
		letter.innerHTML="Letter learning platform for a book publisher";
		letterdesc.innerHTML="Interactive e-book with more than 500 mini-games/puzzles, letter writing animations, learning tools and tests.";
		checkresume.innerHTML="<span></span>Check out my resume!";
		checkresume.style.marginTop="8vw";
		homehead.innerHTML="Home";
		abouthead.innerHTML="About me";
		projectshead.innerHTML="Projects";
		resumehead.innerHTML="Resume";
		contacthead.innerHTML="Contact";
    planguageshead.innerHTML="Languages";
    checkresume.href="cv/index.html";
    floatlanguages.innerHTML="Languages";
	}
}

var svgs=["HTML5","CSS3","Javascript","C","Cpp","c_sharp","java","Arduino"];
function svgsMove(){
  let j=-1;
  for(let i=0;i<8;i++)
  {
	let svgLeft=document.getElementById(svgs[i]).style.left;
	let perc;
	if(svgLeft=="-10%")
	{
		document.getElementById(svgs[i]).style.left=0;
		document.getElementById(svgs[i]).style.visibility="visible";
	}
	else{
		if(svgLeft=="100%")
		{
			document.getElementById(svgs[i]).style.left="-130%";
			document.getElementById(svgs[i]).style.visibility="hidden";
		}
		else{
			perc=svgLeft.substr(0,svgLeft.length-1)-0;
			if(isNaN(perc))
				perc=0;
			perc+=10;
			document.getElementById(svgs[i]).style.left=perc+'%';
		}
	}
	if(perc>=40&&perc<=50)
  {
    if(i%2==0)
      document.getElementById(svgs[i]).style.top="2vw";
    else
      document.getElementById(svgs[i]).style.top="10vw";
    j=i;
  }
  else
    document.getElementById(svgs[i]).style.top="6vw";
}
if(j!=-1)
{
  if(j%2==0)
  document.getElementById("floatlanguages").style.top="16vw";
  else
  document.getElementById("floatlanguages").style.top="2vw";
}
else
{
  document.getElementById("floatlanguages").style.top="8vw";
}
	setTimeout("svgsMove()",500);
}

function skills(x){
  if(x)
  {
    skillsIcons1.style="top:5%; left:20%;";
    skillsIcons2.style="top:5%; left:60%;";
    skillsIcons3.style="top:40%; left:80%;";
    skillsIcons4.style="top:80%; left:60%;";
    skillsIcons5.style="top:80%; left:20%;";
    skillsIcons6.style="top:40%; left:-25%;";
  }
  else
  {
    skillsIcons1.style="top:48%; left:48%;";
    skillsIcons2.style="top:48%; left:48%;";
    skillsIcons3.style="top:48%; left:48%;";
    skillsIcons4.style="top:48%; left:48%;";
    skillsIcons5.style="top:48%; left:48%;";
    skillsIcons6.style="top:48%; left:48%;";
  }
}
var xtx="";
function displaytext(la){
	if(la)
	xtxt="Student sam elektrotehnike i bavim se veb programiranjem i dizajnom, elektronikom kao i ostalim IT poslovima. Trenutno radim kao freelancer, praveći veb-sajtove i grafičke dizajnove. Koordinišem lokalni Startap centar, x, koji je projekat Regionalne Razvojne Agencije Srem i finansiran od strane kabineta Ministra za inovacije i tehnološki razvoj. Takođe sam i osnovao q - Inovacioni centar za edukaciju i razvoj, čiji sam predsednik.";
	else
	xtxt="I'm an Electrical Engineering student who is very passionate about web development and design, electronics and about everything the IT industry offers. Currently working as a freelancer building websites and graphic designs. I'm coordinating a local Start-up centre, x, which is a regional project run by the Ministry of the Innovations and Technological Development. Also I'm a founding president at q - Innovative center for education and development.";
	document.getElementById('aboutmetext').innerHTML="";
	dodaj(0);
}
var leftat=0;
function dodaj(i)
{
	document.getElementById('aboutmetext').innerHTML+=xtxt[i++];
	if(i<xtxt.length)
	{	
		if(xtxt[i]=='x'||xtxt[i]=='q')
		{
			if(xtxt[i]=='x')
			{
				i++;
				var para = document.createElement("A");
				para.href="http://inosrem.rs";
				para.id="iscsp";
				para.target="_blank";
				para.className="aboutlink";
				document.getElementById('aboutmetext').appendChild(para);
				leftat=i;
				dodaja1("ISCSP",0);
			}
			if(xtxt[i]=='q')
			{
				i++;
				var para2 = document.createElement("A");
				para2.href="http://icerpazova.com";
				para2.id="icerid";
				para2.target="_blank";
				para2.className="aboutlink";
				document.getElementById('aboutmetext').appendChild(para2);
				leftat=i;
				dodaja2("ICER",0);
			}
		}
		else
		{
			if(xtxt[i-1]=='.'||xtxt[i-1]==',')
				tajmer=setTimeout(function(){dodaj(i)},600);
			else
				tajmer=setTimeout(function(){dodaj(i)},20);
		}
	}
}

function dodaja1(a1,i){
	if(i<a1.length)
	{
		document.getElementById("iscsp").innerHTML+=a1[i++];
		tajmer=setTimeout(function(){dodaja1(a1,i);},300);
	}
	else dodaj(leftat);
}
function dodaja2(a2,i){
	if(i<a2.length)
	{
		document.getElementById("icerid").innerHTML+=a2[i++];
		tajmer=setTimeout(function(){dodaja2(a2,i);},300);
	}
	else dodaj(leftat);
}