import ComponentCard from '@/components/common/ComponentCard'
import PageBreadcrumb from '@/components/common/PageBreadCrumb'
import TableComponent from '@/components/tables/TableComponent'
import { ButtonCard } from '@/components/ui/button/ButtonCard'

import { restaurantList } from '@/data/resto-admin'

export default function CustomersPage() {
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

  const { data } = restaurantList

  return (
    <div>
      <PageBreadcrumb pageTitle="Customers" />
      <div className="space-y-6">
        <ButtonCard
          size="xs"
          href="/admin/customers/create"
        >
          Create Customer
        </ButtonCard>
        <ComponentCard title="List Customers">
          <TableComponent
            columns={columnsData}
            data={data}
          />
        </ComponentCard>
      </div>
    </div>
  )
}
