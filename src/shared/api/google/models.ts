export type Book = {
    accessInfo: unknown,
    etag: string,
    id: string,
    kind: string,
    saleInfo: {
        country: string,
        isEbook: boolean,
        saleability: string
    },
    searchInfo: unknown,
    volumeInfo: {
        allowAnonLogging: boolean,
        authors: string[],
        canonicalVolumeLink: string,
        categories: string[],
        imageLinks: {
            smallThumbnail: string,
            thumbnail: string
        },
        subtitle?: string,
        title: string,
        publishedDate: string,
        pageCount: number
    }
}

export type BooksList = {
    items: Book[],
    kind: string,
    totalItems: number
}