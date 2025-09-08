import {Productai} from "./types"

type ProductaiValues = {
    FCR: boolean,
    aFRRd: boolean,
    aFRRu: boolean,
    mFRRd: boolean,
    mFRRu: boolean,
}

export const getProductaiValues = (productai: Productai): ProductaiValues => {
    if (productai === Productai.BOTH) return {
        FCR: true,
        aFRRd: true,
        aFRRu: true,
        mFRRd: true,
        mFRRu: true,
    }

    if (productai === Productai.DOWN) return {
        aFRRd: true,
        mFRRd: true,
        FCR: false,
        aFRRu: false,
        mFRRu: false,
    }

    return {
        FCR: false,
        aFRRu: true,
        mFRRu: true,
        aFRRd: false,
        mFRRd: false,
    }
}