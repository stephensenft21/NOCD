
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        fontFamily: 'Roboto, sans-serif',
        useNextVariants: true,
    },
    "palette": {
        "common": { "black": "#000", "white": "#fff" },
        "background": { "paper": "#fff", "default": "rgba(227, 229, 229, 1)" },
        "primary": {
            "light": "rgba(233, 233, 233, 1)",
            "main": "rgba(255, 255, 255, 1)",
            "dark": "rgba(191, 191, 191, 1)",
            "contrastText": "rgba(0, 20, 137, 1)"
        },
        "secondary": {
            "light": "rgba(0, 20, 137, 0.5)",
            "main": "rgba(0, 20, 137, 1)",
            "dark": "rgba(0, 10, 69, 1)",
            "contrastText": "#fff"
        },
        "error": {
            "light": "#e57373",
            "main": "#f44336",
            "dark": "#d32f2f",
            "contrastText": "#fff"
        },
        "text": {
            "primary": "rgba(0, 0, 0, 0.85)",
            "secondary": "rgba(76, 76, 76, 1)",
            "disabled": "rgba(0, 0, 0, 0.4)",
            "hint": "rgba(102, 102, 102, 0.8)"
        }
    }
});

export default theme;   