import React, { useEffect } from "react";
import User from "../User";
import { FaUserFriends } from "react-icons/fa";
import Input from "../Atoms/Input";
import { FieldValues, useForm } from "react-hook-form";
import { allUsers } from "@/store/auth/authSlice";
import { AppDispatch } from "@/store";
import { getMessage } from "@/store/ChatSlice";

interface MainProps {
  formContent: any;
  allUser: any[];
  setSelect: any;
  select?: any;
}

const MainTemplate: React.FC<MainProps> = ({
  formContent,
  allUser,
  setSelect,
  select,
}) => {
  const { register, handleSubmit } = useForm<FieldValues>();
  const dispatch = AppDispatch();
  useEffect(() => {
    dispatch(allUsers());
    if (select?.id) {
      dispatch(
        getMessage({
          from: formContent?._id,
          to: select?.id,
        })
      );
      console.log("istek", select?.id);
    }
  }, [dispatch]);

  const checkMessage = (e: any) => {
    console.log("seçildi ", e);
    setSelect({
      name: e.userName,
      image: e.img,
      id: e._id,
    });
  };

  return (
    <div className="bg-[#1C1B29] h-full w-1/4 text-[#E3E5E8]">
      <div className="w-11/12 mx-auto py-3 h-full relative">
        <Input
          type="text"
          id="friend"
          placeholder="Sohbet bul ya da başlat"
          register={register}
        />
        <div className="flex items-center my-2">
          <FaUserFriends />
          <h2 className="ml-5">Arkadaşlar</h2>
        </div>
        <div>
          {allUser
            .filter((val) => val._id !== formContent._id)
            .map((items) => {
              console.log("items idli sleects", items);
              return (
                <User
                  image={items.img}
                  id={items._id}
                  key={items?._id}
                  select={select}
                  title={items.userName}
                  onClick={() => checkMessage(items)}
                />
              );
            })}
        </div>
        <div className="absolute bottom-0 w-full">
          <User
            id={formContent._id}
            image={formContent.img}
            title={formContent.userName}
          />
        </div>
      </div>
    </div>
  );
};

export default MainTemplate;
