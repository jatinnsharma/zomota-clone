import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  return (
    <div className="flex justify-between">
      <img
        className="h-7 mt-6 ml-60"
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="zomato-logo"
      />
      <form className=" bg-gray-100 mt-4 ">
        <input
          className="bg-gray-100 w-600 h-12 pl-4 focus:outline-0"
          type="text"
          placeholder="Search for restaurant,cuisine or a dish"
        />
        <button className="mr-4">
          <AiOutlineSearch />
        </button>
      </form>

      {/* button field */}
      <div className="mt-6">
        <button>Log in</button>
        <button className="mr-12 ml-4">Sign Up</button>
      </div>
    </div>
  );
};

export default Header;
