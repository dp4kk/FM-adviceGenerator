import { useEffect, useState } from "react"
import desktopPattenDivider from '../assets/pattern-divider-desktop.svg'
import mobilePatternDivider from '../assets/pattern-divider-mobile.svg'
import diceIcon from '../assets/icon-dice.svg'
const MainPage = () => {
  const [advice, setAdvice] = useState([])

  const fetchAdvice = async()=>{
      try {
        const response = await fetch('https://api.adviceslip.com/advice')
        const data= await response.json()
        setAdvice(data.slip)        
      } catch (error) {
        console.log('error')
      }
  }

  useEffect(()=>{
    fetchAdvice()
  },[])

  return (
    <div className="w-full min-h-screen bg-[#1f2631] flex justify-center items-center">
      <div className="w-full max-w-[600px]  bg-[#313a49] p-8 flex flex-col items-center rounded-xl relative">
        <p className="text-[#55fea5] text-center tracking-wider">ADVICE #{advice.id}</p>
        <div className="h-[150px]">
        <p className="text-3xl text-white text-center my-6">&ldquo;{advice.advice}&rdquo;</p>
        </div>
        <div className="my-4">
        <img src={mobilePatternDivider} className="sm:hidden"/>
        <img src={desktopPattenDivider} className="hidden sm:block"/>
        </div>
        <button className="bg-[#55fea5] p-4 rounded-full absolute bottom-0 mb-[-30px] hover:shadow-button transition-all duration-300" onClick={()=>fetchAdvice()}>
          <img src={diceIcon}/>
        </button>
      </div>
    </div>
  )
}

export default MainPage