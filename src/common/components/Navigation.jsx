import { Link } from 'react-router-dom'
import '../css/Navigation.css'
export function Navigation ({ navItems }) {
  const navs = navItems
  return (
    <nav>
      <ul style={{ marginTop: 0, listStyle: 'none', display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
        {navs.map((nav, index) => (
          <li key={nav.name}>
            <Link to={nav.path} className='nav-link'>{nav.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
