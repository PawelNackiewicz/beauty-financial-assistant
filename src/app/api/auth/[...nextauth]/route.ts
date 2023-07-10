import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            name: "Logowanie hasłem",
            credentials: {
                username: { label: "Email", type: "email", placeholder: "example@email.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                console.log('authorize');
                console.log(credentials);

                const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }

                if (user) {
                    return user
                }
                return null
            }
        })
    ],
})

export { handler as GET, handler as POST }