import React from "react";
import Chatter from "./container/Chatter";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster />
      <Chatter />
    </>
  );
};

export default App;
