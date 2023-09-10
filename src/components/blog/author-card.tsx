import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { urlForImage } from '../../../sanity/lib/image';

export default function AuthorCard({ author }: { author: AuthorCardI }) {
	return (
		<div className='mt-3 rounded-2xl bg-gray-50 px-8 py-8 text-gray-500 dark:bg-gray-900 dark:text-gray-400'>
			<div className='flex flex-wrap items-start sm:flex-nowrap sm:space-x-6'>
				<div className='relative mt-1 h-24 w-24 flex-shrink-0 '>
					<Image
						src={urlForImage(author.image.asset).url()}
						alt={author.name}
						className='rounded-full object-cover'
						fill
						sizes='96px'
					/>
				</div>
				<div>
					<div className='mb-3'>
						<h3 className='text-lg font-medium text-gray-800 dark:text-gray-300'>
							About {author.name}
						</h3>
					</div>
					<div>
						{author.bio && (
							<PortableText value={author.bio} />
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
