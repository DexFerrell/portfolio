import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black p-5  mt-3 text-white rounded-lg flex items-center justify-center max-container flex-col'>

      <h1 className='font-Nunitosans font-bold text-xl my-2'>Dex Ferrell <span className='font-semibold font-Nunito'>Portfolio</span></h1>
      <p className='w-1/3 text-center my-2 max-lg:w-3/4'> Looking for a growth-minded, detail-oriented company so that we can help eachother grow!</p>

      <div className='flex justify-around w-[15%] my-2'> 
        <a href="https://github.com/DexFerrell" target="_blank">
          <img className=" w-12 rounded-lg object-contain" src="git3.png" alt="logo" />
        </a>

        <a href="https://www.linkedin.com/in/dex-ferrell/" target="_blank" className="mx-2">
          <img className=" w-12 rounded-lg object-contain" src="linkeed.png" alt="logo" />
        </a>
      </div>



    </footer>
  )
}

export default Footer