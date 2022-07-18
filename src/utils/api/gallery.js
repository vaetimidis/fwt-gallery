///                                                                                 //
export const GalleryApi = (instance) => ({
  async getPaintings(params) {
    const { data, headers } = await instance.get('paintings', {
      params: {
        ...params
      }
    });
    return { paintings: data, total: headers['x-total-count'] };
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
