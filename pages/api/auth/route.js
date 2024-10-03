import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Email", type: "email", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const res = await fetch("http://localhost:3000/api/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(credentials),
                });
                const user = await res.json();
                // Ensure user exists before returning
                if (user) {
                    return user;
                } else {
                    return null; // Return null if user not found
                }
            }
        })
    ],
    // Add any other NextAuth options here
});

export { handler as GET, handler as POST }; // Ensure to export for both methods
