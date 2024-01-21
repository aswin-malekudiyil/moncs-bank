const Footer = () => {
  return (
    <div className="p-10 max-sm:p-2">
      <div className="border-t border-white border-0 pb-8"></div>
      <div className="max-sm:text-center mb-4 lg:hidden md:hidden">
          <p>&#169; 2024 Moncs Group. All rights reserved.</p>
        </div>
      <div className="flex justify-between items-center italic max-sm:flex justify-evenly items-start">
        <div>
          <h1 className="text-xl font-semibold max-sm:mb-1">Address</h1>
          <p>
            Moncs Bank <br />
            1234 Financial Street <br />
            Suite 567 <br />
            Los Angeles, CA 90001 <br />
            United States
          </p>
        </div>
        <div className="max-sm:hidden">
          <p>&#169; 2024 Moncs Group. All rights reserved.</p>
        </div>
        <div className="max-sm:mb-1">
          <h1 className="text-xl font-semibold">Contact us</h1>
          <p>contact@moncsbank.com</p>
          <p>+1 564 367746</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
