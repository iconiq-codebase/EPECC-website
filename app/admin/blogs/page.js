'use client'
import AdminLayout from "@/components/AdminLayout/AdminLayout"
import BlogsPage from "@/components/AdminLayout/Pages/BlogsPage/BlogsPage"

const page = () => {
  return (
    <AdminLayout>
        <BlogsPage />
    </AdminLayout>
  )
}

export default page