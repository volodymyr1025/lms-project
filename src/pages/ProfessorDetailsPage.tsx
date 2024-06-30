import Vector8 from "../assets/vector_8.svg";

const ProfessorDetailsPage = () => {
  return (
    <div className="relative">
      <header className="bg-theme-blue text-center py-[100px] relative">
        <img src={Vector8} alt="Lesson" className="absolute left-[13%] top-[48px]" />
        <div className="rounded-full bg-[#E7E8FE] w-[200px] h-[200px] absolute -right-[60px] top-0" />
        <h1 className="text-2xl font-mali font-medium text-center mb-4">
          Piesakies Nodarbībai
        </h1>
        <p className="text-base text-center mx-auto opacity-60 max-w-[629px]">
          Iegūsti kredītus, piesakies nodarbībai, izvēlies laiku un apgūsti sev
          vēlamo priekšmetu.
        </p>
      </header>
      <main>
        <section>
            <div className="container mx-auto pt-[73px] flex flex-row">
                
            </div>
        </section>
      </main>
    </div>
  );
};

export default ProfessorDetailsPage;
