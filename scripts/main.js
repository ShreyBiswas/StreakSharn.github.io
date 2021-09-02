function changeText(id, text) {
    var element = document.querySelector("#" + id);
    element.textContent = text;
}
function changeImage(id, path) {
    if (id === void 0) { id = null; }
    var element = document.querySelector("#" + id);
    element.setAttribute('src', path);
}
function cycleImage(id, candidates) {
    var element = document.querySelector("#" + id);
    for (var i = 0; i < candidates.length; i += 1) {
        if (element.getAttribute('src') === candidates[i]) {
            if (i === candidates.length - 1) {
                changeImage(id, candidates[0]);
                return;
            }
            changeImage(id, candidates[i + 1]);
            return;
        }
    }
}
function checkEvent(id, event, func, info) {
    var element = document.querySelector("#" + id);
    element.addEventListener(event, function () { func(id, info); }); // when event is clicked, func triggers and passes info
}
checkEvent('logos', 'click', cycleImage, ['assets\\images\\qgss_logo.png', 'assets\\images\\qxq_logo.jpeg']);
checkEvent('changer', 'click', changeText, 'This is being displayed by Javascript (well, Typescript) - not HTML/CSS!');
function prompter(text) {
    var named = prompt(text);
    sessionStorage.name = named;
}
var theButton = document.querySelector('button');
theButton.onclick = function () { prompter('say smethin'); };
/* if (!sessionStorage.name) {
  prompter('say something');
} else {
  alert(sessionStorage.name);
}
*/
