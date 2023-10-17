import React, { useEffect, useState } from "react";
import { StyledChatter } from "./Chatter.styled";
import InputModel from "../../components/InputModel";
import MessageViewModel from "../../components/MessageViewModel";
import { getAllChat } from "./utils";

const Chatter = () => {
  const [msgList, setMsgList] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    getAllChat(setMsgList);
  }, []);

  const inputProps = { setMsgList, text, setText };
  const MessageViewModelProps = { msgList, setMsgList };
  return (
    <StyledChatter>
      <div className="title">Chatter</div>
      <InputModel {...inputProps} />
      <MessageViewModel {...MessageViewModelProps} />
    </StyledChatter>
  );
};

export default Chatter;
