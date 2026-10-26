# Solidity-GitHub-Actions

Smart contract project using Solidity, Hardhat 3, Mocha, Ethers.js, and GitHub Actions.

## Project Overview

This project contains smart contracts and automated tests.

- `contracts/Counter.sol`: Example counter smart contract.
- `contracts/StudentRegistry.sol`: Smart contract to save and return a student's first and last name.
- `test/Counter.ts`: Tests for the Counter contract.
- `test/StudentRegistry.ts`: Tests for the StudentRegistry contract.

## Requirements

- Node.js
- npm
- Git

## Installation

Install the project dependencies:

```bash
npm install
```

## Running Tests

Run all Solidity and Mocha tests:

```bash
npx hardhat test
```

The tests check the smart contracts and verify that the expected results are returned.

## GitHub Actions

GitHub Actions will be configured to run the tests automatically when changes are pushed to GitHub.

## Local Deployment

To deploy the example Counter contract locally, use:

```bash
npx hardhat ignition deploy ignition/modules/Counter.ts
```

