import { Roboto, Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import { Metadata } from 'next';
import { APP_NAME } from '@/config';

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['100', '300', '400', '500', '700', '900'],
	variable: '--font-roboto',
});

const notoJP = Noto_Sans_JP({
	subsets: ['latin'],
	weight: ['100', '300', '400', '500', '700', '900'],
	variable: '--font-notojp',
});

export const metadata: Metadata = {
	title: {
		default: APP_NAME,
		template: `%s | Soma Takata`,
	},
	description: 'This is Crazy portfolio site made by Soma Takata',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body className={` ${roboto.variable} ${notoJP.variable} ${notoJP.className}`}>{children}</body>
		</html>
	);
}
