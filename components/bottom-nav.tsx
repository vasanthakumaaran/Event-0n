'use client';

import React from 'react';

import Link from 'next/link';

import useNavigation from '@/hook/use-navigation';
import useScrollingEffect from '@/hook/use-scroll';
import { Icon } from '@iconify/react';

const BottomNav = () => {
  const scrollDirection = useScrollingEffect(); // Use the custom hook
  const navClass = scrollDirection === 'up' ? '' : 'opacity-25 duration-500';

  const {
    isHomeActive,
    isExploreActive,
    isNotificationsActive,
    isMessagesActive,
  } = useNavigation();

  return (
    <div
      className={`fixed bottom-0 w-full py-1 z-10 bg-zinc-100 dark:bg-zinc-950 border-t dark:border-zinc-800 border-zinc-200 shadow-lg sm:hidden ${navClass}`}
    >
      <div className="flex flex-row justify-around items-center bg-transparent w-full">
        <Link href="/" className="flex flex-col items-center relative">
          
          {isHomeActive ? (
            <><Icon icon="teenyicons:home-solid" width="32" height="32" /><span className="">Home</span></>
          ) : (
            <Icon icon="teenyicons:home-outline" width="32" height="32" />
          )}
          
        </Link>
        <Link href="/explore" className="flex flex-col items-center">
          {isExploreActive ? (
            <><Icon
              icon="lets-icons:ticket-use-duotone"
              width="32"
              height="32"
              className="stroke-current stroke-5" /><span className="">Ticket</span></>
          ) : (
            <Icon icon="lets-icons:ticket-use-light" width="32" height="32" />
          )}
          
        </Link>
        <Link href="/notifications" className="flex flex-col items-center">
          {isNotificationsActive ? (
            <><Icon icon="heroicons:sparkles-solid" width="32" height="32" /><span className="">Event</span></>
          ) : (
            <Icon icon="heroicons:sparkles" width="32" height="32" />
          )}
        </Link>
        <Link href="/messages" className="flex flex-col items-center">
          {isMessagesActive ? (
            <><Icon icon="iconamoon:profile-fill" width="32" height="32" /><span className="">Account</span></>
          ) : (
            <Icon icon="iconamoon:profile-bold" width="32" height="32" />
          )}
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;
