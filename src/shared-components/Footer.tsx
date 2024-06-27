import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="container mx-auto bg-theme-orange rounded-t-[100px] relative z-10">
      <div className="flex flex-col text-black pl-16 pt-20 pr-32 mt-10">
        <p className="text-base">LOGO</p>
        <div className="flex flex-row justify-between mb-12">
          <div className="max-w-xl text-base">
            <p>Nekad nepārstājiet augt. Zināšanās ir spēks.</p>
            <p className="mb-7">Uzlabojiet savas spējasar e-mācībām.</p>
            <p className="text-lg mb-4 font-mali">Abonējiet mūsu jaunumus!</p>
            <div className="flex">
              <input
                className="w-72 h-21 pl-3 py-8 text-[18px] border-black border-solid border-[1px] rounded-l-[20px]"
                placeholder="Ievadiet savu e-pastu..."
              ></input>
              <button className="bg-white h-21 w-16 text-[32px] border-black border-solid -ml-px border-[1px] border-left-none rounded-r-[20px]">
                →
              </button>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col mr-14">
              <p className="font-bold mb-6 text-base">Harmonija A</p>
              <p className="mb-6 text-base">Par Mums</p>
              <p className="mb-6 text-base">Kredīti</p>
              <p className="text-base">Sākums</p>
            </div>
            <div className="flex flex-col mr-14">
              <p className="font-bold mb-6 text-base">Noderīgi</p>
              <p className="mb-6 text-base">Blogs</p>
              <p className="mb-6 text-base">Palīdzība</p>
              <p className="text-base">Priekšmeti</p>
            </div>
            <div className="flex flex-col">
              <p className="font-bold mb-6 text-base">Nodarbības</p>
              <p className="mb-6 text-base">Cenas</p>
              <p className="mb-6 text-base">Skolotāji</p>
              <p className="text-base">Kursi</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between mb-9">
          <div>
            <p className="text-sm font-semibold">
              © Company 2024 | Visas tiesības rezervētas
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold">Izstrādāja | SIA “MET Digital”</p>
          </div>
          <div>
            <p className="text-sm font-semibold">Noteikumi & konfidencialitātes politika</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
