import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/LegalExplainer', label: 'Legal Explainer' },
  { href: '/constitution', label: 'Constitution' },
  { href: '/courses', label: 'Courses' },
  { href: '/consultation', label: 'Consultation' },
];

export default function Layout({ children }) {
  const location = useLocation();
  
  return (
    <div className="min-h-screen">
      <nav className="bg-gray-800 text-white p-4">
        <div className="flex gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={location.pathname === link.href ? 'font-bold' : ''}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
      <main className="p-4">
        {children}
      </main>
    </div>
  );
}
