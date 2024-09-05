import Image from "next/image";
import React from "react";

interface ProjectProps{
    titulo: string,
    desc: string, 
    img: string, 
    github: string
}

export const Projects:React.FC<ProjectProps> = ({titulo, desc, img, github}) => {
    return(
        <div className="relative inline-flex  group">
        <div className="absolute transitiona-all duration-1000 -inset-px blur-sm bg-gradient-to-r from-[#b7bcbf] via-[#2c2a2c] to-[#ffe6e5] rounded-xl group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
        </div>
        <div className="relative inline-flex items-center justify-center px-8 py-4 text-lg text-white transition-all duration-200 bg-gray-950 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
            <Image
            src={img}
            alt="Home do projeto"
            width={400}
            height={400}
            />
            <div className="ml-7 space-y-5">
                <h1 className="text-3xl">{titulo}</h1>
                <a className="text-blue-500" href={github}>Link do projeto no GitHub</a>
                <div>
                    <h3 className="text-xl" >Desafio:</h3>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
        </div>
        
    )
}
