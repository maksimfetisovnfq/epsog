import {type HistoryState, Link} from "@tanstack/react-router";
import IndicatorSvg from './indicator.svg?react';

type Props = {
    to: string,
    state: HistoryState,
    children?: string[],
    disabled?: boolean
}

export const NavLink = ({to, state, children, disabled = false}: Props) => {
    const textColor = !disabled ? "#0F2D46" : "#B7C0C8";
    const svgColor = !disabled ? "#00EB8C" : "#E7EAED";
    
    return (
        <div style={{
            marginRight: "12px",
            width: "183px",
            height: "37px",
            cursor: disabled ? "not-allowed" : "pointer",
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

            <IndicatorSvg style={{color: svgColor}}/>
        </div>
    );
};