import React from 'react';
import Ellipse29 from "../assets/ellipse_29.svg";

interface StudentCardProps {
  imageSrc?: string;
  quote: string;
  name: string;
}

const StudentCard: React.FC<StudentCardProps> = ({
  imageSrc = Ellipse29, // Default image
  quote,
  name
}) => {
  return (
    <div className="rounded-[30px] pt-5 pl-5 pr-1 pb-4 border-2 w-[208px] mb-3 border-solid border-black bg-white">
      <img src={imageSrc} alt="Student" />
      <p className="text-base opacity-60 mb-7">
        "{quote}"
      </p>
      <p className="text-[20px] font-mali font-semibold">{name}</p>
    </div>
  );
};

export default StudentCard;
