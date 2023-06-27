const Header = () => {
  return (
    <div className="flex">
      <img className="h-7 mt-6 ml-32"
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="zomato-logo" 
      />
      <input className='w-96' type='text' placeholder="Search for restaurant,cuisine or a dish"/>
    </div>
  );
};

export default Header;
