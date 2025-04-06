import { Card } from "@/components/card/Card";
import { listDishes } from "@/data/dishes";

export default function HomePage() {
  const data = listDishes.data;
  return (
    <div>
      <div className="flex flex-wrap gap-4">
        {data.map((dish) => (
          <Card key={dish.dish_id} title={dish.dish_name} {...dish}>
            {dish.dish_name}
          </Card>
        ))}
      </div>
    </div>
  );
}
