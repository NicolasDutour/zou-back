module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  "netlify-deployments": {
    enabled: true,
    config: {
      accessToken: env('NETLIFY_DEPLOYMENTS_PLUGIN_ACCESS_TOKEN'),
      sites: [
        {
          name: 'zou-back',
          id: "c694e6c8-06a3-4e1a-9aba-7e2be9340558",
          buildHook: "https://api.netlify.com/build_hooks/659d53fee7092f008df24152",
          branch: 'main'
        }
      ]
    },
  },
});