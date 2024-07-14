import React from 'react'
import "./Book.css"

const Book = ({book}) => {
  return (
    <div className='book'>
        <div className="book-left">
            <img src={book.imageURL} alt="Image" className='book-img'/>
        </div>
        <div className="book-right">
            <p>Title : {book.title}</p>
            <p>ISBN : {book.isbn}</p>
            <p>Desc : {book.desc}</p>
            <p>Author : {book.author}</p>
            <p>Cost : {book.cost}</p>
        </div>
        <span className='icon-container'><img className="borrow-icon" src="./BorrowLogo.png" alt="" /></span>
        {/* <strong>{book.title}</strong> by {book.author} ({book.year}) */}
    </div>
  )
}

export default Book

//  title, id, isbn, author, publisher, edition, desc, language, pages, cost, count, imageURL