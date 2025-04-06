import ComponentCard from '@/components/common/ComponentCard'
import PageBreadcrumb from '@/components/common/PageBreadCrumb'
import TableComponent from '@/components/tables/TableComponent'
import { Metadata } from 'next'
import { customerList } from '@/data/customer'
import { ButtonCard } from '@/components/ui/button/ButtonCard'

export const metadata: Metadata = {
  title: 'Next.js Blank Page | TailAdmin - Next.js Dashboard Template',
  description: 'This is Next.js Blank Page TailAdmin Dashboard Template',
}

export default function UsersPage() {
  const columnsData = [
    {
      accessorKey: 'first_name',
      header: 'Name',
    },
    {
      accessorKey: 'email_address',
      header: 'Email',
    },
    {
      accessorKey: 'gender',
      header: 'Jenis Kelamin',
    },
  ]

  const { data } = customerList

  return (
    <div>
      <PageBreadcrumb pageTitle="Users" />
      <div className="space-y-6">
        <ButtonCard
          size="xs"
          href="/admin/users/create"
        >
          Create User
        </ButtonCard>
        <ComponentCard title="List Users">
          <TableComponent
            columns={columnsData}
            data={data}
          />
        </ComponentCard>
      </div>
    </div>
  )
}
