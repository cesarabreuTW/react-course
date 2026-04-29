import { useEffect, useState } from 'react';

type Resource = Record<string, any>;

const useResource = (getData: () => Promise<Resource[]>) => {
  const [resource, setResource] = useState<Resource[]>([]);

  useEffect(() => {
    (async () => {
      const response = await getData();
      setResource(response);
    })();
  }, [getData]);
  return resource;
};

export default useResource;
