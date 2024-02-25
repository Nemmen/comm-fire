import React, { useState } from "react";
import Rightside from "./Rightside";
import Leftside from "./Leftside";

const Community = () => {
 
    return (
      <div className="w-full py-[40px]">
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="px-6">
            <Leftside />
          </div>
          <div className="col-span-3 border-x-2 border-t-slate-800 px-6">
            <Rightside />
          </div>
        </div>
      </div>
    );
  
};

export default Community;
