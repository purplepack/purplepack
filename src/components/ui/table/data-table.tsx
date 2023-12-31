'use client';

import {
	flexRender,
	getCoreRowModel,
	useReactTable,
	getPaginationRowModel,
	SortingState,
	getSortedRowModel,
	getFilteredRowModel,
	ColumnFiltersState,
	VisibilityState,
} from '@tanstack/react-table';

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { Button } from '../button';
import React from 'react';
import { Input } from '../input';
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from '../dropdown-menu';
import { DataTablePagination } from './data-table-pagination';
import { SearchIcon } from 'lucide-react';

export function DataTable<TData, TValue>({
	columns,
	data,
	showSearch,
	searchWith,
	showColumns,
}: DataTableProps<TData, TValue>) {
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [columnFilters, setColumnFilters] =
		React.useState<ColumnFiltersState>([]);
	const [columnVisibility, setColumnVisibility] =
		React.useState<VisibilityState>({});
	const [rowSelection, setRowSelection] = React.useState({});

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		onSortingChange: setSorting,
		getSortedRowModel: getSortedRowModel(),
		onColumnFiltersChange: setColumnFilters,
		getFilteredRowModel: getFilteredRowModel(),
		onColumnVisibilityChange: setColumnVisibility,
		onRowSelectionChange: setRowSelection,
		state: {
			sorting,
			columnFilters,
			columnVisibility,
			rowSelection,
		},
	});

	return (
		<div>
			{showSearch && (
				<div className='flex items-center py-4 text-title2'>
					<div className='relative flex  items-center w-full'>
						<div className='h-6 w-6 left-2 opacity-60 shrink-0 absolute'>
							<SearchIcon />
						</div>
						<Input
							placeholder={`Search ${searchWith}`}
							value={
								(table
									.getColumn(searchWith || 'name')
									?.getFilterValue() as string) ?? ''
							}
							onChange={(event) =>
								table
									.getColumn(searchWith || 'name')
									?.setFilterValue(
										event.target.value
									)
							}
							className='pl-10 mr-5'
						/>
					</div>
					{showColumns && (
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button
									variant='outline'
									className='ml-auto'
								>
									Columns
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align='end'>
								{table
									.getAllColumns()
									.filter((column) =>
										column.getCanHide()
									)
									.map((column) => {
										return (
											<DropdownMenuCheckboxItem
												key={column.id}
												className='capitalize'
												checked={column.getIsVisible()}
												onCheckedChange={(
													value
												) =>
													column.toggleVisibility(
														!!value
													)
												}
											>
												{column.id}
											</DropdownMenuCheckboxItem>
										);
									})}
							</DropdownMenuContent>
						</DropdownMenu>
					)}
				</div>
			)}
			<div className='rounded-md border'>
				<Table className=''>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return (
										<TableHead key={header.id}>
											{header.isPlaceholder
												? null
												: flexRender(
														header
															.column
															.columnDef
															.header,
														header.getContext()
												  )}
										</TableHead>
									);
								})}
							</TableRow>
						))}
					</TableHeader>
					<TableBody className=''>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow
									key={row.id}
									data-state={
										row.getIsSelected() &&
										'selected'
									}
								>
									{row
										.getVisibleCells()
										.map((cell) => (
											<TableCell key={cell.id}>
												{flexRender(
													cell.column
														.columnDef
														.cell,
													cell.getContext()
												)}
											</TableCell>
										))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell
									colSpan={columns.length}
									className='h-24 text-center'
								>
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
			<div className='flex items-center py-4 mb-20 sm:mb-0'>
				<DataTablePagination
					rowsPerPage
					table={table}
				/>
			</div>
		</div>
	);
}
