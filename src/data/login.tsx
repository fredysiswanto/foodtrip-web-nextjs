export const customer = {
  sendRequest: {
    email_address: 'customer@test.com',
    password: 'password',
  },
  sendResponse: {
    error: false,
    data: {
      user_id: '7e13b6b8-c50a-460e-8d29-f4b7d8925f18',
      resto_id: null,
      user_no: 'USR-2615856511906',
      first_name: 'User',
      middle_name: '',
      last_name: 'Customer',
      email_address: 'customer@test.com',
      phone_number: '09123456700',
      gender: 'Others',
      user_type: 'Customer',
      created_by: null,
      updated_by: null,
      deleted_by: null,
      date_created: '2025-04-06T01:52:21.000Z',
      date_updated: '2025-04-06T01:52:21.000Z',
      date_deleted: null,
    },
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiN2UxM2I2YjgtYzUwYS00NjBlLThkMjktZjRiN2Q4OTI1ZjE4IiwibmFtZSI6IlVzZXIgQ3VzdG9tZXIiLCJlbWFpbF9hZGRyZXNzIjoiY3VzdG9tZXJAdGVzdC5jb20iLCJyZXN0b19pZCI6bnVsbCwidXNlcl90eXBlIjoiQ3VzdG9tZXIiLCJpYXQiOjE3NDM5MDQzNjEsImV4cCI6MTc0Mzk0NzU2MX0.TNImsWIMfKOF5amCgfp9JGkwrnmrwAuSqUa-QVKj_c4',
    message: 'User has been successfully login',
  },
}
export const adminResto = {
  sendRequest: {
    email_address: 'resto@test.com',
    password: 'password',
  },
  sendResponse: {
    error: false,
    data: {
      user_id: 'bd910e27-5636-45ea-b6ad-c07f7d0ff5aa',
      resto_id: 'f4fb0e43-626c-4448-b2d0-fa292ceddcfe',
      user_no: 'USR-2615856845197',
      first_name: 'admin',
      middle_name: '',
      last_name: 'resto',
      email_address: 'resto@test.com',
      phone_number: null,
      gender: null,
      user_type: 'Resto_Admin',
      created_by: null,
      updated_by: null,
      deleted_by: null,
      date_created: '2025-04-06T01:56:03.000Z',
      date_updated: '2025-04-06T01:56:03.000Z',
      date_deleted: null,
    },
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYmQ5MTBlMjctNTYzNi00NWVhLWI2YWQtYzA3ZjdkMGZmNWFhIiwibmFtZSI6ImFkbWluIHJlc3RvIiwiZW1haWxfYWRkcmVzcyI6InJlc3RvQHRlc3QuY29tIiwicmVzdG9faWQiOiJmNGZiMGU0My02MjZjLTQ0NDgtYjJkMC1mYTI5MmNlZGRjZmUiLCJ1c2VyX3R5cGUiOiJSZXN0b19BZG1pbiIsImlhdCI6MTc0MzkwNDU4MCwiZXhwIjoxNzQzOTQ3NzgwfQ.AvTEsJ_OFNSZf1mJWmcFx_K-qoQyGHmg_CcoEf-oxAY',
    message: 'User has been successfully login',
  },
}
export const admin = {
  sendRequest: {
    email_address: 'admin@admin.com',
    password: 'admin',
  },
  sendResponse: {
    error: false,
    data: {
      user_id: 'b29a7380-eaf2-4c30-a300-a2a47a6b9483',
      resto_id: null,
      user_no: 'USR-2615781158619',
      first_name: 'Admin4',
      middle_name: '',
      last_name: 'Admin4',
      email_address: 'admin@admin.com',
      phone_number: null,
      gender: null,
      user_type: 'Admin',
      created_by: null,
      updated_by: null,
      deleted_by: null,
      date_created: '2025-04-05T11:55:06.000Z',
      date_updated: '2025-04-05T11:55:06.000Z',
      date_deleted: null,
    },
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYjI5YTczODAtZWFmMi00YzMwLWEzMDAtYTJhNDdhNmI5NDgzIiwibmFtZSI6IkFkbWluNCBBZG1pbjQiLCJlbWFpbF9hZGRyZXNzIjoiYWRtaW5AYWRtaW4uY29tIiwicmVzdG9faWQiOm51bGwsInVzZXJfdHlwZSI6IkFkbWluIiwiaWF0IjoxNzQzOTA0NzM0LCJleHAiOjE3NDM5NDc5MzR9.yDtDCKT6BCvqx9KtcKwfvT8Vp_kRRs1ScAhanz3eSJs',
    message: 'User has been successfully login',
  },
}

export const listUsersLogin = [
  {
    email_address: 'customer@test.com',
    password: 'password',
  },
  { email_address: 'resto@test.com', password: 'password' },
  {
    email_address: 'admin@admin.com',
    password: 'admin',
  },
]
