"use client";
import { useState } from 'react';

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
        return data.contents.filter(block => block.image && block.image.display && block.image.display.url && block.description).map(block => ({
            imageUrl: block.image.display.url,
            description: block.description,
        }));

    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};

export default function ArenaData() {

    const [images, setImages] = useState([]);

    const getImages = async (type) => {
        try {
            const fetchedImages = await fetchData(type);
            const shuffledImages = shuffleArray(fetchedImages);
            setImages(shuffledImages);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Assuming you have some way to determine what the user clicked
    const handleClick = (type) => {
        getImages(type);
    };

    return (
        <>
            <div className="wrapper">
                <div className="leftMenu">
                    <p onClick={() => handleClick(APIUrls[0].swords)} id="swords">swords</p>
                    <p onClick={() => handleClick(APIUrls[0].trinkets)} id="trinkets">trinkets</p>
                    <p onClick={() => handleClick(APIUrls[0].grass)} id="grass">grass</p>
                    <p onClick={() => handleClick(APIUrls[0].patterns)} id="patterns">patterns</p>
                    <p onClick={() => handleClick(APIUrls[0].etherial)} id="etherial">etherial</p>
                    <p onClick={() => handleClick(APIUrls[0].graphic)} id="graphic">graphic</p>
                </div>
                <div className="imagesWrapper">
                    <div className="imageContainer">
                        {images.map(({ imageUrl, description }) => (
                            <div key={imageUrl} className="imageBox">
                                <img src={imageUrl} alt="Image from API" className="imageElement" />
                                <p className="imageDescription">{description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );

}