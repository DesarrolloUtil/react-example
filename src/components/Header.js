import { useContext } from "react";
import { AuthContext } from "../lib/auth.context";

const Header = () => {
  const authContext = useContext(AuthContext);

  return (
    <header className="text-gray-100 bg-gray-900 body-font shadow w-full">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-3/5 flex-wrap items-center text-base md:ml-auto">
          <a className="mr-5 hover:text-gray-900 cursor-pointer border-b border-transparent hover:border-indigo-600">
            Albert
          </a>
          <a className="mr-5 hover:text-gray-900 cursor-pointer border-b border-transparent hover:border-indigo-600">
            Saca
          </a>
          <a className="mr-5 hover:text-gray-900 cursor-pointer border-b border-transparent hover:border-indigo-600">
            La
          </a>
          <a className="hover:text-gray-900 cursor-pointer border-b border-transparent hover:border-indigo-600">
            Espada
          </a>
        </nav>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          {authContext.auth && (
            <img
              className="w-12 h-12 rounded-full"
              src={`https://avatars.dicebear.com/api/initials/${authContext.auth.name}.svg`}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
