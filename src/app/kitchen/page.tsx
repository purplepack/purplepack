import KitchenProduct from '@/components/pages/kitchen';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
	title: 'About',
};

export default function Kitchen() {
	return <KitchenProduct />;
}
