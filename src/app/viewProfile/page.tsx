"use client";

import React from 'react';
import Form from '../../components/FormEditProfile/viewprofile'; // Asegúrate de que el componente esté en esta ruta

const Page = () => {
  return (
    <div style={pageStyles}>
      <Form />
    </div>
  );
};

const pageStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  backgroundColor: '#1b1138', // Fondo morado oscuro
  color: '#ffffff', // Texto blanco
  padding: '20px',
};

const headerStyles: React.CSSProperties = {
  fontSize: '24px',
  marginBottom: '20px',
};

export default Page;
