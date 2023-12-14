const Contact = () => {
  return (
    <div className="flex flex-wrap justify-center  shadow-xl items-center bg-gray-700 rounded-lg pb-20 max-container">
      <div className="w-full flex items-center justify-between">
        <h1 className=" p-3 text-[3rem] font-Nunito font-bold text-white">Contact Me:</h1>
       
      </div>
      

      <form action="https://formspree.io/f/xknldedz" method="POST" id='contact' className="flex flex-wrap w-3/4 justify-center items-center p-5 shadow-xl max-lg:w-full">

        <fieldset className="text-white font-Nunitosans font-semibold text-xl w-full  p-1 border-4 rounded-lg border-blue-400 mb-4 mx-2">
          <legend className="text-3xl text-black">Select Message Subject:</legend>

          <div>
            <input type="radio" id="job" name="reason" value="Offer/Inquiry" />
            <label className="p-2" for="job">Career Offer or Interest</label>
          </div>

          <div>
            <input type="radio" id="commission" name="reason" value="Commision" />
            <label className="p-2" for="commission">Project Commission</label>
          </div>

        </fieldset>
       
        <input className="w-full p-2 rounded-lg border-4 mb-3 mx-2 border-blue-400 font-Nunito font-semibold shadow-xl" type="text" name="first" id="firstName" placeholder="First Name" required/>

        <input className="w-full p-2 rounded-lg border-4 mb-3 mx-2 border-blue-400 font-Nunito font-semibold shadow-xl" type="text" name="last" id="lastName" placeholder="Last Name" required/>

        <input className="w-full p-2 rounded-lg border-4 mb-3 mx-2 border-blue-400 font-Nunito font-semibold shadow-xl" type="email" name="email" id="email" placeholder="Your Email Address" required/>

        <textarea className="w-full h-[8rem] p-2 rounded-lg border-4 mb-3 font-Nunito focus-within:font-semibold border-blue-400 mx-2 shadow-xl text-black"type="textarea" name="content" id="content" placeholder="Enter Message Contents" required/>

        <button className='flex justify-center items-center gap-2 px-7 py-4 font-Nunito font-bold text-lg leading-none bg-blue-400 hover:bg-blue-600 rounded-lg shadow-xl text-white' type="submit" href="#contact">Send Message</button>

      </form>
      


    </div>
  )
}

export default Contact