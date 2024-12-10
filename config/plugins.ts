export default () => ({
    slugify: {
        enabled: true,
        config: {
          contentTypes: {
            kategoriya: {
              field: 'slug',
              references: 'name',
            },
            tovary: {
              field: 'slug',
              references: 'title',
            },
          },
        },
      },
});
