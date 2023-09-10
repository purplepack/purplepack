import { PortableText } from '@portabletext/react';
import { Container } from '@/components/layout/container';
import { client } from '../../../../sanity/lib/client';
// import MuxPlayer from '@mux/mux-player-react';

async function getData(slug: string) {
	const query = `*[_type == 'post' && slug.current == "${slug}"][0]`;
	const data = await client.fetch(query);
	return data;
}

export default async function Slug({ params }: { params: { slug: string } }) {
	const data = (await getData(params.slug)) as PostI;
	// console.log(data.video.asset);

	return (
		<Container>
			<div className='py-40'>
				<PortableText value={data.body} />
				{/* <MuxPlayer
					streamType='on-demand'
					playbackId={data.video.asset._ref}
					metadata={{
						video_title: 'Tea and Cookies',
						video_user_id: 'user-24601',
					}}
				/> */}
			</div>
		</Container>
	);
}
