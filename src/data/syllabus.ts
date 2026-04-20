import { unit1 } from './unit1';
import { unit2 } from './unit2';
import { unit3 } from './unit3';
import { unit4 } from './unit4';
import { unit5 } from './unit5';
import { unit6 } from './unit6';
import { pyq2021 } from './pyq2021';
import { pyq2022 } from './pyq2022';
import { pyq2023 } from './pyq2023';
import { pyq2024 } from './pyq2024';
import { pyq2025 } from './pyq2025';
import { type Unit, type PYQ } from './types';

export const units: Unit[] = [
  unit1,
  unit2,
  unit3,
  unit4,
  unit5,
  unit6
];

export const pyqs: PYQ[] = [
  pyq2021,
  pyq2022,
  pyq2023,
  pyq2024,
  pyq2025
];

export * from './types';
