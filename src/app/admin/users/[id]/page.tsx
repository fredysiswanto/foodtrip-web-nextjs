'use client'
import PageBreadcrumb from '@/components/common/PageBreadCrumb'
import FormComponent, { TFieldForm } from '@/components/form/FormComponent'
import { customerList, TCustomer } from '@/data/customer'
import { use, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function UserDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const router = useRouter()
  const { id } = use(params)
  const dataUser = customerList.data.find(
    (user) => user.user_id === id,
  ) as TCustomer
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, setUser] = useState<TCustomer | null>(dataUser)
  const dataFields = [
    {
      name: 'first_name',
      label: 'Full Name',
      type: 'text',
      placeholder: 'Enter your name',
      required: true,
    },
    {
      name: 'email_address',
      label: 'Email',
      type: 'email',
      placeholder: 'Enter your email',
      required: true,
    },
    {
      name: 'phone_number',
      label: 'Phone',
      type: 'text',
      placeholder: 'Enter your phone number',
      required: true,
    },
  ]

  const handleSubmit = async (formData: TCustomer) => {
    try {
      // Simulate API request
      const response = await fetch('/api/users', {
        method: user ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const result = await response.json()
      if (!response.ok) {
        return { success: false, errors: result.errors || {} }
      }

      // Success - redirect or show success message
      alert(user ? 'User updated successfully!' : 'User created successfully!')
      router.push('/users')
      return { success: true }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return {
        success: false,
        errors: { server: 'An unexpected error occurred' },
      }
    }
  }

  return (
    <div>
      <PageBreadcrumb pageTitle="From Elements" />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <FormComponent
            initialData={dataUser}
            fields={dataFields as TFieldForm[]}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  )
}
