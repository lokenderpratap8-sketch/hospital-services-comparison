// TOPSIS (Technique for Order Preference by Similarity to Ideal Solution) implementation

export function calculateTOPSIS(hospitals, weights) {
  if (hospitals.length === 0) return [];

  // Step 1: Create decision matrix
  const criteria = ['cost', 'successRate', 'safetyScore', 'waitTime'];
  const matrix = hospitals.map(hospital =>
    criteria.map(criterion => hospital[criterion])
  );

  // Step 2: Normalize the matrix
  const normalizedMatrix = normalizeMatrix(matrix);

  // Step 3: Weight the normalized matrix
  const weightedMatrix = weightMatrix(normalizedMatrix, weights, criteria);

  // Step 4: Determine ideal and negative-ideal solutions
  const { idealSolution, negativeIdealSolution } = findIdealSolutions(weightedMatrix, criteria);

  // Step 5: Calculate distances
  const distances = calculateDistances(weightedMatrix, idealSolution, negativeIdealSolution);

  // Step 6: Calculate similarity scores
  const rankings = hospitals.map((hospital, index) => ({
    hospital,
    score: distances[index].similarity,
    rank: 0 // Will be set after sorting
  }));

  // Sort by score descending (higher score = better)
  rankings.sort((a, b) => b.score - a.score);

  // Assign ranks
  rankings.forEach((ranking, index) => {
    ranking.rank = index + 1;
  });

  return rankings;
}

function normalizeMatrix(matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  const normalized = Array(numRows).fill().map(() => Array(numCols).fill(0));

  for (let j = 0; j < numCols; j++) {
    let sumSquares = 0;
    for (let i = 0; i < numRows; i++) {
      sumSquares += matrix[i][j] * matrix[i][j];
    }
    const norm = Math.sqrt(sumSquares);

    for (let i = 0; i < numRows; i++) {
      normalized[i][j] = matrix[i][j] / norm;
    }
  }

  return normalized;
}

function weightMatrix(normalizedMatrix, weights, criteria) {
  const numRows = normalizedMatrix.length;
  const numCols = normalizedMatrix[0].length;
  const weighted = Array(numRows).fill().map(() => Array(numCols).fill(0));

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      weighted[i][j] = normalizedMatrix[i][j] * weights[criteria[j]];
    }
  }

  return weighted;
}

function findIdealSolutions(weightedMatrix, criteria) {
  const numCols = weightedMatrix[0].length;
  const idealSolution = Array(numCols).fill(0);
  const negativeIdealSolution = Array(numCols).fill(0);

  // Define benefit and cost criteria
  const benefitCriteria = ['successRate', 'safetyScore'];
  const costCriteria = ['cost', 'waitTime'];

  for (let j = 0; j < numCols; j++) {
    const criterion = criteria[j];
    const column = weightedMatrix.map(row => row[j]);

    if (benefitCriteria.includes(criterion)) {
      // Higher is better
      idealSolution[j] = Math.max(...column);
      negativeIdealSolution[j] = Math.min(...column);
    } else if (costCriteria.includes(criterion)) {
      // Lower is better
      idealSolution[j] = Math.min(...column);
      negativeIdealSolution[j] = Math.max(...column);
    }
  }

  return { idealSolution, negativeIdealSolution };
}

function calculateDistances(weightedMatrix, idealSolution, negativeIdealSolution) {
  const numRows = weightedMatrix.length;
  const distances = [];

  for (let i = 0; i < numRows; i++) {
    let distToIdeal = 0;
    let distToNegativeIdeal = 0;

    for (let j = 0; j < weightedMatrix[i].length; j++) {
      distToIdeal += Math.pow(weightedMatrix[i][j] - idealSolution[j], 2);
      distToNegativeIdeal += Math.pow(weightedMatrix[i][j] - negativeIdealSolution[j], 2);
    }

    distToIdeal = Math.sqrt(distToIdeal);
    distToNegativeIdeal = Math.sqrt(distToNegativeIdeal);

    const similarity = distToNegativeIdeal / (distToIdeal + distToNegativeIdeal);

    distances.push({
      distToIdeal,
      distToNegativeIdeal,
      similarity
    });
  }

  return distances;
}