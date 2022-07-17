import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBook } from "./BooksSlice";

const BooksView = () => {
  const books = useSelector((state) => state.booksReducer.books);
  const dispatch = useDispatch();
  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id));
  };
  return (
    <div>
      <h2>List of Books</h2>
      <table class="table" style={{width:'500px', marginTop:'60px', marginBottom:'20px'}}>
        <thead>
          <tr>
            {/* <th>ID</th> */}
            <th scope="col" >Title</th>
            <th scope="col" >Author</th>
            <th scope="col" >Action</th>
          </tr>
        </thead>
        <tbody>
          {books &&
            books.map((book) => {
              const { id, title, author } = book;
              return (
                <tr key={id}>
                  {/* <td>{id}</td> */}
                  <td>{title}</td>
                  <td>{author}</td>
                  <td>
                    <Link to="/edit-book" state={{ id, title, author }}>
                      <button className='btn' style={{backgroundColor:'#000', color:'#fff', marginRight:'5px'}} >Edit</button>
                    </Link>
                    <button
                      onClick={() => {
                        handleDeleteBook(id);
                      }}
                      className='btn' style={{backgroundColor:'#000', color:'#fff'}}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default BooksView;
