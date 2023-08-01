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
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<FieldValues>();
  const { formContent } = useSelector((state: RootState) => state.user);
  const { allMessage } = useSelector((state: RootState) => state.chat);

  interface AllMessageProps {
    fromSelf: string;
    message: string;
    createdAt: string;
    users: any[];
  }

  const [messages, setMessages] = useState<AllMessageProps[]>(allMessage);

  useEffect(() => {
    setMessages(allMessage);
  }, [allMessage]);

  const dispatch = AppDispatch();

  console.log("alll messages", allMessage);
  useEffect(() => {
    socket.on("message", (data: any) => {
      console.log("dataaaadasd", data);
      setMessages([...messages, data]);
    });
    if (select.id !== "") {
      dispatch(
        getMessage({
          from: formContent?._id,
          to: select?.id,
        })
      );
    }
  }, [dispatch, select, socket]);

  const [msg, setMessage] = useState({
    message: "",
    from: formContent?._id,
    to: select?.id,
  });

  const onSubmit = async (data: any) => {
    console.log("onsubmit data", data);
    // event.preventDefault();
    if (msg.message.trim() !== "") {
      await socket.emit("sendMessage", msg);

      await setMessage({
        message: "",
        from: "",
        to: "",
      });
    }
    return data;
  };
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
              console.log("itemslerweer", item);
              return (
                <ChatDialog
                  color={item?.fromSelf === formContent._id ? "blue" : "red"}
                  position={
                    item?.fromSelf === formContent?._id ? "end" : "start"
                  }
                  item={item}
                  key={index}
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
                  console.log("degiişim", e);
                  setMessage({
                    from: formContent._id,
                    to: select.id,
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
