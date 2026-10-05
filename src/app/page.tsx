"use client";

import { clsx } from "clsx";
import Image from "next/image";
import { useState } from "react";
import drawers from "../shared/assets/images/drawers.jpg";
import michelle from "../shared/assets/images/michelle.jpg";
import shareButton from "../shared/assets/images/share.svg";
import ShareTooltip from "../shared/ui/ShareTooltip";
import styles from "./Home.module.css";

export default function Home() {
	const [shareTooltipVisible, setShareTooltipVisible] = useState(false);
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
					<div className={styles.nameAndDate}>
						<h3 className={styles.name}>Michelle Appleton</h3>
						<p className={styles.date}>28 Jun 2020</p>
					</div>
					<button
						type="button"
						className={clsx(styles.button, {
							[styles.active]: shareTooltipVisible
						})}
						onClick={() =>
							setShareTooltipVisible(!shareTooltipVisible)
						}
					>
						<Image src={shareButton} alt="Click to share" />
					</button>
					{shareTooltipVisible && <ShareTooltip />}
				</footer>
			</div>
		</main>
	);
}
