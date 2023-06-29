import { FieldValues, useForm } from "react-hook-form";
import Input from "../Atoms/Input";
import Style from "./style.module.css";
import Button from "../Atoms/Button";

interface ChatContentProps {
  select: any;
}

const ChatContent: React.FC<ChatContentProps> = ({ select }) => {
  const { register } = useForm<FieldValues>();
  return (
    <>
      {select.name !== "" ? (
        <div className={Style.mainContent}>
          <nav className={Style.chatNavbar}>
            <div className="w-9 h-9 ">
              <img className="w-full" src={select.image} alt={select?.name} />
            </div>
            <span>{select?.name}</span>
          </nav>
          <main className={Style.mainContent}>chat content</main>
          <footer className={Style.footer}>
            <div className="flex-1">
              <Input
                id="add"
                placeholder="Add new message"
                type="text"
                register={register}
              />
            </div>
            <div>
              <Button type="button" title="Send" />
            </div>
          </footer>
        </div>
      ) : (
        <div className="bg-gray-300 w-full h-full flex-1"></div>
      )}
    </>
  );
};

export default ChatContent;
