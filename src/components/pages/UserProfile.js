import React from "react";

const UserProfile = () => {
  return (
    <div className="px-10 shadow">
    <div className="top-0 rounded-b flex justify-center">
      <div className="">
        <img
          src="https://picsum.photos/id/1005/1000"
          className="object-cover border-4 border-white w-40 h-40 rounded-full"
          alt="cover"
        />
      </div>
    </div>
    <div className="text-center mt-6 text-3xl font-bold text-fBlack">
      Ronald Oliver
    </div>
    <div className="border border-fGrey mt-6 border-opacity-10" />
    <div className="flex justify-between px-8">
      <div className="flex items-center">
        <div className="px-4 py-5 text-fBlue border-b-4 border-fBlue">
          Posts
        </div>
        <div className="px-4 py-5 text-fGrey">
          Friends <span className="text-sm ml-1">458</span>
        </div>
        <div className="px-4 py-5 text-fGrey">Photos</div>
        
       
      </div>
      
    </div>
  </div>
  );
};

export default UserProfile;
