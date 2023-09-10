import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'video',
	title: 'Video',
	type: 'document',
	fields: [
		defineField({
			name: 'videoId',
			title: 'Video ID',
			type: 'string',
		}),
		defineField({
			name: 'playbackUrl',
			title: 'Playback URL',
			type: 'url',
		}),
	],
});
