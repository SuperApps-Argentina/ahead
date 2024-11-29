"use client";

import React from 'react';
import Form from '../../components/FormEditProfile/viewprofile'; // Asegúrate de que el componente esté en esta ruta
import AvatarEditProfile from '@/components/AvatarEditProfile/AvatarEditProfile';

export default function ProfilePage() {
    const handleEdit = () => {
        alert("Editar perfil")
    };

    return (
        <div>
            <AvatarEditProfile
                avatarUrl="https://i.pinimg.com/736x/bf/a7/7c/bfa77c432a99302ee0b306fc17a45d03.jpg"
                userName="Pedro Núñez"
                lastVisit="28/10/2024"
                onEdit={handleEdit}
            />
            <div style={pageStyles}>
                <Form />
            </div>
        </div>

    );
};

const pageStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop:'4rem',
    minHeight: '100vh',
    backgroundColor: '#1b1138', // Fondo morado oscuro
    color: '#ffffff', // Texto blanco
    padding: '20px',
};

const headerStyles: React.CSSProperties = {
    fontSize: '24px',
    marginBottom: '20px',
};

