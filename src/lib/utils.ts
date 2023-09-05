import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
var ls = require('local-storage');

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const formatAmount = (i: number): string => {
	const formattedAmount = i.toLocaleString();
	// ₦ $ other currency symbol
	return `£${formattedAmount}`;
};

export const truncateParagraph = (t: string, i: number): string => {
	if (t.length <= i) {
		return t;
	} else {
		return t.substring(0, i) + '...';
	}
};

const CART_KEY = 'cart';

export const getCartItems = (): CartItem[] => {
	return ls.get(CART_KEY) || [];
};

export const addToCart = (item: CartItem): void => {
	const cartItems = getCartItems();
	cartItems.push(item);
	ls.set(CART_KEY, cartItems);
};

export const removeFromCart = (itemId: number): void => {
	const cartItems = getCartItems();
	const updatedCart = cartItems.filter((item) => item.id !== itemId);
	ls.set(CART_KEY, updatedCart);
};
