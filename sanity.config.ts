import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
// import { muxInput } from 'sanity-plugin-mux-input';

import { apiVersion, dataset, projectId } from './sanity/env';
import { schema } from './sanity/schema';

export default defineConfig({
	basePath: '/studio',
	projectId,
	dataset,
	schema,
	plugins: [
		deskTool(),
		// muxInput(),
		visionTool({ defaultApiVersion: apiVersion }),
	],
});
