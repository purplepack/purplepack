import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Separator } from "../ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Table, TableBody, TableCell, TableRow } from "../ui/table";
import { MealGauge, MealGauge1, NutritionalInformation } from "@/lib/const";

export default function Product() {
  return (
    <>
      <div className=" p-6 object-contain">
        <div className="flex flex-col md:flex-row gap-8">
          <Image
            className="w-[700px] h-[700px]"
            width={700}
            height={700}
            src="/image4.jpg"
            alt="Harvest Salad Bowl"
          />

          <div className="flex flex-col justify-around">
            <div className="mb-4 space-y-3">
              <h1 className="font-bold text-2xl">Harvest Salad Bowl</h1>
              <p className="font-normal text-sm leading-6">
                {`Not to be underestimated – our Harvest Bowl is seriously hearty.
                  Warm the Smoked paprika sweet potato, chargrilled chicken, apple
                  cubes and wild rice. Then toss with the mixed salad leaves and
                  balsamic dressing and goat's cheese for a fresh and flavorsome
                  bowlful that makes as good a dinner as it does lunch.`}
              </p>
            </div>
            <div>
              <Button
                type="button"
                variant="default"
                className="w-full text-white font-semibold h-12 text-lg "
              >
                Start Order
              </Button>
            </div>
            <Tabs defaultValue="regular" className="w-[400px] space-y-6 ">
              <h1 className="font-semibold text-2xl">Portion Size:</h1>
              <TabsList className="grid w-full grid-cols-2  ">
                <TabsTrigger value="regular">Regular</TabsTrigger>
                <TabsTrigger value="large">Large</TabsTrigger>
              </TabsList>
              <TabsContent value="regular">
                <div className="flex items-center text-center object-contain">
                  {MealGauge.map((item, index) => (
                    <div
                      key={index}
                      className="border rounded-xl bg-transparent mx-2 px-4 py-2"
                    >
                      <p>
                        {item.quantity} {item.info}
                      </p>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="large">
                <div className="flex items-center text-center object-contain">
                  {MealGauge1.map((item, index) => (
                    <div
                      key={index}
                      className="border rounded-xl bg-transparent mx-2 px-4 py-2"
                    > 
                      <p>
                        {item.quantity1} {item.info1}
                      </p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Details</AccordionTrigger>
                <AccordionContent>
                  {`Not to be underestimated – our Harvest Bowl is seriously hearty. Warm the Smoked paprika sweet potato, chargrilled chicken, apple cubes and wild rice. Then toss with the mixed salad leaves and balsamic dressing and goats cheese for a fresh and flavoursome bowlful that makes as good a dinner as it does lunch.`}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Nutritional Information</AccordionTrigger>
                <AccordionContent>
                  <Table>
                    <TableBody>
                      {NutritionalInformation.map((description) => (
                        <TableRow key={description.description}>
                          <TableCell className="font-normal">
                            {description.description}
                          </TableCell>
                          <TableCell className="text-right">
                            {description.quantity}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Full Ingredients</AccordionTrigger>
                <AccordionContent>
                  {`Chicken, Sweet potato, Apple, Wild Rice, Goats cheese [Ingredients: Pasteurized goat's milk, salt, lactic starters, coagulant] (MILK), Yoghurt (MILK), Almonds (NUTS), Lemon Juice, Olive Oil, Balsamic Vinegar (SULPHITES), Mustard (MUSTARD), Honey, Garlic, Lemon Zest, Rapeseed oil, Thyme, Smoked Paprika, Salt, Black pepper, Mixed salad leaf`}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      <div className="flex items-center text-center space-x-2 h-32 text-white font-bold text-2xl bg-secondary">
        <div>{`Our chefs freshly prepare your food`}</div>
        <Separator orientation="vertical" className="bg-white"/>
        <div>{`100% satisfaction or your money back`}</div>
        <Separator orientation="vertical" className="bg-white"/>
        <div>{`Delivered to your door & ready in 3 minutes`}</div>
      </div>
    </>
  );
}
