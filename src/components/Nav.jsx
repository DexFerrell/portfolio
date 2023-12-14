import { navLinks } from "../constants"

const Nav = () => {
  return (
      <header className="p-2 px-4 max-container z-10 shadow-lg rounded-lg bg-gray-600">

        <nav className="flex justify-between items-center">

          <ul className="flex-1 flex gap-14 max-md:hidden font-Nunito font-bold text-white">
            {navLinks.map((link) =>(
              <li key={link.label}>
                <a href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex justify-between max-md:w-full items-center">
            <a href="#about">
              <p className="font-Nunito font-extrabold text-xl mx-3 text-white">Dex The Dev</p>
            </a>
            <div className="flex justify-between  items-center">
              <a href="https://github.com/DexFerrell" target="_blank">
                <img className=" w-7 rounded-lg object-contain" src="git3.png" alt="logo" />
              </a>
              <a href="https://www.linkedin.com/in/dex-ferrell/" target="_blank" className="mx-2">
                <img className=" w-7 rounded-lg object-contain" src="linkeed.png" alt="logo" />
              </a>
            </div>
            
          </div>
        

        </nav>
        
      </header>
  )
}

export default Nav