///                                                                                 //
export const GalleryApi = (instance) => ({
  async getPaintings(pagination) {
    const { data } = await instance.get('paintings', {
      param: {
        ...pagination,
        _page: 1
      }
    });
    return data;
  },
  async getAuthors() {
    const { data } = await instance.get('authors', {
      param: {}
    });
    return data;
  },
  async getLocations() {
    const { data } = await instance.get('locations', {
      param: {}
    });
    return data;
  }
});
