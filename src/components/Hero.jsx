import card from '../assets/credit-card.png';
const Hero = () => {
  return (
    <div className="ml-10 mt-[80px] text-white flex justify-around max-sm:ml-2 max-sm:block">

       <div className="w-2/5 text-wrap max-sm:w-80">
       <h1 className="text-4xl font-bold">Welcome to <span className="bg-gradient-to-r from-green-500 to-emerald-300 text-transparent bg-clip-text">Moncs</span></h1>
        <h2 className="pt-10">Your Trusted Partner in Financial Excellence.</h2>
        <h2 className="pt-5">Elevate your financial journey with us. Discover personalized solutions, seamless experiences, and a commitment to your prosperity. Welcome to a world of banking redefined.</h2>

        <button className="mt-10 px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl font-semibold hover:bg-green-900">
            Join now
        </button>
        <a href="#" className="pl-8 font-semibold hover:text-green-400">Learn more</a>
        </div> 

        <div className="py-3">
            <img src={card} alt="credit-card"/>
        </div>
       
    </div>
  )
}

export default Hero