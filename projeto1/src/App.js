import React from 'react';

class App extends React.Component{

  state = {
    nome : ""
  }

  modificarNome = (event) => {
     this.setState(
       {nome : event.target.value}
     )
  }

  criarComboBox = () => {
    const opcoes = ["Paulo", "João", "Maria", "Betty", "Marta"]
    const cmbOpcoes = opcoes.map( opcoes => <option>{opcoes}</option>)
    return (
      <select> {cmbOpcoes} </select>
    )
  }

  render(){
    const MeuComboBox = () => this.criarComboBox();

    return (
      <>
         <h3>Digite um nome</h3>
         <input type="text" value={this.state.nome} onChange={this.modificarNome} />
         <h1>Olá Sr. {this.state.nome} seja bem-vindo!</h1>
         <MeuComboBox />
      
      </>
    )
  }

}

export default App;
