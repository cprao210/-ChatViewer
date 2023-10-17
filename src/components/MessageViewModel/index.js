import React from "react";
import { StyledMessageViewModel } from "./MessageViewModel.styled";
import {
  convertTimestampToTime,
  deleteChat,
} from "../../container/Chatter/utils";

const MessageViewModel = ({ msgList, setMsgList }) => {
  return (
    <StyledMessageViewModel className="msgList">
      {msgList.map((message, i) => (
        <div className="msgModel" key={i}>
          <div className="msgInfo">
            <div className="icon">💬</div>
            <div className="name">
              ~ {message?.source ? message.source : "anonymous"}
            </div>
            <div className="time">
              - {convertTimestampToTime(message.timestamp)}
            </div>
            <div
              className="deleteBtn"
              onClick={() => {
                deleteChat(message.id, setMsgList);
              }}
            >
              Delete
            </div>
          </div>
          <div className="msg">{message.text}</div>
        </div>
      ))}
    </StyledMessageViewModel>
  );
};

export default MessageViewModel;
