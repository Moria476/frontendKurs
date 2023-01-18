import Styles from "./Przyklad01.module.css";
import classnames from "classnames";
const Przyklad1 = ({ active }) => {
	const alternative = classnames(Styles["button-test"], {
		[Styles.alt]: active,
	});

	return <button className={alternative}>przyklad1 modulecss</button>;
};

export default Przyklad1;
