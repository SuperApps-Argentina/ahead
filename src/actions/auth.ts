'use server';

import { signIn, signOut } from '@/auth';

export async function doLogout() {
  // Cambia el parámetro de redirección al cerrar sesión
  await signOut({ redirectTo: '/login?callbackUrl=http://localhost:3000/login' });
}

export async function doCredentialsLogin(formData: FormData) {
  try {
    const response = await signIn('credentials', {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      redirect: false, // Mantenemos el redirect falso para manejar la respuesta manualmente
    });
    return response;
  } catch (error) {
    throw new Error(error as string);
  }
}
