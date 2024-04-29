export function infoClicked()  {
    const infoElement = document.querySelector('.information');
    const imageContainer = document.querySelector('.imageContainer');
    infoElement.style.display = 'flex';
    setTimeout(function () {
        imageContainer.classList.add('fade');
        infoElement.style.opacity = 1;
    }, 50);
};

export function hideInfo() {
    const infoElement = document.querySelector('.information');
    const imageContainer = document.querySelector('.imageContainer');
    infoElement.style.display = 'none';
    setTimeout(function () {
        imageContainer.classList.remove('fade');
        infoElement.style.opacity = 0;
    }, 50);
}