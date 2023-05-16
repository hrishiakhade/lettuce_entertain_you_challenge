
export const calculateRecommendation = (score) => {
    let recommendation = '';

    if (score >= 22 && score <= 26) {
        recommendation = 'RPM Seafood';
    } else if (score >= 17 && score <= 21) {
        recommendation = 'Hub 51';
    } else if (score >= 11 && score <= 16) {
        recommendation = 'Beatrix';
    } else if (score >= 6 && score <= 10) {
        recommendation = 'Tallboy';
    }

    return recommendation;
}