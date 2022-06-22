import React, { Component } from 'react';
import styled
 from 'styled-components';
class Create extends Component {
    render() {
        return (
                <FormStyled onSubmit={function(e){
                    e.preventDefault();
                    this.props.onSubmit(
                        e.target.title.value,
                        e.target.desc.value
                    );
                }.bind(this)}>
                   <p><input type="text" name="title" placeholder='title'></input></p>
                   <p><textarea type="text" name="desc" placeholder='description'></textarea></p>
                   <p><input type="submit" value="생성하기"/></p>
                </FormStyled>
        );
    }
}

export default Create;

const FormStyled = styled.form`
width:100%;
text-align : center;
margin-top:3rem;
input[type="text"]{
    width:20%;
    height:3.25rem;
    font-size:2rem;
    padding:10px;
}
textarea[type="text"]{
    width:20%;
    height:10rem;
    font-size:1rem;
    padding:10px;
    margin-top:10px;
}
input[type="submit"]{
    padding:10px;
    background-color:skyblue;
    border:none;
    border-radius:15px;
}
`;