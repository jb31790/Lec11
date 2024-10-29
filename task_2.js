#!/usr/bin/env node

function simulateAsyncOperation() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Operation completed");
    }, 2000);
  });
}

// console.log(simulateAsyncOperation("hi"));
simulateAsyncOperation();
