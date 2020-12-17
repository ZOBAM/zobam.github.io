var bodyEl = document.getElementsByTagName('body')[0];
var mainEl = document.createElement('main');
var asideEl = document.createElement('aside');
var articleEl = document.createElement('article');
var ulEl = document.createElement('ul');
var navEl = document.createElement('nav');
var h3El = document.createElement('h3');
var pEl = document.createElement('p');
var imgEl = document.createElement('img');
navEl.style.height = "auto";
navEl.style.backgroundColor = "white";
navEl.style.padding = "0rem 0rem";
//navEl.style.margin = "0px 0px 0px -1rem";
var links = ['Home', 'Resume', 'Services', 'Portfolio','Blog', 'Contacts'];
var info = ['Web developer', 'Photographer', 'Music lover', 'Single'];
var navIcons = ['home', 'address-book', 'chart-bar', 'suitcase', 'blog', 'envelope'];
var socialIcons = ['twitter','facebook','google-plus-g','instagram','linkedin'];
bodyEl.style.backgroundColor = "black";
bodyEl.style.color = "white";
bodyEl.style.fontSize = "1.2em";
bodyEl.style.width = "76%";
bodyEl.style.border = "2px solid grey";
bodyEl.style.margin = "1rem auto";
mainEl.style.display = "flex";
mainEl.style.backgroundColor = "blue"
//mainEl.style.padding = "1rem";
mainEl.style.marginTop = "0rem";
asideEl.style.width = "33%";
//asideEl.style.minHeight = "18rem";
asideEl.style.backgroundColor = "#545D6E";
asideEl.style.padding = "2vw 4vw";
articleEl.style.width = "67%";
//articleEl.style.minHeight = "18rem";
articleEl.style.backgroundColor = "#00BDBF";
articleEl.style.padding = "2vw 4vw";

ulEl.style.backgroundColor = "white";
ulEl.style.display = "flex";
//ulEl.style.flexWrap = "wrap";
ulEl.style.justifyContent = "left";
ulEl.style.margin = "0px 0px 0px 0rem";
ulEl.style.width = "94%";
//ulEl.style.backgroundColor = "red";

for(let i=0;i<links.length; i++ ){
    let liEl = document.createElement('li');
    //liEl.style.display = "inline-block";
    liEl.style.padding = "25px 10px";
    liEl.style.margin = "1px 1px";
    liEl.style.backgroundColor = "#F1F0F6";
    liEl.innerHTML = `<i class="fa fa-${navIcons[i]}" style="font-size:1.2em;color:rgb(84, 93, 110,.5)"></i><br><a href = "" style="text-decoration: none;color:#8a8a8a">${links[i].toUpperCase()}</a>`;
    if(i ==0){
        liEl.style.margin = "-4px 1px 1px -1rem ";
        liEl.style.transform = "scaleY(1.05)";
        liEl.style.backgroundColor = "#E2E5EE";
        liEl.innerHTML = `<span style = "display:flex;width:50px;height:50px;background-color:#545D6E;color:#00BDBF;justify-content:center;align-items:center;border-radius:100%"><i class="fa fa-home" style="font-size:1.2em"></i></span><br><a href = "" style="text-decoration: none;color:#4a4a4a;font-weight:bold">${links[i].toUpperCase()}</a>`;
    }
    liEl.style.height = "100px";
    liEl.style.flex = "25%";
    liEl.style.display = "flex";
    liEl.style.justifyContent = "center";
    liEl.style.alignItems = "center";
    liEl.style.flexDirection = "column";
    liEl.style.listStyle = "none";
    //liEl.style.listStyle = "none";
    //TODO HOVER
    //let liTextNode = document.createTextNode(link);
    liEl.style.border = "0px solid green"
    //liTextNode.parent().style.padding = "5px 10px";
    //liEl.appendChild(liTextNode);
    ulEl.appendChild(liEl);
}
//text node for h3
//var h3Text = ;
h3El.appendChild(document.createTextNode("DON ZOBY."));
h3El.style.color = "rgb(200,200,200,0.99)";
asideEl.appendChild(h3El);
//get info and append them
var ulEl2 = document.createElement('ul');
for(let i = 0; i<info.length;i++){
    liEl = document.createElement('li');
    liEl.style.listStyle = "none";
    liEl.style.margin = "0px 0px 0px -2rem";
    liEl.style.color = "rgb(200,200,200,0.8)";
    liEl.style.fontSize = "1em";
    liEl.appendChild(document.createTextNode(info[i]));
    ulEl2.appendChild(liEl);
}
asideEl.appendChild(ulEl2);
//add social media icons
pEl2 = document.createElement('p');
for(let icon of socialIcons){
    pEl2.innerHTML += `<i class="fab fa-${icon}" style="margin:7px;color:rgb(200,200,200,0.9);"></i>`;
}    
asideEl.appendChild(pEl2);
//add copyright message
pEl3 = document.createElement('p');
pEl3.innerHTML = `<span style="display:block; margin-top:7em;font-size: .8em;color:rgb(200,200,200,0.8);"><i class="fas fa-copyright"></i>  Donzoby 2020. All right reserved</span>`;
asideEl.appendChild(pEl3);
//add image
imgEl.setAttribute('src','media/donzoby.jpg');
imgEl.style.float = "right";
imgEl.style.maxWidth = "40%";
imgEl.style.border = "6px solid white";
imgEl.style.margin = "0px 0px 0px 1rem";
articleEl.appendChild(imgEl);
//for second h3 right
h3El = document.createElement('h3');
h3El.appendChild(document.createTextNode("SAVVY, CREATIVE, DETERMINED."));
articleEl.appendChild(h3El);
//add article p contents
pEl.appendChild(document.createTextNode("I am a Developer based in Enugu. I've been in business since 2017 and I work mainly with Design Agentcies."));
articleEl.appendChild(pEl);
pEl = document.createElement('p');
pEl.appendChild(document.createTextNode("While I specialize in Front end development and Wordpress, I now also do Mobile and Responsive development."));
articleEl.appendChild(pEl);

mainEl.appendChild(asideEl);
mainEl.appendChild(articleEl);
navEl.appendChild(ulEl)
bodyEl.appendChild(navEl);
bodyEl.appendChild(mainEl);

