import React from "react"
import ReactDOM from "react-dom"

// import Primeiro from "./componentes/Primeiro"
// import Bomdia from "./componentes/Bomdia"
// import Multi from "./componentes/Multiplos"
import Saudacao from "./componentes/Saudacao"
import Pai from "./componentes/Pai"
import Filho from "./componentes/Filho"

ReactDOM.render(
    <div>
        <Saudacao tipo="Bom dia" nome="jorge"/>
        <Pai nome="Mario" sobrenome="da silva">
            <Filho nome="Jorge" />
            <Filho nome="Joaquim" />
        </Pai>
    </div>
, document.getElementById('root'))