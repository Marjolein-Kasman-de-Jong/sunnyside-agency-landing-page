// Constants
import usps from "../../constants/usps";

// Components
import Article from "../article/Article";

// Images
import transformSmall from "../../assets/mobile/image-transform.jpg";
import transformLarge from "../../assets/desktop/image-transform.jpg";
import standOutSmall from "../../assets/mobile/image-stand-out.jpg";
import standOutLarge from "../../assets/desktop/image-stand-out.jpg";
import designSmall from "../../assets/mobile/image-graphic-design.jpg";
import designLarge from "../../assets/desktop/image-graphic-design.jpg";
import photographySmall from "../../assets/mobile/image-photography.jpg";
import photographyLarge from "../../assets/desktop/image-photography.jpg";

// Styles
import "./page-main-section-usps.css";

function PageMainSectionUsps() {
    return (
        <section className="usps">
            <section className="text-outside">
                <section>
                    <picture>
                        <source media="(min-width: 720px)" srcSet={transformLarge} />
                        <img src={transformSmall} alt="Egg on a yellow background" />
                    </picture>
                    <Article type="usp" content={usps[0]} />
                </section>
                <section>
                    <picture>
                        <source media="(min-width: 720px)" srcSet={standOutLarge} />
                        <img src={standOutSmall} alt="Glass on a red background" />
                    </picture>
                    <Article type="usp" content={usps[1]} />
                </section>
            </section>
            <section className="text-inside">
                <section>
                    <picture>
                        <source media="(min-width: 720px)" srcSet={designLarge} />
                        <img src={designSmall} alt="Cherries on a mint background" />
                    </picture>
                    <Article type="usp" content={usps[2]} />
                </section>
                <section>
                    <picture>
                        <source media="(min-width: 720px)" srcSet={photographyLarge} />
                        <img src={photographySmall} alt="Orange on a blue background" />
                    </picture>
                    <Article type="usp" content={usps[3]} />
                </section>
            </section>
        </section>
    );
}

export default PageMainSectionUsps;