import { admin, adminResto, customer, listUsersLogin } from '@/data/login'

type UserResponse = {
  sendResponse: {
    data: {
      user_id: string
      email_address: string
      first_name: string
      last_name: string
    }
    token: string
  }
}

type AuthResult = {
  id: string
  email: string
  name: string
  token: string
} | null

export async function loginWithApi(email: string, password: string) {
  const res = await fetch(`${process.env.BASE_URL_API}/home/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email_address: email, password }),
  })

  if (!res.ok) {
    const error = await res.json()
    throw new Error(error.message)
  }

  const data = await res.json()
  return {
    id: data.data.user_id,
    email: data.data.email_address,
    name: `${data.data.first_name} ${data.data.last_name}`,
    token: data.token, // Bearer token dari API
  }
}

export async function loginStatic(email: string, password: string) {
  const user = listUsersLogin.find(
    (u) => u.email_address === email && u.password === password,
  )

  if (!user) {
    throw new Error(
      'Invalid email or password or User not found | Use static data',
    )
  }
  return getUserAuthManual(email)
}

function getUserAuthManual(email: string): AuthResult {
  const users: Record<string, UserResponse> = {
    'customer@test.com': customer,
    'resto@test.com': adminResto,
    'admin@admin.com': admin,
  }

  const userObj = users[email]
  if (!userObj) return null

  const {
    sendResponse: {
      data: { user_id, email_address, first_name, last_name },
      token,
    },
  } = userObj

  return {
    id: user_id,
    email: email_address,
    name: `${first_name} ${last_name}`,
    token,
  }
}
