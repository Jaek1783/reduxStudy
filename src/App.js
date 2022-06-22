import "./styles.css";
import Header from "./components/Header";
import Nav from "./containers/Nav";
import Read from "./containers/Read";
import Control from "./containers/Control";
import Create from "./containers/Create";
import Update from "./containers/Update";
import { connect } from "react-redux";
import React from "react";
import styled from "styled-components";

class App extends React.Component {
  render(){
    let article = null;
  if(this.props.mode === 'READ'){
      article = <Read/>
  }
  else if (this.props.mode === 'WELCOME'){
      article = <Read/>
  }
  else if (this.props.mode === 'CREATE'){
    article = <Create/>
}
  else if (this.props.mode === 'UPDATE'){
    article = <Update/>
}
  return (
    <div className="App">
      <Header />
      <Nav />
      <ArticleStyled>
        <div className="ctrl"><Control/></div>
        <div className="article">{article}</div>
      </ArticleStyled>
      

    </div>
  );
  }
}

export default connect(
  function(state){
    return{
      mode:state.mode
    }
  }
)(App);

const ArticleStyled = styled.div`
display:flex;
  .ctrl{
    width:20%;
  }
  .article{
    width:70%;
  }
`;