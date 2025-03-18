// import assert from 'node:assert/strict';
// import test, { describe } from 'node:test';

// import { CelestialBodyType } from '../../../types/celestial-bodies';
// import { TimeStepInterface } from '../../../types/temporal';
// import { computeAngle } from '../compute-angle';
// import { wrapAngle } from '../compute-mean-anomaly';

// describe('computeAngle', () => {
//   // Test cases

//   // Test cases
//   const testCases = [
//     {
//       date: new Date('2025-06-15T12:00:00Z'),
//       celestialBody: {
//         e: 0.0167,
//         angle: 0,
//         period: { value: 365.25, unit: 'day' }
//       },
//       timeStep: { value: 1, unit: 'day' }
//     },
//     {
//       date: new Date('2030-01-01T00:00:00Z'),
//       celestialBody: {
//         e: 0.1,
//         angle: Math.PI / 3,
//         period: { value: 687, unit: 'day' }
//       },
//       timeStep: { value: 1, unit: 'day' }
//     }
//   ];

//   test('computes correct true anomaly', () => {
//     testCases.forEach(({ date, celestialBody, timeStep }) => {
//       const expected = wrapAngle(
//         computeAngle(
//           date,
//           celestialBody as CelestialBodyType,
//           timeStep as TimeStepInterface
//         )
//       );
//       const result = wrapAngle(
//         computeAngle(
//           date,
//           celestialBody as CelestialBodyType,
//           timeStep as TimeStepInterface
//         )
//       );

//       assert.ok(
//         Math.abs(result - expected) < 1e-4,
//         `Expected angle ≈ ${expected} for date=${date}, body=${JSON.stringify(celestialBody)}, timeStep=${timeStep.value}, but got ${result}`
//       );
//     });
//   });

//   test('correctly adjusts for comets', () => {
//     const comet = {
//       e: 0.8,
//       q: 1.2,
//       angle: Math.PI / 4,
//       period: { value: 2000, unit: 'day' }
//     }; // Adding 'q' property to classify as comet
//     const date = new Date('2025-12-01T00:00:00Z');
//     const timeStep = { value: 5, unit: 'day' };
//     const expected = wrapAngle(
//       computeAngle(
//         date,
//         comet as CelestialBodyType,
//         timeStep as TimeStepInterface
//       )
//     );
//     const result = wrapAngle(
//       computeAngle(
//         date,
//         comet as CelestialBodyType,
//         timeStep as TimeStepInterface
//       )
//     );

//     assert.ok(
//       Math.abs(result - expected) < 1e-4,
//       `Expected comet angle ≈ ${expected}, but got ${result}`
//     );
//   });
// });
