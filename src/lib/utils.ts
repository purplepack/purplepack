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

export function getInitials(name: string): string {
	const words = name.trim().split(' ');

	if (words.length >= 2) {
		const firstInitial = words[0].charAt(0);
		const secondInitial = words[1].charAt(0);
		return `${firstInitial}${secondInitial}`;
	}

	return words[0].charAt(0);
}

export function timeAgo(isoDate: string): string {
	const currentDate = new Date();
	const inputDate = new Date(isoDate);

	const secondsAgo = Math.floor(
		(currentDate.getTime() - inputDate.getTime()) / 1000
	);

	const intervals = {
		year: 31536000,
		month: 2592000,
		week: 604800,
		day: 86400,
		hour: 3600,
		minute: 60,
		second: 1,
	};

	for (const [unit, secondsInUnit] of Object.entries(intervals)) {
		const interval = Math.floor(secondsAgo / secondsInUnit);
		if (interval >= 1) {
			return `${interval} ${unit}${interval > 1 ? 's' : ''} ago`;
		}
	}

	return 'Just now';
}
