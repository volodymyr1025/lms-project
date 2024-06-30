import { useState } from "react";
import SelectComponent from "./SelectComponent";
import Vector13 from "../assets/vector_13.svg";
import TeacherMan from "../assets/teacher_man.svg";
import TeacherWoman from "../assets/teacher_woman.svg";
import VerifiedIcon from "../assets/verified_2.svg";
import BookIcon from "../assets/books_1.svg";
import LanguageIcon from "../assets/language_1.svg";
import PresentationIcon from "../assets/presentation_1.svg";
import Star7 from "../assets/star_7.svg";
import Star10 from "../assets/star_10.svg";
import Star20 from "../assets/star_20.svg";
import Vector7 from "../assets/vector_7.svg";

const SubjectsPage = () => {
  const [_selectedOption, setSelectedOption] = useState<string>("");

  const handleSelectChange = (value: string) => {
    setSelectedOption(value);
  };

  return (
    <div className="relative">
      <header className="bg-theme-blue text-center pt-[100px] pb-8 relative">
        <img
          src={Vector13}
          alt="subject"
          className="absolute left-[15%] top-[70px]"
        />
        <div className="bg-[#E7E8FE] w-[200px] h-[200px] absolute top-0 -right-[60px] rounded-full" />
        <h1 className="text-2xl font-mali font-medium text-center leading-[95%]">
          Mūsu Skolotāji
        </h1>
        <p className="text-base text-center mx-auto opacity-60 max-w-[629px]">
          Atrodiet savu skolotāju, pirmā nodarbība absolūti BEZMAKSAS
        </p>
        <div className="flex justify-end mr-32">
          <SelectComponent
            options={["Matemātika"]}
            onChange={handleSelectChange}
            className="text-lg py-4 pl-10"
          />
        </div>
      </header>
      <main>
        <section className="pb-[228px] relative">
          <div className="container mx-auto pt-[42px] relative">
            <div className="flex flex-row justify-between">
              <div className="rounded-[30px] border-[1px] border-solid border-black pt-[30px] pb-12 pl-[45px] pr-6 flex flex-row min-w-[683px] justify-between relative bg-white z-10">
                <img
                  src={Star7}
                  alt="Lesson"
                  className="absolute -left-[131px] top-[100px]"
                />
                <img src={TeacherMan} alt="Teacher" />
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="flex flex-row mt-8 mb-7">
                      <p className="text-[28.8px] font-mali">Sam Will</p>
                      <img src={VerifiedIcon} alt="Teacher" />
                    </div>
                    <p className="text-[18px]">Māca:</p>
                    <div className="flex flex-row mb-7">
                      <img src={BookIcon} alt="Book" />
                      <p className="text-[18px] opacity-60">Matemātiku</p>
                    </div>
                    <p className="text-[18px]">Runā:</p>
                    <div className="flex flex-row mb-7">
                      <img src={LanguageIcon} alt="Language" />
                      <p className="text-[18px] opacity-60">
                        Latviski, Krieviski
                      </p>
                    </div>
                    <p className="text-[18px]">Pieņem:</p>
                    <div className="flex flex-row">
                      <img src={PresentationIcon} alt="Presentation" />
                      <p className="text-[18px] opacity-60 mr-9">
                        Bērnus no 5-10 gadiem
                      </p>
                      <p className="text-[16px] font-roboto font-semibold">
                        4.9
                      </p>
                      <img
                        src={Star20}
                        alt="Star"
                        className="w-[18px] h-[18px]"
                      />
                    </div>
                  </div>
                  <div>
                    <button className="bg-theme-orange py-3 px-[14px] rounded-l-full rounded-r-full font-mali text-white">
                      <p>Pieteikties mācībām</p>
                    </button>
                  </div>
                </div>
              </div>
              <div className="rounded-[30px] border-[1px] border-solid border-black pt-[30px] pb-12 pl-[45px] pr-6 flex flex-row min-w-[683px] justify-between relative bg-white z-10">
                <img src={TeacherWoman} alt="Teacher" />
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="flex flex-row mt-8 mb-7">
                      <p className="text-[28.8px] font-mali">Angela White</p>
                      <img src={VerifiedIcon} alt="Teacher" />
                    </div>
                    <p className="text-[18px]">Māca:</p>
                    <div className="flex flex-row mb-7">
                      <img src={BookIcon} alt="Book" />
                      <p className="text-[18px] opacity-60">Matemātiku</p>
                    </div>
                    <p className="text-[18px]">Runā:</p>
                    <div className="flex flex-row mb-7">
                      <img src={LanguageIcon} alt="Language" />
                      <p className="text-[18px] opacity-60">
                        Latviski, Krieviski
                      </p>
                    </div>
                    <p className="text-[18px]">Pieņem:</p>
                    <div className="flex flex-row">
                      <img src={PresentationIcon} alt="Presentation" />
                      <p className="text-[18px] opacity-60 mr-9">
                        Bērnus no 5-10 gadiem
                      </p>
                      <p className="text-[16px] font-roboto font-semibold">
                        4.9
                      </p>
                      <img
                        src={Star20}
                        alt="Star"
                        className="w-[18px] h-[18px]"
                      />
                    </div>
                  </div>
                  <div>
                    <button className="bg-theme-orange py-3 px-[14px] rounded-l-full rounded-r-full font-mali text-white">
                      <p>Pieteikties mācībām</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <img src={Vector7} alt="Lesson" className="absolute left-[5%] -bottom-[116px]" />
            <div className="bg-theme-blue absolute -right-[84px] -bottom-[115px] w-[200px] h-[200px] rounded-full" />
          </div>
          <div className="absolute bottom-[92px] h-[43px] bg-[#E7E8FE] rounded-r-full w-[12%]" />
          <img src={Star10} alt="Lesson" className="absolute -bottom-[25px] right-[28%]" />
        </section>
      </main>
      <div className="absolute w-[200px] h-[200px] -bottom-[299px] -left-[89px] bg-[#FFB5B5] rounded-full" />
    </div>
  );
};

export default SubjectsPage;
