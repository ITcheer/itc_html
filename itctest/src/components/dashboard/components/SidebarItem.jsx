import React from "react";

export default function SidebarItem({ icon, label, isActive }) {
  return (
    <div
      className={`flex gap-2.5 items-center w-full min-h-[34px] ${
        isActive ? "text-white" : "text-neutral-400"
      }`}
    >
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
      />
      <div className="self-stretch my-auto">{label}</div>
    </div>
  );
}
