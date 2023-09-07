'use client';
import { STORE_LOCATIONS } from '@/lib/data';
import React, { useState, useEffect } from 'react';
import { Container } from './layout/container';
import { Skeleton } from './ui/skeleton';
import { Label } from './ui/label';
import { DataTable } from './ui/table/data-table';
import { locationColumns } from './ui/table-columns';

const calculateDistance = (
	lat1: number,
	lon1: number,
	lat2: number,
	lon2: number
) => {
	const R = 6371;
	const dLat = (lat2 - lat1) * (Math.PI / 180);
	const dLon = (lon2 - lon1) * (Math.PI / 180);
	const a =
		Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		Math.cos(lat1 * (Math.PI / 180)) *
			Math.cos(lat2 * (Math.PI / 180)) *
			Math.sin(dLon / 2) *
			Math.sin(dLon / 2);
	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	const distance = R * c;
	return distance;
};

const StoreLocator = () => {
	const [userCoordinates, setUserCoordinates] = useState<{
		lat: number;
		lon: number;
	} | null>(null);

	const findClosestStore = () => {
		let closestStore = STORE_LOCATIONS[0];
		let closestDistance = Number.MAX_VALUE;

		if (userCoordinates) {
			for (const store of STORE_LOCATIONS) {
				const distance = calculateDistance(
					userCoordinates.lat,
					userCoordinates.lon,
					store.coordinates.lat,
					store.coordinates.lon
				);

				if (distance < closestDistance) {
					closestDistance = distance;
					closestStore = store;
				}
			}
		}

		return closestStore;
	};

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					setUserCoordinates({
						lat: position.coords.latitude,
						lon: position.coords.longitude,
					});
				},
				(error) => {
					console.error('Error getting user location:', error);
					setUserCoordinates({
						lat: 40.712776,
						lon: -74.005974,
					});
				}
			);
		} else {
			setUserCoordinates({ lat: 40.712776, lon: -74.005974 });
		}
	}, []);

	const closestStore = findClosestStore();
	return (
		<div
			className='py-12'
			id='store-locator'
		>
			<Container>
				<h1 className='text-2xl text-center font-bold'>
					Store Locator
				</h1>
				<div className='flex flex-col gap-5 px-5 '>
					<Label className='mt-2 flex gap-5'>
						<span>Closest Store:</span>
						{userCoordinates ? (
							closestStore.name +
							': ' +
							closestStore.address
						) : (
							<Skeleton className='h-4 w-72 bg-primary' />
						)}
					</Label>
					<Label className='flex gap-5'>Other Stores:</Label>
					<DataTable
						searchWith='state'
						showSearch
						showColumns
						columns={locationColumns}
						data={STORE_LOCATIONS}
					/>
				</div>
			</Container>
		</div>
	);
};

export default StoreLocator;
