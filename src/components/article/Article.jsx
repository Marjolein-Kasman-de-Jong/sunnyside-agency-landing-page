// Styles
import "./article.css";

function Article({ type, content }) {
    const { title, text, link, avatar, author, jobDescription } = content;

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
                {
                    // Testimonial header
                    type === "testimonial" &&
                    <img 
                        src={avatar} 
                        alt={author} 
                    />
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
                // Testimonial paragraph
                type === "testimonial" &&
                <p className="paragraph-testimonial">
                    {text}
                </p>
            }
            {
                // Usp footer
                link &&
                <footer>
                    <a 
                        href="#" 
                        className={`link-main-${link}`}
                    >
                        learn more
                    </a>
                </footer>
            }
            {
                // Testimonial footer
                type === "testimonial" &&
                <footer>
                    <p className="paragraph-testimonial-author">
                        {author}
                    </p>
                    <p className="paragraph-testimonial-job-description">
                        {jobDescription}
                    </p>
                </footer> 
            }
        </article>
    );
}

export default Article;