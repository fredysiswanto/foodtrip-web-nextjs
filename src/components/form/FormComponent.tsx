'use client'

import React, { useState } from 'react'

export type TFieldForm = {
  name: string
  label: string
  type: 'text' | 'email' | 'password' | 'number' | 'textarea'
  placeholder?: string
  required?: boolean
}

interface FormProps<TData> {
  initialData?: TData
  fields: TFieldForm[]
  onSubmit: (
    data: TData,
  ) => Promise<{ success: boolean; errors?: Record<string, string> }>
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FormComponent = <TData extends Record<string, any>>({
  initialData,
  fields,
  onSubmit,
}: FormProps<TData>) => {
  const [formData, setFormData] = useState<TData>(initialData || ({} as TData))
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErrors({})

    const response = await onSubmit(formData)
    if (!response.success && response.errors) {
      setErrors(response.errors)
    }
    setLoading(false)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full space-y-4 rounded-lg border p-4 shadow-md"
    >
      {fields.map((field) => (
        <div
          key={field.name}
          className="flex flex-col"
        >
          <label
            className="font-medium"
            htmlFor={field.name}
          >
            {field.label}
          </label>
          {field.type === 'textarea' ? (
            <textarea
              id={field.name}
              name={field.name}
              placeholder={field.placeholder}
              required={field.required}
              value={formData[field.name] || ''}
              onChange={handleChange}
              className="w-full rounded border p-2"
            />
          ) : (
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              required={field.required}
              value={formData[field.name] || ''}
              onChange={handleChange}
              className="w-full rounded border p-2"
            />
          )}
          {errors[field.name] && (
            <p className="text-sm text-red-500">{errors[field.name]}</p>
          )}
        </div>
      ))}
      <button
        type="submit"
        disabled={loading}
        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 disabled:opacity-50"
      >
        {loading ? 'Processing...' : 'Submit'}
      </button>
    </form>
  )
}

export default FormComponent
