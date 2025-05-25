import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const satoshi = localFont({
	src: [
		{
			path: "../public/fonts/Satoshi-Variable.ttf",
		},
	],
	variable: "--font-satoshi",
});

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Julian Mayes | Frontend Developer",
	description:
		"Frontend developer based in Vancouver, BC. I build accessible, performant websites with a focus on clean design and user-friendly experiences.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${satoshi.variable}`}
			>
				{children}
			</body>
		</html>
	);
}
