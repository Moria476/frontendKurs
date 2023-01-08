import "./Card.css";
import Star from "../../../public/assets/Star 1.png";

export const Card = (props) => {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`../../../public/assets/${props.coverImg}`} id="Image1" />
      <div>
        <img src={Star} id="Star" />
        <span id="span01"> {props.stats.rating} </span>
        <span id="span02">
          ({props.stats.reviewCount}) &bull; {props.location}
        </span>
      </div>
      <p>{props.title}</p>
      <div>
        <span id="span03">From ${props.price}</span>
        <span id="span04">/ person</span>
      </div>
    </div>
  );
};
