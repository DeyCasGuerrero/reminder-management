import NextAuth from "next-auth";
import CredentialsProvider  from "next-auth/providers/credentials"

const handler = NextAuth({
    providers:[
        CredentialsProvider({
            name:"Credentials",
            credentials:{
                login: { label: "Login", type: "text" },
                password: { label: "Password", type: "password" },
            },

            async authorize(credentials) {
                try {
                    const res = await fetch(`${process.env.API_URL}/auth/login`,{
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            login:credentials?.login,
                            password: credentials?.password,
                        })
                    })


                    const user = await res.json();

                    console.log("wasadsad",user);
                    if (res.ok && user) {
                        return user
                    }
                    return null
                } catch (error) {
                    throw new Error('Fetch failed');
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                return { ...token, ...user };
            }
            return token;
        },
        async session({ session, token}) {
            session.user = token as any;
            return session;
        },
    },
    pages: {
        signIn: '/login',  // Página de inicio de sesión personalizada
    }
})
export { handler as GET, handler as POST }