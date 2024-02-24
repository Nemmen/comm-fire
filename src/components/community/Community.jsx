import React, { useState } from "react";
import Rightside from "./Rightside";
import Leftside from "./Leftside";
import Signin from "./Signin";
// import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const Community = () => {
  const [user] = useAuthState(auth);

  const [log, setLog] = useState(() => {
    if (user === null) {
      return false;
    } else {
      return true;
    }
  });

  if (log) {
    return (
      <div className="w-full py-[40px]">
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="px-6">
            <Leftside setLog={setLog} />
          </div>
          <div className="col-span-3 border-x-2 border-t-slate-800 px-6">
            <Rightside />
          </div>
        </div>
      </div>
    );
  } else {
    return <Signin setLog={setLog} />;
  }
};

export default Community;
