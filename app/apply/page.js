import ApplyPage from "@/components/Layout/Pages/ApplyPage/ApplyPage"
import Script from "next/script";

export const metadata = {
    title: "Apply to Study Abroad 2026 | EPECC Global Admissions",
    description:
        "Apply for Bachelor, Master, MBA, Nursing & IT programs in Australia, UK, USA, Canada, New Zealand, Japan & Ireland. Admissions Open 2026.",
    keywords: [
        "Study Abroad Nepal",
        "Apply Australia 2026",
        "UK Student Visa",
        "USA University Admission",
        "Canada Study Permit",
        "MBA Abroad",
        "Nursing Study Abroad"
    ],
    openGraph: {
        title: "Apply to Study Abroad 2026 | EPECC",
        description:
            "Start your global career journey. Apply for top universities in Australia, UK, USA & more.",
        url: `${process.env.NEXT_PUBLIC_DOMAIN}/apply`,
        siteName: "EPECC Global Education",
        type: "website",
    },
};

export default function Page() {
    return (
        <>
            <ApplyPage />
            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "EducationalOrganization",
                        name: "EPECC Global Education",
                        url: process.env.NEXT_PUBLIC_DOMAIN,
                        description:
                            "Study abroad consultancy helping students apply to Australia, UK, USA, Canada and more.",
                    }),
                }}
            />

        </>
    );
}