import React from 'react'
import Image from 'next/image'
import { assets } from '@/app/assets/assets'
import { Search } from 'lucide-react'

const UserHeader = () => {
    return (
        <div className="flex items-center justify-between w-full py-4 px-6">
            {/* Left section - Welcome message */}
            <div className="flex flex-col mr-24">
                <h1 className="text-xl font-semibold">Hello, Jane</h1>
                <p className="text-sm text-fontColor-light">Welcome back!</p>
            </div>

            {/* Combined middle and right sections */}
            <div className="flex items-center flex-grow">
                {/* Middle section - Search */}
                <div className="relative flex-grow max-w-md mr-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-fontColor-light" size={18} />
                        <input
                            type="text"
                            placeholder="Search services, technicians, etc."
                            className="w-full py-2 pl-10 pr-4 rounded-full shadow-lg focus:outline-none focus:ring-1 focus:ring-fontColor-dark"
                        />
                    </div>
                </div>

                {/* Right section - Notifications, messages, and profile */}
                <div className="flex items-center space-x-4">
                    {/* Notification bell icon */}
                    <div className="relative">
                        <div className="p-2 bg-white rounded-xl shadow-lg cursor-pointer">
                            <Image src={assets.red_bell} alt="Notifications" width={20} height={20} />
                        </div>
                    </div>

                    {/* Message icon */}
                    <div className="relative">
                        <div className="p-2.5 bg-white rounded-xl shadow-lg cursor-pointer">
                            <Image src={assets.red_letter} alt="Messages" width={20} height={20} />
                        </div>
                    </div>

                    {/* Become a technician button */}
                    <button className="bg-primary text-white px-4 py-2 rounded-xl text-sm font-normal">
                        Become a technician
                    </button>

                    {/* User profile */}
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                        <Image src={assets.user_profile} alt="User profile" width={40} height={40} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserHeader