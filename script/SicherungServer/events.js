/************************ fontsize *************************/
function fontsize(size) {
    var icon_big = document.getElementById("increase");
    var icon_small = document.getElementById("decrease");
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
    var galleryType = clicked;
    var ph = document.getElementById('placeholder');
    ph.style.display = "block";
    var xmlHttp = null;


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

    if (galleryType.id == "innen") {
        xmlHttp.open("GET", "innen.xml", true);
    } else if (galleryType.id == "aussen") {
        xmlHttp.open("GET", "aussen.xml", true);
    }

    xmlHttp.send();
}


function parseXML(xml) {

    var x, xmlDoc, image, caption;
    xmlDoc = xml.responseXML;
    x = xmlDoc.getElementsByTagName("PICTURE");
    for (i = 0; i < 1; i++) {
        image = x[i].getElementsByTagName("URL")[0].childNodes[0].nodeValue;
        caption = x[i].getElementsByTagName("CAPTION")[0].childNodes[0].nodeValue;

    }
    
    document.getElementById('lightboxImage').src = image;
    var ph = document.getElementById('placeholder');
    ph.style.display = "none";
    var lb = document.getElementById('lightbox');
            lb.style.display = "block";

}

function lightboxExit() {
    var lbexit = document.getElementById('lightbox');
    lbexit.style.display = "none";
}


/******************** side navigation ***************************/

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    if (window.matchMedia("(min-width:500px)").matches) {
        console.log(window.matchMedia("(min-width:500px)").matches);
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
    var actScroll = window.pageYOffset + 100;

    var start = document.getElementById('start').offsetTop;
    var ueberuns = document.getElementById('ueberuns').offsetTop;
    var dienstleistungen = document.getElementById('dienstleistungen').offsetTop;
    var schwerpunkte = document.getElementById('schwerpunkte').offsetTop;
    var projekte = document.getElementById('projekte').offsetTop;
    var team = document.getElementById('team').offsetTop;
    var kontakt = document.getElementById('kontakt').offsetTop;

    if (actScroll < ueberuns) {
        highlightElement('1');
    } else if (actScroll >= ueberuns && actScroll < dienstleistungen) {
        highlightElement('2');
    } else if (actScroll >= dienstleistungen && actScroll < schwerpunkte) {
        highlightElement('3');
    } else if (actScroll >= schwerpunkte && actScroll < projekte) {
        highlightElement('4');
    } else if (actScroll >= projekte && actScroll < team) {
        highlightElement('5');
    } else if (actScroll >= team && actScroll < kontakt) {
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
