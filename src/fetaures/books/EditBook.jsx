import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateBook } from "./BooksSlice";

const EditBook = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [id, setId] = useState(location.state.id);
  const [title, setTitle] = useState(location.state.title);
  const [author, setAuthor] = useState(location.state.author);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBook({ id, title, author }));
    navigate("/show-books", { replace: true });
  };

  return (
    <div>
      <h1>Edit Book</h1>
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
        <button type="submit" class="btn btn-primary">Update</button>
      </form>
    </div>
  );
};

export default EditBook;
