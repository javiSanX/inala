import { collection, config, fields } from '@keystatic/core';

export default config({
   storage: import.meta.env.DEV ? { kind: 'local' } : { kind: 'cloud' },
   cloud: {
      project: 'inala/inala',
   },
   ui: {
      brand: { name: 'Inala' },
   },
   collections: {
      blog: collection({
         label: 'Blog',
         path: 'src/content/blog/**',
         slugField: 'slug',
         format: { contentField: 'body' },
         schema: {
            slug: fields.slug({
               name: {
                  label: 'Slug',
                  description: 'Nombre del archivo (URL amigable)',
                  validation: { isRequired: true },
               },
            }),
            title: fields.text({
               label: 'Title',
               validation: { isRequired: true },
            }),
            subtitle: fields.text({ label: 'Subtitle' }),
            pubDate: fields.date({
               label: 'Publication Date',
               validation: { isRequired: true },
            }),
            author: fields.text({
               label: 'Author',
               validation: { isRequired: true },
            }),
            description: fields.text({
               label: 'Description',
               validation: { isRequired: true },
            }),
            image: fields.image({
               label: 'Image',
               directory: 'public/collections/blog/images',
               publicPath: '/collections/blog/images/',
            }),
            video: fields.text({ label: 'Video URL' }),
            imageThumbnail: fields.image({
               label: 'Image Thumbnail',
               directory: 'public/collections/blog/images',
               publicPath: '/collections/blog/images/',
            }),
            videoThumbnail: fields.text({
               label: 'Video Thumbnail',
            }),
            body: fields.markdoc({
               label: 'Body',
               extension: 'md',
            }),
         },
      }),
      work: collection({
         label: 'Work',
         path: 'src/content/work/**',
         slugField: 'slug',
         format: { contentField: 'body' },
         schema: {
            slug: fields.slug({
               name: {
                  label: 'Slug',
                  description: 'Nombre del archivo (URL amigable)',
                  validation: { isRequired: true },
               },
            }),
            title: fields.text({
               label: 'Title',
               validation: { isRequired: true },
            }),
            subtitle: fields.text({
               label: 'Subtitle',
               validation: { isRequired: true },
            }),
            description: fields.text({
               label: 'Description',
               validation: { isRequired: true },
            }),
            list: fields.array(fields.text({ label: 'List Item' }), {
               label: 'List',
            }),
            imageThumbnail: fields.image({
               label: 'Image Thumbnail',
               directory: 'public/collections/work/images',
               publicPath: '/collections/work/images/',
               validation: { isRequired: true },
            }),
            image: fields.image({
               label: 'Image',
               directory: 'public/collections/work/images',
               publicPath: '/collections/work/images/',
            }),
            video: fields.text({ label: 'Video URL' }),
            introduction: fields.object(
               {
                  title: fields.text({
                     label: 'Title',
                     validation: { isRequired: true },
                  }),
                  subtitle: fields.text({
                     label: 'Subtitle',
                     validation: { isRequired: true },
                  }),
                  body: fields.text({
                     label: 'Body',
                     validation: { isRequired: true },
                     multiline: true,
                  }),
               },
               { label: 'Introduction' },
            ),
            whatWeDid: fields.object(
               {
                  title: fields.text({
                     label: 'Title',
                     validation: { isRequired: true },
                  }),
                  subtitle: fields.text({
                     label: 'Subtitle',
                     validation: { isRequired: true },
                  }),
                  images: fields.array(
                     fields.image({
                        label: 'Image',
                        directory: 'public/collections/work/images',
                        publicPath: '/collections/work/images/',
                     }),
                     {
                        label: 'Images',
                     },
                  ),
                  body: fields.text({
                     label: 'Body',
                     validation: { isRequired: true },
                     multiline: true,
                  }),
               },
               { label: 'What We Did' },
            ),
            feedback: fields.object(
               {
                  title: fields.text({
                     label: 'Title',
                     validation: { isRequired: true },
                  }),
                  subtitle: fields.text({
                     label: 'Subtitle',
                     validation: { isRequired: true },
                  }),
                  clientFeedback: fields.object(
                     {
                        blockquote: fields.text({
                           label: 'Blockquote',
                           validation: { isRequired: true },
                        }),
                        figcaption: fields.text({
                           label: 'Figcaption',
                           validation: { isRequired: true },
                        }),
                     },
                     { label: 'Client Feedback' },
                  ),
                  body: fields.text({
                     label: 'Body',
                     validation: { isRequired: true },
                     multiline: true,
                  }),
               },
               { label: 'Feedback' },
            ),
            body: fields.markdoc({
               label: 'Work Post Body (Not required)',
               extension: 'md',
            }),
         },
      }),
   },
});
