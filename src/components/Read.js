import React, { Component } from "react";
import styled from "styled-components";
class Read extends Component {
  render() {
    return (
      <ReadStyled>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </ReadStyled>
    );
  }
}
export default Read;

const ReadStyled = styled.article`
  font-size:3rem;
  padding-top:6.25rem;
  text-align:center;
`;
