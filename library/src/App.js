import React, { useState } from 'react';
import './App.css';

function App() {
  let [library, setLibrary] = useState([]);
  let [author, setAuthor] = useState("Not found");
  let [name, setName] = useState("Not found");

  function handleName(e) {
    e.preventDefault();
    setName(e.target.value)
  }

  function handleAuthor(e) {
    e.preventDefault();
    setAuthor(e.target.value);
  }

  function handleAddBook(e) {
    e.preventDefault();
    setLibrary([...library, {
      id: Date.now(),
      name: name,
      author: author  
    }]);
  }

  function removeBook(id) {
    setLibrary(library.filter(book => book.id !== id));
  }
  return (
    <div>
      <form onSubmit={handleAddBook}>
        <input type="text" onChange={handleName}></input>
        <input type="text" onChange={handleAuthor}></input>
        <button type="submit">Добавить</button>
        <ul>
          {library.map(elem => {
            return(
              <li key={elem.id}>
                <p>Book name is {elem.name}</p>
                <p>Author is {elem.author}</p>
                <a href="/#" onClick={() => removeBook(elem.id)}>Удалить книгу</a>
              </li>
            )
          })}
        </ul>
      </form>
      
    </div>
  );
}

export default App;
