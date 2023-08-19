import { useEffect, useState } from "react"
import CardDev from "../../components/CardDev"
import "./style.css"

import api from "../../utils/api";



export default function ListaServicos() {

    const [skillDigitada, setSkillDigitada] = useState<string>("");

    const [listaservicos, setlistaservicos] = useState<any[]>([

        {

            titulo: "Topo Servico",
            valor: "R$ 1300,00",
            descricao: "Desenvolvimento de site institucional - Gateway de Pagamento / Fintech",
            skills: ["HTML", "CSS", "REACT"],
        },

        {
            titulo: "Bot telegram Pagamento",
            valor: "R$ 2400,00",
            Descricao: "Preciso fazer um código em python para um bot do telegram. O bot será para solicitação de pagamento.",
            skills: ["HTML", "CSS", "REACT"],
        },

        {
            titulo: "Caixa Rápido",
            valor: "R$ 1200,00",
            Descricao: "Preciso fazer um  software que permita ao usuário fazer o upload de seu extrato bancário em formato( ofx). Dentro do software o mesmo poderá categorizar todas as suas receitas e despesas, tendo categorias sugeridas pelo software e permitindo também personalizações. Após o lançamento de vários extratos o software irá entender que são lançamentos parecidos e fará a categorização de maneira automática, cabendo ao usuário somente categorizar as receitas e despesas que não se repetem. Após a categorização o software irá emitir gráficos e relatórios baseados na categorização das contas.",
            skills: ["HTML", "CSS", "REACT"],
        },

    ]);


    // const [ListaServicosFiltrados, setlistaservicosFiltrados] = useState<any[]>(devs);

    function buscarPorSkill(event: any) {
        event.preventDefault();

         const listaServicosFiltrados = ListaServicos.filter((dev: any) => lista.skills.includes(skillDigitada.toLocaleUpperCase()));

        if (ListaFiltrados.length === 0) {
            alert("Nenhum desenvolvedor(a) com essa skill")
        } else {
            setListaservicosFiltrados(devsFiltrados)
        }
    }

    function retornoDevsGeral(event: any) {
        if (event.target.value === "") {
            setListaServicosFiltrados(devs)
        }
        setSkillDigitada(event.target.value)
    }


    return (
        <main id="lista-servicos">
            <div className="container container_lista_servicos">
                <div className="lista_servicos_conteudo">
                    <h1>Lista de Serviços</h1>
                    <hr />
                    <form method="post">
                        <div className="wrapper_form">
                            <label htmlFor="busca">Procurar serviços</label>
                            <div className="campo-label">
                                <input type="search" name="campo-busca" id="busca" placeholder="Buscar serviços por tecnologias..." />
                                <button type="submit">Buscar</button>
                            </div>
                        </div>
                    </form>
                    <div className="wrapper_lista">
                        <ul>

                            {devs.map((dev: any, index: number) => {
                                return <li key={index}>
                                    <CardDev
                                        foto={dev.user_img}
                                        nome={dev.nome}
                                        email={dev.email}
                                        techs={dev.hardSkills}
                                    />
                                </li>
                            }
                            )}

                            <li>
                                <div className="servico">
                                    <div className="topo_servico">
                                        <h3>Bot telegram Pagamento</h3>
                                        <span>R$ 2400,00</span>
                                    </div>
                                    <p>Preciso fazer um código em python para um bot do telegram. O bot será para solicitação de pagamento.</p>
                                    <div className="techs">
                                        <span>Python</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="servico">
                                    <div className="topo_servico">
                                        <h3>Caixa Rápido</h3>
                                        <span>R$ 1200,00</span>
                                    </div>
                                    <p>Preciso fazer um  software que permita ao usuário fazer o upload de seu extrato bancário em formato( ofx). Dentro do software o mesmo poderá categorizar todas as suas receitas e despesas, tendo categorias sugeridas pelo software e permitindo também personalizações. Após o lançamento de vários extratos o software irá entender que são lançamentos parecidos e fará a categorização de maneira automática, cabendo ao usuário somente categorizar as receitas e despesas que não se repetem. Após a categorização o software irá emitir gráficos e relatórios baseados na categorização das contas.</p>
                                    <div className="techs">
                                        <span>Python</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}

