const containerEL=document.querySelector(".container");
const careers = ["youtuber","web dev","freelancer","instructor"];
let ci=0;
let chi=0;
updatetext();
function updatetext(){
  chi++;
containerEL.innerHTML= `<h1> I am ${careers[ci].slice(0,1)==="i"?"an":"a"} ${careers[ci].slice(0,chi)} </h1>`;

if(chi===careers[ci].length){
ci++;
chi=0;
}
if(ci===careers.length){
  ci=0;
}
setTimeout(updatetext,400);
}
