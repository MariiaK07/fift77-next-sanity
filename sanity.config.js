import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

const config = defineConfig({
  projectId: 'n8onodul',
  dataset: 'production',
  title: 'Fit77',
  apiVersion: '2023-17-05',
  basePath: '/admin',
  plugins: [deskTool()],
});

export default config;
