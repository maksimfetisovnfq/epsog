import {Productai} from "./types"

type ProductaiValues = {
    FCR: boolean,
    aFRRd: boolean,
    aFRRu: boolean,
    mFRRd: boolean,
    mFRRu: boolean,
}

export const getProductaiValues = (productai: Productai, useFcr = true): ProductaiValues => {
    if (productai === Productai.BOTH) return {
        FCR: useFcr,
        aFRRd: true,
        aFRRu: true,
        mFRRd: true,
        mFRRu: true,
    };

    if (productai === Productai.DOWN) return {
        aFRRd: true,
        mFRRd: true,
        FCR: useFcr && false, // FCR is optional if useFcr is false
        aFRRu: false,
        mFRRu: false,
    };

    return {
        FCR: useFcr && false, // FCR is optional if useFcr is false
        aFRRu: true,
        mFRRu: true,
        aFRRd: false,
        mFRRd: false,
    };
};
