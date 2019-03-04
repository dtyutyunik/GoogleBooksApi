import React, { Component } from 'react';

export default function DisplayBooks(props){

  return(
    <div className='bookContainer'>
    {props.data.map(book=>{
      return(
        <div className="individualBooks">
        <h1>Author: {book.volumeInfo.authors} </h1>
        <img src={book.volumeInfo.imageLinks.thumbnail}/>
        <p>Description: {book.volumeInfo.description} </p>
        <a href={book.volumeInfo.infoLink}>More Info</a>

        </div>
      )
    })}

    </div>
  )



}
