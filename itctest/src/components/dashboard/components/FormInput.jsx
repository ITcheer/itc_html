import React from "react";

export default function FormInput({ label, type = "text", placeholder, icon }) {
  return (
    <div className="flex flex-col">
      <label className="text-base text-black mb-2">{label}</label>
      <div className="flex gap-5 justify-between py-2.5 pr-2.5 pl-6 text-sm bg-gray-50 rounded border border-solid border-stone-300 text-stone-300">
        <input
          type={type}
          placeholder={placeholder}
          className="bg-transparent border-none outline-none w-full"
          aria-label={label}
        />
        {icon && (
          <img
            loading="lazy"
            src={icon}
            alt=""
            className="object-contain shrink-0 w-6 aspect-square"
          />
        )}
      </div>
    </div>
  );
}
