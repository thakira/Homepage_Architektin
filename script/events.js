/************************ fontsize *************************/
function fontsize(size) {
    let icon_big = document.getElementById("increase");
    let icon_small = document.getElementById("decrease");
    if (size === "increase") {
        document.body.style.fontSize = "20px";
        icon_big.style.display = "none";
        icon_small.style.display = "initial";
    } else {
        document.body.style.fontSize = "16px";
        icon_big.style.display = "initial";
        icon_small.style.display = "none";
    }
}


/************************** Lightbox ****************************/

function lightbox(clicked) {
    let galleryType = clicked;
    let ph = document.getElementById('placeholder');
    ph.style.display = "block";
    let xmlHttp = null;


    if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === 4) {
            parseXML(this);
        }
    };

    if (galleryType.id == "indoor") {
        xmlHttp.open("GET", "indoor.xml", true);
    } else if (galleryType.id == "outdoor") {
        xmlHttp.open("GET", "outdoor.xml", true);
    }

    xmlHttp.send();
}


function parseXML(xml) {

    let x, xmlDoc, image, caption;
    xmlDoc = xml.responseXML;
    x = xmlDoc.getElementsByTagName("PICTURE");
    for (i = 0; i < 1; i++) {
        image = x[i].getElementsByTagName("URL")[0].childNodes[0].nodeValue;
        caption = x[i].getElementsByTagName("CAPTION")[0].childNodes[0].nodeValue;

    }
    
    document.getElementById('lightboxImage').src = image;
    let ph = document.getElementById('placeholder');
    ph.style.display = "none";
    let lb = document.getElementById('lightbox');
            lb.style.display = "block";

}

function lightboxExit() {
    let lbexit = document.getElementById('lightbox');
    lbexit.style.display = "none";
}


/******************** side navigation ***************************/

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    if (window.matchMedia("(min-width:500px)").matches) {
         document.getElementById('main').style.marginRight = "250px";
        
    }
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    if (window.matchMedia("(min-width:500px)").matches) {
        document.getElementById('main').style.marginRight = "0";
    }
}


/********************* active navigation elements **************************/

function activeNav() {
    let actScroll = window.pageYOffset + 100;

    let aboutUs = document.getElementById('aboutUs').offsetTop;
    let services = document.getElementById('services').offsetTop;
    let mainFocus = document.getElementById('mainFocus').offsetTop;
    let projects = document.getElementById('projects').offsetTop;
    let team = document.getElementById('team').offsetTop;
    let contact = document.getElementById('contact').offsetTop;

    if (actScroll < aboutUs) {
        highlightElement('1');
    } else if (actScroll >= aboutUs && actScroll < services) {
        highlightElement('2');
    } else if (actScroll >= services && actScroll < mainFocus) {
        highlightElement('3');
    } else if (actScroll >= mainFocus && actScroll < projects) {
        highlightElement('4');
    } else if (actScroll >= projects && actScroll < team) {
        highlightElement('5');
    } else if (actScroll >= team && actScroll < contact) {
        highlightElement('6');
    } else {
        highlightElement('7');
    }
}


function highlightElement(element) {
    let activeElement = document.getElementById('mySidenav').getElementsByClassName('active');

    while (activeElement.length > 0) {
        activeElement[0].classList.remove('active');
    }

    let newActive = document.getElementById('mySidenav').getElementsByTagName('a');
    newActive[element].classList.add('active');
}
