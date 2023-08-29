export type Opinion = {
    content: string,
    column: number,
    user: {
        fullName: string,
        position: string
    }
}