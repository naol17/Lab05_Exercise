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