import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from './resource-loader.module.css';

export function ResourceLoader({resourceUrl, resourceName, children}: {resourceUrl: string, resourceName: string, children: React.ReactNode}) {
  const [resource, setResource] = useState<string | null>(null);
  useEffect(() => {
    (async () => {
      const response = await axios.get(resourceUrl);
      setResource(response.data);
    })();
  }, [resourceUrl]);
  return <div className={styles['container']}>
    {React.Children.map(children, (child)=>{
      if(React.isValidElement(child)){
        return React.cloneElement(child, {[resourceName]:resource})
      }
      return child;
    })}
  </div>;
}

export default ResourceLoader;
