export default () => ({
    slugify: {
        enabled: true,
        config: {
          contentTypes: {
            kategoriya: {
              field: 'slug',
              references: 'name',
            },
          },
        },
      },
});
