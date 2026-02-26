import PrivacyPolicyPage from "@/components/Layout/Pages/PrivacyPolicyPage/PrivacyPolicyPage"

export const metadata = {
    title: "Privacy Policy | EPECC Global Education",
    description:
        "Read the Privacy Policy of EPECC Global Education to understand how we collect, use, and protect your personal information when applying for study abroad programs.",
};

const page = () => {
    return (
        <div>
            <PrivacyPolicyPage />
        </div>
    )
}

export default page