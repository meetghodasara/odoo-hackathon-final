import React from 'react'
import Book from './Book';
import './BookList.css'

const BookList = ({title}) => {

    const books = [
        {
          id: 1,
          isbn: '978-3-16-148410-0',
          title: 'The Great Adventure',
          author: 'John Doe',
          publisher: 'Adventure Books Ltd.',
          edition: '1st Edition',
          desc: 'A thrilling adventure novel that takes you on a journey around the world.',
          language: 'English',
          pages: 320,
          cost: '$19.99',
          count: 5,
          imageURL: 'https://images.ctfassets.net/usf1vwtuqyxm/3d9kpFpwHyjACq8H3EU6ra/85673f9e660407e5e4481b1825968043/English_Harry_Potter_4_Epub_9781781105672.jpg?w=914&q=70&fm=webp',
        },
        {
          id: 2,
          isbn: '978-1-22-345678-9',
          title: 'Cooking for Beginners',
          author: 'Jane Smith',
          publisher: 'Kitchen Press',
          edition: '2nd Edition',
          desc: 'A comprehensive guide to cooking basics for beginners.',
          language: 'English',
          pages: 240,
          cost: '$14.50',
          count: 10,
          imageURL: 'https://images.ctfassets.net/usf1vwtuqyxm/3d9kpFpwHyjACq8H3EU6ra/85673f9e660407e5e4481b1825968043/English_Harry_Potter_4_Epub_9781781105672.jpg?w=914&q=70&fm=webp',
        },
        {
          id: 3,
          isbn: '978-5-555-55555-5',
          title: 'History of Ancient Civilizations',
          author: 'Michael Johnson',
          publisher: 'History Books Co.',
          edition: '3rd Edition',
          desc: 'Explore the rise and fall of ancient civilizations across the globe.',
          language: 'English',
          pages: 400,
          cost: '$29.99',
          count: 3,
          imageURL: 'https://images.ctfassets.net/usf1vwtuqyxm/3d9kpFpwHyjACq8H3EU6ra/85673f9e660407e5e4481b1825968043/English_Harry_Potter_4_Epub_9781781105672.jpg?w=914&q=70&fm=webp',
        },
        // Add more books as needed
      ];
      

  return (
    <div>
        <h3 className='book-title'>{title}</h3>
        <div className='books'>
                {books.map(book => (
                <div key={book.id}>
                    <div className="book-item">
                        <Book book={book}/>
                    </div>
                    <hr />
                </div>
                ))}
        </div>
    </div>
  )
}

export default BookList