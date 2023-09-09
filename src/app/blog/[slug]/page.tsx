import { Container } from '@/components/layout/container';
import { client } from '@/lib/sanity.client';

async function getData(slug: string) {
	const query = `*[_type == 'post' && slug.current == "${slug}"][0]`;
	const data = await client.fetch(query);
	return data;
}

export default async function Slug({ params }: { params: { slug: string } }) {
	const data = (await getData(params.slug)) as PostI;

	return (
		<Container>
			<div className='py-40'>Slug</div>
		</Container>
	);
}
