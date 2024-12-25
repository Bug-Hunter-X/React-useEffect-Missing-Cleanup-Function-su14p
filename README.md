# React useEffect Missing Cleanup Function

This repository demonstrates a common error in React's `useEffect` hook: forgetting to include a cleanup function to prevent memory leaks.

## Bug Description
The `bug.js` file contains a component that fetches data using `fetch`.  The `useEffect` hook does not include a return function which should be responsible for cancelling any pending requests when the component unmounts, leading to memory leaks.

## Solution
The `bugSolution.js` file provides the corrected component with a cleanup function that uses `AbortController` to properly cancel the `fetch` request. 
