import DestinationsPage from "@/components/Layout/Pages/DestinationsPage/DestinationsPage"

export const metadata = {
    title: "Top Study Abroad Destinations | Study in USA, UK, Canada & More",
    description:
        "Explore top study abroad destinations including USA, UK, Canada, Australia, Germany and more. Get expert visa guidance and university admission support.",
    keywords: [
        "study abroad",
        "study in USA",
        "study in UK",
        "study in Canada",
        "study abroad from Nepal",
        "international student visa",
    ],
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_DOMAIN}/destinations`,
    },
    openGraph: {
        title: "Top Study Abroad Destinations",
        description:
            "Compare top global study destinations and find the best country for your education journey.",
        url: `${process.env.NEXT_PUBLIC_DOMAIN}/destinations`,
        siteName: "Your Consultancy Name",
        type: "website",
    },
}

export default function Page() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "EducationalOrganization",
                name: "EPECC",
                url: process.env.NEXT_PUBLIC_DOMAIN,
                logo: `${process.env.NEXT_PUBLIC_DOMAIN}/logo.png`,
                sameAs: [
                    process.env.NEXT_PUBLIC_FACEBOOK,
                    process.env.NEXT_PUBLIC_INSTAGRAM,
                ],
            },
            {
                "@type": "LocalBusiness",
                name: "Your Consultancy Name",
                image: `${process.env.NEXT_PUBLIC_DOMAIN}/logo.png`,
                address: {
                    "@type": "PostalAddress",
                    addressCountry: "NP",
                },
                areaServed: "Nepal",
            },
            {
                "@type": "ItemList",
                name: "Top Study Abroad Destinations",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Study in USA" },
                    { "@type": "ListItem", position: 2, name: "Study in UK" },
                    { "@type": "ListItem", position: 3, name: "Study in Canada" },
                    { "@type": "ListItem", position: 4, name: "Study in Australia" },
                    { "@type": "ListItem", position: 5, name: "Study in Germany" },
                ],
            },
            {
                "@type": "FAQPage",
                mainEntity: [
                    {
                        "@type": "Question",
                        name: "Which country is best for studying abroad?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "The best country depends on your budget, preferred course, and career goals. Popular choices include USA, UK, Canada and Australia.",
                        },
                    },
                    {
                        "@type": "Question",
                        name: "Do I need a student visa to study abroad?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "Yes, international students must apply for a valid student visa before starting their studies in a foreign country.",
                        },
                    },
                ],
            },
        ],
    }

    return (
        <>
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />

            <main>
                <DestinationsPage />
            </main>
        </>
    )
}
