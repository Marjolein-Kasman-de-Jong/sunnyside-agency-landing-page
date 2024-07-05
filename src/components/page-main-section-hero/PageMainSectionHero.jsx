// Images
import arrow from "../../assets/icon-arrow-down.svg";

// Styles
import "./page-main-section-hero.css";

function PageMainSectionHero() {
    return (
        <section className="hero">
            <header>
                <h1 className="heading-xl">
                    We are creatives
                </h1>
            </header>
            <img
                src={arrow}
                alt="Arrow"
            />
        </section>
    );
}

export default PageMainSectionHero;