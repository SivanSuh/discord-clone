import React from "react";

interface UserProp {
  image: string;
  title: string;
  id: string;
  onClick?: (value: any) => void;
}

const User: React.FC<UserProp> = ({ image, title, onClick, id }) => {
  return (
    <div
      className={`flex items-center p-2  text-white cursor-pointer ease-in-out hover:bg-red-500 `}
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
