import React from "react";

interface UserProp {
  image: string;
  title: string;
  id: string;
  onClick?: (value: any) => void;
  select?: any;
}

const User: React.FC<UserProp> = ({ image, title, onClick, id, select }) => {
  console.log("id", id);
  console.log("select", select);
  return (
    <div
      className={`flex items-center p-2  text-white cursor-pointer ease-in-out hover:bg-gray-300 ${
        select?.id === id ? "bg-green-500" : "bg-transparent"
      } `}
      onClick={onClick}
    >
      <div className="w-9 h-9 ">
        <img className="w-full" src={image} alt={title} />
      </div>
      <h3 className="ml-5">{title}</h3>
    </div>
  );
};

export default User;
