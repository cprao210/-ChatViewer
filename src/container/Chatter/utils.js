import toast from "react-hot-toast";
import { ChatterService } from "../../services/chatterService";

function convertTimestampToTime(timestamp) {
  const date = new Date(timestamp); // Convert to milliseconds
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert hours from 24-hour to 12-hour format
  const formattedHours = hours % 12 || 12;

  // Ensure single-digit minutes and seconds are formatted with a leading zero
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
}
const getAllChat = async (setMsgList) => {
  try {
    const res = await ChatterService.getAllMsg();
    setMsgList(res.data);
  } catch (error) {
    const errorMsg = error?.response?.data?.text[0]
      ? error?.response?.data?.text[0]
      : error.message;
    toast.error(errorMsg);
  }
};
const postChat = async (text, setMsgList, setText) => {
  try {
    const body = { text };
    const res = await ChatterService.postAllMsg(body);
    setText("");
    setMsgList((msgList) => [...msgList, res.data]);
    toast.success("Message sent");
  } catch (error) {
    const errorMsg = error?.response?.data?.text[0]
      ? error?.response?.data?.text[0]
      : error.message;
    toast.error(errorMsg);
  }
};
const deleteChat = async (id, setMsgList) => {
  try {
    await ChatterService.deleteAllMsg(id);
    const filterMsg = (msgList) => {
      return msgList.filter((d, i) => d.id !== id);
    };
    setMsgList((msgList) => filterMsg(msgList));

    toast.success("Message Deleted");
  } catch (error) {
    const errorMsg = error?.response?.data?.detail
      ? error?.response?.data?.detail
      : error.message;
    toast.error(errorMsg);
  }
};
export { convertTimestampToTime, getAllChat, postChat, deleteChat };
