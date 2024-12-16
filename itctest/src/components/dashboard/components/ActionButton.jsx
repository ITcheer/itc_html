import React from "react";

export default function ActionButton({ icon, label, variant = "default" }) {
  const baseStyles = "flex gap-2.5 px-3 py-3 text-sm rounded-md";
  const variants = {
    default: "text-white bg-zinc-900",
    cancel: "text-black bg-neutral-500 bg-opacity-10",
    success: "text-white bg-green-600",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`}>
      {icon && (
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="object-contain shrink-0 w-6 aspect-square"
        />
      )}
      <span>{label}</span>
    </button>
  );
}
