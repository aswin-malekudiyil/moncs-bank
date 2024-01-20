const Header = () => {
  return (
    <div>
      <header className="px-28 py-9 w-70% text-white text-bold flex justify-between overflow-hidden items-center">
        <div className="inline-block">
          <h1 className="bg-gradient-to-r from-green-500 to-emerald-500 text-transparent bg-clip-text text-3xl font-bold pb-2">
            Moncs Bank
          </h1>
        </div>
        <ul className="list-none flex gap-4 align-middle items-center pt-2">
          <li>
            <a href="#" className="hover:text-green-300">
              Home
            </a>
          </li>
          <li>
          <a href="#" className="hover:text-green-300">
              About
            </a>
          </li>
          <li>
          <a href="#" className="hover:text-green-300">
              Contact
            </a>
          </li>
        </ul>
        <button className="bg-gradient-to-r from-green-700 to-emerald-500 px-4 py-2 rounded-xl">Login</button>
      </header>
    </div>
  );
};

export default Header;
