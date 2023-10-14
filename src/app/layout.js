'use client';
import Header from '@/components/Header';
import './globals.css';
import Footer from '@/components/Footer';
import { UseProvider } from '@/appState';
import ScrollToTop from '@/components/ScrollToTop';

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta
					content="width=device-width, initial-scale=1"
					name="viewport"
				/>
				<meta
					name="description"
					content="We pride ourselves in delivering the highest quality expo within our industry that our attendees, exhibitors and sponsors have come to expect."
				/>
				<link
					rel="icon"
					href="./logo/LOGO_MEGABOOM.png"
					type="image/x-icon"
					sizes="16x16"
				/>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
				/>
				<link
					href="https://unpkg.com/aos@2.3.1/dist/aos.css"
					rel="stylesheet"
				/>
				<meta property="og:image" content="./logo/LOGO_MEGABOOM.png" />
				<link
					href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
					rel="stylesheet"
				></link>
				<script
					defer
					src="https://kit.fontawesome.com/cc3041f69f.js"
					crossOrigin="anonymous"
				></script>
				<script
					defer
					src="https://unpkg.com/aos@2.3.1/dist/aos.js"
				></script>
				<title>{`${process.env.NEXT_PUBLIC_TITLE_APP}`}</title>
			</head>
			<body>
				<UseProvider>
					<Header />
					<div>{children}</div>
					<ScrollToTop />
				</UseProvider>
			</body>
		</html>
	);
}
