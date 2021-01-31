/*  
Here is the exercise on working on the remaining bom method 
Location , Navigator , screen , Window 
Follow the Instruction on the comments 
1. Declare the UI Variables for selecting on the elements 
2. Use the innerHTML property to display the result on each element 
3. The Text  of the elements will lead you what bom information is required 
Adding Extra is Possible if you want to explore more ...
Good Luck !!! 
*/
// Define UI Variables  here



//ui for location info viriables

const relod = document.querySelector('.fa');

const forhref = document.querySelector(" #ref");
const forproto = document.querySelector('#proto');

const forhost = document.querySelector("#host");
const forport = document.querySelector("#prt");

const forhname = document.querySelector("#hname");

// ui variables fro brows info
const forappname = document.querySelector("#appname");
const forversion = document.querySelector("#appver");
const forplatF = document.querySelector("#platF");
const forLanguage = document.querySelector("#lang");
const forcooki = document.querySelector("#cooki");
//screen info
const forhei = document.querySelector("#hei");
const forwid = document.querySelector("#wid");
const forpx = document.querySelector("#pxdepth");
// browsing history info
const forBleng = document.querySelector("#Bleng");
const forBstate = document.querySelector("#Bstate");
//ui for screen info
const forShight = document.querySelector('#hei');
const forSwidth = document.querySelector('#wid');
const forSpxd = document.querySelector('#pxdepth');
//ui for browser history info

const browserLength = document.querySelector('#Bleng');
const browserState = document.querySelector('#Bstate');

//event
//for location
forhref.addEventListener("click", show);
forproto.addEventListener("click", sproto);
forhost.addEventListener("click", shost);
forport.addEventListener("click", sport);
forhname.addEventListener("click", shostn);

//event for browser info
forappname.addEventListener('click', sappname)
forversion.addEventListener('click', sversion)
forplatF.addEventListener('click', splat)
forLanguage.addEventListener('click', slangu)
forcooki.addEventListener('click', scooki)

//evevt for screen info

forShight.addEventListener('click', shHight);
forSwidth.addEventListener('click', shwidth);
forSpxd.addEventListener('click', shPixle);

//event for brows history info
browserLength.addEventListener('click', bhistory);
browserState.addEventListener('click', bstate);



//functions

function show(e) {
    forhref.innerHTML = window.location.href;

}

function sproto(e) {
    forproto.innerHTML = window.location.protocol;

}

function shost(e) {
    forhost.innerHTML = window.location.host;
}

function sport(e) {
    forport.innerHTML = window.location.port;
}

function shostn(e) {
    forhname.innerHTML = window.location.hostname;
}


//function forbrows history
function sappname(e) {
    forappname.innerHTML = navigator.appName
}

function sversion(e) {
    forversion.innerHTML = navigator.appVersion;

}

function splat(e) {
    forplatF.innerHTML = navigator.platform;

}

function slangu(e) {
    forLanguage.innerHTML = navigator.language;

}

function scooki(e) {
    forcooki.innerHTML = navigator.cookieEnabled;

}


//function for screen info
function shHight(e) {
    forShight.innerHTML = window.screen.height;
}

function shwidth(e) {
    forSwidth.innerHTML = window.screen.width;
}

function shPixle(e) {
    forSpxd.innerHTML = window.screen.pixelDepth;
}
// for bhistory info
function bhistory(e) {
    browserLength.innerHTML = window.history.length;
}

function bstate(e) {
    browserState.innerHTML = window.history.state;

}


//for reload
relod.addEventListener('click', relodepage);

function relodepage() {
    location.reload();
}