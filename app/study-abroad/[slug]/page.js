// app/study-abroad/[slug]/page.js

import ProgramPage from "@/components/Layout/Pages/ProgramPage/ProgramPage";

export async function generateStaticParams() {
    // Fetch all programs for static export
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/programs/get-all`);
    const data = await res.json();

    // Ensure it's an array
    const programs = Array.isArray(data?.data) ? data.data : [];

    return programs.map((program) => ({
        slug: program.slug, // must match [slug] in filename
    }));
}

const Page = async ({ params }) => {
    const { slug } = await params; // params is NOT a promise

    return (
       <ProgramPage slug={slug} />
    );
};

export default Page;