export function logBookData(Component: React.ComponentType<any>) {
  return function (props: any) {
    console.log({ props });
    return <Component {...props} />;
  };
}
