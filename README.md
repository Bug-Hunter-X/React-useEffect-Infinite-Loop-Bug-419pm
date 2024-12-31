# React UseEffect Infinite Loop Bug

This repository demonstrates a common error in React applications involving the `useEffect` hook: creating an infinite loop by modifying state within the effect function without proper dependency management.

## Problem

The `MyComponent` component uses `useState` to manage a count.  The `useEffect` hook is intended to log a message when the count exceeds 5 and reset it to 0. However, this implementation creates an infinite loop because resetting the count triggers another execution of the `useEffect` hook, which further updates the count, and so on.

## Solution

The solution involves understanding how the dependency array in `useEffect` works and correctly managing state updates to prevent the infinite loop.

## How to Run

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.

You will be able to see both the buggy and the fixed version of the code, illustrating the infinite loop problem and its solution.