// Constants
import usps from "../../constants/usps";

// Components
import ArticleWithImage from "../article-with-image/ArticleWithImage";

// Images
import transformSmall from "../../assets/mobile/image-transform.jpg";
import transformLarge from "../../assets/desktop/image-transform.jpg";
import standOutSmall from "../../assets/mobile/image-stand-out.jpg";
import standOutLarge from "../../assets/desktop/image-stand-out.jpg";
import designSmall from "../../assets/mobile/image-graphic-design.jpg";
import designLarge from "../../assets/desktop/image-graphic-design.jpg";
import photographySmall from "../../assets/mobile/image-photography.jpg";
import photographyLarge from "../../assets/desktop/image-photography.jpg";

const images = {
    transform: {
        small: transformSmall,
        large: transformLarge,
    },
    standOut: {
        small: standOutSmall,
        large: standOutLarge,
    },
    design: {
        small: designSmall,
        large: designLarge,
    },
    photography: {
        small: photographySmall,
        large: photographyLarge,
    },
};

// Styles
import "./page-main-section-usps.css";

function PageMainSectionUsps() {
    return (
        <section className="usps">
            <section className="text-outside">
                <ArticleWithImage
                    image={images.transform}
                    altText="Egg on a yellow background"
                    content={usps[0]}
                />
                <ArticleWithImage
                    image={images.standOut}
                    altText="Glass on a red background"
                    content={usps[1]}
                />
            </section>
            <section className="text-inside">
                <ArticleWithImage
                    image={images.design}
                    altText="Cherries on a mint background"
                    content={usps[2]}
                />
                <ArticleWithImage
                    image={images.photography}
                    altText="Orange on a blue background"
                    content={usps[3]}
                />
            </section>
        </section>
    );
}

export default PageMainSectionUsps;