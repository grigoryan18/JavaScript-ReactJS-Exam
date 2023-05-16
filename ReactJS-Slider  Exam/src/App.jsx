import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

export default function Slider() {
  const silders = [
    {
      url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    },
    {
      url: "https://us.123rf.com/450wm/bpenny/bpenny2212/bpenny221201566/196218969-tree-of-life-digital-art-made-by-generative-ai-depicting-the-tree-of-life-growing-in-the-wild.jpg?ver=6",
    },
    {
      url: "https://us.123rf.com/450wm/rufous/rufous2210/rufous221000610/193126580-tree-of-life-yggdrasil-intricate-details-cinematic-light.jpg?ver=6",
    },
  ]

  const [index, setIndex] = useState(0)
  const leftSlide = () => {
    const isFirst = index === 0
    const newIndex = isFirst ? silders.length - 1 : index - 1
    setIndex(newIndex)
  }
  const rightSlide = () => {
    const isSecond = index === silders.length - 1
    const newIndex = isSecond ? 0 : index + 1
    setIndex(newIndex)
  }

  const gotoSlide = (value) => {
    setIndex(value)
  }
  return (
    <div className='w-full h-[500px] py-14 px-4 relative'>
      <div style={{backgroundImage: `url(${silders[index].url})`}} className='w-full h-full bg-cover bg-center duration-500'></div>
      <div className='absolute top-[50%] rounded-full text-2xl bg-black text-white cursor-pointer left-5'>
        <BsChevronCompactLeft size={50} onClick={leftSlide}/>
      </div>
      <div className='absolute top-[50%] rounded-full text-2xl bg-black text-white cursor-pointer right-5'>
        <BsChevronCompactRight size={50} onClick={rightSlide}/> 
      </div>
      <div className='flex top-4 justify-center py-4'>
        {silders.map((_, value) => (
          <div key={value} onClick={() => gotoSlide(value)}>
        <RxDotFilled/>
        </div>
        ))}
      </div>
    </div>
  )
}