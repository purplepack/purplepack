import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/navigation-bar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Purple Pack Foods',
	description: 'Welcome to Purple pack (African, Flavorful, Irresistible)',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang='en'
			suppressHydrationWarning
		>
			<body className={inter.className}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
				>
					<Navbar />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
