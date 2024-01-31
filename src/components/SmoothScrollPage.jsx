import { useRef } from 'react'

export const SmoothScrollPage = () => {

    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
  
    const scrollToSection = (ref) => {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <div>SmoothScrollPage</div>
  )
}
