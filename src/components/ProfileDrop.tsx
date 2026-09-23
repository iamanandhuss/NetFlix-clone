import { Check, Settings, HelpCircle, ChevronRight, Bell, User } from "lucide-react";
import { useApp } from "../context/AppContext";
import { auth, provider } from "../FireBase/Firebase";
import type React from "react";


const ProfileMenu:React.FC<{handleLogout:()=>{}}> = ({handleLogout}) => {
      const {Email,setEmail } = useApp();
      setEmail('')
      console.log(Email)
    return (
        <div
            className="w-[400px]  bg-[#111] text-white rounded-md ">
            <div className="flex items-center justify-between p-5 border-b border-black">
                <div className="flex items-center gap-5">
                    <Bell size={28} />
                    <span className="text-xl text-gray-300">
                        Notifications
                    </span>
                </div>
                <ChevronRight />
            </div>

            <div className="flex items-center justify-between p-5 border-b border-black">
                <div className="flex items-center gap-5">
                    <Check size={28} />
                    <span className="text-xl text-gray-300">
                        My List
                    </span>
                </div>
                <ChevronRight />
            </div>
            {/* Settings */}
            <div className="flex items-center justify-between p-5 border-b border-black">
                <div className="flex items-center gap-5">
                    <Settings size={28} />
                    <span className="text-xl text-gray-300">
                        App Settings
                    </span>
                </div>
                <ChevronRight />
            </div>
            {/* Account */}
            <div className="flex items-center justify-between p-5 border-b border-black">
                <div className="flex items-center gap-5">
                    <User size={28} />
                    <span className="text-xl text-gray-300">
                        Account
                    </span>
                </div>
                <ChevronRight />
            </div>




            {/* Help */}

            <div className="flex items-center justify-between p-5 border-b border-black">

                <div className="flex items-center gap-5">

                    <HelpCircle size={28} />

                    <span className="text-xl text-gray-300">
                        Help
                    </span>

                </div>


                <ChevronRight />

            </div>





            {/* Sign out */}

            <button 
          className="
          w-full
          py-10
          bg-black
          text-gray-300
          text-2xl
          hover:text-white
        "
         onClick={handleLogout}
        >

                Sign Out

            </button>


        </div>
    );
};


export default ProfileMenu;