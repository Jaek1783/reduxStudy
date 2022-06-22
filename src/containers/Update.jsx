import { connect } from 'react-redux';
import Update from '../components/Update';

export default connect(
    function(state){
        var title, desc, id;
        const contents = [...state.contents];
        {contents.map(content=>{
            if(content.id === state.selected_content_id){
              title= content.title;
              desc=content.desc;
              id=content.id;
            }
          })}
        return{
            title,
            desc,
            id
    }},
    function(dispatch){return{
        onSubmit:function(id,title,desc){
            dispatch({type:'UPDATE_PROCESS', id, title, desc})
        }
    }},
)(Update);

