import { navLinks } from "../constants"

const Nav = () => {
  return (
      <header className="p-3 max-container z-10 shadow-lg">
        <nav className="flex justify-between">
          <ul className="flex-1 flex gap-16 max-lg:hidden font-Nunito font-bold ">
            {navLinks.map((link) =>(
              <li key={link.label}>
                <a href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        <a href="#about">
          <p className="font-Nunito font-extrabold text-xl text-green-700">Dex The Dev</p>
        </a>
        

        </nav>
        
      </header>
  )
}

export default Nav