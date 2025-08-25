import {NavLink} from "./nav-link.tsx";
import {type HistoryState, useLocation} from "@tanstack/react-router";
import {useCalculatorType} from "../../context/CalculatorTypeContext.tsx";

const links = [
     // { to: '/', label: 'Home' },
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
    const {calculatorType} = useCalculatorType();

    return (
        <nav className="p-2 flex gap-2" style={{
            display: "flex",
        }}>
            {links.map(link => {
                const isAccessible = isPageAccessible(link.to, location.state);
                return (
                    <NavLink
                        key={link.to}

                        to={link.to === '/general-data' ? link.to : `${link.to}-${calculatorType}`}
                        state={location.state}
                        disabled={!isAccessible}
                    >  {link.label}
                    </NavLink>
                );
            })}
        </nav>
    );
};