import BlogDetailsPage from "@/components/Layout/Pages/BlogDetailsPage/BlogDetailsPage"

export async function generateStaticParams() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_PROD}/api/blogs/get-all`, {
        method: 'GET',
    });
    const data = await res.json();

    return data.blogs.map(blog => ({
        slug: blog.slug,
    }));
}

const page = async ({ params }) => {
    const { slug } = await params;
    return (
        <div>
            <BlogDetailsPage slug={slug} />
        </div>
    )
}

export default page