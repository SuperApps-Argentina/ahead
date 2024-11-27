"use client";

import React from "react";
import AvatarEditProfile from "@/components/AvatarEditProfile/AvatarEditProfile";

export default function AvatarEditPage() {
  const handleEdit = () => {
    alert("Editar perfil");
  };

  return (
    <div>
      <AvatarEditProfile
        avatarUrl="https://i.pinimg.com/736x/bf/a7/7c/bfa77c432a99302ee0b306fc17a45d03.jpg"
        userName="Pedro Núñez"
        lastVisit="28/10/2024"
        onEdit={handleEdit}
      />
    </div>
  );
}
