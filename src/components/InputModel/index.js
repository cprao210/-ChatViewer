import React from "react";
import { StyledInputModel } from "./InputModel.styled";
import { postChat } from "../../container/Chatter/utils";

const InputModel = ({ setMsgList, text, setText }) => {
  return (
    <StyledInputModel className=" inputModel">
      <div className=" heading">
        Type something in the box below and press "Post"
      </div>

      <div className="inputBox">
        <input
          type="text"
          className="inputMessage"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          className="postBtn"
          onClick={() => {
            postChat(text, setMsgList, setText);
          }}
        >
          Post!
        </button>
      </div>
    </StyledInputModel>
  );
};

export default InputModel;
