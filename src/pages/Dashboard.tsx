import React from "react";
import Navbar from "../shared-components/Navbar";
import Footer from "../shared-components/Footer";
import Mask_Group from "../assets/mask_group.svg";
import ClassCarousel from "./ClassCarousel";
import Star2 from "../assets/star_2.svg";
import Woman1 from "../assets/woman_1.svg";
import Star20 from "../assets/star_20.svg";
import Vector1 from "../assets/vector_1.svg";
import Vector2 from "../assets/vector_2.svg";
import Vector3 from "../assets/vector_3.svg";
import Vector4 from "../assets/vector_4.svg";
import Vector5 from "../assets/vector_5.svg";
import Vector10 from "../assets/vector_10.svg";
import Star3 from "../assets/star_3.svg";
import Star4 from "../assets/star_4.svg";
import Star5 from "../assets/star_5.svg";
import Star6 from "../assets/star_6.svg";
import Star7 from "../assets/star_7.svg";
import Star8 from "../assets/star_8.svg";
import Graduation_Hat_1 from "../assets/graduation_hat_1.svg";
import Book1 from "../assets/book_1.svg";
import User2 from "../assets/user_2.svg";
import PlayButton1 from "../assets/play_button_1.svg";
import Teachers_background_2 from "../assets/teachers_background_2.svg";
import Mask1 from "../assets/mask_1.svg";
import Ellipse1 from "../assets/ellipse_1.svg";
import Ellipse2 from "../assets/ellipse_2.svg";
import Ellipse3 from "../assets/ellipse_3.svg";
import Ellipse4 from "../assets/ellipse_4.svg";
import Ellipse29 from "../assets/ellipse_29.svg";
import Ellipse30 from "../assets/ellipse_30.svg";
import Ellipse32 from "../assets/ellipse_32.svg";
import Ellipse33 from "../assets/ellipse_33.svg";
import Ellipse34 from "../assets/ellipse_34.svg";
import Ellipse35 from "../assets/ellipse_35.svg";
import Ellipse36 from "../assets/ellipse_36.svg";
import Ellipse37 from "../assets/ellipse_37.svg";
import Ellipse38 from "../assets/ellipse_38.svg";
import Ellipse39 from "../assets/ellipse_39.svg";
import Ellipse40 from "../assets/ellipse_40.svg";
import Ellipse41 from "../assets/ellipse_41.svg";
import Ellipse42 from "../assets/ellipse_42.svg";
import Ellipse43 from "../assets/ellipse_43.svg";
import RightArrow from "../assets/right_arrow_1.svg";
import Training from "../assets/training.svg";
// import Teachers_background_2_covered from "../assets/teachers_backgroud_2_covered.svg";
import StudentCard from "./StudentCard";

const Dashboard: React.FC = () => {
  return (
    <div className="relative">
      <Navbar />
      <header className="bg-theme-blue text-center pb-[113px]">
        <div className="container mx-auto flex flex-row justify-between relative">
          <div className="w-[695px] pt-[96px]">
            <h1 className="text-2xl text-left font-mali">
              Privātstundas, Kas Padara Mācības Vieglas Un Aizraujošas
            </h1>
            <p className="text-base text-left mb-7">
              Atrodiet savu ideālo skolotāju. Apgūstiet jebkuru priekšmetu.
              Kopīgi iegūstiet zināšanas.
            </p>
            <div className="text-left mb-[75px] font-mali">
              <button className="bg-theme-orange text-white text-base px-6 py-3 rounded-full mr-5">
                Pieslēgties
              </button>
              <button className="bg-transparent text-black text-base px-6 py-3 rounded-full border-solid border-[1px] border-black">
                Lasīt vairāk
              </button>
            </div>
            <div className="flex flex-row mb-[93px]">
              <div className="mr-[37px]">
                <p className="text-xl font-jost font-medium text-left">18~</p>
                <p className="text-base opacity-60">Skolotāji</p>
              </div>
              <div className="mr-[37px]">
                <p className="text-xl font-jost text-left">200+</p>
                <p className="text-base opacity-60">Skolēni</p>
              </div>
              <div>
                <p className="text-xl font-jost text-left">8*</p>
                <p className="text-base opacity-60">Priekšmeti</p>
              </div>
            </div>
            <div className="bg-white w-[650px] rounded-[30px] flex flex-row pt-9 pb-[27px] pr-[14px]">
              <div className="flex flex-col grow w-full justify-center items-center">
                <img
                  src={Mask_Group}
                  alt="mask_group"
                  width={"70px"}
                  height={"70px"}
                />
                <p className="font-mali text-base">Anna Smith</p>
                <p className="font-jost text-[18px] opacity-60">
                  Top Course Enroller
                </p>
              </div>
              <div className="flex flex-col grow">
                <p className="text-base text-left">
                  “Professor White's engaging Calculus course made complex
                  concepts clear. Highly recommend!”
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="mt-[60px] z-10 relative">
              <img src={Woman1} alt="woman1" className="relative z-10" />
              <div className="relative bg-white rounded-b-[30px] py-5 pl-[13px] pr-[26px] mx-1 -mt-2 z-20">
                <p className="text-lg font-mali text-left">Jana Godmane</p>
                <p className="text-base text-left opacity-60 mb-10">
                  Matemātikas privātskolotāja
                </p>
                <div className="text-left flex flex-row justify-between">
                  <button className="bg-theme-orange text-white text-base px-6 py-3 rounded-full mr-5">
                    Ieplānot stundu
                  </button>
                  <div className="mt-5 flex flex-row">
                    <p className="font-semibold text-[22px] font-roboto mr-1">
                      4.9
                    </p>
                    <img
                      src={Star20}
                      alt="Star20"
                      className="w-[23px] h-[25px] mt-1"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -right-[116px] top-[525px] rounded-full bg-white w-[233px] h-[233px]" />
            </div>
            <img
              src={Star2}
              alt="star2"
              className="absolute top-0 -ml-[122px] z-0"
            />
          </div>
          <img
            src={Vector1}
            alt="Vector1"
            className="absolute top-[760px] left-[648px]"
          />
        </div>
      </header>
      <main className="relative">
        <section className="bg-theme-blue relative pb-[34px]">
          <div className="absolute -left-[64px] top-[53px] rounded-full bg-white w-[233px] h-[233px]" />
          <div className="container mx-auto">
            <h2 className="text-2xl font-mali text-center font-medium mb-4">
              Mācību priekšmeti
            </h2>
            <p className="text-base leading-[163%] w-[766px] text-center mx-auto opacity-70 relative z-10">
              Atklājiet mūsu vispieprasītākos mācību priekšmetus. Gūstiet
              panākumus ikvienā jūsu izglītības ceļojuma posmā.
            </p>
            <div className="mt-20">
              <ClassCarousel />
            </div>
            <div className="absolute w-[33%] h-[43px] bg-[#E7E8FE] rounded-l-full top-[120px] right-0" />
            <img src={Vector10} alt="Vector 10" className="mx-auto" />
            <div className="absolute -bottom-[116px] rounded-full bg-theme-orange w-[233px] h-[233px]" />
          </div>
        </section>
        <img
          src={Star7}
          alt="Star 7"
          className="absolute top-[700px] right-0"
        />
        <section className="bg-white relative z-10 pt-24 pb-[156px]">
          <div className="container relative mx-auto">
            <p className="font-mali font-medium text-2xl">Kāpēc Harmonija A?</p>
            <div className="flex flex-row justify-between relative z-10">
              <div className="pt-[149px]">
                <div className="flex flex-row w-[767px] mb-10">
                  <div className="bg-[#F1FF9D] flex-shrink-0 rounded-full w-[100px] h-[100px] flex justify-center items-center">
                    <img
                      src={Graduation_Hat_1}
                      alt="Graduation Hat 1"
                      className="w-[88px] h-[88px]"
                    />
                  </div>
                  <div className="grow ml-[58px]">
                    <p className="text-xl font-mali font-medium">
                      Ietaupi laiku
                    </p>
                    <p className="text-base opacity-60">
                      Tiešsaistes privātsundas Jūs varat ieplānot Jums ērtā
                      laikā, tādejādi, Jums būs vieglāk iekļaut mācības savā
                      ikdienas grafikā.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row w-[767px] mb-16">
                  <div className="bg-[#E7E8FE] flex-shrink-0 rounded-full w-[100px] h-[100px] flex justify-center items-center mr-[58px]">
                    <img
                      src={Book1}
                      alt="Book 1"
                      className="w-[71px] h-[71px]"
                    />
                  </div>
                  <div className="grow-0">
                    <p className="text-xl font-mali font-medium">
                      Ērtākas mācības
                    </p>
                    <p className="text-base opacity-60">
                      Tiešsaistes apmācības nodrošina elastīgu un ērtu mācību
                      vidi Jūsu mājās vai jebkurā Jums vēlamā vietā.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row w-[767px] mb-12">
                  <div className="bg-[#F1FF9D] flex-shrink-0 rounded-full w-[100px] h-[100px] flex justify-center items-center mr-[58px]">
                    <img
                      src={User2}
                      alt="User 2"
                      className="w-[63px] h-[63px]"
                    />
                  </div>
                  <div className="grow-0">
                    <p className="text-xl font-mali font-medium">
                      Radoša pieeja
                    </p>
                    <p className="text-base opacity-60">
                      Mūsu skolotāji zina, kā padarīt mācību stundas aizraujošas
                      un interesantas, lai bērniem būtu interese tās apmeklēt.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row w-[767px]">
                  <div className="bg-[#F1FF9D] flex-shrink-0 rounded-full w-[100px] h-[100px] flex justify-center items-center mr-[58px]">
                    <img
                      src={PlayButton1}
                      alt="Play Button 1"
                      className="w-[53px] h-[53px] ml-[10px]"
                    />
                  </div>
                  <div className="grow-0">
                    <p className="text-xl font-mali font-medium">
                      Lieliski skolotāji
                    </p>
                    <p className="text-base opacity-60">
                      Mūsu skolotāji nevis vienkārši prot vadīt stundas radoši,
                      viņi arī ļoti labi prot iemācīt visas savas zināšanas.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-[674px]">
                <div className="flex flex-row justify-between mb-7 z-10">
                  <div
                    className="w-[440px] pt-9 pl-4 pr-6 pb-8 rounded-r-[30px]"
                    style={{
                      backgroundImage: 'url("teachers_background_1.svg")',
                      backgroundSize: "cover",
                    }}
                  >
                    <p className="text-lg font-mali font-medium max-w-[325px]">
                      Apskaties mūsu sklotājus
                    </p>
                    <div className=" -mt-10 flex flex-row justify-end items-end">
                      <img src={Ellipse1} alt="Ellipse 1" />
                      <img src={Ellipse2} alt="Ellipse 2" className="-ml-4" />
                      <img src={Ellipse3} alt="Ellipse 3" className="-ml-4" />
                      <img src={Ellipse4} alt="Ellipse 4" className="-ml-4" />
                      <p className="text-lg font-mali font-medium">+9</p>
                    </div>
                    <p className="text-base opacity-60 mb-10">
                      10+ gadu pieredze
                    </p>
                    <button className="rounded-l-full py-[10px] px-5 rounded-r-full text-[20px] font-mali font-medium border-[1px] border-solid border-black">
                      Uzzināt vairāk
                    </button>
                  </div>
                  <div className="rounded-t-[30px] rounded-b-[30px] w-[206px] bg-[#F1FF9D] pt-5 pl-3 pr-1 pb-9">
                    <p className="font-mali font-medium text-lg mb-5">
                      Nopirkt kredītus, lai sāktu mācības
                    </p>
                    <button className="rounded-l-full py-[10px] px-5 rounded-r-full text-[20px] font-mali font-medium border-[1px] border-solid border-black">
                      Uzzināt vairāk
                    </button>
                  </div>
                </div>
                <div className="flex flex-row justify-between mb-7 z-10">
                  <div className="bg-theme-blue w-[323px] rounded-[30px] py-3 px-[54px]">
                    <p className="text-[60px] font-medium text-center">18~</p>
                    <p className="text-base opacity-60 text-center">
                      Skolotāji gatavi Jūs apmācīt
                    </p>
                  </div>
                  <div className="bg-theme-orange w-[323px] rounded-[30px] py-3 px-[54px]">
                    <p className="text-[60px] font-medium text-center">200+</p>
                    <p className="text-base opacity-60 text-center">
                      Skolēni, kurus apmācījām
                    </p>
                  </div>
                </div>
                <div className="flex flex-row  min-w-[674px] justify-center items-center relative h-[328px] z-10">
                  <img
                    src={Teachers_background_2}
                    alt="Teachers_background_2"
                    className="text-center absolute"
                  />
                  <div className="absolute top-0 w-[674px] h-[164px] rounded-[30px] bg-black opacity-40" />
                  <div className="absolute top-[164px] w-[674px] h-[164px] rounded-[30px] bg-black opacity-40" />
                  <button className="rounded-full py-3 px-8 z-10 border-white border-2 text-white text-base">
                    Reģistrēties
                  </button>
                </div>
                <div className="absolute rounded-full w-[200px] h-[200px] bg-theme-blue -top-[100px] right-[35px]" />
              </div>
            </div>
            <img
              src={Star3}
              alt="Harmony"
              className="absolute top-[190px] left-[700px]"
            />
            <img
              src={Vector2}
              alt="Vector 2"
              className="w-[249px] h-[143px] ml-[700px] -mt-16"
            />
            <div className="absolute rounded-full w-[200px] h-[200px] bg-theme-blue -bottom-[140px] -right-[100px]" />
          </div>
          <div className="w-[12%] bg-theme-blue h-[43px] rounded-r-full" />
          <div className="absolute rounded-full w-[200px] h-[200px] bg-[#FFB5B5] top-[257px] -left-[83px]" />
        </section>
        <section className="relative pb-[50px]">
          <div className="bg-theme-blue container mx-auto rounded-[70px] flex flex-col pt-[70px] pl-[136px] pb-[83px] relative z-10">
            <p className="text-2xl font-mali font-medium leading-[105%]">
              Sāc mācīties jau šodien!
            </p>
            <p className="text-base opacity-60 max-w-[828px] mb-8">
              Piedalieties nodarbībās, iemācaties jaunas zināšanas un iegūstiet
              personīgu atbalstu no katra skolotāja!
            </p>
            <button className="bg-theme-orange font-mali text-black w-[280px] py-[18px] text-base rounded-full">
              Pieslēgties
            </button>
            <img
              src={Mask1}
              alt="Mask 1"
              className="absolute right-0 bottom-0"
            />
          </div>
          <div className="container mx-auto relative">
            <img src={Vector5} alt="Vector 5" className="ml-40 pt-12"/>
            <div className="absolute left-[40%] -top-[63px] bg-[#FFB5B5] w-[200px] h-[200px] rounded-full" />
          </div>
          <img src={Star6} alt="Class" className="absolute top-[294px]" />
        </section>
        <section className="pb-[200px] relative">
          <div className="container mx-auto mb-6">
            <p className="text-2xl font-mali font-medium mx-auto max-w-[554px]">
              Īsti skolēni, Īsti rezultāti
            </p>
          </div>
          <div className="w-full flex relative">
            <div className="absolute w-[38%] bg-[#E7E8FE] rounded-r-full h-[43px]" />
            <div className="mx-auto flex flex-row relative">
              <div className="mt-[93px] mr-3 z-10">
                <StudentCard
                  imageSrc={Ellipse29}
                  quote="Improved grammar & vocabulary! Aced my college essays, thanks!"
                  name="Angela White"
                />
                <StudentCard
                  imageSrc={Ellipse30}
                  quote="Finally understood complex concepts. This course is a lifesaver!"
                  name="Sam Smith"
                />
              </div>
              <div className="mt-[51px] mr-3 z-10">
                <StudentCard
                  imageSrc={Ellipse43}
                  quote="Interactive lessons made physics fun! Now I can explain it to anyone."
                  name="Alia Ruth"
                />
                <StudentCard
                  imageSrc={Ellipse32}
                  quote="Top professors, clear explanations. My grades have skyrocketed!"
                  name="Noor Khan"
                />
              </div>
              <div className="mt-[133px] mr-3 z-10">
                <StudentCard
                  imageSrc={Ellipse33}
                  quote="Struggled before, now I'm confident tackling any problem."
                  name="Roberto blue"
                />
                <StudentCard
                  imageSrc={Ellipse34}
                  quote="Writing skills have blossomed. Feeling ready for university applications."
                  name="Alisha Willi"
                />
              </div>
              <div className="mt-[52px] mr-3 z-10">
                <StudentCard
                  imageSrc={Ellipse35}
                  quote="Interactive labs made learning engaging. Now I love the subject!"
                  name="Ellie owenson"
                />
                <StudentCard
                  imageSrc={Ellipse36}
                  quote="Prestigious professors, real-world applications. This course is top-notch!"
                  name="Anika Chopra"
                />
              </div>
              <div className="mt-[150px] mr-3 z-10">
                <StudentCard
                  imageSrc={Ellipse37}
                  quote="Expert instructors made complex concepts surprisingly clear."
                  name="Samantha Brown"
                />
                <StudentCard
                  imageSrc={Ellipse38}
                  quote="Grateful for the comprehensive lessons. My writing has become much clearer."
                  name="Ralph Sydney"
                />
              </div>
              <div className="mr-3 z-10">
                <StudentCard
                  imageSrc={Ellipse39}
                  quote="Interactive platform made learning physics interactive and fun."
                  name="Sydney Will"
                />
                <StudentCard
                  imageSrc={Ellipse40}
                  quote="Feeling prepared for college thanks to the excellent instruction."
                  name="Martha Lee"
                />
              </div>
              <div className="mt-[104px] mr-9 z-10">
                <StudentCard
                  imageSrc={Ellipse41}
                  quote="Highly recommend! My problem-solving skills have improved immensely."
                  name="Maddy Smith"
                />
                <StudentCard
                  imageSrc={Ellipse42}
                  quote="This course helped me master English for business communication."
                  name="Sofia Mads"
                />
              </div>
              <div className="bg-[#FFB5B5] w-[200px] h-[200px] rounded-full absolute -top-[24px] right-[265px]" />
              <div className="bg-[#FFB5B5] w-[200px] h-[200px] rounded-full absolute -bottom-[163px] right-[600px]" />
              <img src={Star4} alt="Class" className="absolute bottom-[20px] left-[300px]" />
              <div className="my-auto">
                <button className="w-[100px] h-[100px] rounded-full bg-[#F1FF9D] border-2 border-solid border-black flex justify-center items-center">
                  <img src={RightArrow} alt="Arrow" />
                </button>
              </div>
            </div>
          </div>
          <img src={Vector3} alt="Class" className="absolute bottom-[234px] right-[15px]" />
        </section>
        <section className="relative pb-[150px]">
          <div className="container mx-auto">
            <div className="flex flex-row justify-between z-10 relative">
              <img src={Training} alt="Training" />
              <div className="max-w-[728px]">
                <p className="text-2xl font-mali font-medium mb-7">
                  Kāpēc uzsākt online apmācības?
                </p>
                <p className="text-lg opacity-60 font-medium max-w-[618px]">
                  Vairāk brīvā laika Jūsu mīļākajiem hobijiem. Mācies neizejot
                  no mājām. Inviduālas mācības garantē vēl labākus rezultātus.
                  Pieslēdzies ātri un viegli. E-mācības ir atslēga uz vieglām,
                  ērtām un interesantām nodarbībām.
                </p>
              </div>
            </div>
            <img src={Vector4} alt="class" className="-mt-2 ml-20" />
          </div>
          <img src={Star5} alt="Class" className="absolute left-0 top-[82px]" />
          <div className="absolute w-[26%] bg-[#E7E8FE] right-0 bottom-[190px] rounded-l-full h-[43px]" />
          <img src={Star8} alt="Class" className="absolute -bottom-[85px] right-[40%]" />
        </section>
      </main>
      <Footer />
      <div className="absolute bg-[#FFB5B5] w-[200px] h-[200px] -left-[38px] bottom-[234px] rounded-full" />
      <div className="absolute bg-[#58CFFB] h-[43px] w-[400px] bottom-[353px] right-0" />
    </div>
  );
};

export default Dashboard;
