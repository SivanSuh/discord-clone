import { FieldValues, useForm } from "react-hook-form";
import Input from "../Atoms/Input";
import Style from "./style.module.css";
import Button from "../Atoms/Button";
import ChatDialog from "./ChatDialog";
import io from "socket.io-client";
import { useEffect, useState } from "react";

interface ChatContentProps {
  select: any;
}
const socket = io("http://localhost:8080");

const ChatContent: React.FC<ChatContentProps> = ({ select }) => {
  const { register, handleSubmit } = useForm<FieldValues>();
  const [msg, setMessage] = useState("");
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    socket.on("message", (data: any) => {
      setMessages((prev: any) => [...prev, data]);
    });
  });

  const onSubmit = () => {
    // event.preventDefault();
    socket.emit("sendMessage", { msg });
    setMessage("");
  };
  console.log("messages", messages);
  return (
    <>
      {select.name !== "" ? (
        <div className={Style.mainContent}>
          <nav className={Style.chatNavbar}>
            <div className="w-9 h-9 ">
              <img className="w-full" src={select.image} alt={select?.name} />
            </div>
            <span className="mx-3">{select?.name}</span>
          </nav>
          <main className={Style.mainContent}>
            {messages.map((item: any, index: any) => {
              console.log("idadadfaa", item);
              return (
                <ChatDialog
                  color="red"
                  key={index}
                  position="end"
                  item={item.msg}
                />
              );
            })}
          </main>
          <form onSubmit={handleSubmit(onSubmit)} className={Style.footer}>
            <div className="flex-1">
              <Input
                id="msg"
                placeholder="Add new message"
                type="text"
                name="msg"
                value={msg}
                onChange={(e) => setMessage(e.target.value)}
                register={register}
              />
            </div>
            <div>
              <Button type="submit" title="Send" />
            </div>
          </form>
        </div>
      ) : (
        <div className="bg-gray-300 w-full h-full flex-1"></div>
      )}
    </>
  );
};

export default ChatContent;
