import {NavLink} from "./nav-link.tsx";
import {type HistoryState, useLocation} from "@tanstack/react-router";

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
        <nav className="p-2 flex gap-2" style={{
            display: "flex",
            flexWrap: "wrap",
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
        </nav>
    );
};