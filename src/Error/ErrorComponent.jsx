import { Link } from 'react-router-dom';

export function ErrorComponent() {
  return (
    <div className="mt-10 mb-55 ml-50">
      <p>
        Note found page!!! OOps wrong place
      </p>
      <Link to="/">Go back to home</Link>
    </div>
  );
}
