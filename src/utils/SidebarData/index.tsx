interface SidebarItem {
  name: string
  icon: string
  link: string
}

interface SidebarData {
  CUSTOMERS: SidebarItem[]
  BUSINESSES: SidebarItem[]
  SETTINGS: SidebarItem[]
}

const sidebarData: SidebarData = {
  CUSTOMERS: [
    {
      name: 'Users',
      icon: 'user-friends.svg',
      link: '/users'
    },
    {
      name: 'Guarantors',
      icon: 'users-1.svg',
      link: '#'
    },
    {
      name: 'Loans',
      icon: 'sack-1.svg',
      link: '#'
    },
    {
      name: 'Decision Models',
      icon: 'handshake-regular.svg',
      link: '#'
    },
    {
      name: 'Savings',
      icon: 'piggy-bank-1.svg',
      link: '#'
    },
    {
      name: 'Loan Requests',
      icon: 'Group-104.svg',
      link: '#'
    },
    {
      name: 'Whitelist',
      icon: 'white-list.svg',
      link: '#'
    },
    {
      name: 'Karma',
      icon: 'karma.svg',
      link: '#'
    }
  ],
  BUSINESSES: [
    {
      name: 'Organization',
      icon: 'briefcase-1.svg',
      link: '#'
    },
    {
      name: 'Loan Products',
      icon: 'Group-104.svg',
      link: '#'
    },
    {
      name: 'Savings Products',
      icon: 'saving-product.svg',
      link: '#'
    },
    {
      name: 'Fees and Charges',
      icon: 'fees-charges.svg',
      link: '#'
    },
    {
      name: 'Transactions',
      icon: 'transactions.svg',
      link: '#'
    },
    {
      name: 'Services',
      icon: 'services.svg',
      link: '#'
    },
    {
      name: 'Service Account',
      icon: 'service-account.svg',
      link: '#'
    },
    {
      name: 'Settlements',
      icon: 'settlement.svg',
      link: '#'
    },
    {
      name: 'Reports',
      icon: 'reports.svg',
      link: '#'
    }
  ],
  SETTINGS: [
    {
      name: 'Preferences',
      icon: 'preference.svg',
      link: '#'
    },
    {
      name: 'Fees and Pricing',
      icon: 'fees-pricing.svg',
      link: '#'
    },
    {
      name: 'Audit Logs',
      icon: 'audit-log.svg',
      link: '#'
    },
    {
      name: 'Systems Messages',
      icon: 'system-message.svg',
      link: '#'
    }
  ]
}

export default sidebarData
