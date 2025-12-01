import 'jsvectormap';
import 'jsvectormap/dist/maps/world.js';
import { useEffect, useState } from 'react';
const BaseVectorMap = ({
  id,
  options,
  ...props
}) => {
  const [map, setMap] = useState();
  useEffect(() => {
    if (!map) {
      const map = new window['jsVectorMap']({
        selector: '#' + id,
        ...options
      });
      setMap(map);
    }
  }, [id, map, options]);
  return <div id={id} {...props} />;
};
export default BaseVectorMap;