import ComponentCard from '@/components/common/ComponentCard'
import PageBreadcrumb from '@/components/common/PageBreadCrumb'
import Form from 'next/form'
export default function CreateUserPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Users" />
      <div className="space-y-6">
        <ComponentCard title="List Users">
          <Form action="/search">
            <input name="query" />
            <button type="submit">Submit</button>
          </Form>
        </ComponentCard>
      </div>
    </div>
  )
}
