import Home from "../Home"
import RecordList from '../RecordList'
import DonutLargeRoundedIcon from '@material-ui/icons/DonutLargeRounded';
import AccessibilityRoundedIcon from '@material-ui/icons/AccessibilityRounded';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
import VpnKeyRoundedIcon from '@material-ui/icons/VpnKeyRounded';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import PatientData from '../PatientData'
import Login from '../Login';
import Register from '../Register'
const Routes = [
  {
    path: '/Compulsions',
    sidebarName: 'Compulsions',
    navbarName: 'Compulsions',
    icon: AccessibilityRoundedIcon,
    component: Home
  },
  {
    path: '/RecordList',
    sidebarName: 'Records',
    navbarName: 'Records',
    icon: DescriptionRoundedIcon,
    component: RecordList
  },
  {
    path: '/PatientData',
    sidebarName: 'Records',
    navbarName: 'Records',
    icon: DonutLargeRoundedIcon,
    component: PatientData
  },
  {
    path: '/login',
    sidebarName: 'Login',
    navbarName: 'Login',
    icon: VpnKeyRoundedIcon,
    component: Login
  },
  {
    path: '/register',
    sidebarName: 'Register',
    navbarName: 'Register',
    icon: PersonAddRoundedIcon,
    component: Register
  }
];

export default Routes;