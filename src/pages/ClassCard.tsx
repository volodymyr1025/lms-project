import Vector6 from "../assets/vector_6.svg";
import Teacher1 from "../assets/teacher_1.svg";
import User1 from "../assets/user_1.svg";
import Star20 from "../assets/star_20.svg";

const ClassCard = () => {
  return (
    <div>
      <button className="bg-theme-orange leading-[100%] text-base font-semibold font-mali text-white py-[23px] px-5 rounded-full">
        Matemātika
      </button>
      <img src={Vector6} alt="Vector 6" className="-mt-[70px]" />
      <div className="bg-white pt-2 pl-6 pr-7 pb-4 mb-[51px] w-[462px] rounded-b-[30px]">
        <p className="text-base text-[33px] font-mali mb-3">
          ➗ Aprēķini jebko!
        </p>
        <div className="flex flex-row justify-between mb-[77.5px]">
          <div className="flex flex-row">
            <img src={Teacher1} alt="Teacher 1" />
            <p className="text-base opacity-60">3 skolotāji</p>
          </div>
          <div className="flex flex-row">
            <img src={User1} alt="User 1" />
            <p className="text-base opacity-60">12 skolēni</p>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row">
            <img src={Star20} alt="Star20" className="w-[23px] h-[25px] mt-1" />
            <p className="font-semibold text-base font-roboto ml-1 mr-1">4.9</p>
            <p className="text-base opacity-60">(493)</p>
          </div>
          <div className="flex flex-row">
            <p className="text-[#705DE4] text-[33px] font-medium font-mali">
              Lasīt vairāk
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
