import { useState } from "react";

// PropertyGallery component displays a main property image with clickable thumbnails
function PropertyGallery({ images }) {
    // State to track the currently selected main image
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
                        src={process.env.PUBLIC_URL + img} // prepend PUBLIC_URL
                        alt={`Thumbnail ${index + 1}`}
                        className={img === mainImage ? "active" : ""}
                        onClick={() => setMainImage(img)}
                    />
                ))}
            </div>
        </div>
    );
}

export default PropertyGallery;