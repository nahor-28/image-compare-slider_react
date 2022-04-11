import React, { useRef, useState } from 'react'
import test0 from './images/test-0.jpg'
import test1 from './images/test-1.jpg'
import './Slider.css'

import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'

const Slider = () => {

    const [isWidth, setIsWidth] = useState('')
    const [isLeft, setIsLeft] = useState('')
    const [click, setClick] = useState(false);

    const containerRef = useRef(null);
    const wrapperRef = useRef(null);
    const handleRef = useRef(null);

    const handleMouseMove = (e) => {
        if(click) return;

        const sliderLeftX = containerRef.current.offsetLeft;
        const sliderHandleWidth = handleRef.current.clientWidth;
        const sliderWidth = containerRef.current.clientWidth;
        let mouseX = (e.clientX - sliderLeftX);

        // console.log(sliderLeftX)
        // console.log(mouseX)
        // console.log(sliderHandleWidth)
        // console.log(sliderWidth)
        // console.log(click)

        const valueWidth = (1 - mouseX/sliderWidth) * 100;
        const valueLeft = `calc(${(mouseX/sliderWidth) * 100}% - ${sliderHandleWidth/2}px)`
        setIsWidth(valueWidth)
        setIsLeft(valueLeft)

    }


  return (
    <section className='container'>
        <div className='slider_container' ref={containerRef} onMouseMove={handleMouseMove} onMouseLeave={() => {setClick(false)}}>
            <img src={test0} alt=''></img>
            <div className='image_wrapper' ref={wrapperRef} style={{width: isWidth + '%'}}>
                <img src={test1} alt=''></img>
                <span className='label label_after'>HDR</span>
            </div>
            <span className='label label_before'>NON-HDR</span>
            <div className='handle' ref={handleRef} style={{left: isLeft}} onClick={() => {setClick((prevClick) => !prevClick)}} >
                <div className='handle_line'></div>
                <div className='handle_circle'>
                    <MdArrowBackIosNew />
                    <MdArrowForwardIos />
                </div>
                <div className='handle_line'></div>
            </div>

        </div>
    </section>
  )
}

export default Slider