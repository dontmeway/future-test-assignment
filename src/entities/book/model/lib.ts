import type { Book } from "shared/api";

export const normalizer = (arg: Book[]) => {
    return arg.reduce((acc: Record<string, Book>, curr) => ({ ...acc, [curr.id]: curr }) , {})
}

export const getAuthorsCommas = (arg: string[], index: number) => {
    return index === arg.length - 1 ? '.' : index > 0 ? ', ' : ''
}