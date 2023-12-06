'use client';

import React, { useState } from 'react';

import useScrollingEffect from '@/hook/use-scroll';
import { useTabs } from '@/hook/use-tabs';
import { Framer } from '@/lib/framer';

import FollowingPage from './following';
import ForYouPage from './for-you';
import SearchBar from '../Search/SearchBar';


const HomeFeed = () => {
  const scrollDirection = useScrollingEffect();
  const headerClass =
    scrollDirection === 'up' ? 'translate-y-0' : 'translate-y-[-100%]';

  const [hookProps] = useState({
    tabs: [
      {
        label: 'For you',
        children: <ForYouPage />,
        id: 'For you',
      },
      {
        label: 'Following',
        children: <FollowingPage />,
        id: 'Following',
      },
    ],
    initialTabId: 'Matches',
  });
  const framer = useTabs(hookProps);

  return (
    <div className="flex flex-col flex-1">
      <div
        className={`flex flex-col border-b border-zinc-700 sticky inset-x-0 pt-2 top-0 z-30 w-full transition-all backdrop-blur-xl md:translate-y-0`}
      >
        <div className={'w-full flex flex-col justify-between items-center mt-4'}>
                <div className={'w-full flex flex-row justify-between items-center mt-4'}>
                     <div className=' flex items-center justify-center'>
                          <span className="font-epilogue font-bold  text-[35px] leading-[38px] text-white  ml-6 ">Home</span>
                      </div>
                      <div className='flex justify-center items-center mr-2'>
                       <div className="w-auto flex justify-center items-center p-2 mx-6 rounded-[50px] bg-[#8c6dfd] ">
                              <span className="font-epilogue font-bold text-[13px] text-white text-center mx-2 my-1">Connect Wallet</span>
                        </div>
                      </div>
                </div>    
       </div>

        <div className="flex flex-row w-full items-center justify-around mt-4">
          <Framer.Tabs {...framer.tabProps} />
        </div>
      </div>

      <div className="pt-10 flex  flex-1 h-screen">
        {framer.selectedTab.children}
      </div>
    </div>
  );
};

export default HomeFeed;
