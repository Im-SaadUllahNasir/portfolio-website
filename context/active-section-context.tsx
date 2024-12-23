"use client";

import type { SectionName } from '@/lib/types';
import React, { useState, ReactNode, createContext, useContext } from 'react';


interface ActiveSectionContextProviderProps {
  children: ReactNode;
};

type ActiveSectionContextType = {
    activeSection:SectionName;
    setActiveSection:React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

const ActiveSectionContextProvider: React.FC<ActiveSectionContextProviderProps> = ({ children }) => {
  const [activeSection, setActiveSection] = useState<SectionName>('Home');
  
  
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return <ActiveSectionContext.Provider value={{
    activeSection,
    setActiveSection,
    timeOfLastClick,
    setTimeOfLastClick,
  }}>{children}</ActiveSectionContext.Provider>;
};

export default ActiveSectionContextProvider;



export function useActiveSectionContext(){
    const context = useContext(ActiveSectionContext);

    if (context === null){
        throw new Error(
            "useActiveSectionContext must be used within a ActiveSectionContextProvider"
        );
    }
    return context;
}