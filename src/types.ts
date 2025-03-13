export interface Image {
    id: string;
    alt_description: string;
    urls: {
      regular: string,
      small: string
    }
  }
  export interface Response {
    total_pages: number;
    results: Image[];
  }