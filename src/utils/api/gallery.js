///                                                                                 //
export const GalleryApi = (instance) => ({
  async get(pagination) {
    const { data } = await instance.get('paintings', {
      param: {
        ...pagination
      }
    });
    return data;
  }
});
