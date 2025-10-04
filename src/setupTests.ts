// src/setupTests.ts
import '@testing-library/jest-dom';

global.open = jest.fn();
global.prompt = jest.fn();  