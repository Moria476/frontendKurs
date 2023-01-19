import styled from "styled-components";

export const JobCard = styled.article`
	padding: 1rem 3.2rem 3.2rem;
	position: relative;
	opacity: 1;
	::before {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: calc(100% - 3.5rem);
		background-color: var(--background-color-elements);
		border-radius: var(--border-radius-s);
		transition: 0.2s linear;
	}
	> * {
		position: relative;
	}
`;

export const CompanyLogo = styled.div`
	display: grid;
	place-items: center;
	flex-shrink: 0;
`;

export const JobInfos = styled.div`
	display: flex;
	align-items: baseline;
	gap: 1.2rem;
`;

export const JobInfosDivider = styled.span`
	width: 0.4rem;
	height: 0.4rem;
	border-radius: 100%;
	background-color: var(--color-dark-grey);
`;

export const JobCardPosition = styled.h3`
	padding: 1.2rem 0;
	:hover {
		color: var(--color-dark-grey);
	}
`;

export const JobCardLocation = styled.h4`
	padding-top: 4rem;
`;

export const CompanyLogoSmall = styled(CompanyLogo)`
	width: 5rem;
	height: 5rem;
	border-radius: var(--border-radius-l);
	margin-bottom: 2.2rem;
`;
