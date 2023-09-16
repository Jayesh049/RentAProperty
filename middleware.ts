export { default } from "next-auth/middleware"

// if we got loggedout then there should be no error will be given in the page it will redirect you to sign up page
export const config = {
    matcher: [
        "/trips",
        "/reservations",
        "/properties",
        "/favorites",
    ]
}