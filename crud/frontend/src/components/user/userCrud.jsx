import React, { Component } from "react";
import Main from '../template/Main'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuarios: Incluir, Listar, Alterar e Excluir!'
}

export default class UserCroud extends Component {
    render() {
        return (
            <Main {...headerProps}>
                TEste de Usuario
            </Main>
        )
    }
}