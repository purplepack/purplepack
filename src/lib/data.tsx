export const PROFILE = {
	name: 'Purple Pack',
	description: 'Welcome to Purple pack (African, Flavourful, Irresistible)',
	phone: '447835046640',
	address: 'Hallam i-lab, Sheffield Hallam University, Level 6, Aspect Court, Sheffield, S1 2BG',
};

export const NAVBAR_ITEMS = [
	{ name: 'ABOUT', href: '/about' },
	{ name: 'CONTACT', href: '/about#contact' },
	{ name: 'FAQS', href: '/faqs' },
	{ name: 'KITCHEN', href: '/kitchen' },
	// { name: 'STORE LOCATOR', href: '/about#store-locator' },
	{ name: 'BLOG', href: '/blog' },
];

export const MENU: FoodI[] = [
	{
		name: 'Nigerian Egusi Soup',
		slug: 'nigerian-egusi-soup',
		image: '/food/egusi-soup.JPG',
		hoverImage: '/food/egusi-soup-hover.JPG',
		description: `Nigerian egusi soup contains a traditionally cooked delicious blend of Melon seeds into puree, garnished with pumpkin leaves, spiced with pepper, seasoning and assorted proteins.`,
		ingredients: [
			{ name: 'Water', percentage: 22, allergic: null },
			{ name: 'Melon Seeds', percentage: 18.1, allergic: null },
			{ name: 'Beef', percentage: 18.1, allergic: null },
			{
				name: `Scotch Bonnet Chillies`,
				percentage: 5.7,
				allergic: null,
			},
			{ name: 'Cod', percentage: 6.8, allergic: 'Fish' },
			{ name: `Pumpkin Leaves`, percentage: null, allergic: null },
			{ name: `Palm Oil`, percentage: null, allergic: null },
			{ name: `Prawns`, percentage: null, allergic: 'Crustaceans' },
			{ name: `Red Onions`, percentage: null, allergic: null },
			{ name: `Tripe`, percentage: null, allergic: null },
			{ name: `Garlic`, percentage: null, allergic: null },
			{ name: `Locust Beans`, percentage: null, allergic: null },
			{ name: `Allspice`, percentage: null, allergic: null },
			{
				name: `Vegetable Stock Cubes`,
				percentage: null,
				allergic: null,
			},
			{ name: `Ponmo (Cow Skin)`, percentage: null, allergic: null },
			{ name: ``, percentage: null, allergic: 'Celery' },
		],
		price: 1000,
		nutrition: [
			{
				label: 'Energy(Kj)',
				per100g: '872Kj',
				per224g: '1923Kj',
			},
			{
				label: 'Energy(Kcal)',
				per100g: '210Kcal',
				per224g: '463Kcal',
			},
			{
				label: 'Fat',
				per100g: '15g',
				per224g: '34g',
			},
			{
				label: 'of which saturates',
				per100g: '5.3g',
				per224g: '12g',
			},
			{
				label: 'Carbohydrate',
				per100g: '3.7g',
				per224g: '8.2g',
			},
			{
				label: 'of which sugar',
				per100g: '0.8g',
				per224g: '1.7g',
			},
			{
				label: 'Fibre',
				per100g: '1.8g',
				per224g: '3.9g',
			},
			{
				label: 'Protein',
				per100g: '13g',
				per224g: '29g',
			},
			{
				label: 'Salt',
				per100g: '0.15g',
				per224g: '0.32g',
			},
		],
	},
	{
		name: 'Ofada Rice and Ayamase Sauce',
		slug: 'ayamase-and-ofada',
		image: '/food/ofada-rice.png',
		hoverImage: '/food/ofada-rice-hover.png',
		description: `Ayamase and Odada Rice is a traditionally cooked blend of spicy green Scotch bonnet peppers and assorted proteins`,
		has450: true,
		ingredients: [
			{
				name: `Scotch Bonnet Chillies`,
				percentage: 18,
				allergic: null,
			},
			{ name: 'Water', percentage: 17.5, allergic: null },
			{ name: 'Mixed Bell Peppers', percentage: 15.7, allergic: null },
			{ name: 'Beef', percentage: 9, allergic: null },
			{ name: `Tripe`, percentage: 9, allergic: null },
			{ name: 'Brown Rice', percentage: 7.9, allergic: null },
			{ name: `Red Onions`, percentage: null, allergic: null },
			{ name: `Palm Oil`, percentage: null, allergic: null },
			{ name: `Prawns`, percentage: null, allergic: 'Crustaceans' },
			{ name: 'Cod', percentage: 6.8, allergic: 'Fish' },
			{ name: `Ginger`, percentage: null, allergic: null },
			{ name: `Garlic`, percentage: null, allergic: null },
			{ name: `Locust Beans`, percentage: null, allergic: null },
			{ name: `Seasoning Cube`, percentage: null, allergic: null },
			{ name: `Mixed Herb`, percentage: null, allergic: null },
			{ name: `Chicken`, percentage: null, allergic: null },
			{ name: `Ponmo (Cow Skin)`, percentage: null, allergic: null },
		],
		price: 1500,
		nutrition: [
			{
				label: 'Energy(Kj)',
				per100g: '404Kj',
				per224g: '1798Kj',
			},
			{
				label: 'Energy(Kcal)',
				per100g: '97Kcal',
				per224g: '432Kcal',
			},
			{
				label: 'Fat',
				per100g: '6.3g',
				per224g: '28g',
			},
			{
				label: 'of which saturates',
				per100g: '2.9g',
				per224g: '13g',
			},
			{
				label: 'Carbohydrate',
				per100g: '4.5g',
				per224g: '20g',
			},
			{
				label: 'of which sugar',
				per100g: '1.9g',
				per224g: '8.5g',
			},
			{
				label: 'Fibre',
				per100g: '0.9g',
				per224g: '4.1g',
			},
			{
				label: 'Protein',
				per100g: '5g',
				per224g: '22g',
			},
			{
				label: 'Salt',
				per100g: '0.11g',
				per224g: '0.48g',
			},
		],
	},
	{
		name: 'Ayamase Sauce',
		slug: 'ayamase-sauce',
		image: '/food/olori-ofada.JPG',
		hoverImage: '/food/olori-ofada-hover.JPG',
		description: `Ayamase Sauce is a traditionally cooked blend of spicy green Scotch bonnet peppers, and assorted proteins`,
		ingredients: [
			{
				name: `Scotch Bonnet Chillies`,
				percentage: 18,
				allergic: null,
			},
			{ name: 'Orange Peppers', percentage: 15.8, allergic: null },
			{ name: `Palm Oil`, percentage: 11.3, allergic: null },
			{ name: 'Water', percentage: 11.3, allergic: null },
			{ name: 'Beef', percentage: 9, allergic: null },
			{ name: `Tripe`, percentage: 9, allergic: null },
			{ name: `Red Onions`, percentage: null, allergic: null },
			{ name: `Prawns`, percentage: null, allergic: 'Crustaceans' },
			{ name: 'Cod', percentage: null, allergic: 'Fish' },
			{ name: `Ginger`, percentage: null, allergic: null },
			{ name: `Garlic`, percentage: null, allergic: null },
			{ name: `Seasoning Cube`, percentage: null, allergic: null },
			{ name: `Mixed Herb`, percentage: null, allergic: null },
			{ name: `Locust Beans`, percentage: null, allergic: null },
			{ name: `Ponmo (Cow Skin)`, percentage: null, allergic: null },
			{ name: `Vegetable Stock`, percentage: null, allergic: null },
			{ name: `Cube`, percentage: null, allergic: null },
			{ name: ``, percentage: null, allergic: 'Celery' },
		],
		price: 1500,
		nutrition: [
			{
				label: 'Energy(Kj)',
				per100g: '549Kj',
				per224g: '1228Kj',
			},
			{
				label: 'Energy(Kcal)',
				per100g: '133Kcal',
				per224g: '296Kcal',
			},
			{
				label: 'Fat',
				per100g: '11g',
				per224g: '24g',
			},
			{
				label: 'of which saturates',
				per100g: '4.9g',
				per224g: '11g',
			},
			{
				label: 'Carbohydrate',
				per100g: '2.7g',
				per224g: '6.1g',
			},
			{
				label: 'of which sugar',
				per100g: '2g',
				per224g: '4.5g',
			},
			{
				label: 'Fibre',
				per100g: '1.1g',
				per224g: '2.5g',
			},
			{
				label: 'Protein',
				per100g: '5.3g',
				per224g: '12g',
			},
			{
				label: 'Salt',
				per100g: '0.2g',
				per224g: '0.44g',
			},
		],
	},
	{
		name: 'Nigerian Jollof and Chicken',
		slug: 'jollof-and-chicken',
		image: '/food/jollof-rice.JPG',
		has450: true,
		hoverImage: '/food/jollof-rice-hover.JPG',
		description: `Authentic Nigerian Jollof Rice and Chicken. A flavorful and spicy Nigerian rice dish cooked with tomatoes, scotch bonnet peppers and seasoning, topped with chicken.`,
		ingredients: [
			{ name: 'Rice', percentage: 33, allergic: null },
			{ name: 'Chicken', percentage: 22.2, allergic: null },
			{ name: 'Water', percentage: 8.4, allergic: null },
			{ name: 'Vegetable Oil', percentage: 6.7, allergic: null },
			{ name: 'Allspice', percentage: 6.7, allergic: null },
			{
				name: 'Fresh Chopped Tomatoes',
				percentage: null,
				allergic: null,
			},
			{
				name: 'Tomato Juice',
				percentage: null,
				allergic: null,
			},
			{
				name: 'Acidity Regulator: Citric Acid',
				percentage: null,
				allergic: null,
			},
			{
				name: `Scotch Bonnet Chillies`,
				percentage: null,
				allergic: null,
			},
			{ name: `Red Onions`, percentage: null, allergic: null },
			{ name: `Garlic`, percentage: null, allergic: null },
			{ name: `Ginger`, percentage: null, allergic: null },
			{ name: `Seasoning Cube`, percentage: null, allergic: null },
			{ name: `Chicken`, percentage: null, allergic: null },
			{ name: ``, percentage: null, allergic: 'Celery' },
			{ name: `Dried Bay Leaf`, percentage: null, allergic: null },
		],
		price: 1200,
		nutrition: [
			{
				label: 'Energy(Kj)',
				per100g: '755Kj',
				per224g: '3395Kj',
			},
			{
				label: 'Energy(Kcal)',
				per100g: '180Kcal',
				per224g: '811Kcal',
			},
			{
				label: 'Fat',
				per100g: '8.5g',
				per224g: '38g',
			},
			{
				label: 'of which saturates',
				per100g: '0.9g',
				per224g: '3.9g',
			},
			{
				label: 'Carbohydrate',
				per100g: '16g',
				per224g: '73g',
			},
			{
				label: 'of which sugar',
				per100g: '2g',
				per224g: '8.8g',
			},
			{
				label: 'Fibre',
				per100g: '2.1g',
				per224g: '9.6g',
			},
			{
				label: 'Protein',
				per100g: '8,7',
				per224g: '39g',
			},
			{
				label: 'Salt',
				per100g: '0.25g',
				per224g: '1.1g',
			},
		],
	},
	{
		name: 'Banga Soup',
		slug: 'banga-soup',
		image: '/food/placeholder.jpg',
		hoverImage: '/food/placeholder.jpg',
		description: `Dive into the rich and comforting flavors of Africa with our authentic Egusi Soup – a delicious blend of tradition and taste that captures the essence of the continent in every spoonful.`,
		ingredients: [
			{ name: 'Water', percentage: 22, allergic: null },
			{ name: 'Melon Seeds', percentage: 18.1, allergic: null },
			{ name: 'Beef', percentage: 18.1, allergic: null },
			{
				name: `Scotch Bonnet Chillies`,
				percentage: 5.7,
				allergic: null,
			},
			{ name: 'Cod', percentage: 6.8, allergic: 'Fish' },
			{ name: `Pumpkin Leaves`, percentage: null, allergic: null },
			{ name: `Palm Oil`, percentage: null, allergic: null },
			{ name: `Prawns`, percentage: null, allergic: 'Crustaceans' },
			{ name: `Red Onions`, percentage: null, allergic: null },
			{ name: `Tripe`, percentage: null, allergic: null },
			{ name: `Garlic`, percentage: null, allergic: null },
			{ name: `Locust Beans`, percentage: null, allergic: null },
			{ name: `Allspice`, percentage: null, allergic: null },
			{
				name: `Vegetable Stock Cubes`,
				percentage: null,
				allergic: null,
			},
			{ name: `Ponmo (Cow Skin)`, percentage: null, allergic: null },
			{ name: ``, percentage: null, allergic: 'Celery' },
		],
		price: 10,
		nutrition: [
			{
				label: 'Energy(Kj)',
				per100g: '872Kj',
				per224g: '1923Kj',
			},
			{
				label: 'Energy(Kcal)',
				per100g: '210Kcal',
				per224g: '463Kcal',
			},
			{
				label: 'Fat',
				per100g: '15g',
				per224g: '34g',
			},
			{
				label: 'of which saturates',
				per100g: '5.3g',
				per224g: '12g',
			},
			{
				label: 'Carbohydrate',
				per100g: '3.7g',
				per224g: '8.2g',
			},
			{
				label: 'of which sugar',
				per100g: '0.8g',
				per224g: '1.7g',
			},
			{
				label: 'Fibre',
				per100g: '1.8g',
				per224g: '3.9g',
			},
			{
				label: 'Protein',
				per100g: '13g',
				per224g: '29g',
			},
			{
				label: 'Salt',
				per100g: '0.15g',
				per224g: '0.32g',
			},
		],
	},
	{
		name: 'Efo Riro',
		slug: 'efo-riro',
		image: '/food/placeholder.jpg',
		hoverImage: '/food/placeholder.jpg',
		description: `Dive into the rich and comforting flavors of Africa with our authentic Egusi Soup – a delicious blend of tradition and taste that captures the essence of the continent in every spoonful.`,
		ingredients: [
			{ name: 'Water', percentage: 22, allergic: null },
			{ name: 'Melon Seeds', percentage: 18.1, allergic: null },
			{ name: 'Beef', percentage: 18.1, allergic: null },
			{
				name: `Scotch Bonnet Chillies`,
				percentage: 5.7,
				allergic: null,
			},
			{ name: 'Cod', percentage: 6.8, allergic: 'Fish' },
			{ name: `Pumpkin Leaves`, percentage: null, allergic: null },
			{ name: `Palm Oil`, percentage: null, allergic: null },
			{ name: `Prawns`, percentage: null, allergic: 'Crustaceans' },
			{ name: `Red Onions`, percentage: null, allergic: null },
			{ name: `Tripe`, percentage: null, allergic: null },
			{ name: `Garlic`, percentage: null, allergic: null },
			{ name: `Locust Beans`, percentage: null, allergic: null },
			{ name: `Allspice`, percentage: null, allergic: null },
			{
				name: `Vegetable Stock Cubes`,
				percentage: null,
				allergic: null,
			},
			{ name: `Ponmo (Cow Skin)`, percentage: null, allergic: null },
			{ name: ``, percentage: null, allergic: 'Celery' },
		],
		price: 67352,
		nutrition: [
			{
				label: 'Energy(Kj)',
				per100g: '872Kj',
				per224g: '1923Kj',
			},
			{
				label: 'Energy(Kcal)',
				per100g: '210Kcal',
				per224g: '463Kcal',
			},
			{
				label: 'Fat',
				per100g: '15g',
				per224g: '34g',
			},
			{
				label: 'of which saturates',
				per100g: '5.3g',
				per224g: '12g',
			},
			{
				label: 'Carbohydrate',
				per100g: '3.7g',
				per224g: '8.2g',
			},
			{
				label: 'of which sugar',
				per100g: '0.8g',
				per224g: '1.7g',
			},
			{
				label: 'Fibre',
				per100g: '1.8g',
				per224g: '3.9g',
			},
			{
				label: 'Protein',
				per100g: '13g',
				per224g: '29g',
			},
			{
				label: 'Salt',
				per100g: '0.15g',
				per224g: '0.32g',
			},
		],
	},
	{
		name: 'Ogbono',
		slug: 'ogbono',
		image: '/food/placeholder.jpg',
		hoverImage: '/food/placeholder.jpg',
		description: `Dive into the rich and comforting flavors of Africa with our authentic Egusi Soup – a delicious blend of tradition and taste that captures the essence of the continent in every spoonful.`,
		ingredients: [
			{ name: 'Water', percentage: 22, allergic: null },
			{ name: 'Melon Seeds', percentage: 18.1, allergic: null },
			{ name: 'Beef', percentage: 18.1, allergic: null },
			{
				name: `Scotch Bonnet Chillies`,
				percentage: 5.7,
				allergic: null,
			},
			{ name: 'Cod', percentage: 6.8, allergic: 'Fish' },
			{ name: `Pumpkin Leaves`, percentage: null, allergic: null },
			{ name: `Palm Oil`, percentage: null, allergic: null },
			{ name: `Prawns`, percentage: null, allergic: 'Crustaceans' },
			{ name: `Red Onions`, percentage: null, allergic: null },
			{ name: `Tripe`, percentage: null, allergic: null },
			{ name: `Garlic`, percentage: null, allergic: null },
			{ name: `Locust Beans`, percentage: null, allergic: null },
			{ name: `Allspice`, percentage: null, allergic: null },
			{
				name: `Vegetable Stock Cubes`,
				percentage: null,
				allergic: null,
			},
			{ name: `Ponmo (Cow Skin)`, percentage: null, allergic: null },
			{ name: ``, percentage: null, allergic: 'Celery' },
		],
		price: 10,
		nutrition: [
			{
				label: 'Energy(Kj)',
				per100g: '872Kj',
				per224g: '1923Kj',
			},
			{
				label: 'Energy(Kcal)',
				per100g: '210Kcal',
				per224g: '463Kcal',
			},
			{
				label: 'Fat',
				per100g: '15g',
				per224g: '34g',
			},
			{
				label: 'of which saturates',
				per100g: '5.3g',
				per224g: '12g',
			},
			{
				label: 'Carbohydrate',
				per100g: '3.7g',
				per224g: '8.2g',
			},
			{
				label: 'of which sugar',
				per100g: '0.8g',
				per224g: '1.7g',
			},
			{
				label: 'Fibre',
				per100g: '1.8g',
				per224g: '3.9g',
			},
			{
				label: 'Protein',
				per100g: '13g',
				per224g: '29g',
			},
			{
				label: 'Salt',
				per100g: '0.15g',
				per224g: '0.32g',
			},
		],
	},
	{
		name: 'Ewa Agoyin',
		slug: 'ewa-agoyin',
		image: '/food/placeholder.jpg',
		hoverImage: '/food/placeholder.jpg',
		description: `Dive into the rich and comforting flavors of Africa with our authentic Egusi Soup – a delicious blend of tradition and taste that captures the essence of the continent in every spoonful.`,
		ingredients: [
			{ name: 'Water', percentage: 22, allergic: null },
			{ name: 'Melon Seeds', percentage: 18.1, allergic: null },
			{ name: 'Beef', percentage: 18.1, allergic: null },
			{
				name: `Scotch Bonnet Chillies`,
				percentage: 5.7,
				allergic: null,
			},
			{ name: 'Cod', percentage: 6.8, allergic: 'Fish' },
			{ name: `Pumpkin Leaves`, percentage: null, allergic: null },
			{ name: `Palm Oil`, percentage: null, allergic: null },
			{ name: `Prawns`, percentage: null, allergic: 'Crustaceans' },
			{ name: `Red Onions`, percentage: null, allergic: null },
			{ name: `Tripe`, percentage: null, allergic: null },
			{ name: `Garlic`, percentage: null, allergic: null },
			{ name: `Locust Beans`, percentage: null, allergic: null },
			{ name: `Allspice`, percentage: null, allergic: null },
			{
				name: `Vegetable Stock Cubes`,
				percentage: null,
				allergic: null,
			},
			{ name: `Ponmo (Cow Skin)`, percentage: null, allergic: null },
			{ name: ``, percentage: null, allergic: 'Celery' },
		],
		price: 10,
		nutrition: [
			{
				label: 'Energy(Kj)',
				per100g: '872Kj',
				per224g: '1923Kj',
			},
			{
				label: 'Energy(Kcal)',
				per100g: '210Kcal',
				per224g: '463Kcal',
			},
			{
				label: 'Fat',
				per100g: '15g',
				per224g: '34g',
			},
			{
				label: 'of which saturates',
				per100g: '5.3g',
				per224g: '12g',
			},
			{
				label: 'Carbohydrate',
				per100g: '3.7g',
				per224g: '8.2g',
			},
			{
				label: 'of which sugar',
				per100g: '0.8g',
				per224g: '1.7g',
			},
			{
				label: 'Fibre',
				per100g: '1.8g',
				per224g: '3.9g',
			},
			{
				label: 'Protein',
				per100g: '13g',
				per224g: '29g',
			},
			{
				label: 'Salt',
				per100g: '0.15g',
				per224g: '0.32g',
			},
		],
	},
	{
		name: 'Ifokore Ijebu',
		slug: 'ifokore-ijebu',
		image: '/food/placeholder.jpg',
		hoverImage: '/food/placeholder.jpg',
		description: `Dive into the rich and comforting flavors of Africa with our authentic Egusi Soup – a delicious blend of tradition and taste that captures the essence of the continent in every spoonful.`,
		ingredients: [
			{ name: 'Water', percentage: 22, allergic: null },
			{ name: 'Melon Seeds', percentage: 18.1, allergic: null },
			{ name: 'Beef', percentage: 18.1, allergic: null },
			{
				name: `Scotch Bonnet Chillies`,
				percentage: 5.7,
				allergic: null,
			},
			{ name: 'Cod', percentage: 6.8, allergic: 'Fish' },
			{ name: `Pumpkin Leaves`, percentage: null, allergic: null },
			{ name: `Palm Oil`, percentage: null, allergic: null },
			{ name: `Prawns`, percentage: null, allergic: 'Crustaceans' },
			{ name: `Red Onions`, percentage: null, allergic: null },
			{ name: `Tripe`, percentage: null, allergic: null },
			{ name: `Garlic`, percentage: null, allergic: null },
			{ name: `Locust Beans`, percentage: null, allergic: null },
			{ name: `Allspice`, percentage: null, allergic: null },
			{
				name: `Vegetable Stock Cubes`,
				percentage: null,
				allergic: null,
			},
			{ name: `Ponmo (Cow Skin)`, percentage: null, allergic: null },
			{ name: ``, percentage: null, allergic: 'Celery' },
		],
		price: 10,
		nutrition: [
			{
				label: 'Energy(Kj)',
				per100g: '872Kj',
				per224g: '1923Kj',
			},
			{
				label: 'Energy(Kcal)',
				per100g: '210Kcal',
				per224g: '463Kcal',
			},
			{
				label: 'Fat',
				per100g: '15g',
				per224g: '34g',
			},
			{
				label: 'of which saturates',
				per100g: '5.3g',
				per224g: '12g',
			},
			{
				label: 'Carbohydrate',
				per100g: '3.7g',
				per224g: '8.2g',
			},
			{
				label: 'of which sugar',
				per100g: '0.8g',
				per224g: '1.7g',
			},
			{
				label: 'Fibre',
				per100g: '1.8g',
				per224g: '3.9g',
			},
			{
				label: 'Protein',
				per100g: '13g',
				per224g: '29g',
			},
			{
				label: 'Salt',
				per100g: '0.15g',
				per224g: '0.32g',
			},
		],
	},
	{
		name: 'Asaro',
		slug: 'Asaro',
		image: '/food/placeholder.jpg',
		hoverImage: '/food/placeholder.jpg',
		description: `Dive into the rich and comforting flavors of Africa with our authentic Egusi Soup – a delicious blend of tradition and taste that captures the essence of the continent in every spoonful.`,
		ingredients: [
			{ name: 'Water', percentage: 22, allergic: null },
			{ name: 'Melon Seeds', percentage: 18.1, allergic: null },
			{ name: 'Beef', percentage: 18.1, allergic: null },
			{
				name: `Scotch Bonnet Chillies`,
				percentage: 5.7,
				allergic: null,
			},
			{ name: 'Cod', percentage: 6.8, allergic: 'Fish' },
			{ name: `Pumpkin Leaves`, percentage: null, allergic: null },
			{ name: `Palm Oil`, percentage: null, allergic: null },
			{ name: `Prawns`, percentage: null, allergic: 'Crustaceans' },
			{ name: `Red Onions`, percentage: null, allergic: null },
			{ name: `Tripe`, percentage: null, allergic: null },
			{ name: `Garlic`, percentage: null, allergic: null },
			{ name: `Locust Beans`, percentage: null, allergic: null },
			{ name: `Allspice`, percentage: null, allergic: null },
			{
				name: `Vegetable Stock Cubes`,
				percentage: null,
				allergic: null,
			},
			{ name: `Ponmo (Cow Skin)`, percentage: null, allergic: null },
			{ name: ``, percentage: null, allergic: 'Celery' },
		],
		price: 10,
		nutrition: [
			{
				label: 'Energy(Kj)',
				per100g: '872Kj',
				per224g: '1923Kj',
			},
			{
				label: 'Energy(Kcal)',
				per100g: '210Kcal',
				per224g: '463Kcal',
			},
			{
				label: 'Fat',
				per100g: '15g',
				per224g: '34g',
			},
			{
				label: 'of which saturates',
				per100g: '5.3g',
				per224g: '12g',
			},
			{
				label: 'Carbohydrate',
				per100g: '3.7g',
				per224g: '8.2g',
			},
			{
				label: 'of which sugar',
				per100g: '0.8g',
				per224g: '1.7g',
			},
			{
				label: 'Fibre',
				per100g: '1.8g',
				per224g: '3.9g',
			},
			{
				label: 'Protein',
				per100g: '13g',
				per224g: '29g',
			},
			{
				label: 'Salt',
				per100g: '0.15g',
				per224g: '0.32g',
			},
		],
	},
	{
		name: 'Ila Alasepo',
		slug: 'ila-alasepo',
		image: '/food/placeholder.jpg',
		hoverImage: '/food/placeholder.jpg',
		description: `Dive into the rich and comforting flavors of Africa with our authentic Egusi Soup – a delicious blend of tradition and taste that captures the essence of the continent in every spoonful.`,
		ingredients: [
			{ name: 'Water', percentage: 22, allergic: null },
			{ name: 'Melon Seeds', percentage: 18.1, allergic: null },
			{ name: 'Beef', percentage: 18.1, allergic: null },
			{
				name: `Scotch Bonnet Chillies`,
				percentage: 5.7,
				allergic: null,
			},
			{ name: 'Cod', percentage: 6.8, allergic: 'Fish' },
			{ name: `Pumpkin Leaves`, percentage: null, allergic: null },
			{ name: `Palm Oil`, percentage: null, allergic: null },
			{ name: `Prawns`, percentage: null, allergic: 'Crustaceans' },
			{ name: `Red Onions`, percentage: null, allergic: null },
			{ name: `Tripe`, percentage: null, allergic: null },
			{ name: `Garlic`, percentage: null, allergic: null },
			{ name: `Locust Beans`, percentage: null, allergic: null },
			{ name: `Allspice`, percentage: null, allergic: null },
			{
				name: `Vegetable Stock Cubes`,
				percentage: null,
				allergic: null,
			},
			{ name: `Ponmo (Cow Skin)`, percentage: null, allergic: null },
			{ name: ``, percentage: null, allergic: 'Celery' },
		],
		price: 10,
		nutrition: [
			{
				label: 'Energy(Kj)',
				per100g: '872Kj',
				per224g: '1923Kj',
			},
			{
				label: 'Energy(Kcal)',
				per100g: '210Kcal',
				per224g: '463Kcal',
			},
			{
				label: 'Fat',
				per100g: '15g',
				per224g: '34g',
			},
			{
				label: 'of which saturates',
				per100g: '5.3g',
				per224g: '12g',
			},
			{
				label: 'Carbohydrate',
				per100g: '3.7g',
				per224g: '8.2g',
			},
			{
				label: 'of which sugar',
				per100g: '0.8g',
				per224g: '1.7g',
			},
			{
				label: 'Fibre',
				per100g: '1.8g',
				per224g: '3.9g',
			},
			{
				label: 'Protein',
				per100g: '13g',
				per224g: '29g',
			},
			{
				label: 'Salt',
				per100g: '0.15g',
				per224g: '0.32g',
			},
		],
	},
	{
		name: 'Buka Stew',
		slug: 'buka-stew',
		image: '/food/placeholder.jpg',
		hoverImage: '/food/placeholder.jpg',
		description: `Dive into the rich and comforting flavors of Africa with our authentic Egusi Soup – a delicious blend of tradition and taste that captures the essence of the continent in every spoonful.`,
		ingredients: [
			{ name: 'Water', percentage: 22, allergic: null },
			{ name: 'Melon Seeds', percentage: 18.1, allergic: null },
			{ name: 'Beef', percentage: 18.1, allergic: null },
			{
				name: `Scotch Bonnet Chillies`,
				percentage: 5.7,
				allergic: null,
			},
			{ name: 'Cod', percentage: 6.8, allergic: 'Fish' },
			{ name: `Pumpkin Leaves`, percentage: null, allergic: null },
			{ name: `Palm Oil`, percentage: null, allergic: null },
			{ name: `Prawns`, percentage: null, allergic: 'Crustaceans' },
			{ name: `Red Onions`, percentage: null, allergic: null },
			{ name: `Tripe`, percentage: null, allergic: null },
			{ name: `Garlic`, percentage: null, allergic: null },
			{ name: `Locust Beans`, percentage: null, allergic: null },
			{ name: `Allspice`, percentage: null, allergic: null },
			{
				name: `Vegetable Stock Cubes`,
				percentage: null,
				allergic: null,
			},
			{ name: `Ponmo (Cow Skin)`, percentage: null, allergic: null },
			{ name: ``, percentage: null, allergic: 'Celery' },
		],
		price: 10,
		nutrition: [
			{
				label: 'Energy(Kj)',
				per100g: '872Kj',
				per224g: '1923Kj',
			},
			{
				label: 'Energy(Kcal)',
				per100g: '210Kcal',
				per224g: '463Kcal',
			},
			{
				label: 'Fat',
				per100g: '15g',
				per224g: '34g',
			},
			{
				label: 'of which saturates',
				per100g: '5.3g',
				per224g: '12g',
			},
			{
				label: 'Carbohydrate',
				per100g: '3.7g',
				per224g: '8.2g',
			},
			{
				label: 'of which sugar',
				per100g: '0.8g',
				per224g: '1.7g',
			},
			{
				label: 'Fibre',
				per100g: '1.8g',
				per224g: '3.9g',
			},
			{
				label: 'Protein',
				per100g: '13g',
				per224g: '29g',
			},
			{
				label: 'Salt',
				per100g: '0.15g',
				per224g: '0.32g',
			},
		],
	},
];

export const TODAY_SPECIAL: FoodI[] = MENU.slice(0, 4);

export const HOW_IT_WORKS = [
	{
		step: 1,
		title: 'Browse through the kitchen.',
		description:
			'Discover our delectable menu online, filled with mouthwatering dishes prepared fresh in our kitchen.',
	},
	{
		step: 2,
		title: 'Find closest pickup store',
		description:
			'Locate the nearest African shop that stores our chilled/frozen ready meal.',
	},
	{
		step: 3,
		title: 'Visit store, purchase and pickup ',
		description:
			'Visit our friendly store, purchase and pick up your favorite delicious ready meal.',
	},
	{
		step: 4,
		title: 'Enjoy your meal',
		description:
			'Savor every bite of your flavorful meal from our meal range – a culinary delight awaits!',
	},
];

export const WHY_CHOOSE_US = [
	{
		title: 'Fresh Ingredients, No Hassle',
		description:
			'We provide the freshest ingredients, saving you time and effort compared to recipe boxes.',
	},
	{
		title: 'Chef-Curated Menu',
		description:
			'Our expert chefs craft diverse, mouthwatering dishes not found in store ready meals.',
	},
	{
		title: 'Local Convenience',
		description:
			'Convenient pickup locations, no waiting for delivery like with delivery apps.',
	},
	{
		title: 'Healthier Options',
		description:
			'We prioritize nutritious ingredients, offering a healthier choice over fast food delivery.',
	},
	{
		title: 'Cost-Effective',
		description:
			'Competitive prices compared to store-bought meals and delivery apps.',
	},
	{
		title: 'Support Local Business',
		description: `Choosing ${PROFILE.name}supports local businesses and communities.`,
	},
	{
		title: 'No Subscription',
		description:
			'No commitment, order when you want, without subscription obligations.',
	},
	{
		title: '24/7 Online Support',
		description: `${PROFILE.name} offers round-the-clock online assistance, ensuring you have help when you need it.`,
	},
	{
		title: 'Community Engagement',
		description:
			'We actively engage with our customers, fostering a sense of community through exclusive events and promotions, setting us apart from standard meal options.',
	},
];

export const FOOTER_LINKS = [
	{
		heading: 'Quick Links',
		links: [
			{ title: 'Blog', href: '/blog' },
			{ title: 'Home', href: '/' },
			{ title: 'About', href: '/about' },
			{ title: 'Kitchen', href: '/kitchen' },
		],
	},
	{
		heading: 'Help',
		links: [
			{ title: 'Contact Us', href: '/about' },
			{ title: 'Faqs', href: '/faqs' },
		],
	},
	{
		heading: 'Today Special',
		links: [
			{ title: 'Egusi Soup', href: '/kitchen/egusi-soup' },
			{ title: 'Jollof Rice', href: '/kitchen/jollof-rice' },
			{ title: 'Ofada Rice', href: '/kitchen/olori-ofada' },
		],
	},
];

export const FAQS = [
	{
		category: 'The Meals',
		questions: [
			{
				question: 'How do I heat up my meals?',
				answer: 'Microwave frozen meal for 3-4 minutes, stir and put back in for extra 1-2 minutes and serve hot!',
			},
			{
				question: 'Can I freeze my meals?',
				answer: 'You can freeze the meals and consume them within 2 months, however we encourage you to eat fresh to ensure maximum flavour. The meals can also be heated straight from frozen. Ensure they are piping hot throughout before serving',
			},
		],
	},
	{
		category: 'Ingredients & The Menu',
		questions: [
			{
				question: 'Do you rotate the menu?',
				answer: `As the business grows, we'll increase production of other meal options on our list.`,
			},
		],
	},
	{
		category: 'Packaging and Recycling',
		questions: [
			{
				question: 'How do I recycle my packaging?',
				answer: `Meal packs can be rinsed, and recycled in your household recycling. `,
			},
		],
	},
];

export const STORE_LOCATIONS = [
	{
		name: 'African Mart',
		address: '456 Westwood Ave, New York, NY 10001',
		coordinates: { lat: 40.7437, lon: -74.0072 },
		city: 'New York',
		state: 'New York',
		zip: '10001',
	},
	{
		name: 'Safari Groceries',
		address: '789 Main St, Atlanta, GA 30301',
		coordinates: { lat: 33.749, lon: -84.388 },
		city: 'Atlanta',
		state: 'Georgia',
		zip: '30301',
	},
	{
		name: 'AfroStyles Boutique',
		address: '321 Elm St, Houston, TX 77002',
		coordinates: { lat: 29.7604, lon: -95.3698 },
		city: 'Houston',
		state: 'Texas',
		zip: '77002',
	},
	{
		name: 'Savannah African Market',
		address: '1234 Liberty St, Savannah, GA 31401',
		coordinates: { lat: 32.0836, lon: -81.0998 },
		city: 'Savannah',
		state: 'Georgia',
		zip: '31401',
	},
	{
		name: 'Nairobi Spice World',
		address: '567 Spice Ave, Los Angeles, CA 90001',
		coordinates: { lat: 34.0522, lon: -118.2437 },
		city: 'Los Angeles',
		state: 'California',
		zip: '90001',
	},
	{
		name: 'Kente Cloth Emporium',
		address: '890 Fabric Rd, Chicago, IL 60601',
		coordinates: { lat: 41.8781, lon: -87.6298 },
		city: 'Chicago',
		state: 'Illinois',
		zip: '60601',
	},
	{
		name: 'Johannesburg Supermarket',
		address: '101 Mandela Blvd, Dallas, TX 75201',
		coordinates: { lat: 32.7767, lon: -96.797 },
		city: 'Dallas',
		state: 'Texas',
		zip: '75201',
	},
	{
		name: 'Africana Treasures',
		address: '222 Market Square, Miami, FL 33101',
		coordinates: { lat: 25.7617, lon: -80.1918 },
		city: 'Miami',
		state: 'Florida',
		zip: '33101',
	},
	{
		name: 'Accra Spice Bazaar',
		address: '333 Ghana Rd, Boston, MA 02101',
		coordinates: { lat: 42.3601, lon: -71.0589 },
		city: 'Boston',
		state: 'Massachusetts',
		zip: '02101',
	},
	{
		name: 'Bamako Fabrics & More',
		address: '456 Textile Ln, Washington, D.C. 20001',
		coordinates: { lat: 38.8951, lon: -77.0369 },
		city: 'Washington, D.C.',
		state: 'District of Columbia',
		zip: '20001',
	},
	{
		name: 'Cairo Exotic Foods',
		address: '567 Nile St, San Francisco, CA 94101',
		coordinates: { lat: 37.7749, lon: -122.4194 },
		city: 'San Francisco',
		state: 'California',
		zip: '94101',
	},
	{
		name: 'Lagos Imports',
		address: '789 Afro Ave, Philadelphia, PA 19101',
		coordinates: { lat: 39.9526, lon: -75.1652 },
		city: 'Philadelphia',
		state: 'Pennsylvania',
		zip: '19101',
	},
	{
		name: 'Dakar Delights',
		address: '101 Senegal St, Denver, CO 80201',
		coordinates: { lat: 39.7392, lon: -104.9903 },
		city: 'Denver',
		state: 'Colorado',
		zip: '80201',
	},
	{
		name: 'Addis Ababa Market',
		address: '222 Ethiopian Rd, Phoenix, AZ 85001',
		coordinates: { lat: 33.4484, lon: -112.074 },
		city: 'Phoenix',
		state: 'Arizona',
		zip: '85001',
	},
	{
		name: 'Bantu Boutique',
		address: '333 African Dr, Seattle, WA 98101',
		coordinates: { lat: 47.6062, lon: -122.3321 },
		city: 'Seattle',
		state: 'Washington',
		zip: '98101',
	},
];
export const blogPosts: BlogPost[] = [
	{
		id: '0',
		title: 'Delicious Pizza Recipes',
		date: 'September 10, 2023',
		author: 'Fusco Josh',
		image: '/image5.jpg',
		content: 'What are ultra-processed foods? Ultra-processed foods are defined as products that undergo extensive industrial processing and often contain additives, preservatives, and artificial flavors. Learn more about their impact on your health.',
	},
	{
		id: '1',
		title: 'The Art of Sushi Making',
		date: 'October 5, 2023',
		author: 'Sakura Tanaka',
		image: '/image5.jpg',
		content: 'Discover the secrets of crafting delicious sushi rolls at home. From selecting the freshest ingredients to mastering the perfect rice, we cover it all in this sushi-making guide.',
	},
	{
		id: '2',
		title: 'Exploring Italian Cuisine',
		date: 'November 15, 2023',
		author: 'Marco Rossi',
		image: '/image5.jpg',
		content: 'Italian cuisine is renowned worldwide for its rich flavors and diverse dishes. Join us on a culinary journey through the heart of Italy, exploring its regional specialties and culinary traditions.',
	},
	{
		id: '3',
		title: 'Healthy Breakfast Ideas',
		date: 'December 3, 2023',
		author: 'Alice Smith',
		image: '/image5.jpg',
		content: "Start your day right with these nutritious and delicious breakfast ideas. From smoothie bowls to avocado toast, we've got your mornings covered.",
	},
	{
		id: '4',
		title: 'The Joy of Baking',
		date: 'January 20, 2024',
		author: 'Sarah Baker',
		image: '/image5.jpg',
		content: 'Baking is a delightful art that brings warmth to any home. Explore the world of baking with our tips, tricks, and mouthwatering recipes.',
	},
	{
		id: '5',
		title: 'Exploring Asian Street Food',
		date: 'February 8, 2024',
		author: 'Ming Chen',
		image: '/image5.jpg',
		content: "Take a culinary tour of Asia's vibrant street food scene. From spicy Thai noodles to savory Indian chaat, experience the flavors of the streets.",
	},
	{
		id: '6',
		title: 'The Benefits of Organic Farming',
		date: 'March 12, 2024',
		author: 'Emily Green',
		image: '/image5.jpg',
		content: 'Discover why organic farming practices are not only better for the environment but also lead to healthier and tastier produce. Learn about the benefits of going organic.',
	},
	{
		id: '7',
		title: 'Wine Tasting 101',
		date: 'April 6, 2024',
		author: 'Vincent Martin',
		image: '/image5.jpg',
		content: 'Embark on a journey through the world of wines. From understanding wine varieties to perfecting the art of wine tasting, become a wine connoisseur with our guide.',
	},
	{
		id: '8',
		title: 'Vegan Cooking Made Easy',
		date: 'May 19, 2024',
		author: 'Olivia Green',
		image: '/image5.jpg',
		content: "Transitioning to a vegan lifestyle? We've got you covered with simple and delicious vegan recipes that will satisfy your taste buds and conscience.",
	},
	{
		id: '9',
		title: 'The Art of BBQ',
		date: 'June 8, 2024',
		author: 'Mike Johnson',
		image: '/image5.jpg',
		content: 'Fire up the grill and master the art of barbecue. From juicy ribs to smoky brisket, learn the secrets of creating mouthwatering BBQ dishes.',
	},
	{
		id: '10',
		title: 'Spices from Around the World',
		date: 'July 14, 2024',
		author: 'Amina Patel',
		image: '/image5.jpg',
		content: 'Travel the globe through the flavors of spices. Explore the history, uses, and cultural significance of spices from different corners of the world.',
	},
	{
		id: '11',
		title: 'Crafting the Perfect Burger',
		date: 'August 9, 2024',
		author: 'Sam Adams',
		image: '/image5.jpg',
		content: 'Unlock the secrets to crafting the ultimate burger. From selecting the best meat blend to creative toppings, create burger perfection in your kitchen.',
	},
	{
		id: '12',
		title: 'The Art of Food Presentation',
		date: 'September 25, 2024',
		author: 'Sophia Lee',
		image: '/image5.jpg',
		content: 'Elevate your culinary creations with the art of food presentation. Learn techniques to make your dishes not only taste amazing but look stunning too.',
	},
	{
		id: '13',
		title: 'Exploring Mediterranean Flavors',
		date: 'October 11, 2024',
		author: 'Nikos Papadopoulos',
		image: '/image5.jpg',
		content: 'Delve into the Mediterranean diet, known for its health benefits and delicious cuisine. Discover the flavors of Greece, Italy, and more.',
	},
	{
		id: '14',
		title: 'The Joys of Home Gardening',
		date: 'November 7, 2024',
		author: 'Elena Rodriguez',
		image: '/image5.jpg',
		content: 'Experience the satisfaction of growing your own food at home. Learn gardening tips and tricks for cultivating a fruitful and beautiful garden.',
	},
];
