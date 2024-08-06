// Q.12:Create a React component that uses React Suspense for lazy loading.
import React, { Suspense, lazy } from "react";

const BuggyComponent = lazy(() => import("./BuggyComponent"));

const AnotherComponent = () => (
  <div>
    <h2>This is another component that loads immediately</h2>
    <p>It displays some static content.</p>
  </div>
);

export const LazyLoadingExample = () => {
  return (
    <div>
      <h1>React Suspense Example with Multiple Components</h1>
      <AnotherComponent />
      <Suspense fallback={<div>Loading buggy component...</div>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
};

export default LazyLoadingExample;


