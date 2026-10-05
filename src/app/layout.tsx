import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope();

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="ko" className={manrope.className}>
			<body>{children}</body>
		</html>
	);
}
