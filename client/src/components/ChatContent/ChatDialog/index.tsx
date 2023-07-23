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
  const dates = new Date(item?.createData);

  let formatDate = dates.toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  return (
    <>
      {item && (
        <div className="flex" style={{ justifyContent: position }}>
          <div className={Style.chatDialog} style={{ backgroundColor: color }}>
            <p> {item.message}</p>
            <p>{formatDate}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatDialog;
