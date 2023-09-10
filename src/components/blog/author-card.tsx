import Image from 'next/image';
import { urlForImage } from '../../../sanity/lib/image';

export default function AuthorCard({ author }: { author: AuthorCardI }) {
	return (
		<div className='h-10 w-10 flex-shrink-0 '>
			<Image
				src={urlForImage(author.image.asset).url()}
				alt={author.name}
				className='h-full w-full rounded-full object-cover'
				height={40}
				width={40}
			/>
		</div>
	);
}
