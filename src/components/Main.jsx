import { Fragment } from 'react';

export default function Main({children}) {
  return (
    <Fragment>
      <main>
        <div className="container mx-auto p-4">
          {children}
        </div>
      </main>
    </Fragment>
  );
}