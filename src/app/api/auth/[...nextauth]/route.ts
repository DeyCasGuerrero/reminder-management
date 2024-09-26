import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"


export const authOptions: AuthOptions={
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                login: { label: "Login", type: "text" },
                password: { label: "Password", type: "password" },
            },

            async authorize(credentials) {
                try {
                    const res = await fetch(`${process.env.API_URL}/auth/login`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            login: credentials?.login,
                            password: credentials?.password,
                        })
                    })


                    const user = await res.json();

                    //AQUI VIENE EL TOKEN 
                    console.log("LO QUE TRAE EL BACKEND", user);

                    if (res.ok && user) {
                        return {
                            token: user.token,
                            id: user.id,
                            email: user.email,

                        };
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
            // Cuando el usuario se autentica, guarda el token y otros datos en el JWT
            if (user) {
                token.accessToken = user.token || ''; // Guardamos el token JWT
                token.id = user.id || null; // Guardamos el ID del usuario
                token.email = user.email || null; // Guardamos el email
            }
            return token;
        },
        async session({ session, token }) {
            // Pasamos los datos del JWT a la sesión
        
            session.accessToken = token.accessToken; // Guardamos el token de acceso en la sesión
            session.user.id = typeof token.id === 'string' ? token.id : null; // Guardamos el id del usuario en la sesión
            session.user.email = token.email || null; // Guardamos el email en la sesión
            
            return session;
        },
    },
    pages: {
        signIn: '/login',  // Página de inicio de sesión personalizada
    },
    secret: process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }