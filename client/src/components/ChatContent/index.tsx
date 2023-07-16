import { FieldValues, useForm } from "react-hook-form";
import Input from "../Atoms/Input";
import Style from "./style.module.css";
import Button from "../Atoms/Button";
import ChatDialog from "./ChatDialog";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import { AddMessage, getMessage } from "@/store/ChatSlice";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";

interface ChatContentProps {
  select: any;
}
const socket = io("http://localhost:8080");

const ChatContent: React.FC<ChatContentProps> = ({ select }) => {
  const { register, handleSubmit } = useForm<FieldValues>();
  const { formContent } = useSelector((state: RootState) => state.user);

  const [messages, setMessages] = useState<any[]>([]);
  const dispatch = AppDispatch();
  console.log("form content", formContent);

  useEffect(() => {
    socket.on("message", (data: any) => {
      setMessages((prev: any) => [...prev, data]);
    });
  }, []);

  const [msg, setMessage] = useState({
    message: "",
    from: formContent?._id,
    to: select?.id,
  });

  const onSubmit = async () => {
    // event.preventDefault();
    console.log("msg", msg);
    socket.emit("sendMessage", { msg });
    await dispatch(AddMessage(msg));
    await setMessage({
      message: "",
      from: formContent?._id,
      to: select?.id,
    });
    await dispatch(
      getMessage({
        from: formContent?._id,
        to: select?.id,
      })
    );
    console.log("giden messaj", msg);
  };
  console.log("messages", messages);
  console.log("select", select);
  return (
    <>
      {select?.id !== "" ? (
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
                  color={item.msg.from !== select?.id ? "red" : "blue"}
                  key={item.msg.from}
                  position={item.msg.from !== select?.id ? "end" : "start"}
                  item={item.msg.message}
                />
              );
            })}
          </main>
          <form onSubmit={handleSubmit(onSubmit)} className={Style.footer}>
            <div className="flex-1">
              <Input
                id="message"
                placeholder="Add new message"
                type="text"
                name="message"
                value={msg.message}
                onChange={(e) => {
                  console.log("degiişim", e.target.value);
                  setMessage({
                    ...msg,
                    message: e.target.value,
                  });
                }}
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
