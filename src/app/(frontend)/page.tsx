import { Card } from '@/components/card/Card'
import { listDishes } from '@/data/dishes'

export default function HomePage() {
  const data = listDishes.data
  return (
    <div>
      <div className="flex flex-col flex-wrap justify-center gap-5 sm:flex-row">
        {data.map((dish) => (
          <Card
            key={dish.dish_id}
            title={dish.dish_name}
            {...dish}
          >
            {dish.dish_price}
          </Card>
        ))}
      </div>
    </div>
  )
}
