import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from './checkbox';
import { DataTableColumnHeader } from './table/data-table-column-header';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from './dropdown-menu';
import { Button } from './button';
import { MoreHorizontal } from 'lucide-react';

export const locationColumns: ColumnDef<Location>[] = [
	{
		id: 'select',
		header: ({ table }) => (
			<Checkbox
				checked={table.getIsAllPageRowsSelected()}
				onCheckedChange={(value) =>
					table.toggleAllPageRowsSelected(!!value)
				}
				aria-label='Select all'
			/>
		),
		cell: ({ row }) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={(value) => row.toggleSelected(!!value)}
				aria-label='Select row'
			/>
		),
		enableSorting: true,
		enableHiding: true,
	},

	{
		accessorKey: 'name',
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title='Store Name'
			/>
		),
	},
	{
		accessorKey: 'address',
		header: 'Store Address',
	},
	{
		accessorKey: 'city',
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title='City'
			/>
		),
	},
	{
		accessorKey: 'state',
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title='State'
			/>
		),
	},
	{
		accessorKey: 'zip',
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title='ZIP'
			/>
		),
	},
	{
		id: 'actions',
		cell: ({ row }) => {
			const location = row.original;

			return (
				<DropdownMenu>
					<DropdownMenuTrigger className=' cursor-pointer'>
						<MoreHorizontal className='h-4 w-4' />
					</DropdownMenuTrigger>
					<DropdownMenuContent align='end'>
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuItem
							onClick={() =>
								navigator.clipboard.writeText(
									location.address
								)
							}
						>
							Copy Address
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
