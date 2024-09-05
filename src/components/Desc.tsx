import Image from "next/image"

export function Desc(){
    return(
        <div className="mb-10 space-y-3">
            <div className="mb-10">
                <h3 className="text-2xl" >Desenvolvedor Full-Stack</h3>
                <div className="flex text-xl space-x-5 ">
                    <a className="flex text-blue-400" href="https://www.linkedin.com/in/pedro-santos-kajiya-65763b260/"><Image src="/images/linkedin-original.svg" alt="tailwind" width={20} height={20}/> -LinkedIn</a>
                    <p>|</p>
                    <a className="flex text-blue-400" href="https://github.com/kajiyap"><Image src="/images/github-original.svg" alt="tailwind" width={20} height={20}/> -Github</a></div>
                <h3 className="text-xl" >Cursando 4º período de Análise e Desenvolvimento de Sistemas na FATEC - SÃO JOSÉ DOS CAMPOS</h3>

            </div>
            <div className="flex space-x-32">
                <div>
                    <h3 className="text-2xl mb-3" >Linguagens e Frameworks:</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li className="flex"><Image src="/images/typescript-original.svg" alt="tailwind" width={20} height={20}/> -Typescript</li>
                        <li className="flex"><Image src="/images/spring-original.svg" alt="tailwind" width={20} height={20}/> -Spring</li>
                        <li className="flex"><Image src="/images/react-original.svg" alt="tailwind" width={20} height={20}/> -React</li>
                        <li className="flex"><Image src="/images/nextjs-original.svg" alt="tailwind" width={20} height={20}/> -Next</li>
                        <li className="flex"><Image src="/images/tailwindcss-original.svg" alt="tailwind" width={20} height={20}/> -TailwindCSS</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-2xl mb-3" >Outras tecnologias:</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li className="flex"><Image src="/images/icons8-excel.svg" alt="git" width={20} height={20}/>-Excel</li>
                        <li className="flex"><Image src="/images/git-original.svg" alt="git" width={20} height={20}/>-Git</li>
                        <li className="flex"><Image src="/images/trello-original.svg" alt="trello" width={20} height={20}/>-Trello</li>
                        <li className="flex"><Image src="/images/figma-original.svg" alt="figma" width={20} height={20}/>-Figma</li>
                        <li className="flex"><Image src="/images/canva-original.svg" alt="canva" width={20} height={20}/>-Canva</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}