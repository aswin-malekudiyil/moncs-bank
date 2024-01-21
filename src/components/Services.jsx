
const Services = () => {
  return (
    <div className="pb-8">

        <h2 className="flex justify-center text-3xl font-semibold pb-12 bg-gradient-to-r from-green-500 to-emerald-500 text-transparent bg-clip-text">Our Services</h2>
        <ul className="list-none px-[80px] flex justify-evenly gap-10 max-sm:px-3 max-sm:block">
            <li className="w-2/6 text-wrap max-sm:w-11/12 max-sm:mb-6">
                <h2 className="text-2xl pb-2 hover:text-green-500 font-medium">Financial Planning</h2>
                <p className="italic">At our organization, we take pride in offering comprehensive financial planning services tailored to meet the unique needs and aspirations of our clients. Our team of experienced financial professionals is dedicated to guiding individuals and businesses towards a secure and prosperous future.</p>
            </li>
            <li className="w-2/6 text-wrap max-sm:w-11/12 max-sm:mb-6">
                <h2 className="text-2xl pb-2 hover:text-green-500 font-medium">Investment</h2>
                <p className="italic">Our organization is proud to extend a comprehensive suite of investment services designed to cater to the diverse financial goals of our clients. With a keen understanding of the dynamic nature of the financial markets, we provide tailored investment solutions that align with your unique objectives and risk tolerance.</p>
            </li>
            <li className="w-2/6 text-wrap max-sm:w-11/12 max-sm:mb-6">
                <h2 className="text-2xl pb-2 hover:text-green-500 font-medium">Loans & Funding</h2>
                <p className="italic">At our institution, we understand that financial needs vary, and we are committed to providing flexible solutions to assist you in achieving your goals. Our comprehensive loan services cater to a wide range of requirements, whether it be for personal expenses, home financing, education, or business endeavors.</p>
            </li>
        </ul>

    </div>
  )
}

export default Services