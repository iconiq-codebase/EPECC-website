import ContactPage from "@/components/Layout/Pages/ContactPage/ContactPage";

export const metadata = {
    title: "Contact EPECC | Study Abroad Consultation & Support",
    description: "Get in touch with EPECC for expert study abroad counselling, visa assistance, and career guidance. Reach us via phone, email, or WhatsApp.",
    keywords: "EPECC, study abroad, contact, consultation, visa assistance, career guidance, international education",
    openGraph: {
        title: "Contact EPECC | Study Abroad Consultation",
        description: "Reach out to EPECC for guidance on studying abroad, admissions support, and career planning.",
        url: `${process.env.NEXT_PUBLIC_DOMAIN}/contact`,
        siteName: "EPECC",
        images: [
            {
                url: "/images/seo/contact-og.jpg",
                width: 1200,
                height: 630,
                alt: "Contact EPECC for Study Abroad Guidance",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact EPECC | Study Abroad Consultation",
        description: "Reach out for expert guidance on studying abroad, admissions, and career planning.",
        images: ["/images/seo/contact-og.jpg"],
    },
};

const page = () => {
    return (
        <div>
            <ContactPage />
        </div>
    );
};

export default page;
