// Constants
import images from "../../constants/images";

// Styles
import "./page-main-section-images.css";

const PageMainSectionImages = () => (
    <section className="images">
        {
            images.map(({ small, large, alt }) => {
                return <picture key={alt}>
                    <source
                        media="(min-width: 720px )"
                        srcSet={large}
                    />
                    <img
                        src={small}
                        alt={alt}
                    />
                </picture>
            })
        }
    </section>
)

export default PageMainSectionImages;