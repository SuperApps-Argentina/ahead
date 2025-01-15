'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react'; // Usamos el signIn de next-auth
import Style from './SignInForm.module.css';

export function SignInForm() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { status } = useSession(); // Revisamos el estado de la sesión (para evitar redirección si ya está logueado)
  const [callbackUrl, setCallbackUrl] = useState<string>('/'); // Default callbackUrl a la raíz

  useEffect(() => {
    // Intentamos extraer el callbackUrl de la URL de la página actual
    const urlParams = new URLSearchParams(window.location.search);
    const urlCallback = urlParams.get('callbackUrl');
    if (urlCallback) {
      setCallbackUrl(urlCallback);
    }
  }, []);

  // Si la sesión está activa, redirigir al callbackUrl
  useEffect(() => {
    if (status === 'authenticated') {
      router.push(callbackUrl); // Redirigir automáticamente a la página deseada
    }
  }, [status, router, callbackUrl]);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email')?.toString() || '';
    const password = formData.get('password')?.toString() || '';

    try {
      const response = await signIn('credentials', {
        redirect: false,  // Evitamos la redirección automática
        email,
        password,
      });

      if (response?.error) {
        setError(response.error); // Manejamos el error si es que existe
      } else {
        // Al recibir una respuesta exitosa, redirigimos al callbackUrl
        router.push(callbackUrl); // Redirigir al callbackUrl configurado
      }
    } catch (error) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className={Style.formContain}>
      <h1 className={Style.titleForm}>Login</h1>
      <form className={Style.form} onSubmit={handleFormSubmit}>
        {error && <div className={Style.messageError}>{error}</div>}
        <label className={Style.labelEmail}>
          Your Email
          <input className={Style.inputEmail} placeholder="enter your email" name="email" type="email" />
        </label>
        <label className={Style.labelPassword}>
          Your Password
          <input className={Style.inputPassword} placeholder="enter your password" name="password" type="password" />
        </label>
        <button className={Style.buttonForm}>Sign In</button>
      </form>
    </div>
  );
}
