import classnames from "classnames";
import { Link, AlternativeLink } from "./LinkImage.style";

const LinkImage = ({ url, imgSrc, imgAlt, active = false, children }) => {
  const linkClassNames = classnames({
    alternative: active,
  });

  return (
    <>
      <Link as='span' $active={active} href={url} className={linkClassNames}>
        <img src={imgSrc} className='logo' alt={imgAlt} />
        {children}
      </Link>
      <AlternativeLink href={url} className={linkClassNames} active={active}>
        <img src={imgSrc} className='logo' alt={imgAlt} />
        {children}
      </AlternativeLink>
    </>
  );
};

export default LinkImage;
