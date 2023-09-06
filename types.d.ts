interface CartItem {
	id: number;
	name: string;
}

interface FoodI{
	name: string;
    slug: string;
    image: string;
    hoverImage: string;
    description: string;
    ingredients: string;
    price: number;
    nutrition: {
        name: string;
	   value: string;
    } []
}
interface FoodP{
    name: string;
    slug: string;
    description: string;
    image: string;
}