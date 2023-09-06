import React from "react";
import { Button } from "../ui/button";
import { Card} from "../ui/card";
import Image from "next/image";
import Link from "next/link";

export default function MealCard({ meal }: { meal: FoodI }) {
  return (
    <Card className="shrink-0 border-none">
      <div className="w-full aspect-square">
        <Image
          width={500}
          height={350}
          src={meal.image}
          alt=""
          className="rounded-xl h-full w-full object-cover"
        />
      </div>
      <div className="grid text-center w-full items-center gap-3">
        <div className="font-bold py-2 text-lg">{meal.name}</div>
        <div className="text-xs mb-3">{meal.description}</div>
      </div>
      <div className="grid">
        <Button asChild>
          <Link href={`/kitchen/${meal.slug}`}>View</Link>
        </Button>
      </div>
    </Card>
  );
}
