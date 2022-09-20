import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { blogList } from '../../config/data';
import Chip from '../../components/common/Chip';
import EmptyList from '../../components/common/EmptyList';
import './styles.css';
import { Link } from 'react-router-dom';
import Chip1 from '../../components/common/Chip/chip1';
import Chip2 from '../../components/common/Chip/chip2';

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <>
      <Link className='blog-goBack' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {blog ? (
        <div className='blog-wrap'>
          <header>
            <p className='blog-date'>Published {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            <div className='blog-subCategory'>
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          <img src={blog.cover} alt='cover' />
          <div className=' heading'>
              {blog.heading.map((category, i) => (
                <div key={i}>
                  <Chip1 label={(category)} />
                </div>
              ))}
              </div>
              <div className='blog-desc'>
              {blog.description.map((category, i) => (
                <div key={i}>
                  <Chip2 label={(category)} />
                </div>
              ))}
               {blog.point1.map((category, i) => (
                <div key={i}>
                  <Chip1 label={(category)} />
                </div>
              ))}
               {blog.subpoint1.map((category, i) => (
                <div key={i}>
                  <Chip2 label={(category)} />
                </div>
              ))}
             
             {blog.point2.map((category, i) => (
                <div key={i}>
                  <Chip1 label={(category)} />
                </div>
              ))}
               {blog.subpoint2.map((category, i) => (
                <div key={i}>
                  <Chip2 label={(category)} />
                </div>
              ))}
                {blog.point3.map((category, i) => (
                <div key={i}>
                  <Chip1 label={(category)} />
                </div>
              ))}
               {blog.subpoint3.map((category, i) => (
                <div key={i}>
                  <Chip2 label={(category)} />
                </div>
              ))}
               {blog.point4.map((category, i) => (
                <div key={i}>
                  <Chip1 label={(category)} />
                </div>
              ))}
               {blog.subpoint4.map((category, i) => (
                <div key={i}>
                  <Chip2 label={(category)} />
                </div>
              ))}
               {blog.point5.map((category, i) => (
                <div key={i}>
                  <Chip1 label={(category)} />
                </div>
              ))}
               {blog.subpoint5.map((category, i) => (
                <div key={i}>
                  <Chip2 label={(category)} />
                </div>
              ))}
             
              
              </div>
        </div>

      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Blog;
