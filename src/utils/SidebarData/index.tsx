import React from 'react';

interface SidebarItem {
  name: string;
  icon: string;
  link: string;
}

interface SidebarData {
  CUSTOMERS: SidebarItem[];
  BUSINESSES: SidebarItem[];
  SETTINGS: SidebarItem[];
}


const sidebarData: SidebarData = {
  CUSTOMERS: [
    {
        "name": "Users",
        "icon": "../Assests/user-friends.svg",
        "link": "#"
    },
    {
        "name": "Guarantors",
        "icon": "../Assests/users-1.svg",
        "link": "#"
    },
    {
        "name": "Loans",
        "icon": "../Assests/sack-1.svg",
        "link": "#"
    },
    {
        "name": "Decision Models",
        "icon": "../Assests/handshake-regular.svg",
        "link": "#"
    },
    {
        "name": "Savings",
        "icon": "../Assests/piggy-bank-1.svg",
        "link": "#"
    },
    {
        "name": "Loan Requests",
        "icon": "../Assests/Group-104.svg",
        "link": "#"
    },
    {
        "name": "Whitelist",
        "icon": "../Assests/white-list.svg",
        "link": "#"
    },
    {
        "name": "Karma",
        "icon": "../Assests/karma.svg",
        "link": "#"
    }
  ],
  BUSINESSES: [
    {
        "name": "Organization",
        "icon": "../Assests/briefcase-1.svg",
        "link": "#"
    },
    {
        "name": "Loan Products",
        "icon": "../Assests/Group-104.svg",
        "link": "#"
    },
    {
        "name": "Savings Products",
        "icon": "../Assests/saving-product.svg",
        "link": "#"
    },
    {
        "name": "Fees and Charges",
        "icon": "../Assests/fees-charges.svg",
        "link": "#"
    },
    {
        "name": "Transactions",
        "icon": "../Assests/transactions.svg",
        "link": "#"
    },
    {
        "name": "Services",
        "icon": "../Assests/services.svg",
        "link": "#"
    },
    {
        "name": "Service Account",
        "icon": "../Assests/service-account.svg",
        "link": "#"
    },
    {
        "name": "Settlements",
        "icon": "../Assests/settlement.svg",
        "link": "#"
    },
    {
        "name": "Reports",
        "icon": "../Assests/reports.svg",
        "link": "#"
    }
  ],
  SETTINGS: [
    {
        "name": "Preferences",
        "icon": "../Assests/preference.svg",
        "link": "#"
    },
    {
        "name": "Fees and Pricing",
        "icon": "../Assests/fees-pricing.svg",
        "link": "#"
    },
    {
        "name": "Audit Logs",
        "icon": "../Assests/audit-log.svg",
        "link": "#"
    },
    {
        "name": "Systems Messages",
        "icon": "../Assests/system-message.svg",
        "link": "#"
    }
  ],
};


export default sidebarData;
