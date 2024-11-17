import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ConvexClientProvider } from "@/components/ConvexClientProvider";

const defaultFont = localFont({
	src: "./fonts/default-font.ttf",
	variable: "--font-default",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Next.js Boilerplate",
	description: "Next.js Boilerplate",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${defaultFont.className}  antialiased bg-[#171717]`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					<ConvexClientProvider>{children}</ConvexClientProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
