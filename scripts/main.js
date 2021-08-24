function changeText(tag, text) {
    var myHeading = document.querySelector(tag);
    myHeading.textContent = text;
}
document.querySelector('html').onclick = function () {
    changeText('p', 'This is being displayed by Javascript (well, Typescript) - not HTML/CSS!');
};
