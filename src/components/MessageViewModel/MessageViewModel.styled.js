import styled from "styled-components";

export const StyledMessageViewModel = styled.div`
  .msgList {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
  .msgModel {
    display: flex;
    flex-direction: column;
    padding: 12px 8px;
    gap: 14px;

    border-top: 1px dotted grey;
  }
  .msgInfo {
    display: flex;
    gap: 8px;
    font-size: 14px;
    justify-content: flex-start;
    align-items: center;
  }
  .name {
    color: #222;
    font-weight: 600;
    font-size: 16px;
  }
  .time {
    color: gray;
  }
  .deleteBtn {
    text-decoration: underline;
    color: blue;
  }
  .msg {
    color: gray;
  }
`;
