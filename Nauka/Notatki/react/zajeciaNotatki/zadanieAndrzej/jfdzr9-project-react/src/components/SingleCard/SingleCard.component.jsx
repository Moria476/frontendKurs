import { JobCard, JobCardLocation, JobCardPosition, JobInfos, JobInfosDivider } from "./SingleCard.styled";
import { CompanyLogo } from "../CompanyLogo/CompanyLogo.styled";
import PodCompanyLogo from "../../assets/logos/pod.svg";

export const SingleCard = ({ job }) => {
  const { postedAt, contract, company, position, location, logoBackground } = job;
  return (
    <JobCard>
      <CompanyLogo background={logoBackground} small>
        <img src={PodCompanyLogo} alt="Pod company logo" />
      </CompanyLogo>
      <JobInfos>
        <p>{postedAt}</p>
        <JobInfosDivider />
        <p>{contract}</p>
      </JobInfos>
      <a href="single-job.html">
        <JobCardPosition>{position}</JobCardPosition>
      </a>
      <p>{company}</p>
      <JobCardLocation>{location}</JobCardLocation>
    </JobCard>
  );
};
