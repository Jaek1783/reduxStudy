import React , {Component} from 'react';
import styled from 'styled-components';
class Update extends Component {
    state = {
        id:this.props.id,
        title:this.props.title,
        desc:this.props.desc
    }
    onChangeHandler(e){
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    render() {
        return (
            <FormStyled onSubmit={function(e){
                e.preventDefault();
                this.props.onSubmit(
                   Number(e.target.id.value) ,
                    e.target.title.value,
                    e.target.desc.value
                );
            }.bind(this)}>
               <input type="hidden" name="id" value={this.state.id} /> 
               <p><input type="text" name="title" onChange={this.onChangeHandler.bind(this)} placeholder='title' value={this.state.title}></input></p>
               <p><textarea type="text" name="desc" onChange={this.onChangeHandler.bind(this)} placeholder='description' value={this.state.desc}></textarea></p>
               <p><input type="submit" value="생성하기"/></p>
            </FormStyled>
        );
    }
}

export default Update;

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