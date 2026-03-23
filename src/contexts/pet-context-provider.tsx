"use client";

import { Pet } from "@/lib/types";
import React, { createContext, useState } from "react";

type TPetContext = {
  pets: Pet[];
  selectedPetId: string | null;
};

export const PetContext = createContext<TPetContext | null>(null);

function PetContextProvider({
  children,
  data,
}: {
  children: React.ReactNode;
  data: Pet[];
}) {
  const [pets, setPets] = useState(data);
  const [selectedPetId, setSelectedPetId] = useState(null);

  return (
    <PetContext.Provider value={{ pets, selectedPetId }}>
      {children}
    </PetContext.Provider>
  );
}

export default PetContextProvider;
