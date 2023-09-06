import Product from '@/components/pages/product'
import { MENU } from '@/lib/data'
import React from 'react'

export default function Products({params}:{params: {slug: string}}) {
  const food = MENU.find(food => food.slug === params.slug)
  console.log(food)
if (food)   return <Product food={food} />
else   return <div className='grid h-screen place-items-center'>Food Not Found</div>
}
