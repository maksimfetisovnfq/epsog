import {NavLink} from "./nav-link.tsx";
import {type HistoryState, useLocation} from "@tanstack/react-router";
import { Box } from "@mui/material"

const links = [
    { to: '/general-data', label: 'Bendrieji duomenys' },
    { to: '/technical-parameters', label: 'Techniniai parametrai' },
    { to: '/economic-parameters', label: 'Ekonominiai parametrai' },
    { to: '/summary-of-results', label: 'Rezultatų apibendrinimas' },
];

const isPageAccessible = (pagePath: string, state: HistoryState): boolean => {
    switch (pagePath) {
        case '/':
        case '/general-data':
            return !!state;
        case '/technical-parameters':
            return !!state?.generalData;
        case '/economic-parameters':
            return !!state?.generalData && !!state?.technicalParameters;
        case '/summary-of-results':
            return !!state?.generalData &&
                   !!state?.technicalParameters &&
                   !!state?.economicParameters;
        default:
            return false;
    }
};

export const Navigation = () => {
    const location = useLocation();
    const calculatorType = location.pathname.split('/')[1];

    return (
        <>
            {location.pathname === '/' && (
                <Box sx={{ justifyContent: "space-between", display: "flex", alignItems: "center", marginBottom: "20px" }}>
                    <img src="/Litgrid-logo-horizontalus-baltas-RGB.png" style={{ width: 120 }} alt="" />
                    <img src="/EPSOG_logo_WHITE.png" style={{ width: 100, height: 30}} alt="" />
                </Box>
            )}
            <Box className="p-2 flex gap-2" sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                width: { sm: 779 },
            }}>
                {links.map(link => {
                    const isHome = location.pathname === '/';
                    const isGeneralData = link.to === '/general-data';
                    const isAccessible = isGeneralData && isHome
                        ? false
                        : isPageAccessible(link.to, location.state);
                    return (
                        <NavLink
                            key={link.to}
                            to={link.to === '/general-data' ? link.to : `/${calculatorType}${link.to}`}
                            state={location.state}
                            disabled={!isAccessible}
                            isHome={isHome}
                        >  {link.label}
                        </NavLink>
                    );
                })}
            </Box>
        </>
    );
};