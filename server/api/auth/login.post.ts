export default defineEventHandler(async (event) => {

    const user = {
        name: 'Dev Testing',
        email: 'dev.test@bitguana.com'
    }

    await setUserSession(event, {
        user,
        loggedInAt: new Date()
    })

    return user
})
