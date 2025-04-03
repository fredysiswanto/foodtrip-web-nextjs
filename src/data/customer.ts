export type TCustomer = {
    user_id?: string;
    resto_id?: string | null;
    user_no?: string;
    first_name: string;
    middle_name: string | null;
    last_name: string;
    email_address: string;
    gender: string;
    phone_number: string;
    user_type: string;
    created_by?: string | null;
    updated_by?: string | null;
}

export type TCustomersListResponse = {
    draw: number;
    data: TCustomer[];
    recordsFiltered: number;
    recordsTotal: number;
};

export const customerListResponseSchema = {
    "type": "object",
    "required": [
        "draw",
        "data",
        "recordsFiltered",
        "recordsTotal"
    ],
    "properties": {
        "draw": {
            "type": "integer"
        },
        "data": {
            "type": "array",
            "items": {
                "type": "object",
                "required": [
                    "user_id",
                    "resto_id",
                    "user_no",
                    "first_name",
                    "middle_name",
                    "last_name",
                    "email_address",
                    "phone_number",
                    "gender",
                    "user_type",
                    "created_by",
                    "updated_by",
                    "deleted_by",
                    "date_created",
                    "date_updated",
                    "date_deleted"
                ],
                "properties": {
                    "user_id": {
                        "type": "string"
                    },
                    "resto_id": {
                        "type": "null"
                    },
                    "user_no": {
                        "type": "string"
                    },
                    "first_name": {
                        "type": "string"
                    },
                    "middle_name": {
                        "type": [
                            "null",
                            "string"
                        ]
                    },
                    "last_name": {
                        "type": "string"
                    },
                    "email_address": {
                        "type": "string"
                    },
                    "phone_number": {
                        "type": "string"
                    },
                    "gender": {
                        "type": "string"
                    },
                    "user_type": {
                        "type": "string"
                    },
                    "created_by": {
                        "type": [
                            "string",
                            "null"
                        ]
                    },
                    "updated_by": {
                        "type": "null"
                    },
                    "deleted_by": {
                        "type": "null"
                    },
                    "date_created": {
                        "type": "string"
                    },
                    "date_updated": {
                        "type": "string"
                    },
                    "date_deleted": {
                        "type": "null"
                    }
                }
            }
        },
        "recordsFiltered": {
            "type": "integer"
        },
        "recordsTotal": {
            "type": "integer"
        }
    }
}

export const customerList =
    { "draw": 1, "data": [{ "user_id": "00ae9d57-c569-443e-bf05-f916aa215c6d", "resto_id": null, "user_no": "USR-2608799801099", "first_name": "Frankly", "middle_name": null, "last_name": "Samson", "email_address": "samsonfrankly21@gmail.com", "phone_number": "09382746311", "gender": "Male", "user_type": "Customer", "created_by": "70ea56c6-407b-4bdf-8cf0-b4e09df50fe8", "updated_by": null, "deleted_by": null, "date_created": "2025-02-10T15:04:27.000Z", "date_updated": "2025-02-10T15:04:27.000Z", "date_deleted": null }, { "user_id": "02b9b6db-b044-4e83-bc16-85e1d6d02509", "resto_id": null, "user_no": "USR-2608799800366", "first_name": "Jerald", "middle_name": null, "last_name": "Guillermo", "email_address": "jerald05@gmail.com", "phone_number": "09482749382", "gender": "Male", "user_type": "Customer", "created_by": "70ea56c6-407b-4bdf-8cf0-b4e09df50fe8", "updated_by": null, "deleted_by": null, "date_created": "2025-02-10T15:04:26.000Z", "date_updated": "2025-02-10T15:04:26.000Z", "date_deleted": null }, { "user_id": "02f6fa67-3522-4e41-a1f8-962065aa080d", "resto_id": null, "user_no": "USR-2608799801341", "first_name": "James", "middle_name": null, "last_name": "Smith", "email_address": "smithjames11@gmail.com", "phone_number": "09673849384", "gender": "Male", "user_type": "Customer", "created_by": "70ea56c6-407b-4bdf-8cf0-b4e09df50fe8", "updated_by": null, "deleted_by": null, "date_created": "2025-02-10T15:04:27.000Z", "date_updated": "2025-02-10T15:04:27.000Z", "date_deleted": null }, { "user_id": "1a90b095-3121-4cae-a766-ed18f907a398", "resto_id": null, "user_no": "USR-2608799800608", "first_name": "Allison", "middle_name": null, "last_name": "Locsin", "email_address": "allilocsin@gmail.com", "phone_number": "09752048137", "gender": "Female", "user_type": "Customer", "created_by": "70ea56c6-407b-4bdf-8cf0-b4e09df50fe8", "updated_by": null, "deleted_by": null, "date_created": "2025-02-10T15:04:27.000Z", "date_updated": "2025-02-10T15:04:27.000Z", "date_deleted": null }, { "user_id": "518c87cc-0350-45a1-b1f5-2a2bb503db94", "resto_id": null, "user_no": "USR-2614700573349", "first_name": "thirteen customer", "middle_name": "", "last_name": "last name", "email_address": "thirteen1@gmail.com", "phone_number": "09123456789", "gender": "Others", "user_type": "Customer", "created_by": null, "updated_by": null, "deleted_by": null, "date_created": "2025-03-28T03:48:35.000Z", "date_updated": "2025-03-28T03:48:35.000Z", "date_deleted": null }, { "user_id": "585f0dca-ff76-42ac-99c2-30729ad5fbd7", "resto_id": null, "user_no": "USR-2608799800487", "first_name": "Shaine", "middle_name": "Rieta", "last_name": "Villanueva", "email_address": "shainevil30@gmail.com", "phone_number": "09592749184", "gender": "Female", "user_type": "Customer", "created_by": "70ea56c6-407b-4bdf-8cf0-b4e09df50fe8", "updated_by": null, "deleted_by": null, "date_created": "2025-02-10T15:04:27.000Z", "date_updated": "2025-02-10T15:04:27.000Z", "date_deleted": null }, { "user_id": "75e58ffc-f2a1-420b-b162-0dd5a926b25b", "resto_id": null, "user_no": "USR-2608799801462", "first_name": "Charles", "middle_name": "Julian", "last_name": "Fowler", "email_address": "charlesfowler@gmail.com", "phone_number": "09243849261", "gender": "Male", "user_type": "Customer", "created_by": "70ea56c6-407b-4bdf-8cf0-b4e09df50fe8", "updated_by": null, "deleted_by": null, "date_created": "2025-02-10T15:04:27.000Z", "date_updated": "2025-02-10T15:04:27.000Z", "date_deleted": null }, { "user_id": "95b10df6-8aca-4185-a87e-5f6f2e250007", "resto_id": null, "user_no": "USR-2608799801220", "first_name": "Mellissa", "middle_name": "Cruz", "last_name": "Taylor", "email_address": "melcruztaylor@gmail.com", "phone_number": "09997492838", "gender": "Female", "user_type": "Customer", "created_by": "70ea56c6-407b-4bdf-8cf0-b4e09df50fe8", "updated_by": null, "deleted_by": null, "date_created": "2025-02-10T15:04:27.000Z", "date_updated": "2025-02-10T15:04:27.000Z", "date_deleted": null }, { "user_id": "96c2d011-87f2-48da-b934-23b293779aaa", "resto_id": null, "user_no": "USR-2608799800850", "first_name": "Javen Brylle", "middle_name": null, "last_name": "Dela Cruz", "email_address": "bryllejaven@gmail.com", "phone_number": "09482048339", "gender": "Male", "user_type": "Customer", "created_by": "70ea56c6-407b-4bdf-8cf0-b4e09df50fe8", "updated_by": null, "deleted_by": null, "date_created": "2025-02-10T15:04:27.000Z", "date_updated": "2025-02-10T15:04:27.000Z", "date_deleted": null }, { "user_id": "9dfc8a70-ff3b-41ef-900a-95109f3aff8d", "resto_id": null, "user_no": "USR-2608799800245", "first_name": "James Paul", "middle_name": "Lim", "last_name": "Tulod", "email_address": "jptulod123@gmail.com", "phone_number": "09451152076", "gender": "Male", "user_type": "Customer", "created_by": "70ea56c6-407b-4bdf-8cf0-b4e09df50fe8", "updated_by": null, "deleted_by": null, "date_created": "2025-02-10T15:04:26.000Z", "date_updated": "2025-02-10T15:04:26.000Z", "date_deleted": null }, { "user_id": "b9d49c56-07e5-4293-802d-e305e7874091", "resto_id": null, "user_no": "USR-2608800021235", "first_name": "thirteen customer", "middle_name": "", "last_name": "last name", "email_address": "thirteen@gmail.com", "phone_number": "09123456789", "gender": "Others", "user_type": "Customer", "created_by": null, "updated_by": null, "deleted_by": null, "date_created": "2025-02-10T15:06:54.000Z", "date_updated": "2025-02-10T15:06:54.000Z", "date_deleted": null }, { "user_id": "cbab6c73-fac4-4a8d-851c-be3cc9bcdb04", "resto_id": null, "user_no": "USR-2608799800977", "first_name": "Aphryll Joy", "middle_name": null, "last_name": "Malazzab", "email_address": "ajmallazzab@gmail.com", "phone_number": "09294482931", "gender": "Female", "user_type": "Customer", "created_by": "70ea56c6-407b-4bdf-8cf0-b4e09df50fe8", "updated_by": null, "deleted_by": null, "date_created": "2025-02-10T15:04:27.000Z", "date_updated": "2025-02-10T15:04:27.000Z", "date_deleted": null }, { "user_id": "fbffe4ad-7978-462e-bd3b-ee109d9010b3", "resto_id": null, "user_no": "USR-2608799800729", "first_name": "Princess Anna", "middle_name": "Calban", "last_name": "Santos", "email_address": "princess28@gmail.com", "phone_number": "09293819382", "gender": "Female", "user_type": "Customer", "created_by": "70ea56c6-407b-4bdf-8cf0-b4e09df50fe8", "updated_by": null, "deleted_by": null, "date_created": "2025-02-10T15:04:27.000Z", "date_updated": "2025-02-10T15:04:27.000Z", "date_deleted": null }], "recordsFiltered": 13, "recordsTotal": 43 }