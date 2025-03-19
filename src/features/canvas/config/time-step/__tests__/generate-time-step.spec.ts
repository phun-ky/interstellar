import assert from 'node:assert';
import { test, beforeEach, afterEach, describe } from 'node:test';

import { lastTimestamp, SPEED_MODE, timeStep } from '..';
import { MS_1_DAY } from '../../../../../config/constants';
import { generateTimeStep } from '../generate-time-step';

// Mock `performance.now()`
let mockNow = 0;

globalThis.performance = {
  now: () => mockNow
} as Performance;

describe('generateTimeStep', () => {
  beforeEach(() => {
    lastTimestamp.value = 0;
    timeStep.value = 0;
    timeStep.unit = 'day';
  });

  afterEach(() => {
    lastTimestamp.value = 0;
    timeStep.value = 0;
    timeStep.unit = 'day';
  });

  test('Normal FPS (60Hz)', () => {
    mockNow = 16.67; // ~16.67ms per frame (60Hz)
    generateTimeStep();

    const expectedTimeStep = (mockNow / (1000 / 60)) * (mockNow / MS_1_DAY);

    assert.strictEqual(timeStep.unit, 'day');
    assert.strictEqual(timeStep.value.toFixed(8), expectedTimeStep.toFixed(8));
  });

  test('High FPS (144Hz)', () => {
    mockNow = 6.94; // ~6.94ms per frame (144Hz)
    generateTimeStep();

    const expectedTimeStep = (mockNow / (1000 / 60)) * (mockNow / MS_1_DAY);

    assert.strictEqual(timeStep.unit, 'day');
    assert.strictEqual(timeStep.value.toFixed(8), expectedTimeStep.toFixed(8));
  });

  test('Low FPS (30Hz)', () => {
    mockNow = 33.33; // ~33.33ms per frame (30Hz)
    generateTimeStep();

    const expectedTimeStep = (mockNow / (1000 / 60)) * (mockNow / MS_1_DAY);

    assert.strictEqual(timeStep.unit, 'day');
    assert.strictEqual(timeStep.value.toFixed(8), expectedTimeStep.toFixed(8));
  });

  test('Speed Modes', () => {
    mockNow = 16.67; // 60Hz frame time

    const speedModes = {
      quarterFramePerDay: 0.25,
      framePerDay: 1,
      spedUp: 10,
      insane: 1000
    };

    for (const [mode, expected] of Object.entries(speedModes)) {
      SPEED_MODE.value = mode as
        | 'realTime'
        | 'framePerDay'
        | 'quarterFramePerDay'
        | 'spedUp'
        | 'insane';
      generateTimeStep();
      assert.strictEqual(timeStep.unit, 'day');
      assert.strictEqual(timeStep.value, expected);
    }
  });
});
