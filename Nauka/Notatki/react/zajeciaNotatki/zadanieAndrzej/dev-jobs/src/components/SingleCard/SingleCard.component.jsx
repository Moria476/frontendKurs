import {
	JobCard,
	CompanyLogo,
	JobCardLocation,
	JobCardPosition,
	JobInfos,
	JobInfosDivider,
	CompanyLogoSmall,
} from "./SingleCard.styled";

export const SingleCard = ({
	imgUrl,
	alt,
	howLong,
	formOfWork,
	profession,
	companyName,
	location,
}) => {
	return (
		<JobCard>
			<CompanyLogoSmall>
				{" "}
				<img src={imgUrl} alt={alt} />
			</CompanyLogoSmall>
			<JobInfos>
				<p>{howLong}</p>
				<JobInfosDivider />
				<p>{formOfWork}</p>
			</JobInfos>
			<a href="single-job.html">
				<JobCardPosition>{profession}</JobCardPosition>
			</a>
			<p>{companyName}</p>
			<JobCardLocation>{location}</JobCardLocation>
		</JobCard>
	);
};
