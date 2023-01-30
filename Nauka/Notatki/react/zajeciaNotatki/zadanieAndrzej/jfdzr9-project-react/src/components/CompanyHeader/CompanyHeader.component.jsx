import Button from "../ui/Button/Button.styled";
import { CompanyHeaderSection, CompanyHeaderInfos } from "./CompanyHeader.styled";
import ScootCompanyLogo from "../../assets/logos/scoot.svg";
import { CompanyLogo } from "../CompanyLogo/CompanyLogo.styled";

const CompanyHeader = () => {
  return (
    <CompanyHeaderSection>
      <CompanyLogo background="hsl(36, 87%, 49%)" big>
        <img src={ScootCompanyLogo} alt="Scoot company logo" />
      </CompanyLogo>
      <CompanyHeaderInfos>
        <div>
          <h2>Scoot</h2>
          <p>https://example.com/scoot</p>
        </div>
        <a href="https://example.com/scoot" target="_blank" rel="noreferrer">
          <Button secondary>Company Site</Button>
        </a>
      </CompanyHeaderInfos>
    </CompanyHeaderSection>
  );
};

export default CompanyHeader;
