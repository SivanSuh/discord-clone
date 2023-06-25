import React from "react";
import User from "../User";
import { FaUserFriends } from "react-icons/fa";
import Input from "../Atoms/Input";
import { FieldValues, useForm } from "react-hook-form";

interface MainProps {
  formContent: any;
}

const MainTemplate: React.FC<MainProps> = ({ formContent }) => {
  const { register, handleSubmit } = useForm<FieldValues>();
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
        <div className="absolute bottom-0 w-full">
          <User image={formContent.img} title={formContent.userName} />
        </div>
      </div>
    </div>
  );
};

export default MainTemplate;
