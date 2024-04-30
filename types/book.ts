import { categoryList } from "@/consts/list"

export type Book = {
    id: string
    name: string
    price: number
    category: typeof categoryList[number]
    description: string
}