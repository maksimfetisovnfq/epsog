/**
 * Converts reaction time value to display string
 * @param reactionTime - The reaction time value in seconds
 * @returns Formatted reaction time display string
 */
export const getReactionTimeDisplay = (reactionTime: number | undefined): string => {
    if (reactionTime === undefined || reactionTime === null) {
        return ""
    }

    if (reactionTime === 0) {
        return "< 30s"
    }

    // Convert to minutes for comparison
    const reactionTimeInMinutes = reactionTime / 60

    if (reactionTimeInMinutes < 5) {
        return "< 5 min"
    }

    if (reactionTimeInMinutes < 12.5) {
        return "< 12.5 min"
    }

    return "> 12.5 min"
}

