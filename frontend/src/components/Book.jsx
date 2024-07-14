import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Grid, TextField } from '@mui/material';
import "./Book.css"

const Book = ({ book }) => {
  const [openModal, setOpenModal] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setStartDate('');
    setEndDate('');
  };

  const handleBorrow = () => {
    // Implement your borrow logic here, e.g., send data to backend, update state, etc.
    console.log(`Borrowing ${book.title} from ${startDate} to ${endDate}`);
    handleCloseModal();
  };

  return (
    <div className='book'>
      <div className="book-left">
        <img src={book.imageURL} alt="Book Cover" className='book-img'/>
      </div>
      <div className="book-right">
        <p>Title: {book.title}</p>
        <p>ISBN: {book.isbn}</p>
        <p>Description: {book.desc}</p>
        <p>Author: {book.author}</p>
        <p>Cost: {book.cost}</p>
      </div>
      <span className='icon-container' onClick={handleOpenModal}>
        <img className="borrow-icon" src="./BorrowLogo.png" alt="Borrow" />
      </span>

      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Borrow Book - {book.title}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              Start Date : 
              <TextField
                // label="Start Date"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              End Date : 
              <TextField
                // label="End Date"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                fullWidth
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Cancel</Button>
          <Button onClick={handleBorrow} variant="contained" color="primary">
            Borrow
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Book;
