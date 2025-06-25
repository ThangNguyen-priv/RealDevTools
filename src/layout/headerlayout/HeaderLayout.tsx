import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { usePathName } from '../../hooks'
import ModeToggle from '../../components/common/Button/ModeToggle'



export default function HeaderLayout()
{
  const location = useLocation()
  const pathName = usePathName(location.pathname)
  return (
    <header className="h-16 border-b border-border fixed top-0 right-0 left-0 w-full z-20">
      <div className="flex items-center justify-between h-full px-4 md:px-6">
        {/* Left - Hamburger space on mobile, empty on desktop */}
        <div className="w-10 md:w-0 flex-shrink-0"> 
        </div>

        {/* Center - Title */}
        <div className="flex-1 flex justify-center md:justify-start md:ml-64">
          {/* ← Responsive alignment */}
          <h1 className="text-lg md:text-xl font-semibold text-foreground text-center md:text-left ">
            {pathName.toUpperCase()}
          </h1>
        </div>

        {/* Right - Actions */}
        <div className="flex items-center space-x-2 md:space-x-4 flex-shrink-0">
          <div className="hidden sm:flex items-center space-x-2 text-foreground">
            <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
            <Link to="https://github.com/ThangNguyen-priv" className="hover:text-primary text-sm">Report an issue</Link>
          </div>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}