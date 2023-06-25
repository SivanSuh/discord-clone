import React from "react";

interface UserProp {
  image: string;
  title: string;
}

const User: React.FC<UserProp> = ({ image, title }) => {
  return (
    <div className="flex items-center p-2  text-white">
      <div className="w-9 h-9 ">
        <img className="w-full" src={image} alt={title} />
      </div>
      <h3 className="ml-5">{title}</h3>
    </div>
  );
};

export default User;
