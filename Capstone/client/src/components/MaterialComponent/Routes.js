import Home from "../Home"
import RecordList from '../RecordList'
import DonutLargeRoundedIcon from '@material-ui/icons/DonutLargeRounded';
import AccessibilityRoundedIcon from '@material-ui/icons/AccessibilityRounded';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
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
        path: '/Compulsion/:compulsionId',
        sidebarName: 'Records',
        navbarName: 'Records',
        icon: DescriptionRoundedIcon,
        component: RecordList
    },
    {
        path: '/PatientData',
        sidebarName: 'PatientData',
        navbarName: 'PatientData',
        icon: DonutLargeRoundedIcon,
        component: PatientData
    },
];