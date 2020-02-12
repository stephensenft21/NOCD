import Home from "../Home"
import RecordList from '../RecordList'
import DonutLargeRoundedIcon from '@material-ui/icons/DonutLargeRounded';
import AccessibilityRoundedIcon from '@material-ui/icons/AccessibilityRounded';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
import PatientData from '../PatientData'

const Routes = [
  {
    path: '/Compulsions/New',
    sidebarName: 'Compulsions',
    navbarName: 'Compulsions',
    icon: AccessibilityRoundedIcon,
    component: Home
  },
  // {
  //   path: '/Compulsion/:compulsionId',
  //   sidebarName: 'Records',
  //   navbarName: 'Records',
  //   icon: DescriptionRoundedIcon,
  //   component: RecordList
  // },
  {
    path: '/PatientData',
    sidebarName: 'PatientData',
    navbarName: 'PatientData',
    icon: DonutLargeRoundedIcon,
    component: PatientData
  },
  
  // {
  //   path: '/register',
  //   sidebarName: 'Register',
  //   navbarName: 'Register',
  //   icon: PersonAddRoundedIcon,
  //   component: Register
  // },
  // {
  //   path: '/login',
  //   sidebarName: 'Logout',
  //   navbarName: 'Login',
  //   icon: PersonAddRoundedIcon,
  //   component: Login
  // }
];

export default Routes;