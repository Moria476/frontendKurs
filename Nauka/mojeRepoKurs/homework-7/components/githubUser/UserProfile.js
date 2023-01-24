import { Heading } from "../ui/Heading.js";
import { Image } from "../ui/Image.js";
import { Paragraph } from "../ui/Paragraph.js";
import { Span } from "../ui/Span.js";
import { UserDescription } from "./UserDescription.js";
import { UserRepos } from "./UserRepos.js";

const UserProfile = (user, repos) => {
  return `
    <div class="main__div__left">
    ${Image(user.avatar_url)}
    </div>
    <div class="main__div__right">
    ${Heading(user.name)}
    ${Paragraph(UserDescription(user), "description")}
      <div class="main__div__right__social">
        <div class="main__div__right__social__followers">
        ${Span(user.followers, "numberFollowers")}
        ${Span("Followers", "textSocial")}
        </div>
        <div class="main__div__right__social__following">
        ${Span(user.following, "numberFollowing")}
        ${Span("Following", "textSocial")}
        </div>
        <div class="main__div__right__social__repos">
        ${Span(user.public_repos, "numberRepos")}
        ${Span("Repos", "textSocial")}
        </div>
      </div>
      ${UserRepos(repos).outerHTML}
    </div>
    `;
};

export default UserProfile;
