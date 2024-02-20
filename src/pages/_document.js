import Modal from '@/components/modal';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<title>"Milad Shirazi</title>

			<Head>
				<meta
					name="description"
					content={`جهت تماس برای مشاوره با تیم مجرب و شناخته شده در شرکت هرم سازه کهن جهت پذیرش پیمانکاری کلیه امور عمرانی و ساخت و ساز ساختمان تجاری، آپارتمانی، ویلایی و… با ما تماس بگیرید:`}
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
