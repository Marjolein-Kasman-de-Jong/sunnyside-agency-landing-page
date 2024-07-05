// Styles
import "./article.css";

function Article({ type, content }) {
    const { title, text, link } = content;

    return (
        <article className={type}>
            <header>
                {
                    // Usp header
                    type === "usp" &&
                    <h2 className={link ? "heading-l" : "heading-m"}>
                        {title}
                    </h2>
                }
            </header>
            {
                // Usp paragraph
                type === "usp" &&
                <p className={link ? "paragraph-usp-l" : "paragraph-usp-s"}>
                    {text}
                </p>
            }
            {
                // Usp footer
                link &&
                <footer>
                    <a href="#" className={`link-main-${link}`}>learn more</a>
                </footer>
            }
        </article>
    );
}

export default Article;
