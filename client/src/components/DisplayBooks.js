import React, { Component } from 'react';

export default function DisplayBooks(props){

  return(
    <div className='bookContainer'>
    {props.data.map(book=>{
      return(
        <div className="individualBooks">
        <h1 className='author'>Author: {book.volumeInfo.authors} </h1>
        <img className='image' src={book.volumeInfo.imageLinks.thumbnail}/>
        <p className='description'>Description: {book.volumeInfo.description} </p>
        <a className='more' href={book.volumeInfo.infoLink}>More Info</a>

        </div>
      )
    })}

    </div>
  )



}
