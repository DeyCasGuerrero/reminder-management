// types/next-auth.d.ts
import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

// Extiende la interfaz `User` para incluir `token`
declare module "next-auth" {
  interface User {
    token?: string; // El token JWT devuelto por el backend (opcional)
  }

  interface Session {
    accessToken: string; // El token de acceso que se pasará en la sesión
    user: {
      id?: string | null; // ID del usuario, puede ser nulo
      email: string | null; // Email del usuario, puede ser nulo
    }
  }
}

// Extiende el tipo `JWT` para almacenar el `accessToken`
declare module "next-auth/jwt" {
  interface JWT {
    accessToken: string; // El token de acceso almacenado en el JWT
  }
}
