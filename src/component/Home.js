import React, { useState } from 'react';

const MyBlog = () =>{
    
    let blogs = [
        {id: 1, auther: "Liz", body, "lorem sed do elite ipsum ut enium",title:"First blog"},
        {id: 2, auther: "Maya", body: "lorem sed do elite ipsum ut enium",title:"Second blog"},
        {id: 3, auther: "Jazmine", body: "lorem sed do elite ipsum ut enium",title:"Third blog"},
        {id: 4, auther: "Susan", body: "lorem sed do elite ipsum ut enium",title:"Fourth blog"},
    ];
    
    let bloglist = blog.map((blog) =>(
      <h1 key={blog.id}>{blog.auther}, {blog.body},{blog.title} </h1>  
    ));
    return(
        <div className='home'>
           {blogs.map((blog) => (
            <div className='preview' key={blog.id}>
            <h3>{blog.title}</h3>
            <p>Write byt{blog.auther}</p>
            </div>
           ))}
        </div>
    );
    }
    export default MyBlog;