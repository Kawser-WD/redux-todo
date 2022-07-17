import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "./BooksSlice";
import { v4 as uuidv4 } from "uuid";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { id: uuidv4(), title, author };
    dispatch(addBook(book));
    navigate("/show-books", { replace: true });
  };
  return (
    <div>
      <h2>Add Book</h2>
      <form  onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Book Name</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            class="form-control"
            onChange={(e) => setTitle(e.target.value)}
            required
           />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Author Name</label>
          <input 
         type="text"
         id="author"
         name="author"
         class="form-control"
         value={author}
         onChange={(e) => setAuthor(e.target.value)}
         required
           />
        </div>
        <button type="submit" class="btn btn-primary">Add</button>
      </form>
    </div>
  );
};

export default AddBook;

// CRUD - > CREATE, READ,
