interface CartItem {
	id: number;
	name: string;
}

interface FoodI {
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
	}[];
}
interface FoodP {
	name: string;
	slug: string;
	description: string;
	image: string;
}

interface ContactCardI {
	icon: string;
	title: string;
	description: string;
}

interface AboutCardI {
	image: string;
	title: string;
	description: string;
	bgcolor: string;
	txtcolor: string;
}

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
	showSearch?: boolean;
	showColumns?: boolean;
	searchWith?: string;
}

interface Location {
	name: string;
	address: string;
	coordinates: { lat: number; lon: number };
	city: string;
	state: string;
	zip: string;
}
interface BlogPost{
  id: string;
  title: string;
  date: string;
  author: string;
  image: string;
  content: string;
}