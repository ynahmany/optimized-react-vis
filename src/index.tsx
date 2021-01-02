import * as React from 'react';
import * as vis from 'vis-network';
import { useImmer } from "use-immer";



interface IOptimizedGraph {
  graph: any;
  id?: string;
  style?: React.CSSProperties;
  getNetwork?: () => void;
  getNodes?: () => void;
  getEdges?: () => void;
  options: vis.Options;
}
const OptimizedGraph: React.FC<IOptimizedGraph> = ({ options }) => {
  const [divRef, setDivRef] = React.useRef();
  // const edges
  React.useEffect(() => {
    
  }, [])
  return <div>testing for lib changes: {}</div>;
}
export default OptimizedGraph;
