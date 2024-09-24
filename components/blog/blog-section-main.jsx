import Link from "next/link";
import React, { useEffect, useState } from "react";
import "swiper/css/bundle";
import { obtenerEntradas } from "../../service/entradas";
import { getLanguage } from "../../utils/i18n";

const BlogSectionMain = ({ blog_area_class, blog_single_class }) => {
  const [entradas, setEntradas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3; // Limitar a 3 blogs por página
  const language = getLanguage();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await obtenerEntradas(language);
        setEntradas(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [language]);

  // Función para cambiar la página
  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calcular el total de páginas
  const totalPages = Math.ceil(entradas.length / blogsPerPage);

  // Obtener los blogs para la página actual
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = entradas.slice(indexOfFirstBlog, indexOfLastBlog);

  return (
    <div className="m-4 p-4">
      <div className="blog-wrapper wow fadeInUp" data-wow-delay=".3s">
        {currentBlogs.length > 0 && (
          <div className="row">
            {currentBlogs.map((item) => (
              <div className="col-lg-4 col-md-6" key={item.id}>
                <div
                  className={`blog-single ${
                    blog_single_class || "style-2 mb-45"
                  }`}
                >
                  <div className="blog-thumb">
                    <Link href={`/blog-details/${item.id}`}>
                      <a>
                        <img src={item.miniatura} alt={item.titulo} />
                      </a>
                    </Link>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta-list">
                      <div className="blog-meta-single">
                        <div className="blog-meta-text">
                          <div className="blog-date">
                            {new Date(item.created_at).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                      <div className="blog-meta-single">
                        <div className="blog-meta-text">
                          Escrito por <span>{item.autor.nombre}</span> <br />
                        </div>
                      </div>
                    </div>
                    <h2 className="blog-title">
                      <Link href={`/blog-details/${item.id}`}>
                        <a>{item.titulo}</a>
                      </Link>
                    </h2>
                    <p className="blog-description">{item.descripcion_corta}</p>
                    <div className="blog-btn">
                      <Link
                        href={{
                          pathname: `/blog-details/${item.id}`
                        }}
                      >                  
                        <a className="text-btn">
                          <i className="fal fa-long-arrow-right"></i>Leer más
                          <i className="fal fa-long-arrow-right"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Paginación */}
      <div className="basic-pagination mt-50">
        <ul>
          <li>
            <a
              className={`prev page-numbers ${
                currentPage === 1 ? "disabled" : ""
              }`}
              onClick={() => currentPage > 1 && changePage(currentPage - 1)}
            >
              <i className="fal fa-angle-double-left"></i>
            </a>
          </li>
          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index}>
              <a
                className={`page-numbers ${
                  currentPage === index + 1 ? "current" : ""
                }`}
                onClick={() => changePage(index + 1)}
              >
                {index + 1}
              </a>
            </li>
          ))}
          <li>
            <a
              className={`next page-numbers ${
                currentPage === totalPages ? "disabled" : ""
              }`}
              onClick={() =>
                currentPage < totalPages && changePage(currentPage + 1)
              }
            >
              <i className="fal fa-angle-double-right"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BlogSectionMain;

// import Link from 'next/link';
// import React from 'react';
// import { useState } from 'react';
// import ModalVideo from 'react-modal-video';
// import { Navigation, Scrollbar, A11y, Autoplay, } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css/bundle';
// import blogItemsList from '../../data/blogs';
// import BlogAbout from './blog-about';
// import BlogSearch from './blog-search';
// import SidebarBlogs from './sidebar-blogs';
// import BlogTag from './blog-tag';
// import BlogCategories from './blog-categories';
// import SponsorAdd from './sponsor-add';

// const BlogSectionMain = () => {

//    const [isOpen, setIsOpen] = useState(false);
//    const openVideoModal = () => setIsOpen(!isOpen);

//    return (
//       <section className="blog-area pt-120 pb-60">
//          <div className="container">
//             <div className="row wow fadeInUp" data-wow-delay=".3s">

//                <div className="col-xl-8 col-lg-8 col-md-12">
//                   <div className="blog-main-wrapper mb-60">

//                      {blogItemsList.slice(11, 12).map((blog, i) => (
//                         <div key={i} className="blog-single">

//                            {!blog.video && !blog.slider && !blog.withoutImg && <div className="blog-thumb">
//                               <Link href={`/blog-details/${blog.id}`}><a><img src={blog.img} alt="" /></a></Link>
//                            </div>}

//                            <div className="blog-content">
//                               <div className={blog.catClass}>
//                                  <Link href="/blog"><a>{blog.blogCat} </a></Link>
//                                  <Link href="/blog"><a>{blog.blogCatA}</a></Link>
//                               </div>
//                               <div className={blog.authorClass}>
//                                  <div className="author-img">
//                                     <img src={blog.metaAuthorImg} alt="" />
//                                  </div>
//                                  <h4 className="author-name">{blog.metaBy} <a href="#">{blog.metaAuthor}</a></h4>
//                               </div>
//                               <h2 className="blog-title"><Link href={`/blog-details/${blog.id}`}><a>{blog.title}</a></Link></h2>
//                               <p>{blog.desc}</p>
//                               <div className="hr-1"></div>
//                               <div className="blog-meta-list">
//                                  <div className="blog-meta-single">
//                                     <div className="blog-meta-icon">
//                                        <i className="fas fa-eye"></i>
//                                     </div>
//                                     <div className="blog-meta-text">
//                                        {blog.blogView}
//                                     </div>
//                                  </div>
//                                  <div className="blog-meta-single">
//                                     <div className="blog-meta-icon">
//                                        <i className="fas fa-comments"></i>
//                                     </div>
//                                     <div className="blog-meta-text">
//                                        <Link href={`/blog-details/${blog.id}`}><a>{blog.blogComment}</a></Link>
//                                     </div>
//                                  </div>
//                                  <div className="blog-meta-single">
//                                     <div className="blog-meta-icon">
//                                        <i className="fas fa-calendar-alt"></i>
//                                     </div>
//                                     <div className="blog-meta-text">
//                                        {blog.date}
//                                     </div>
//                                  </div>
//                               </div>
//                            </div>
//                         </div>
//                      ))}

//                      <div className="blockquote-wrapper">
//                         <div className="blockquote-content">
//                            <div className="blockquote-icon">
//                               <img src="/assets/img/icon/quote-icon.png" alt="" />
//                            </div>
//                            <p>Office/partnership by submitting all
//                               the relevant documents</p>
//                         </div>
//                      </div>
//                      <div className="basic-pagination mt-50">
//                         <ul>
//                            <li><a className="prev page-numbers" href="#"><i className="fal fa-angle-double-left"></i></a></li>
//                            <li><span aria-current="page" className="page-numbers current">1</span></li>
//                            <li><a className="page-numbers" href="#">2</a></li>
//                            <li><a className="next page-numbers" href="#"><i className="fal fa-angle-double-right"></i></a></li>
//                         </ul>
//                      </div>
//                   </div>
//                </div>

//                <div className="col-xl-3 col-lg-4 col-md-8">
//                   <div className="blog-sidebar_wrapper mb-60">
//                      <BlogAbout />
//                      {/* <BlogSearch /> */}
//                      <SidebarBlogs />
//                      {/* <BlogCategories /> */}
//                      {/* <BlogTag /> */}
//                      <SponsorAdd />
//                   </div>
//                </div>
//             </div>
//          </div>
//       </section>
//    );
// };

// export default BlogSectionMain;
