export function infoClicked()  {
    const infoElement = document.querySelector('.information');
    const imageContainer = document.querySelector('.imageContainer');
    infoElement.style.display = 'flex';
    imageContainer.classList.add('fade');
    setTimeout(function () {
        infoElement.style.opacity = 1;
    }, 50);
};

export function hideInfo() {
    const infoElement = document.querySelector('.information');
    const imageContainer = document.querySelector('.imageContainer');
    infoElement.style.display = 'none';
    imageContainer.classList.remove('fade');
    setTimeout(function () {
        infoElement.style.opacity = 0;
    }, 50);
}