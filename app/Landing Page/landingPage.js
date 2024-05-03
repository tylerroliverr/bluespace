"use client";
import { useEffect, useState } from "react";
import useFetchData from "../Data Fetching/fetchArenaData";
import LeftMenu from "../Components/LeftMenu";
import ImageContainer from "../Components/ImageContainer";
import shuffleArray from "../Components/shuffleArray";
import Loading from "../loading";

export default function LandingPage() {

    const [images, setImages] = useState([]);
    const [showImages, setShowImages] = useState(false);
    const [loading, setLoading] = useState(false);
    const [currentType, setCurrentType] = useState('');
    const fetchData = useFetchData();

    // Fetch data when type changes
    useEffect(() => {
        const fetchDataAndSetImages = async () => {
            if (currentType) {
                setLoading(true);
                try {
                    const fetchedImages = await fetchData(currentType);
                    setImages(fetchedImages);
                    setLoading(false);
                    setShowImages(true);
                } catch (error) {
                    console.error('Error fetching data:', error);
                    setLoading(false);
                }
            }
        };

        fetchDataAndSetImages();
    }, [currentType, fetchData]);

    const handleClick = (type) => {
        window.scrollTo(0, 0); // Scroll to top
        setCurrentType(type);
    };

    return (
        <div className="wrapper">
            <LeftMenu
                items={[
                    { label: 'swords', type: 'bluespace-swords-armour' },
                    { label: 'trinkets', type: 'bluespace-trinkets-treasures' },
                    { label: 'grass', type: 'bluespace-grass-cottage' },
                    { label: 'patterns', type: 'bluespace-patterns-shapes' },
                    { label: 'etherial', type: 'bluespace-etherial-religion' },
                    { label: 'graphic', type: 'bluespace-graphic-digital' }
                ]}
                handleClick={handleClick}
            />
            <div className="imagesWrapper">
                {loading && <Loading />}
                {showImages && <ImageContainer images={images} />}
            </div>
        </div>
    );
}