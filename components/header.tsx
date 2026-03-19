import React from 'react'
import style from '../styles/componentstyle.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <div className={style.wrapheader}>
      
      <div className={style.logo}>
        <Link href='/'>
        <Image
                  
                  src="/icon/logobua.png"
                  alt="BakqaBua's logo"
                  width={129}
                  height={50}
                  priority
                />
        </Link>
      </div>
      <div className={style.platforms}>
        <Link href='/theMarket' className={style.pagelink}>
        <span className={style.mobile}>tMkt</span> 
        <Image src='/icon/theMarket.png' alt='' width={170} height={60} className={style.lgscreen}/>
        </Link>
        <Link href='/gamer' className={style.pagelink}>
        <span className={style.mobile}>Game</span> 
        <Image src='/icon/gamerAccount.png' alt='' width={170} height={60} className={style.lgscreen}/>
        </Link>
        <Link href='/lamp' className={style.pagelink}>
        <span className={style.mobile}>Lamp</span> 
        <Image src='/icon/lamp.png' alt='' width={170} height={60} className={style.lgscreen}/>
        </Link>
      </div>
    </div>
  )
}
