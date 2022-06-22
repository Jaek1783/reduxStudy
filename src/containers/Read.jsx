import { connect } from "react-redux";
import Read from "../components/Read";
export default connect(function (state) {
  var title, desc;
  const contents = [...state.contents];
  //eslint-desable-line no-unused-vars
  if (state.mode === "WELCOME") {
    title = state.welcome_content.title;
    desc = state.welcome_content.desc;
  }
  else {
    {contents.map(content=>{
      if(content.id === state.selected_content_id){
        title= content.title;
        desc=content.desc;
      }
    })}
  }
  return {title:title,desc:desc}
})(Read);
