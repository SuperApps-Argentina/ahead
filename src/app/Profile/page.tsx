"use client";

import React, { useState } from 'react';
import Form from '../../components/FormEditProfile/viewprofile'; 
import AvatarEditProfile from '@/components/AvatarEditProfile/AvatarEditProfile';

export default function ProfilePage() {
    const [isEditing, setIsEditing] = useState(false);
    const [avatarUrl, setAvatarUrl] = useState("https://i.pinimg.com/736x/bf/a7/7c/bfa77c432a99302ee0b306fc17a45d03.jpg");
    const [userName, setUserName] = useState("Pedro Núñez");
    const [lastVisit, setLastVisit] = useState("28/10/2024");

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        setIsEditing(false);
        alert("Cambios guardados.");
    };

    const handleCancel = () => {
        setIsEditing(false);
        // Revertir la foto y demás datos a su valor original
        setAvatarUrl("https://i.pinimg.com/736x/bf/a7/7c/bfa77c432a99302ee0b306fc17a45d03.jpg");
        setUserName("Pedro Núñez");
        setLastVisit("28/10/2024");
    };

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatarUrl(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    };

    return (
        <div>
            <AvatarEditProfile
                avatarUrl={avatarUrl}
                userName={userName}
                lastVisit={lastVisit}
                onEdit={handleEdit}
                isEditing={isEditing}
                onAvatarChange={handleAvatarChange}
            />
            <div style={pageStyles}>
                <Form 
                    isEditing={isEditing} 
                    onSave={handleSave} 
                    avatarUrl={avatarUrl} 
                    userName={userName}
                    lastVisit={lastVisit}
                    onAvatarChange={handleAvatarChange} 
                    onNameChange={handleNameChange} // Pasamos la función para manejar el nombre
                />
                
            </div>
        </div>
    );
}

const pageStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '4rem',
    minHeight: '100vh',
    backgroundColor: '#1b1138', 
    color: '#ffffff', 
    padding: '20px',
};
