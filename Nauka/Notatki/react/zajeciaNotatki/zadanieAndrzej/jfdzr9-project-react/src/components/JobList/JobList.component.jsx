import { JobsGrid } from "./JobList.styled";
import { SingleCard } from "../SingleCard/SingleCard.component";
const JobList = ({ jobs }) => {
  return (
    <JobsGrid>
      {jobs.map((job) => (
        <SingleCard key={job.id} job={job} />
      ))}
    </JobsGrid>
  );
};

export default JobList;
