import * as React from 'react';

interface IOptimizedGraph {
  name?: string;
}
const OptimizedGraph: React.FC<IOptimizedGraph> = ({ name }) => {
  return <div>testing for lib changes: {name}</div>;
}
export default OptimizedGraph;
