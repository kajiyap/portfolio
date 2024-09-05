import { Projects } from "./Projects";

export function ProjectCollection(){
    return(
        <div className="mt-10 font-mono space-y-5">
            <h1 className="text-4xl">Projetos:</h1>
            <div className="space-y-8">
                <Projects
                titulo="Site de aprendizagem SCRUM"
                desc="Desenvolver um sistema web que indique todos os processos e artefatos da metodologia ágil (Scrum), todos os processos deverão ter conceitos e fundamentos com referências, bem como a aplicação com exemplos práticos para aplena compreensão do usuário do sistema."
                img="/images/ddt.jpeg"
                github="https://github.com/erickhoawata/DDT-1-Sem.git"
                />
                <Projects
                titulo="Parrot IA"
                desc="O Parrot AI é um chatbot avançado construído em Java, impulsionado pela poderosa biblioteca langchain. Sua principal habilidade reside na capacidade de compreender e responder perguntas detalhadas relacionadas a um arquivo específico. Com o uso do processamento de linguagem natural, este chatbot oferece interações inteligentes e contextuais, permitindo aos usuários extrair informações precisas e relevantes do conteúdo do arquivo carregado."
                img="/images/parrotchat.png"
                github="https://github.com/C0demain/ParrotAI.git"
                />
                <Projects
                titulo="SalesDash"
                desc="Desenvolvimento de uma Dashboard de Comissões de Vendas, denominada Sales Dash, em parceria com a empresa Pro4Tech. Este sistema tem como objetivo receber dados de vendas e apresentar informações detalhadas sobre as comissões dos vendedores, calculando e exibindo essas comissões com base em diferentes tipos de vendas."
                img="/images/salesdash.png"
                github="https://github.com/C0demain/sales-dash.git"
                />
            </div>
        </div>
    )
}