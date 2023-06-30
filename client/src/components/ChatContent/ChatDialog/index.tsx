import Style from "./style.module.css";
import React from "react";

interface ChatDialogProps {
  position?: "start" | "end";
  color?: "red" | "blue";
}

const ChatDialog: React.FC<ChatDialogProps> = ({
  position = "start",
  color = "blue",
}) => {
  return (
    <div className="flex" style={{ justifyContent: position }}>
      <div className={Style.chatDialog} style={{ backgroundColor: color }}>
        Chat dialog
      </div>
    </div>
  );
};

export default ChatDialog;
