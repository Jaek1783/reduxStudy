import React from "react";
import { connect } from "react-redux";
import styled from 'styled-components';
class Header extends React.Component {
  render() {
    return (
      <HeaderStyled onClick={function () {
        this.props.onClick();
      }.bind(this)}>
        <h1>
            REDUX STUDY <small>in 생활코딩</small>
        </h1>
      </HeaderStyled>
    );
  }
}

export default connect(null, function (dispatch) {
  return {
    onClick: function () {
      dispatch({ type: "WELCOME" });
    }
  };
})(Header);
// export default connect()(Header);

const HeaderStyled = styled.header`
background-color:skyblue;
padding:10px;
color:purple;
cursor: pointer;
h1>small{
  font-size:1rem;
}
`;