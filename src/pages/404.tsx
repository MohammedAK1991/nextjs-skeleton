import Layout from "@/components/common/Layout";

export default function Page404() {
    return (
    <Layout>
        <r-grid columns="8">
            <r-cell span="2-7">
                <div className="flex flex-col items-center">
                    <h2 className="p-4">404 - Page Not Found</h2>
                </div>
            </r-cell>
        </r-grid>
    </Layout>
    )
}