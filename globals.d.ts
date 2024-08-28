declare module '#auth-utils' {
    interface User {
        name: string,
        email: string
    }

    interface UserSession {
        user: {
            name: string,
            email: string
        }
        loggedInAt: Date
    }
}

export { }