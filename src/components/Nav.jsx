import { navLinks } from "../constants"

const Nav = () => {
  return (
      <header className="p-2 px-4 max-container z-10 shadow-lg rounded-lg bg-slate-400">

        <nav className="flex justify-between items-center">

          <ul className="flex-1 flex gap-16 max-lg:hidden font-Nunito font-bold text-white">
            {navLinks.map((link) =>(
              <li key={link.label}>
                <a href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex justify-between  items-center">
            <a href="#about">
              <p className="font-Nunito font-extrabold text-xl mx-2 text-white">Dex The Dev</p>
            </a>
            <a href="https://github.com/DexFerrell" target="_blank">
            <img className=" w-7 rounded-lg object-contain" src="git3.png" alt="logo" />
            </a>
            <a href="https://www.linkedin.com/in/dex-ferrell/" target="_blank" className="mx-2">
            <img className=" w-8 rounded-lg object-contain" src="lnkd.png" alt="logo" />
            </a>
          </div>
        

        </nav>
        
      </header>
  )
}

export default Nav