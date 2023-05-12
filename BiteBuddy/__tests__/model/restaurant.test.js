import { calculateRecommendation } from '../../model/restaurant';

describe('calculateRecommendation Stress Testing', () => {
  const testCases = [
    { score: 24, expectedRecommendation: 'RPM Seafood' },
    { score: 19, expectedRecommendation: 'Hub 51' },
    { score: 14, expectedRecommendation: 'Beatrix' },
    { score: 8, expectedRecommendation: 'Tallboy' },
    { score: 30, expectedRecommendation: '' },
    { score: 3, expectedRecommendation: '' },
    { score: 10, expectedRecommendation: 'Tallboy' },
    { score: 15, expectedRecommendation: 'Beatrix' },
    { score: 20, expectedRecommendation: 'Hub 51' },
    { score: 22, expectedRecommendation: 'RPM Seafood' },
    { score: 25, expectedRecommendation: 'RPM Seafood' },
    { score: 100, expectedRecommendation: '' },
    { score: -5, expectedRecommendation: '' },
    { score: NaN, expectedRecommendation: '' },
    { score: Infinity, expectedRecommendation: '' },
    { score: 18, expectedRecommendation: 'Hub 51' },
    { score: 12, expectedRecommendation: 'Beatrix' },
  ];

  testCases.forEach((testCase, index) => {
    test(`test case ${index + 1}: returns correct recommendation for score ${testCase.score}`, () => {
      expect(calculateRecommendation(testCase.score)).toBe(testCase.expectedRecommendation);
    });
  });
});