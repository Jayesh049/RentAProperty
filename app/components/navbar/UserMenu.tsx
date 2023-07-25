"use client";

// navigation bar icon
import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';
import { useCallback , useState } from 'react';
import MenuItem from './MenuItem';
import useRegisterModal from '@/app/hooks/useRegisterModel';

const UserMenu = () => {
    const registerModal = useRegisterModal();
    const [isOpen , setIsOpen ]= useState(false);

    // open kar do agar value mere value ke baraabar nahi hai toh 
    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    },[]);

    return ( 
    <div className="relative">
        <div className="flex flex-row items-center gap-3">
            {/* Airbnb your home button like structure */}
            <div
                onClick={() => {}}
                className="
                    hidden
                    md:block
                    text-sm
                    font-semibold
                    py-3
                    px-4
                    rounded-full
                    hover:bg-neutral-100
                    transition
                    cursor-pointer
                    "
                >
                    Airbnb your home
            </div>
            {/* Adding Navigation Icon */}
            <div 
                onClick={toggleOpen}
                className="
                    p-4
                    md:py-1
                    md:px-2
                    border-[1px]
                    border-neutral-200
                    flex
                    flex-row
                    items-center
                    gap-2
                    rounded-full
                    cursor-pointer
                    hover:shadow-md
                    transition
                    "
                >
                  <AiOutlineMenu />  
                  <div className="hidden md:block">
                    <Avatar />
                  </div>
            </div>
        </div>
        {/* agar ye open hai toh */}
        {isOpen && (
            <div 
                className="
                absolute
                rounded-xl
                shadow-md
                w-[40vw]
                md:w-3/4
                bg-white
                overflow-hidden
                right-0
                top-12
                text-sm
                "
                >
                <div className="flex flex-col cursor-pointer">
                    <>
                    {/* here we have defined onclick and label in this system */}
                    <MenuItem
                        onClick={() => {}}
                        label = "Login"
                    />
                    <MenuItem
                        onClick={(registerModal.onOpen)}
                        label="Sign up"    
                    />
                    </>
                </div>
            </div>
        )}
    </div>
      );
}
 
export default UserMenu;