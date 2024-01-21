
const Enquire = () => {
  return (
    <div className="">
        <h1 className="text-3xl font-semibold flex justify-center py-10 bg-gradient-to-r from-green-500 to-emerald-500 text-transparent bg-clip-text">
            Enquire Now
        </h1>
        <div className="text-center mx-auto p-5">
            <input className="w-2/6 bg-transparent border-2 border-green-500 focus:outline-none rounded-xl px-3 py-2 mb-5 max-sm:w-11/12" type="text" placeholder="Name"/><br />
            <input className="w-2/6 bg-transparent border-2 border-green-500 focus:outline-none rounded-xl px-3 py-2 mb-5 max-sm:w-11/12" type="email" placeholder="Email"/><br />
            <button className="px-4 py-3 m-4 bg-gradient-to-r from-green-500 to-emerald-500 font-bold rounded-2xl max-sm:w-11/12">Enquire</button>
        </div>
    </div>
  )
}

export default Enquire