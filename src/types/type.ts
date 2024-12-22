export type TProduct = {
    _id: string;
    title: string;
    description: string;
    image: string;
    category: {
      name: string,
      _id: string,
    };
    images: string[];
  }