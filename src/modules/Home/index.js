import {
  Link
} from "react-router-dom";

import HomePng from "../../assets/png/home.png"

const Home = () => {
  return(
    <div className="lg:h-screen lg:w-screen h-full w-full bg-[#f6f2ff] flex lg:flex-row flex-col-reverse px-[30px] lg:px-[150px] pt-[20px] lg:pt-[50px]">
      <Events />
      <Prompt />
    </div>
  )
}

const Events = () => {
  return(
    <div className="mx-auto lg:w-[50%] pt-[36px] flex justify-center items-center lg:justify-start lg:items-start flex-col">
      <img src={HomePng} className="h-[520px] w-[320px] "/>
      <Link to="/create">
        <button className="text-[#ffffff] mb-[20px] lg:hidden block lg:self-end :self-center mt-[20px] al bg-gradient-to-br from-[#8456EC] to-[#E87BF8] py-[16px] w-[220px] rounded-[10px]">
          🎉 Create my event
        </button>
      </Link>
    </div>
  )
}

const Prompt = () => {
  return(
    <div className="pr-[10px] pt-[60px] flex flex-col lg:w-[50%]">
      <div className="text-[#240D57] leading-[64px] text-[64px] text-center lg:text-right font-bold">
        Imagine if <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#8456EC] to-[#E87BF8]">Snapchat</span> had events.
      </div>
      <div className="text-[24px] leading-[27px] text-[#4F4F4F] text-center lg:text-right font-light pt-[16px]">
        Easily host and share events with your friends across any social media.
      </div>
      <Link to="/create" className="lg:self-end self-center">
        <button className="text-[#ffffff] hidden lg:block mt-[50px] bg-gradient-to-br from-[#8456EC] to-[#E87BF8] py-[16px] w-[220px] rounded-[10px]">
          🎉 Create my event
        </button>
      </Link>
    </div>
  )
}

export default Home