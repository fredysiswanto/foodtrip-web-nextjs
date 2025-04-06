export type TDishCategory = {
  dishcatg_id: string
  dishcatg_name: string
  created_by: string
  updated_by: string | null
  deleted_by: string | null
  date_created: string
  date_updated: string | null
  date_deleted: string | null
}

export type TRestaurant = {
  resto_img: string
  resto_id: string
  resto_no: string
  resto_name: string
  resto_email: string
  resto_phone: string
  resto_landline: string
  resto_website: string
  restocatg_id: string
  status: string
  created_by: string
  updated_by: string | null
  deleted_by: string | null
  date_created: string
  date_updated: string | null
  date_deleted: string | null
}

export type TDish = {
  dish_img: string
  dish_id: string
  dish_no: string
  dish_desc: string
  dish_price: string
  status: string
  dishcatg_id: string
  resto_id: string
  created_by: string
  updated_by: string | null
  deleted_by: string | null
  date_created: string
  date_updated: string | null
  date_deleted: string | null
  dish_category: DishCategory // Nested object
  restaurant: Restaurant // Nested object
}
