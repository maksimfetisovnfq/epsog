export enum CalculatorType {
    BEKS = 'beks',
    P2H = 'p2h',
    P2G = 'p2g',
    DSR = 'dsr',
}

export const CalculatorTypeTooltipsDescription: Record<CalculatorType, string> = {
    [CalculatorType.P2H]: 'Šilumos siurblio panaudojimas centrinio šildymo sistemose',
    [CalculatorType.BEKS]: 'Baterijų energijos kaupimo sistemos',
    [CalculatorType.P2G]: 'Vandenilio gamyba elektrolizės būdu',
    [CalculatorType.DSR]: 'Dinaminis apkrovos valdymas',
};

export const CalculatorTypeTooltipsTitle: Record<CalculatorType, string> = {
    [CalculatorType.P2H]: 'P2H - Power-to-Heat',
    [CalculatorType.BEKS]: 'BEKS',
    [CalculatorType.P2G]: 'P2G - Power-to-Gas',
    [CalculatorType.DSR]: 'DSR - Demand Side Response',
};
