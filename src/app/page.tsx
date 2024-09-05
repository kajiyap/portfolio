"use client"

import { Desc } from "@/components/Desc";
import { HeaderPerfil } from "@/components/Header";
import { ProjectCollection } from "@/components/ProjectCollection";
import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Quando o componente for montado, ativa a animação
    setIsVisible(true);
  }, []);
  
  return (
    <div
    className={`${
      isVisible ? 'animate-fade-in-right bg-black font-mono' : 'invisible'
    } transition-opacity duration-700 ease-in-out`}
    >
      <HeaderPerfil/>
      <div className="mt-5 px-28 pb-5 space-y-10">
        <Desc/> 
        <ProjectCollection/>   
      </div>
    </div>
  );
}
