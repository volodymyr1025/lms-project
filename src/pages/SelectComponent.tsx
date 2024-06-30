import React from "react";

interface SelectComponentProps {
  options: string[];
  onChange: (value: string) => void;
  className?: string;
}

const SelectComponent: React.FC<SelectComponentProps> = ({
  options,
  onChange,
  className,
}) => {
  return (
    <div className={`relative inline-block text-gray-700 ${className}`}>
      <select
        className="block appearance-none bg-theme-orange border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-full shadow leading-tight focus:outline-none focus:shadow-outline"
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            <p className="text-lg">{option}</p>
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M7 10l5 5 5-5H7z" />
        </svg>
      </div>
    </div>
  );
};

export default SelectComponent;
