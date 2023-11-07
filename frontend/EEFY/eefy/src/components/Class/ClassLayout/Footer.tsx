'use client';
import { useState } from 'react';
import Link from 'next/link';

import { Thema } from '@/recoil/Thema';
import { useRecoilState } from 'recoil';

import { IoHomeOutline, IoNotificationsOutline } from 'react-icons/io5';
import { TbLogout } from 'react-icons/tb';

export default function Footer() {
  const [darkModeIsAcitive, setdarkModeIsAcitive] = useState(false);
  const [thema, setThema] = useRecoilState(Thema);
  const checkHandler = () => {
    const isActiv = !darkModeIsAcitive;
    setdarkModeIsAcitive(isActiv);
    if (!isActiv) {
      setThema('winter');
    } else {
      setThema('dark');
    }
  };

  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className='flex justify-between items-center' style={{ width: '95%' }}>
        {/* 왼쪽 Logout 버튼 */}
        <div className='flex items-center gap-2'>
          <TbLogout className='text-3xl text-current' />
          {/* <svg xmlns='http://www.w3.org/2000/svg' className='w-8 h-8' viewBox='0 0 37 37' fill='none'>
            <path
              d='M21.6079 22.8847C22.2141 22.8847 22.7062 23.3394 22.7062 23.8997V25.1401C22.7062 28.3643 19.8677 30.9875 16.3773 30.9875H9.42501C5.92891 30.9875 3.08325 28.3577 3.08325 25.1256C3.08325 24.5653 3.57536 24.1119 4.18158 24.1119C4.7878 24.1119 5.2799 24.5653 5.2799 25.1256C5.2799 27.2399 7.13992 28.9575 9.42501 28.9575H16.3773C18.6566 28.9575 20.5095 27.2452 20.5095 25.1401V23.8997C20.5095 23.3394 21.0016 22.8847 21.6079 22.8847ZM31.2763 16.7902C31.7213 16.7902 32.1221 17.038 32.2919 17.419C32.4616 17.7986 32.366 18.2362 32.0522 18.5262L27.8843 22.3608C27.6689 22.5572 27.3893 22.6574 27.1083 22.6574C26.8273 22.6574 26.5449 22.5572 26.3309 22.3582C25.903 21.9601 25.903 21.3181 26.3338 20.9227L28.6175 18.8215H14.1395C13.5333 18.8215 13.0398 18.3667 13.0398 17.8065C13.0398 17.2463 13.5333 16.7902 14.1395 16.7902H31.2763ZM16.3633 4.625C19.8608 4.625 22.7065 7.25476 22.7065 10.4869V11.7142C22.7065 12.2731 22.2144 12.7278 21.6081 12.7278C21.0019 12.7278 20.5098 12.2731 20.5098 11.7142V10.4869C20.5098 8.37258 18.6498 6.65499 16.3633 6.65499H9.41246C7.13308 6.65499 5.28019 8.36862 5.28019 10.4724V20.5104C5.28019 21.0706 4.78808 21.5254 4.18186 21.5254C3.57564 21.5254 3.08354 21.0706 3.08354 20.5104V10.4724C3.08354 7.24817 5.92207 4.625 9.41246 4.625H16.3633ZM26.3281 13.2589C26.756 12.8582 27.4492 12.8556 27.8814 13.251L28.9313 14.2107C29.3635 14.6061 29.3663 15.2481 28.9398 15.6462C28.7244 15.8465 28.442 15.948 28.1596 15.948C27.88 15.948 27.6004 15.8492 27.3865 15.6541L26.3352 14.6931C25.9045 14.299 25.9016 13.6557 26.3281 13.2589Z'
              fill='#6C7894'
            />
          </svg> */}
          <p className='text-xl'>Log-out</p>
        </div>

        {/* 오른쪽 Nav */}
        <div className='flex items-center gap-7'>
          <Link href={'/main/classlist'} className='tooltip tooltip-top tooltip-base-300' data-tip='홈으로 돌아가기'>
            <IoHomeOutline className='text-3xl fill-current' />
          </Link>

          {/* 테마 변경 */}
          <label className='swap swap-rotate'>
            {/* this hidden checkbox controls the state */}
            <input
              type='checkbox'
              checked={darkModeIsAcitive}
              onChange={e => checkHandler()}
              className='tooltip tooltip-top tooltip-base-300'
              data-tip='테마 변경'
            />

            {/* sun icon */}
            <svg className='swap-on fill-current w-8 h-8' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
              <path d='M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z' />
            </svg>

            {/* moon icon */}
            <svg className='swap-off fill-current w-8 h-8' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
              <path d='M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z' />
            </svg>
          </label>

          {/* 알람 */}
          <div className='indicator'>
            <span
              className='indicator-item badge badge-secondary w-1'
              style={{ paddingLeft: '5px', paddingRight: '5px', left: '18px', height: '11.6px', bottom: '1px' }}
            ></span>
            <IoNotificationsOutline className='text-3xl' style={{ fontWeight: '400' }} />
          </div>
        </div>
      </div>

      {/* <label className="swap text-6xl">
        <input type="checkbox" id="allCk"/>
        <div className="swap-on">🥵</div>
        <div className="swap-off">🥶</div>
      </label>
      <label className="swap swap-active text-6xl">
        <div className="swap-on">🥳</div>
        <div className="swap-off">😭</div>
      </label> */}
    </div>
  );
}
