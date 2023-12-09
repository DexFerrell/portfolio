import { navLinks } from "../constants"

const Nav = () => {
  return (
      <header className="p-3 px-4 max-container z-10 shadow-lg rounded-lg bg-slate-400">
        <nav className="flex justify-between">
          <ul className="flex-1 flex gap-16 max-lg:hidden font-Nunito font-bold text-white">
            {navLinks.map((link) =>(
              <li key={link.label}>
                <a href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        <a href="#about">
          <p className="font-Nunito font-extrabold text-xl ">Dex The Dev</p>
        </a>
        

        </nav>
        
      </header>
  )
}

export default Nav