import BirthdayPng from "../../assets/png/birthday.png"
import LocationSvg from "../../assets/svg/location"
import CalenderSvg from "../../assets/svg/calender"

const Events = ({}) => {
  return (
    <div className="md:h-screen md:w-screen h-full w-full flex flex-col lg:flex-row-reverse justify-center items-center bg-[#fbfaff] ">
      <img src={BirthdayPng} className="sm:w-full md:w-[583px] md:mt-[88px] lg:mt-[0px] md:h-[583px] mx-[0px]  md:mx-[184px] xl:w-[500px] xl:h-[500px]"/>
      <div className="">
        <div className="pt-[11px] px-[20px] text-left w-full md:px-[114px]">
          <div className="font-bold text-[#240D57] leading-[32px] text-[28px]">Birthday Bash</div>
          <div className="text-[14px] pt-[4px] text-[#828282] leading-[16px]">Hosted by <span className="font-bold">Elsa</span></div>
        </div>
        <Listing
          icon={<LocationSvg />}
        />
        <Listing
          icon={<CalenderSvg />}
        />
      </div>
    </div>
  )
}

const Stroke = () => {
  return(
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={16}
    fill="none"
  >
    <path
      d="m1.568 1 7 7-7 7"
      stroke="#BDBDBD"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  )
}

const Listing = ({ icon }) => {
  return(
    <div className="flex flex-row w-full h-[48px] px-[20px] my-[16px] md:pt-[32px] relative text-left md:px-[114px] justify-between">
      <div className="w-[48px]">
        {icon}
      </div>
      <div className="flex flex-col pl-[20px] mt-[7px] relative w-[70%]">
        <div className="text-[#240D57] text-[16px] leading-[18px] font-bold">18 th Aug</div>
        <div className="text-[#4F4F4F] text-[14px] leading-[16px]">Suburb</div>
      </div>
      <div className="w-[48px] relative flex items-end justify-end">
        <div className="absolute top-[50%] right-0 translate-y-[-50%]">
          <Stroke />
        </div>
      </div>
    </div>
  )
}

export default Events