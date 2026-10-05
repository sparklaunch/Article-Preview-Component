import Image from "next/image";
import drawers from "../shared/assets/images/drawers.jpg";
import michelle from "../shared/assets/images/michelle.jpg";
import styles from "./Home.module.css";

export default function Home() {
	return (
		<main className={styles.main}>
			<Image src={drawers} alt="" className={styles.drawers} />
			<div className={styles.body}>
				<div className={styles.text}>
					<h2 className={styles.title}>
						Shift the overall look and feel by adding these
						wonderful touches to furniture in your home
					</h2>
					<p className={styles.content}>
						Ever been in a room and felt like something was missing?
						Perhaps it felt slightly bare and uninviting. I&apos;ve
						got some simple tips to help you make any room feel
						complete.
					</p>
				</div>
				<footer className={styles.footer}>
					<Image
						src={michelle}
						alt="Michelle Appleton"
						className={styles.avatar}
					/>
				</footer>
			</div>
		</main>
	);
}
