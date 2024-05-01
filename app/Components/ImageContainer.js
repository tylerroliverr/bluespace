<div className="imagesWrapper">
{loading && <Loading/>}
    <div className={`imageContainer ${showImages ? '' : 'fade'}`}>
        {images.map(({ imageUrl, description }) => (
            <div key={imageUrl} className="imageBox">
                <img src={imageUrl} alt="Image from API" className="imageElement" />
                <p className="imageDescription">{description}</p>
            </div>
        ))}
    </div>
</div>