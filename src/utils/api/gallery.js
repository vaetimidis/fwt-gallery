///                                                                                 //
export const GalleryApi = (instance) => ({
  async getPaintings(params) {
    const { data } = await instance.get('paintings', {
      params: {
        ...params
      }
    });
    return data;
  },
  async getAuthors() {
    const { data } = await instance.get('authors', {
      params: {}
    });
    return data;
  },
  async getLocations() {
    const { data } = await instance.get('locations', {
      params: {}
    });
    return data;
  }
});
