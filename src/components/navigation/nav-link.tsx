import {type HistoryState, Link} from "@tanstack/react-router";
//@ts-expect-error TODO 
import IndicatorSvg from './indicator.svg?react';

type Props = {
    to: string,
    state: HistoryState,
    children?: React.ReactNode,
    disabled?: boolean,
    isHome?: boolean
}

export const NavLink = ({to, state, children, disabled = false, isHome = false}: Props) => {
    const textColor = !disabled ? "#0F2D46" : (isHome ? "#B7C0C8" : "#E7EAED");
    const borderColor = !disabled ? "#00EB8C" : (isHome ? "#B7C0C8" : "#E7EAED");
    
    return (
        <div style={{
            marginRight: "12px",
            height: "37px",
            cursor: disabled ? "not-allowed" : "pointer",
            borderBottom: `4px solid ${borderColor}`
        }}>
            {disabled ? (
                <span style={{
                    textDecoration: "none",
                    color: textColor,
                    cursor: "not-allowed"
                }}>
                    {children}
                </span>
            ) : (
                <Link to={to} state={state} style={{
                    textDecoration: "none",
                    color: textColor,
                }}>
                    {children}
                </Link>
            )}

            {/*<IndicatorSvg style={{color: svgColor}}/>*/}
        </div>
    );
};