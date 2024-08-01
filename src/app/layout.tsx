import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SalaryScope | Salary Structure Breakdown Tool | TCS Salary Breakdown",
  description: "Easily analyze and create salary structure breakdowns with our intuitive tool. Perfect for HR professionals and finance teams. Calculate base pay, allowances, deductions, and bonuses accurately.",
  keywords: "salary structure, salary breakdown, salary calculator, compensation analysis, HR tools, payroll management, employee compensation",
  icons: [
    { url: "./icon.png" }
  ],
  authors : [
    {
      name: "Hrushikesh Kothem",
      url: "https://hrushispace.com/",
    },
    {
      name: "Satya Ajay Rayalavarapu",
      url: "https://www.linkedin.com/in/satya-ajay-098400217/",
    },
    {
      name: "Sunil Noolu",
      url: "https://sunil-noolu-portfolio.netlify.app/",
    },
  ],
  robots: "index, follow",
  applicationName: "SalaryScope | Salary Structure Breakdown Tool | TCS Salary Breakdown",
  creator: "Hrushikesh Kothem | Satya Ajay Rayalavarapu | Sunil Noolu",
  publisher: "Hrushikesh Kothem | Satya Ajay Rayalavarapu | Sunil Noolu",
  openGraph: {
    title: "SalaryScope | Salary Structure Breakdown Tool | TCS Salary Breakdown",
    description: "TCS Salary Breakdown | Easily analyze and create salary structure breakdowns with our intuitive tool. Calculate base pay, allowances, deductions, and bonuses accurately.",
    url: "https://salaryscope.hrushispace.com/",
    images: [
      {
        url: "https://salaryscope.hrushispace.com/preview.png",
        alt: "SalaryScope | Salary Structure Breakdown Tool",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SalaryScope | Salary Structure Breakdown Tool | TCS Salary Breakdown",
    description: "| TCS Salary Breakdown | Easily analyze and create salary structure breakdowns with our intuitive tool. Perfect for HR professionals and finance teams. Calculate base pay, allowances, deductions, and bonuses accurately.",
    creator: "@hrushispace", 
  },
  themeColor: "#00aaff", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0070f3" /> 
        <link rel="icon" type="image/png" href="./icon.png" />
        <link rel="canonical" href="https://salaryscope.hrushispace.com/" /> 
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
