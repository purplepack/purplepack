interface CartItem {
	id: number;
	name: string;
}

interface IngredientI {
	name: string;
	percentage: number | null;
	allergic: string | null;
}
interface FoodI {
	name: string;
	slug: string;
	image: string;
	hoverImage: string;
	description: string;
	price: number;
	has450?: boolean;
	nutrition: {
		label: string;
		per100g: string;
		per224g: string;
	}[];
	ingredients: IngredientI[];
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
interface BlogPost {
	id: string;
	title: string;
	date: string;
	author: string;
	image: string;
	content: string;
}

interface PostI {
	title: string;
	mainImage: {
		_type: string;
		alt: string;
		asset: {
			_ref: string;
			_type: string;
		};
		crop: {
			left: number;
			bottom: number;
			_type: string;
			right: number;
			top: number;
		};
		hotspot: {
			width: number;
			x: number;
			y: number;
			height: number;
			_type: string;
		};
	};
	body: {
		style: string;
		_key: string;
		markDefs: [];
		children: {
			_type: string;
			marks: [];
			text: string;
			_key: string;
		}[];
		_type: string;
	}[];
	publishedAt: string;
	author: AuthorCardI;
	categories: string;
	overview: string;
	content: any;
	_id: string;
	_rev: string;
	_type: string;

	slug: {
		_type: string;
		current: string;
	};
	_createdAt: Date;
}

interface AuthorCardI {
	_id: string;
	slug: { current: string; _type: string };
	_createdAt: Date;
	name: string;
	bio: any;
	_updatedAt: string;
	image: { _type: string; alt: string; asset: {} };
	_rev: string;
	_type: string;
}
