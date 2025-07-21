'use client'

import { useAuth } from '@/contexts/AuthContext'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  HomeIcon, 
  CurrencyDollarIcon, 
  DocumentTextIcon, 
  UserGroupIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline'

export default function Sidebar() {
  const { profile } = useAuth()
  const pathname = usePathname()

  if (!profile) return null

  const borrowerLinks = [
    { href: '/dashboard', label: 'Dashboard', icon: HomeIcon },
    { href: '/loans/request', label: 'Request Loan', icon: CurrencyDollarIcon },
    { href: '/loans/my-loans', label: 'My Loans', icon: DocumentTextIcon },
  ]

  const lenderLinks = [
    { href: '/dashboard', label: 'Dashboard', icon: HomeIcon },
    { href: '/loans/browse', label: 'Browse Loans', icon: DocumentTextIcon },
    { href: '/loans/funded', label: 'Funded Loans', icon: ChartBarIcon },
  ]

  const adminLinks = [
    { href: '/dashboard', label: 'Dashboard', icon: HomeIcon },
    { href: '/admin/loans', label: 'All Loans', icon: DocumentTextIcon },
    { href: '/admin/users', label: 'Users', icon: UserGroupIcon },
    { href: '/admin/analytics', label: 'Analytics', icon: ChartBarIcon },
  ]

  const getLinks = () => {
    switch (profile.role) {
      case 'borrower':
        return borrowerLinks
      case 'lender':
        return lenderLinks
      case 'admin':
        return adminLinks
      default:
        return borrowerLinks
    }
  }

  const links = getLinks()

  return (
    <div className="w-64 bg-gray-50 min-h-screen border-r border-gray-200">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          {profile.role === 'admin' ? 'Admin Panel' : 
           profile.role === 'lender' ? 'Lender Portal' : 'Borrower Portal'}
        </h2>
        <nav className="space-y-2">
          {links.map((link) => {
            const Icon = link.icon
            const isActive = pathname === link.href
            
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{link.label}</span>
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
