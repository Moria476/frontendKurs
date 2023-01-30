import { JobBottomBannerSection } from "./JobBottomBanner.styled";
import Button from "../ui/Button/Button.styled";

const JobBottomBanner = () => {
  return (
    <footer>
      <JobBottomBannerSection>
        <div>
          <h3>Senior Software Engineer</h3>
          <p>Scoot</p>
        </div>
        <a href="https://example.com/scoot/apply" target="_blank" rel="noreferrer">
          <Button wide>Apply now</Button>
        </a>
      </JobBottomBannerSection>
    </footer>
  );
};

export default JobBottomBanner;
