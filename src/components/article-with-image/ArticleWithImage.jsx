// Components
import Article from "../article/Article";

// Styles
import "./article-with-image.css";

const ArticleWithImage = ({ image, altText, content, number }) => (
    <section>
        <picture>
            <source
                media="(min-width: 720px)"
                srcSet={image.large}
            />
            <img
                src={image.small}
                alt={altText}
            />
        </picture>
        <Article
            type="usp"
            content={content}
            number={number}
        />
    </section>
);

export default ArticleWithImage;