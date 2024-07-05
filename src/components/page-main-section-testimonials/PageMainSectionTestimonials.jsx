// Constants
import testimonials from "../../constants/testimonials";

// Components
import Article from "../article/Article";

// Styles
import "./page-main-section-testimonials.css";

function PageMainSectionTestimonials() {
    return (
        <section className="testimonials">
            <header>
                <h2 className="heading-s">
                    client testimonials
                </h2>
            </header>
            <div className="testimonials-container">
                {
                    testimonials.map((testimonial) => {
                        return <Article
                            type="testimonial"
                            content={testimonial}
                            key={testimonial.author}
                        />;
                    })
                }
            </div>
        </section>
    );
}

export default PageMainSectionTestimonials;