import {
  JobDescriptionSection,
  JobDescriptionDetails,
  JobInfos,
  JobInfosDivider,
  JobDescriptionPosition,
  JobItemsDots,
  JobItemsNumbers,
} from "./JobDescription.styled";
import Button from "../ui/Button/Button.styled";

const JobDescription = () => {
  return (
    <JobDescriptionSection>
      <JobDescriptionDetails>
        <div>
          <JobInfos>
            <p>5h ago</p>
            <JobInfosDivider />
            <p>Full Time</p>
          </JobInfos>
          <JobDescriptionPosition>Senior Software Engineer</JobDescriptionPosition>
          <h4>United Kingdom</h4>
        </div>
        <a href="https://example.com/scoot/apply" target="_blank" rel="noreferrer">
          <Button wide>Apply now</Button>
        </a>
      </JobDescriptionDetails>
      <div>
        <p>
          Scoot is looking for a Senior Software Engineer passionate about building approachable, innovative and
          user-first experiences to join our small but growing Engineering team. You will be responsible for building
          and maintaining front end functionality across all of Scoot’s applications, fostering a growing team of
          software engineers, and helping drive and maintain best software patterns and practices in our codebase.
        </p>
      </div>
      <div>
        <h3>Requirements</h3>
        <p>
          The ideal candidate is as passionate about solving challenges through technology. They are well-versed in
          building proof of concepts from scratch and taking these POCs to production and scale. The right fit will have
          the engineering experience to build and iterate quickly and is comfortable working with product and design to
          set the technical strategy and roadmap.
        </p>
        <ul>
          <li>
            <JobItemsDots />
            5+ years of industry experience in a software engineering role, preferably building a SaaS product. You can
            demonstrate significant impact that your work has had on the product and/or the team.
          </li>
          <li>
            <JobItemsDots />
            Experience with scalable distributed systems, both built from scratch as well as on AWS primitives.
          </li>
          <li>
            <JobItemsDots />
            Extremely data-driven.
          </li>
          <li>
            <JobItemsDots />
            Ability to debug complex systems.
          </li>
        </ul>
      </div>
      <div>
        <h3>What You Will Do</h3>
        <p>
          We are looking for a Senior Software Engineer to join as one of our first hires. As we iterate on our MVP, you
          will have the opportunity to drive the vision and own the build behind our digital experience. You’ll have the
          support of an experienced technical advisor, a Head of Product, and an external team to work with.
        </p>
        <ol>
          <li>
            <JobItemsNumbers>1</JobItemsNumbers>
            This role is for someone who is excited about the early stage - you’ll be responsible for turning the
            platform vision into reality through smart, efficient building and testing.
          </li>
          <li>
            <JobItemsNumbers>2</JobItemsNumbers>
            Translate the product roadmap into engineering requirements and own the engineering roadmap
          </li>
          <li>
            <JobItemsNumbers>3</JobItemsNumbers>
            Work with limited resources to test and learn as efficiently as possible, while laying the framework to
            build a more scalable product over time.
          </li>
          <li>
            <JobItemsNumbers>4</JobItemsNumbers>
            Collaborate with product, design, and external engineering teammates as needed.
          </li>
        </ol>
      </div>
    </JobDescriptionSection>
  );
};

export default JobDescription;
