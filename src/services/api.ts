import axios from "axios"
axios.defaults.baseURL = 'https://api.unsplash.com'
axios.defaults.params = {
    client_id: '7q_PyXeOVgXJsZXsArM5o60MRGV_bUkd0dtYPDPVY-Y',
}

export const fetchImageGallery = async<T> (query: string, page: number): Promise<T> => {
    const response = await axios.get<T>(`/search/photos?query=${query}`, {
        params: {
          query: query,
          page: page,
          per_page: 24,
          orientation: 'landscape'
        }
    });
    return response.data;
}
