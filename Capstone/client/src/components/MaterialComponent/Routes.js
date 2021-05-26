import Home from "../Home"
import DonutLargeRoundedIcon from '@material-ui/icons/DonutLargeRounded';
import AccessibilityRoundedIcon from '@material-ui/icons/AccessibilityRounded';
import PatientData from '../PatientData'


export const routes = [
    {
        path: '/Compulsions/New',
        sidebarName: 'Compulsions',
        navbarName: 'Compulsions',
        icon: AccessibilityRoundedIcon,
        component: Home
    },
    {
        path: '/PatientData',
        sidebarName: 'PatientData',
        navbarName: 'PatientData',
        icon: DonutLargeRoundedIcon,
        component: PatientData
    },
];