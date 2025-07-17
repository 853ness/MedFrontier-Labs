import { Link } from 'react-router-dom';

export default function FourOFour() {
   return (
      <div className="flex flex-col gap-8 items-center justify-center p-8">
         <h1 className="text-3xl font-bold mb-4">Error 404</h1>
         <p>The route you are in has no associated page or could otherwise not be found.</p>
         <Link to="/" className="px-4 py-2 rounded-full bg-gray-500 hover:bg-gray-600 transition-colors duration-300">Go Home</Link>
      </div>
   );
}
