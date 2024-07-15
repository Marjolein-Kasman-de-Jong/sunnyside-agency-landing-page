// Styles
import "./article.css";

function Article({ type, content, number }) {
    const { title, text, link, avatar, author, jobDescription } = content;

    const preventDefaultBehavior = (e) => {
        e.preventDefault();
    };

    const renderHeader = () => {
        switch (type) {
            case "usp":
                return  <h2 className={link ? "heading-l" : "heading-m"}>
                            {title}
                        </h2>;
            case "testimonial":
                return  <img 
                            src={avatar} 
                            alt={author} 
                        />;
            default:
                return null;
        }
    };

    const renderParagraph = () => {
        switch (type) {
            case "usp":
                return  <p className={`${link ? "paragraph-usp-l" : "paragraph-usp-s"} ${number}`}>
                            {text}
                        </p>;
            case "testimonial":
                return  <p className="paragraph-testimonial">
                            {text}
                        </p>;
            default:
                return null;
        }
    };

    const renderFooter = () => {
        if (link) {
            return (
                <footer>
                    <a 
                        href="" 
                        className={`link-main-${link}`} 
                        onClick={preventDefaultBehavior}
                    >
                        learn more
                    </a>
                </footer>
            );
        }

        if (type === "testimonial") {
            return (
                <footer>
                    <p className="paragraph-testimonial-author">
                        {author}
                    </p>
                    <p className="paragraph-testimonial-job-description">
                        {jobDescription}
                    </p>
                </footer>
            );
        }

        return null;
    };

    return (
        <article className={type}>
            <header>
                {renderHeader()}
            </header>
            {renderParagraph()}
            {renderFooter()}
        </article>
    );
}

export default Article;