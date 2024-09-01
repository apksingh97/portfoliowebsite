import React, { useEffect, useState } from 'react'
// import image from "../../assets/img/skill/html.png"
const ProgressBar = ({ title, percent, icon }) => {
  const [style, setStyle] = useState({ width: 0 })

  useEffect(() => {

    setInterval(() => {
      const styled = { width: `${percent}`, opacity: 1 }
      setStyle(styled)
    }, 1000);

  }, [percent])


  return (
    <div className="flex gap-4 justify-center items-end mb-4" >

      <img className='w-[24px]' src={icon} alt={title} />
      <div className='skill flex flex-col gap-1  flex-1'>
        <p className='uppercase font-tertiary text-white/80 text-xs tracking-[2px]'>{title}</p>
        <div className="w-full bg-white/10 h-2 rounded-xl relative">
          <div className={` h-2 bg-[#99873f] rounded-xl duration-[4s]`} style={style}></div>
        </div>
      </div>

    </div>
  )
}

export default ProgressBar