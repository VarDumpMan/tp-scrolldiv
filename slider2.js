// Travail sur le fichier slider_scrollable

function selection( element ) {
    var recupere = document.querySelector(element);
    return recupere;
}
var container = selection(".container");
var enfant = Array.from(container.children), i = 0, containerWidth, right2, left2;
right2 = selection('.right2');
left2 = selection('.left2');
enfantWidth = enfant[0].getBoundingClientRect().width;
right2.onclick = ()=> {
    container.scrollBy(enfantWidth,0);

}
left2.onclick = ()=> {
    container.scrollBy(-enfantWidth,0);
}
