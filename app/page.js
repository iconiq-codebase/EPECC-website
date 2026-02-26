import HomePage from "@/components/Layout/Pages/HomePage/HomePage";

export const metadata = {
  title: {
    default: "Study Abroad & Career Guidance | EPECC",
    template: "%s | EPECC",
  },

  description:
    "EPECC is a trusted study abroad consultancy offering expert counselling, university admissions, visa guidance, and career planning for international education success.",

  keywords: [
    "study abroad",
    "study abroad consultancy",
    "education consultancy",
    "overseas education",
    "international study",
    "study abroad Nepal",
    "EPECC",
    "career counselling",
    "university admissions",
    "student visa guidance",
  ],

  authors: [{ name: "EPECC" }],
  creator: "EPECC",
  publisher: "EPECC",

  metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN), // change to your real domain

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Study Abroad & Career Guidance | EPECC",
    description:
      "Achieve your global education goals with EPECC. Expert study abroad counselling, university admissions, visa support, and career guidance.",
    url: process.env.NEXT_PUBLIC_DOMAIN,
    siteName: "EPECC",
    images: [
      {
        url: "/images/seo/home-og.jpg", // 1200x630 recommended
        width: 1200,
        height: 630,
        alt: "Study Abroad & Career Guidance by EPECC",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Study Abroad & Career Guidance | EPECC",
    description:
      "Trusted study abroad consultancy helping students with admissions, visas, and global career planning.",
    images: ["/images/seo/home-og.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "Education",
};

export default function Home() {
  return <HomePage />;
}
