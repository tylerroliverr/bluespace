"use client";
import { useEffect } from 'react';

export default function ArenaData() {

    const shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const APIUrls = [
        {
            trinkets: "bluespace-trinkets-treasures",
            etherial: "bluespace-etherial-religion",
            patterns: "bluespace-patterns-shapes",
            swords: "bluespace-swords-armour",
            grass: "bluespace-grass-cottage",
            graphic: "bluespace-graphic-digital"
        }
    ];

    const fetchData = async (type) => {
        const apiUrl = `https://api.are.na/v2/channels/${type}/contents?per=100`;
    
        try {
            const response = await fetch(apiUrl);
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const data = await response.json();

            const filteredData = data.contents.filter(block => block.image && block.image.display && block.image.display.url && block.description);
            
            const mappedData = filteredData.map(block => ({
                imageUrl: block.image.display.url,
                description: block.description
            }));

            return mappedData;
    
        } catch (error) {
            console.error('Error fetching data:', error);
            return [];
        }
    };

    useEffect(() => {
        const getImages = async (type) => {
            try {
                const imageContainers = document.querySelector('.imageContainer');
                imageContainers.innerHTML = ''; // Clear existing content

                const images = await fetchData(type);
                const shuffledImages = shuffleArray(images);

                shuffledImages.forEach(({imageUrl, description}) => {
                    const imageBox = document.createElement('div');
                    imageBox.classList.add('imageBox');
    
                    const imgElement = document.createElement('img');
                    imgElement.src = imageUrl;
                    imgElement.alt = 'Image from API';
                    imgElement.classList.add('imageElement');
    
                    const descriptionElement = document.createElement('p');
                    descriptionElement.textContent = description;
                    descriptionElement.classList.add('imageDescription');
    
                    imageBox.appendChild(imgElement);
                    imageBox.appendChild(descriptionElement);
                    imageContainers.appendChild(imageBox);
                });

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Assuming you have some way to determine what the user clicked
        const handleClick = (type) => {
            getImages(type);
        };

        const trinketsButton = document.querySelector('#trinkets');
        const swordsButton = document.querySelector('#swords');
        const grassButton = document.querySelector('#grass');
        const patternsButton = document.querySelector('#patterns');
        const etherialButton = document.querySelector('#etherial');
        const graphicButton = document.querySelector('#graphic');

        trinketsButton.addEventListener('click', () => handleClick(APIUrls[0].trinkets));
        swordsButton.addEventListener('click', () => handleClick(APIUrls[0].swords));
        grassButton.addEventListener('click', () => handleClick(APIUrls[0].grass));
        patternsButton.addEventListener('click', () => handleClick(APIUrls[0].patterns));
        graphicButton.addEventListener('click', () => handleClick(APIUrls[0].graphic));
        etherialButton.addEventListener('click', () => handleClick(APIUrls[0].etherial));

    }, []);

}