export type Opinion = {
    content: string,
    column: 1 | 2 | 3,
    user: {
        fullName: string,
        image: string,
        position: string
    }
}