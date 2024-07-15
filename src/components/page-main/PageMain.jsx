// Components
import PageMainSectionHero from "../page-main-section-hero/PageMainSectionHero";
import PageMainSectionUsps from "../page-main-section-usps/PageMainSectionUsps";
import PageMainSectionTestimonials from "../page-main-section-testimonials/PageMainSectionTestimonials";
import PageMainSectionImages from "../page-main-section-images/PageMainSectionImages";

const PageMain = () => (
    <main>
        <PageMainSectionHero />
        <PageMainSectionUsps />
        <PageMainSectionTestimonials />
        <PageMainSectionImages />
    </main>
)


export default PageMain;