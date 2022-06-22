import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from "styled-components";
class Control extends Component {
    render(){
        return(
            <ButtonStyled>
                <p>Button</p>
                <UlStyled>
                    <li><button onClick={function(){
                        this.props.onClick('CREATE');
                    }.bind(this)}>CREATE</button></li>
                    <li><button onClick={function(){
                        this.props.onClick('UPDATE');
                    }.bind(this)}>UPDATE</button></li>
                    <li><button onClick={function(){
                        this.props.onClick('DELETE_PROCESS');
                    }.bind(this)}>DELETE</button></li>
                </UlStyled>
            </ButtonStyled>
        )
    }
}export default Control;

const ButtonStyled = styled.div`
border:1px solid #ccc;
p{
    padding:5px;
    border-bottom:1px solid #ccc;
    background-color:skyblue;
}
`; 
const UlStyled = styled.ul`
display:flex;
flex-direction: column;
align-items : center;
    li{
        padding:5px;
    }
    li:last-child>button{
        background-color:#ff6643;
    }
    button{
        background-color:#ededd5;
        width:100px;
        padding:10px;
        border:none;
    }
`;