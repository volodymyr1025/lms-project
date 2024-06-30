import { useState } from "react";
import Star11 from "../assets/star_11.svg";
import Correct1 from "../assets/correct_1.svg";
import Lessons1 from "../assets/lessons_1.svg";
import Lessons2 from "../assets/lessons_2.svg";
import Lessons3 from "../assets/lessons_3.svg";
import Vector12 from "../assets/vector_12.svg";
import Star8 from "../assets/star_8.svg";

const PricingPage = () => {
  const [selected, setSelected] = useState<string>("30min");

  return (
    <div className="relative">
      <header className="bg-theme-blue text-center py-[100px] relative">
        <h1 className="text-2xl font-mali font-medium text-center">
          Vienkāršas, saprotamas cenas
        </h1>
        <p className="text-base text-center opacity-60">
          Pirmā nodarbība absolūti BEZMAKSAS
        </p>
        <img
          src={Star11}
          alt="Class"
          className="absolute -bottom-[60px] left-[18%]"
        />
      </header>
      <main>
        <section className="pt-[90px] bg-white z-10 relative pb-[248px] relative">
            <img src={Vector12} alt="Lesson" className="absolute top-8 right-[20%]" />
          <div>
            <nav className="flex items-center mx-auto text-center max-w-[350px] justify-center bg-white border-black border-solid border-[1px] p-2 rounded-full mb-10">
              <div
                onClick={() => setSelected("30min")}
                className={`px-4 py-2 rounded-full font-mali text-base ${
                  selected === "30min"
                    ? "bg-theme-orange text-white"
                    : "bg-white text-black"
                }`}
              >
                30 minutes
              </div>
              <div
                onClick={() => setSelected("60min")}
                className={`px-4 py-2 rounded-full font-mali text-base ${
                  selected === "60min"
                    ? "bg-theme-orange text-white"
                    : "bg-white text-black"
                }`}
              >
                60 minutes
              </div>
            </nav>
            <div className="flex flex-row justify-center">
              <div className="max-w-[353px] pt-[66px] px-[15px] pb-[15px] border-solid border-black rounded-[30px] border-[1px] flex flex-col justify-between mr-[43px] bg-white z-10">
                <div className="flex flex-row">
                  <p className="text-[40px] font-medium text-theme-orange">€</p>
                  <p className="text-[70px] text-theme-orange font-medium">
                    40
                  </p>
                </div>
                <div className="w-[100px] h-[100px] bg-theme-blue rounded-full text-center mx-auto" />
                <div className="flex flex-col pl-[15px] mb-4">
                  <p className="text-[40px] font-mali font-semibold">
                    4 Nodarbības
                  </p>
                  <div className="flex flex-row">
                    <img src={Correct1} alt="class" />
                    <p className="text-base">Saņemiet 4 kredītus</p>
                  </div>
                  <div className="flex flex-row">
                    <img src={Correct1} alt="class" />
                    <p className="text-base">4 nodarbības</p>
                  </div>
                </div>
                <button className="font-mali text-white text-base px-12 py-5 leading-[147%] bg-theme-orange rounded-l-full rounded-r-full">
                  Uzsākt Bezmaksas
                </button>
              </div>
              <div className="max-w-[353px] pt-[66px] px-[15px] pb-[15px] border-solid border-black rounded-[30px] border-[1px] flex flex-col justify-between mr-[43px] bg-white z-10">
                <div className="flex flex-row">
                  <p className="text-[40px] font-medium text-theme-orange">€</p>
                  <p className="text-[70px] text-theme-orange font-medium">
                    70
                  </p>
                </div>
                <img src={Lessons1} alt="Lesson" className="mx-auto" />
                <div className="flex flex-col pl-[15px] mb-4">
                  <p className="text-[40px] font-mali font-semibold">
                  8 Nodarbības
                  </p>
                  <div className="flex flex-row">
                    <img src={Correct1} alt="class" />
                    <p className="text-base">Saņemiet 8 kredītus</p>
                  </div>
                  <div className="flex flex-row">
                    <img src={Correct1} alt="class" />
                    <p className="text-base">8 nodarbības</p>
                  </div>
                </div>
                <button className="font-mali text-white text-base px-12 py-5 leading-[147%] bg-theme-orange rounded-l-full rounded-r-full">
                  Uzsākt Bezmaksas
                </button>
              </div>
              <div className="max-w-[353px] pt-[66px] px-[15px] pb-[15px] border-solid border-black rounded-[30px] border-[1px] flex flex-col justify-between mr-[43px] bg-white z-10">
                <div className="flex flex-row">
                  <p className="text-[40px] font-medium text-theme-orange">€</p>
                  <p className="text-[70px] text-theme-orange font-medium">
                    130
                  </p>
                </div>
                <img src={Lessons2} alt="Lesson" className="mx-auto" />
                <div className="flex flex-col pl-[15px] mb-4">
                  <p className="text-[40px] font-mali font-semibold">
                    16 Nodarbības
                  </p>
                  <div className="flex flex-row">
                    <img src={Correct1} alt="class" />
                    <p className="text-base">Saņemiet 16 kredītus</p>
                  </div>
                  <div className="flex flex-row">
                    <img src={Correct1} alt="class" />
                    <p className="text-base">16 nodarbības</p>
                  </div>
                </div>
                <button className="font-mali text-white text-base px-12 py-5 leading-[147%] bg-theme-orange rounded-l-full rounded-r-full">
                  Uzsākt Bezmaksas
                </button>
              </div>
              <div className="max-w-[353px] pt-[66px] px-[15px] pb-[15px] border-solid border-black rounded-[30px] border-[1px] flex flex-col justify-between bg-white z-10">
                <div className="flex flex-row">
                  <p className="text-[40px] font-medium text-theme-orange">€</p>
                  <p className="text-[70px] text-theme-orange font-medium">
                    180
                  </p>
                </div>
                <img src={Lessons3} alt="Lesson" className="mx-auto" />
                <div className="flex flex-col pl-[15px] mb-4">
                  <p className="text-[40px] font-mali font-semibold">
                    24 Nodarbības
                  </p>
                  <div className="flex flex-row">
                    <img src={Correct1} alt="class" />
                    <p className="text-base">Saņemiet 24 kredītus</p>
                  </div>
                  <div className="flex flex-row">
                    <img src={Correct1} alt="class" />
                    <p className="text-base">24 nodarbības</p>
                  </div>
                </div>
                <button className="font-mali text-white text-base px-12 py-5 leading-[147%] bg-theme-orange rounded-l-full rounded-r-full">
                  Uzsākt Bezmaksas
                </button>
              </div>
            </div>
          </div>
          <img src={Star8} alt="Lesson" className="absolute bottom-[145px] left-[43%]" />
          <div className="absolute -bottom-[23px] -right-[66px] bg-[#FFB5B5] rounded-full w-[200px] h-[200px]" />
          <div className="h-[43px] bg-[#E7E8FE] rounded-r-full w-[15%] absolute bottom-[56px]" />
        </section>
      </main>
      <div className="bg-theme-blue w-[200px] h-[200px] absolute -left-[32px] -bottom-[490px] rounded-full" />
    </div>
  );
};

export default PricingPage;
