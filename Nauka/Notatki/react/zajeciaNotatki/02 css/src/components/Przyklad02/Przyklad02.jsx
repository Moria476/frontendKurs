import styles from "./Przyklad02.module.css";

const Przyklad2 = () => {
	return (
		<>
			<button className={styles.button__red}>przed composes modulecss</button>
			<button className={styles.button__red__bigger}>
				po composes modulecss
			</button>
		</>
	);
};

export default Przyklad2;
