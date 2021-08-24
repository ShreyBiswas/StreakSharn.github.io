function changeText(id: string, text: string) {
  const element: HTMLElement = document.querySelector(`#${id}`);
  element.textContent = text;
}

function changeImage(id: string = null, path: string) {
  const element: HTMLElement = document.querySelector(`#${id}`);
  element.setAttribute('src', path);
}

function cycleImage(id: string, candidates: string[]) {
  const element: HTMLElement = document.querySelector(`#${id}`);

  for (let i: number = 0; i < candidates.length; i += 1) {
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

function checkEvent(id: string, event: string, func: Function, info: any) {
  const element: HTMLElement = document.querySelector(`#${id}`);
  element.addEventListener(event, () => { func(id, info); }); // when event is clicked, func triggers and passes info
}

checkEvent('logos', 'click', cycleImage, ['assets\\images\\qgss_logo.png', 'assets\\images\\qxq_logo.jpeg']);
checkEvent('changer', 'click', changeText, 'This is being displayed by Javascript (well, Typescript) - not HTML/CSS!');

const theButton = document.querySelector('button');
