import { useSelector } from 'react-redux';

const BookList = () => {
  const { items, status } = useSelector((state) => state.books);

  if (status === 'loading') return <p className="text-center text-2xl  text-white">Loading...</p>;
  if (status === 'failed') return <p className="text-center text-2xl  text-red-500 text-white">Failed to fetch books. Try again!</p>;

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center p-8 -mt-60"
      style={{ backgroundImage: "url('/book.jpg')" }}
    >
      <div className="p-6 rounded-2xl shadow-2xl max-w-6xl w-full">
      <h2 className="text-3xl font-bold text-center mb-6 text-white">Book Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.slice(0, 9).map((book, index) => (
            <div 
              key={index} 
              className="p-4 border rounded-lg shadow-lg bg-blue-500 bg-opacity-80 backdrop-blur-lg backdrop-saturate-150 text-white">
              <h3 className="text-xl font-bold mb-2">{book.title}</h3>
              <p className="text-sm">Author: {book.author_name?.join(', ') || 'Unknown'}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookList;