import AboutUs from "../assets/about_us.svg";
import Star9 from "../assets/star_9.svg";
import vector2 from "../assets/vector_2.svg";
import Vector3 from "../assets/vector_3.svg";
import Classroom1 from "../assets/classroom_1.svg";
import Classroom2 from "../assets/classroom_2.svg";
import X_icon from "../assets/x_icon.svg";
import Instagram_icon from "../assets/instagram_icon.svg";
import Mask1 from "../assets/mask_1.svg";
import Vector11 from "../assets/vector_11.svg";
import Star8 from "../assets/star_8.svg";
import Star10 from "../assets/star_10.svg";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";

const AboutUsPage = () => {
  return (
    <div className="relative">
      <header className="bg-theme-blue text-center pb-[20px]">
        <div className="container mx-auto flex flex-col justify-between relative">
          <div className="max-w-[904px] pt-[96px]">
            <h1 className="text-2xl text-left font-mali">
              Sāciet bez maksas! Izmēģiniet savu pirmo nodarbību jau šodien.
            </h1>
            <p className="max-w-[756px] text-base text-left mb-7">
              Iepazīstat mūsu skolotājus un nododaties interesantām un zināšanu
              pilnām mācību stundām.
            </p>
            <div className="text-left font-mali">
              <button className="bg-theme-orange text-white text-base px-6 py-3 rounded-full mr-5">
                Pieslēgties
              </button>
              <button className="bg-transparent text-black text-base px-6 py-3 rounded-full border-solid border-[1px] border-black">
                Lasīt vairāk
              </button>
            </div>
          </div>
          <img
            src={Star9}
            alt="Class"
            className="w-[200px] h-[200px] mx-auto -mt-6"
          />
          <img
            src={AboutUs}
            alt="Class"
            className="absolute top-[23px] w-[450px] right-0"
          />
          <img
            src={Vector3}
            alt="Class"
            className="absolute -bottom-[100px] left-[50px]"
          />
        </div>
      </header>
      <main>
        <section className="pb-[321px] relative">
          <div className="mt-[196px] h-[43px] w-[40%] bg-[#FFB5B5] rounded-r-full" />
          <div className="container mx-auto">
            <h1 className="font-mali font-medium text-2xl mt-[175px] text-center max-w-[764px] mx-auto">
              Mūsu Vīzijas Un Misijas Izklāsts
            </h1>
            <div className="relative mb-[51px]">
              <p className="text-base max-w-[764px] mx-auto text-center opacity-60">
                Nodrošināt cilvēkiem visā Latvijā iespēju piekļūt kvalitatīvai
                izglītībai neatkarīgi no viņu atrašanās vietas un pilnībā
                atraisīt savu potenciālu, izmantojot e-mācību sniegtās iespējas.
              </p>
              <img
                src={vector2}
                alt="Class"
                className="absolute top-0 left-0"
              />
            </div>
            <div className="flex flex-row justify-between relative">
              <div className="absolute w-[200px] h-[200px] -top-[120px] -right-[82px] bg-theme-blue rounded-full" />
              <div className="absolute w-[200px] h-[200px] top-[595px] -left-[100px] bg-theme-blue rounded-full" />
              <div className="flex flex-col">
                <img src={Classroom1} alt="classroom" className="mb-5" />
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col">
                    <div className="flex flex-row mb-5 justify-between">
                      <div className="rounded-[30px] bg-white py-[26px] px-[42px] border-solid border-black border-[1px]">
                        <FacebookRoundedIcon className="!w-[70px] !h-[70px]" />
                      </div>
                      <div className="rounded-[30px] bg-white py-[26px] px-[42px] border-solid border-black border-[1px]">
                        <img src={X_icon} alt="twitter" />
                      </div>
                    </div>
                    <div className="flex flex-row mb-5 justify-between">
                      <div className="rounded-[30px] bg-white py-[26px] px-[42px] border-solid border-black border-[1px] bg-white z-10">
                        <img src={Instagram_icon} alt="instagram" />
                      </div>
                      <div className="rounded-[30px] bg-white py-[26px] px-[42px] border-solid border-black border-[1px]">
                        <YouTubeIcon className="!w-[70px] !h-[70px]" />
                      </div>
                    </div>
                    <div className="p-5 border-solid border-black border-[1px] rounded-[30px] bg-white z-10">
                      <p className="text-[70px] leading-[95%] font-medium text-theme-orange mb-[30px]">
                        *8
                      </p>
                      <p className="text-[40px] font-mali font-medium">
                        Priekšmeti
                      </p>
                      <p className="text-base opacity-70 max-w-[292px]">
                        Klāsts ar pieprasītākajiem mācību priekšmetiem.
                      </p>
                    </div>
                  </div>
                  <div className="pt-[35px] px-6 pb-5 border-solid border-black border-[1px] rounded-[30px] flex flex-col justify-between max-w-[333px]">
                    <p className="text-[70px] font-medium text-theme-orange">
                      18~
                    </p>
                    <div>
                      <p className="text-[40px] font-medium">Skolotāji</p>
                      <p className="text-base opacity-70">
                        Mūsu skolotāji zina, kā padarīt mācību stundas
                        aizrajošas un interesantas, lai bērniem būtu jautri tās
                        apmeklēt.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col z-10">
                <div className="flex flex-row">
                  <div className="border-solid border-black border-[1px] rounded-[30px] pt-[50px] pl-5 pr-4 pb-5 flex flex-col justify-between max-w-[324px] h-[561px] mr-5">
                    <p className="text-theme-orange text-[70px] font-medium">
                      100%
                    </p>
                    <div>
                      <p className="text-[40px] font-mali font-medium">
                        Nodošanās
                      </p>
                      <p className="text-base opacity-70">
                        Mēs rūpējamies par to, lai augstas kvalitātes mācības
                        būtu pieejamas ikvienam.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="border-solid border-black border-[1px] rounded-[30px] py-5 pl-5 pr-3 max-w-[341px] mb-5 h-[270px] justify-between bg-white">
                      <p className="text-theme-orange text-[70px] font-medium leading-[95%]">
                        1
                      </p>
                      <div>
                        <p className="text-[40px] font-mali font-medium leading-[91%]">
                          Misija
                        </p>
                        <p className="text-base opacity-70 leading-[146%]">
                          Nodrošināt personīgu atbalstu katram skolēnam.
                        </p>
                      </div>
                    </div>
                    <div className="border-solid border-black border-[1px] rounded-[30px] py-5 pl-5 pr-3 max-w-[341px] h-[270px] justify-between">
                      <p className="text-theme-orange text-[70px] font-medium leading-[95%]">
                        100%
                      </p>
                      <div>
                        <p className="text-[40px] font-mali font-medium leading-[91%]">
                          Kreativtāte
                        </p>
                        <p className="text-base opacity-70 leading-[146%]">
                          mēs uzskatām, ka inovācija sākas ar radošumu.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <img src={Classroom2} alt="classroom" className="mt-5" />
              </div>
            </div>
          </div>
          <img src={Star10} alt="Class" className="absolute bottom-0 left-[94px]" />
        </section>
        <section className="relative pb-[264px]">
          <div className="container mx-auto relative">
            <div className="bg-[#FFB5B5] rounded-full w-[200px] h-[200px] absolute right-[30px] -top-[92px]" />
            <div className="bg-theme-blue mx-[120px] rounded-[70px] flex flex-col pt-[70px] pl-[136px] pb-[83px] relative z-10">
              <p className="text-2xl font-mali font-medium leading-[105%]">
                Sāc mācīties jau šodien!
              </p>
              <p className="text-base opacity-60 max-w-[828px] mb-8">
                Piedalieties nodarbībās, iemācaties jaunas zināšanas un
                iegūstiet personīgu atbalstu no katra skolotāja!
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
            <img src={Vector11} alt="Class" className="absolute left-[29px] -bottom-[178px]" />
          </div>
          <img src={Star8} alt="Class" className="absolute -bottom-[85px] right-[40%]" />
          <div className="h-[43px] w-[25%] absolute bottom-[110px] rounded-l-full right-0 bg-[#E7E8FE]" />
        </section>
      </main>
      <div className="w-[200px] h-[200px] bg-theme-blue absolute left-0 -bottom-[468px] rounded-full" />
    </div>
  );
};

export default AboutUsPage;
