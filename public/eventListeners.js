export function infoClicked()  {
    const infoElement = document.querySelector('.information');
    infoElement.style.display = 'flex';
    setTimeout(function () {
        infoElement.style.opacity = 1;
    }, 50);
};