import React from "react";
import styled from "styled-components";

class Nav extends React.Component {
  render() {
    const tags = [...this.props.data];
    return (
      <NavStyled>
        <p>Nav</p>
        <ul>
          {tags.map((tag) => {
            return (
              <li key={tag.id}>
                <div
                  data-id={tag.id}
                  onClick={function (e) {
                    this.props.onClick(Number(e.target.dataset.id));
                  }.bind(this)}
                >
                  {tag.title}
                </div>
              </li>
            );
          })}
        </ul>
      </NavStyled>
    );
  }
}
export default Nav;

const NavStyled = styled.nav`
  margin: 50px 0 10px;

  p {
    background-color: skyblue;
    padding: 5px;
  }
  ul {
    display: flex;
    justify-content:space-evenly;
    border: 1px solid #ccc;
    padding: 10px 5px;
    text-align:center;
  }
  li{
    cursor: pointer;
  }
  ul > li:not(:last-child) {
    margin-right: 10px;
  }
`;
