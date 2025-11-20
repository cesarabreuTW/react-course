import React, { useEffect, useState } from 'react';

export function ResorceLoaderRender({getData, render}: {getData: () => Promise<any>, render: (resource: any) => React.ReactNode}) {
  const [resource, setResource] = useState<any>(null);
  useEffect(() =>{
    (async () => {
      const data = await getData();
      setResource(data);
    })();
  }, [getData]);
  return render(resource);
}

export default ResorceLoaderRender;
