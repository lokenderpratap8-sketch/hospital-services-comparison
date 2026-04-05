export const calculateTopsis = (data, weights) => {
  // 1. Normalize Matrix
  const normalized = data.map((h) => {
    const costNorm = Math.sqrt(data.reduce((sum, el) => sum + el.cost ** 2, 0));
    const successNorm = Math.sqrt(data.reduce((sum, el) => sum + el.successRate ** 2, 0));
    const safetyNorm = Math.sqrt(data.reduce((sum, el) => sum + el.safetyScore ** 2, 0));
    const waitNorm = Math.sqrt(data.reduce((sum, el) => sum + el.waitTime ** 2, 0));

    return {
      ...h,
      nCost: (h.cost / costNorm) * weights.cost,
      nSuccess: (h.successRate / successNorm) * weights.successRate,
      nSafety: (h.safetyScore / safetyNorm) * weights.safetyScore,
      nWait: (h.waitTime / waitNorm) * weights.waitTime,
    };
  });

  // 2. Identify Ideal and Anti-Ideal (Cost/Wait are "cost" criteria, Success/Safety are "benefit")
  const ideal = {
    cost: Math.min(...normalized.map(h => h.nCost)),
    success: Math.max(...normalized.map(h => h.nSuccess)),
    safety: Math.max(...normalized.map(h => h.nSafety)),
    wait: Math.min(...normalized.map(h => h.nWait)),
  };

  const antiIdeal = {
    cost: Math.max(...normalized.map(h => h.nCost)),
    success: Math.min(...normalized.map(h => h.nSuccess)),
    safety: Math.min(...normalized.map(h => h.nSafety)),
    wait: Math.max(...normalized.map(h => h.nWait)),
  };

  // 3. Calculate Euclidean Distance and Closeness
  return normalized.map((h) => {
    const distIdeal = Math.sqrt(
      (h.nCost - ideal.cost)**2 + (h.nSuccess - ideal.success)**2 + 
      (h.nSafety - ideal.safety)**2 + (h.nWait - ideal.wait)**2
    );
    const distAntiIdeal = Math.sqrt(
      (h.nCost - antiIdeal.cost)**2 + (h.nSuccess - antiIdeal.success)**2 + 
      (h.nSafety - antiIdeal.safety)**2 + (h.nWait - antiIdeal.wait)**2
    );

    const score = distAntiIdeal / (distIdeal + distAntiIdeal);
    return { ...h, topsisScore: (score * 100).toFixed(2) };
  }).sort((a, b) => b.topsisScore - a.topsisScore);
};