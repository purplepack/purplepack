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
<<<<<<< HEAD

interface AboutCardI {
	image: string;
	title: string;
	description: string;
	bgcolor: string;
	txtcolor: string;
}

interface QuestionCardI {
	image: string;
	title: string;
	description: string;
}

interface ContactCardI {
	icon: string;
	title: string;
	description: string;
=======
interface FoodP{
    name: string;
    slug: string;
    description: string;
    image: string;
>>>>>>> emeka
}