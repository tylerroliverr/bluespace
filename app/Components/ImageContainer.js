export default function ImageContainer({ images }) {
    return (
        <>
        <div className="imageContainer">
            {images.map(({ imageUrl, description }, index) => (
                <div key={index} className="imageBox">
                    <img src={imageUrl} alt="Image from API" className="imageElement" />
                    <p className="imageDescription">{description}</p>
                </div>
            ))}
        </div>
        </>
    )
}