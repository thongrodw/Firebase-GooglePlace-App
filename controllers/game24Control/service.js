
function calculateAllCombination(results,leftCombinations,rightCombinations){
    for (const leftValue of leftCombinations.values()) {
        for (const rightValue of rightCombinations.values()) {
            results.add(leftValue + rightValue);
            results.add(leftValue - rightValue);
            results.add(leftValue * rightValue);
            if (rightValue != 0 && leftValue % rightValue == 0) {
                results.add(Math.floor(leftValue / rightValue));
            }
        }
    }
    return results
}

function getAllCombinations(numbers) {
    if (numbers.length <= 1) {
        return new Set(numbers);
    }

    var results = new Set();

    for (let i = 0; i < numbers.length - 1; i++) {
        const leftCombinations = getAllCombinations(numbers.slice(0, i + 1));
        const rightCombinations = getAllCombinations(numbers.slice(i + 1));
        results = calculateAllCombination(results,leftCombinations,rightCombinations)
    }
    return results;
}

module.exports = {
    getAllCombinations
}