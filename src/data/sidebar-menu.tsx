import { NavItem } from '@/layout/admin/AppSidebar'
import { GridIcon, PieChartIcon, UserCircleIcon } from '../icons/index'
export const myMenu: NavItem[] = [
  {
    icon: <GridIcon />,
    name: 'Dashboard',
    path: '/admin',
  },
  {
    icon: <UserCircleIcon />,
    name: 'User',
    subItems: [
      { name: 'Users', path: '/admin/users' },
      { name: 'Add Users', path: '/admin/users/create' },
    ],
  },
  {
    icon: <GridIcon />,
    name: 'Customer',
    path: '/admin/customers',
  },
  {
    icon: <PieChartIcon />,
    name: 'Restaurant',
    path: '/admin/restaurants',
  },
  {
    icon: <PieChartIcon />,
    name: 'Order',
    path: '/admin/orders',
  },
]
