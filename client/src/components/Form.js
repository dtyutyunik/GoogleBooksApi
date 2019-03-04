import React from 'react';

export default function Form(props){
return(
  <form onSubmit={props.onSubmit}>
  <input type='text'
  name={props.name}
  onChange={props.onChange}
  value={props.search}
  />

  <input type='submit' value='Search'/>
  </form>
)
}
