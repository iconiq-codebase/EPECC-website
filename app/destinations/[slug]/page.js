import CountriesPage from "@/components/Layout/Pages/CountriesPage/CountriesPage";

export async function generateStaticParams() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_PROD}/api/countries/get-all`, {
        method: 'GET',
    });
    const data = await res.json();

    return data.data.map(destination => ({
        slug: destination.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    return {
        title: `Destination: ${slug}`,
        description: `Explore the destination: ${slug}`,
    };
}

const page = async({ params }) => {
    const { slug } = await params;
    return (
        <CountriesPage slug={slug} />
    )
}

export default page