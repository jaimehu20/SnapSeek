export interface ImageFromAPI {
    urls: {
        regular: string;
    };
    width: number;
    height: number;
    likes: number;
    created_at: string;
    alt_description: string;
}

export interface Image {
    url: string,
    height: number,
    width: number,
    likes: number,
    date: string,
    description: string
}

export interface ImageSearch {
    results: ImageFromAPI[];
}

