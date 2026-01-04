import { useState } from "react";

function PropertyGallery({ images }) {
    const [mainImage, setMainImage] = useState(images[0]);

    return (
        <div className="gallery-wrapper">
            {/* Main image */}
            <div className="gallery-main">
                <img src={mainImage} alt="Selected property view" />
            </div>

            {/* Thumbnails */}
            <div className="gallery-thumbnails">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Thumbnail 4{index + 1}`}
                        className={img === mainImage ? "active" : ""}
                        onClick={() => setMainImage(img)}
                    />
                ))}
            </div>
        </div>
    );
}

export default PropertyGallery;