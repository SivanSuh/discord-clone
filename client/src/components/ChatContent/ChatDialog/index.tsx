import Style from "./style.module.css";
import React from "react";

interface ChatDialogProps {
  position?: "start" | "end";
  color?: "red" | "blue";
  item: any;
}

const ChatDialog: React.FC<ChatDialogProps> = ({
  position = "start",
  color = "blue",
  item,
}) => {
  console.log("item", item);
  return (
    <>
      {item && (
        <div className="flex" style={{ justifyContent: position }}>
          <div className={Style.chatDialog} style={{ backgroundColor: color }}>
            {item}
          </div>
        </div>
      )}
    </>
  );
};

export default ChatDialog;
