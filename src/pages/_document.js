import Modal from '@/components/modal';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<title>{`Milad Shirazi`}</title>

			<Head>
				<meta
					name="description"
					content={`Milad shirazi AI portfolio and usecases`}
				/>
				<link
					rel="shortcut icon"
					href="/milad-pic.ico"
					className="rounded-full"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
