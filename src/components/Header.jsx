import { Fragment } from 'react';
import "../styles/Tailwind.css"

export default function Header({title}) {
  return (
    <Fragment>
      <header>
        <div className="bg-orange-100 mx-auto p-4">
          <h1 className="text-center">{title}</h1>
        </div>
      </header>
    </Fragment>
  );
}