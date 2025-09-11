export const getReactionTimeValue = (value: number) => {
    if (value === 0) {
        return 30
    }
    if (value === 30) {
        return 300
    }
    if (value === 60) {
        return 750
    }
    if (value === 90) {
        return 1000
    }
    return value
}

