import admin from 'firebase-admin';

// Inicializa Firebase Admin SDK si aún no está inicializado
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
        privateKey: "AIzaSyBC-xdDHUiPU3yCm2lwk4y-Av_IZzLa--w",
        projectId:"reminders-management",
        clientEmail:"depordey@gmail.com"
    }),
  });
}

export async function verifyIdToken(token:string) {
  return admin.auth().verifyIdToken(token);
}
