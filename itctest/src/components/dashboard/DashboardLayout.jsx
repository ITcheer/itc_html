import React from "react";
import SidebarItem from "./components/SidebarItem";
import ActionButton from "./components/ActionButton";
import FormInput from "./components/FormInput";

const sidebarItems = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/3b4684020b8647da90ffb5d5280fc6f6/6bd73a4871b7ace2aff8eda19b424cfb3e0996849b56958bbc4020c0546407ef?apiKey=3b4684020b8647da90ffb5d5280fc6f6&",
    label: "Dashboard",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/3b4684020b8647da90ffb5d5280fc6f6/eeeb32b9df21c154a962d54e6b17bf4e3b7822de96edbbee49de8ace695972a2?apiKey=3b4684020b8647da90ffb5d5280fc6f6&",
    label: "Draft",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/3b4684020b8647da90ffb5d5280fc6f6/c4793915bccc4507dae317c5a4efcf50934fed087f23ceee019347a7c7d2b6ca?apiKey=3b4684020b8647da90ffb5d5280fc6f6&",
    label: "Approved",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/3b4684020b8647da90ffb5d5280fc6f6/22a87b117cbe7d65d422f739edfb6b3580ef767c46445ef4432ef55cfebbb208?apiKey=3b4684020b8647da90ffb5d5280fc6f6&",
    label: "Rejected",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/3b4684020b8647da90ffb5d5280fc6f6/7f89d215a0cd6bbfca21420384910898cda757e2f54c2d518d700d5481e245c1?apiKey=3b4684020b8647da90ffb5d5280fc6f6&",
    label: "Analytics",
  },
];

export default function DashboardLayout() {
  return (
    <div className="overflow-hidden pr-20 bg-gray-50 rounded-2xl max-md:pr-5">
      <div className="flex gap-5 max-md:flex-col">
        <aside className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow items-start w-full text-lg text-white rounded-2xl bg-zinc-900 pb-[498px] max-md:pb-24 max-md:mt-10">
            <div className="flex flex-col self-stretch px-5 pb-7">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/3b4684020b8647da90ffb5d5280fc6f6/5e9e91320aa94d85cc60ffb7b4d994b8509187030b47bc721319166d4e631e3f?apiKey=3b4684020b8647da90ffb5d5280fc6f6&"
                alt="Dashboard Logo"
                className="object-contain max-w-full aspect-[1.13] w-[159px]"
              />
              <nav className="flex flex-col self-end mt-6 max-w-full whitespace-nowrap h-[303px] w-[184px]">
                {sidebarItems.map((item, index) => (
                  <SidebarItem key={index} {...item} />
                ))}
              </nav>
              <button className="z-10 self-center mt-0 ml-2.5 text-white">
                Add Invoice
              </button>
            </div>
          </div>
        </aside>

        <main className="flex flex-col ml-5 w-4/5 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-7 w-full max-md:mt-10 max-md:max-w-full">
            <header className="flex gap-5 items-center self-end text-sm font-medium text-black">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/3b4684020b8647da90ffb5d5280fc6f6/f4a125722bb55fb536eb93813aff3c511de2859e01983623b5accc00d9170647?apiKey=3b4684020b8647da90ffb5d5280fc6f6&"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              />
              <span className="self-stretch my-auto basis-auto">
                Ramesh Velaga
              </span>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/3b4684020b8647da90ffb5d5280fc6f6/ac0e8524f655c284acd02f38557de1936c6ba34c38860d2f611fd51a1d36f61a?apiKey=3b4684020b8647da90ffb5d5280fc6f6&"
                alt="Profile"
                className="object-contain shrink-0 self-stretch aspect-square w-[46px]"
              />
            </header>

            <form className="mt-11">
              <div className="flex flex-col space-y-8">
                <FormInput
                  label="Report Name"
                  placeholder="Example Business Trip"
                  icon="https://cdn.builder.io/api/v1/image/assets/3b4684020b8647da90ffb5d5280fc6f6/7f2656678cdb9270f428611aebfcf0370fd3dc13444e4fb07090a2ae09dfb886?apiKey=3b4684020b8647da90ffb5d5280fc6f6&"
                />

                <FormInput label="Description" placeholder="About Trip" />

                <div className="flex gap-4 justify-end">
                  <ActionButton label="Cancel" variant="cancel" />
                  <ActionButton label="Save" />
                  <ActionButton label="Save & Submit" variant="success" />
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
