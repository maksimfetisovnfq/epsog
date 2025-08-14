export enum CalculatorType {
    P2H = 'p2h',
    BEKS = 'beks',
    P2G = 'p2g',
    DSR = 'dsr',
}

export const CalculatorTypeTooltips: Record<CalculatorType, string> = {
    [CalculatorType.P2H]: 'Šilumos siurblio panaudojimas centrinio šildymo sistemose',
    [CalculatorType.BEKS]: 'Baterijų energijos kaupimo sistemos',
    [CalculatorType.P2G]: 'Vandenilio gamyba elektrolizės būdu',
    [CalculatorType.DSR]: 'Dinaminis apkrovos valdymas',
};
