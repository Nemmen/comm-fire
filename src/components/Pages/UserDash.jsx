import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { MdLogout } from "react-icons/md";
import { BsFillPostcardFill } from "react-icons/bs";
import { AiFillInteraction } from "react-icons/ai";
import { SiGooglemeet } from "react-icons/si";
import { auth, db } from "../../firebase";
import {
  collection,
  getDocs,
  setDoc,
  getDoc,
  addDoc,
  orderBy,
  doc,
  query,
  where,
  limit,
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaUserFriends } from "react-icons/fa";
const UserDash = () => {
  const [user] = useAuthState(auth);
  const [stories, setStories] = useState([]);
  const storyRef = collection(db, "stories");
  
  useEffect(() => {
    const getStory = async () => {
      const data = await getDocs(
        query(
          storyRef,
          orderBy("timestamp", "desc"),
          where("uid", "==", user.uid),
          limit(3)
        )
      );
  
      setStories(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id, key: doc.id }))
      );
    };

    getStory();
  }, [user]);
  
  return (
    <div className="h-[max-content]">
      <div className="bg-orange-100 ">
        {/* <div className="fixed bg-white text-blue-800 px-10 py-1 z-10 w-full"> */}
        {/* <div className="flex items-center justify-between py-2 text-5x1">
          <div className="font-bold text-blue-900 text-xl">Admin<span className="text-orange-600">Panel</span></div>
          <div className="flex items-center text-gray-500">
            <span className="material-icons-outlined p-2" style={{ fontSize: '30px' }}>search</span>
            <span className="material-icons-outlined p-2" style={{ fontSize: '30px' }}>notifications</span>
            <div className="bg-center bg-cover bg-no-repeat rounded-full inline-block h-12 w-12 ml-2" style={{ backgroundImage: 'url(https://i.pinimg.com/564x/de/0f/3d/de0f3d06d2c6dbf29a888cf78e4c0323.jpg)' }}>
            </div>
          </div>
        </div> */}
        {/* </div> */}
        <div className="flex flex-row pt-24 px-10 pb-4">
          <div className="w-2/12 mr-6">
            <div className="bg-white rounded-xl shadow-lg mb-6 px-6 py-4">
              <a
                href=""
                className="inline-block text-gray-600 hover:text-black my-4 w-full"
              >
                <Link to="/Home">
                  <p>
                    <IoHome className="inline-block m-auto text-[20px]" />{" "}
                    <span className="opacity-[0] lg:opacity-[100] md:opacity-[100] sm:opacity-0">
                      Home
                    </span>
                  </p>
                </Link>
              </a>
              <a
                href=""
                className="inline-block text-gray-600 hover:text-black my-4 w-full"
              >
                <Link to="/Home">
                  <p>
                    <ImProfile className="inline-block m-auto text-[20px]" />{" "}
                    <span className="opacity-[0] lg:opacity-[100] md:opacity-[100] sm:opacity-0">
                      Edit Profile
                    </span>
                  </p>
                </Link>
              </a>
              <a
                href=""
                className="inline-block text-gray-600 hover:text-black my-4 w-full"
              >
                <Link to="/Home">
                  <p>
                    <BsFillPostcardFill className="inline-block m-auto text-[20px]" />{" "}
                    <span className="opacity-[0] lg:opacity-[100] md:opacity-[100] sm:opacity-0">
                      Posts
                    </span>
                  </p>
                </Link>
              </a>
              <a
                href=""
                className="inline-block text-gray-600 hover:text-black my-4 w-full"
              >
                <Link to="/Home">
                  <p>
                    <AiFillInteraction className="inline-block m-auto text-[20px]" />{" "}
                    <span className="opacity-[0] lg:opacity-[100] md:opacity-[100] sm:opacity-0">
                      Interactions
                    </span>
                  </p>
                </Link>
              </a>
              <a
                href=""
                className="inline-block text-gray-600 hover:text-black my-4 w-full"
              >
                <Link to="/Home">
                  <p>
                    <SiGooglemeet className="inline-block m-auto text-[20px]" />{" "}
                    <span className="opacity-[0] lg:opacity-[100] md:opacity-[100] sm:opacity-0">
                      MeetUps
                    </span>
                  </p>
                </Link>
              </a>
            </div>
            <div className="bg-white rounded-xl shadow-lg mb-6 px-6 py-4">
              <a
                href=""
                className="inline-block text-gray-600 hover:text-black my-4 w-full"
              >
                <Link to="/Home">
                  <p>
                    <FaUserFriends className="inline-block m-auto text-[20px]" />{" "}
                    <span className="opacity-[0] lg:opacity-[100] md:opacity-[100] sm:opacity-0">
                      My Communities
                    </span>
                  </p>
                </Link>
              </a>

              <a
                href=""
                className="inline-block text-gray-600 hover:text-black my-4 w-full"
              >
                <Link to="/Home">
                  <p>
                    <MdLogout className="inline-block m-auto text-[20px]" />{" "}
                    <span className="opacity-[0] lg:opacity-[100] md:opacity-[100] sm:opacity-0">
                      Log Out
                    </span>
                  </p>
                </Link>
              </a>
            </div>
          </div>
          <div className="w-10/12">
            <div className="flex flex-row flex-wrap justify-center items-center gap-4">
              <div
                className="bg-no-repeat bg-red-200 border border-red-300 rounded-xl w-[100%] lg:w-[60%] md:w-[50%] sm:w-[100%] mr-2 p-6"
                style={{
                  backgroundImage:
                    "url(https://previews.dropbox.com/p/thumb/AAvyFru8elv-S19NMGkQcztLLpDd6Y6VVVMqKhwISfNEpqV59iR5sJaPD4VTrz8ExV7WU9ryYPIUW8Gk2JmEm03OLBE2zAeQ3i7sjFx80O-7skVlsmlm0qRT0n7z9t07jU_E9KafA9l4rz68MsaZPazbDKBdcvEEEQPPc3TmZDsIhes1U-Z0YsH0uc2RSqEb0b83A1GNRo86e-8TbEoNqyX0gxBG-14Tawn0sZWLo5Iv96X-x10kVauME-Mc9HGS5G4h_26P2oHhiZ3SEgj6jW0KlEnsh2H_yTego0grbhdcN1Yjd_rLpyHUt5XhXHJwoqyJ_ylwvZD9-dRLgi_fM_7j/p.png?fv_content=true&size_mode=5)",
                  backgroundPosition: "90% center",
                }}
              >
                <p className="text-5xl text-indigo-900">
                  Welcome <br />
                  <strong>User</strong>
                </p>
                <span className="bg-red-300 text-xl text-white inline-block rounded-full mt-12 px-8 py-2">
                  <strong>01:51</strong>
                </span>
              </div>
              <div
                className="bg-no-repeat bg-orange-200 border border-orange-300 rounded-xl w-[100%] lg:w-[30%] md:w-[40%] sm:w-[100%] ml-2 p-6"
                style={{
                  backgroundImage:
                    "url(https://previews.dropbox.com/p/thumb/AAuwpqWfUgs9aC5lRoM_f-yi7OPV4txbpW1makBEj5l21sDbEGYsrC9sb6bwUFXTSsekeka5xb7_IHCdyM4p9XCUaoUjpaTSlKK99S_k4L5PIspjqKkiWoaUYiAeQIdnaUvZJlgAGVUEJoy-1PA9i6Jj0GHQTrF_h9MVEnCyPQ-kg4_p7kZ8Yk0TMTL7XDx4jGJFkz75geOdOklKT3GqY9U9JtxxvRRyo1Un8hOObbWQBS1eYE-MowAI5rNqHCE_e-44yXKY6AKJocLPXz_U4xp87K4mVGehFKC6dgk_i5Ur7gspuD7gRBDvd0sanJ9Ybr_6s2hZhrpad-2WFwWqSNkh/p.png?fv_content=true&size_mode=5)",
                  backgroundPosition: "100% 40%",
                }}
              >
                <p className="text-5xl text-indigo-900">
                  Inbox <br />
                </p>
                <a
                  href=""
                  className="bg-orange-300 text-xl text-white underline hover:no-underline inline-block rounded-full mt-12 px-8 py-2 "
                >
                  <strong>See messages</strong>
                </a>
              </div>
            </div>

            <div className="flex flex-row flex-wrap gap-4 mt-6 justify-center items-center">
              {(stories.length == 0) ? (
                <div>No stories yet.</div>
              ) : (
                <div>
                  {
                    stories.map((story, index) => {
                      return (
                        <div
                          key={index}
                          className="bg-white rounded-xl shadow-lg px-6 py-4 lg:w-[30%] md:w-[30%] sm:w-[100%] w-[100%]"
                        >
                          <h4 className="font-semibold ">{story.name}</h4>
                          <br />
                          <p>{story.story}</p>
                        </div>
                      );
                    })
                  }
                </div>)
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDash;
