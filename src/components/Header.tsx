import Image from "next/image"

export function HeaderPerfil(){
    return(
      <div className="h-screen flex items-end bg-[url('/images/porshe.jpg')] bg-cover bg-center">
        <div className="flex items-center">  
          <Image
            src="/images/perfil.svg"
            alt="imagem de perfil"
            width={300}
            height={300}
          />
          <h2 className="text-6xl">Pedro Santos Kajiya</h2>
        </div>
      </div>
    )
}