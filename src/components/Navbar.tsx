import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getSearch } from "../../store/searchSlice";

function NavLink({ to, children }: any) {
  return (
    <Link href={to} className={`mx-4`}>
      {children}
    </Link>
  );
}

function MobileNav({ open, setOpen }: any) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-gradient-to-t md-4 bg-nile-blue-400 transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex items-center justify-center filter drop-shadow-md bg-gradient-to-t bg-nile-blue-400 h-20">
        {" "}
        {/*logo container*/}
        <Link className="text-xl font-semibold text-gray-900" href="/">
          MovieTime
        </Link>
      </div>
      <div className="flex flex-col ml-4 text-gray-900">
        <div className="">
          Search :<input type="text"></input>
        </div>
        <a
          className="text-xl font-medium my-4"
          href="/about"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          About
        </a>
        <a
          className="text-xl font-normal my-4"
          href="/contact"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Contact
        </a>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (name: any) => {
    dispatch(getSearch(name));
  };
  return (
    <nav className="flex filter drop-shadow-md bg-gradient-to-t bg-nile-blue-400 px-4 py-4 h-20 items-center md-4">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="w-3/12 flex items-center">
        <Link className="text-2xl font-semibold text-gray-900" href="/">
          MovieTime
        </Link>
      </div>
      <div className="w-9/12 flex justify-end items-center">
        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden text-gray-900"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-3.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-3.5" : ""
            }`}
          />
        </div>

        <div className="hidden md:flex">
          <div className="">
            <label>SEARCH : </label>
            <input
              type="text"
              className="bg-nile-blue-400 border-2 border-black"
              onChange={(e) => {
                handleChange(e.target.value);
              }}
            ></input>
          </div>
          <NavLink to="/contact">CONTACT</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
        </div>
      </div>
    </nav>
  );
}
