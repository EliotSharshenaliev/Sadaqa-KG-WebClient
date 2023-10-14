export interface User {
    id: number,
    firstname: string,
    lastname: string,
    username: string,
    phone: string,
    email: string,
    created_at: string,
    stripe_user: boolean
}