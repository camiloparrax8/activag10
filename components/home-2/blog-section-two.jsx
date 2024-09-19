import Link from 'next/link';
import React from 'react';
import blogItemsList from '../../data/blogs';
import { getLanguage, getTranslation } from "../../utils/i18n";
import { useEffect, useState } from 'react';
import { obtenerEntradas } from '../../service/entradas';

const BlogSectionTwo = ({blog_area_class , blog_single_class}) => {
    const [entradas, setEntradas] = useState([]);
    const language = getLanguage();

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await obtenerEntradas(language);
            setEntradas(data); 
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
    }, [language]);

    const isNew = (createdAt) => {
        const daysDifference = (new Date() - new Date(createdAt)) / (1000 * 60 * 60 * 24);
        return daysDifference <= 7;
    };

    const truncateText = (text, limit) => {
        if (text.length > limit) {
            return text.substring(0, limit) + '...';
        }
        return text;
    };

    return (
        <section className={`blog-area ${blog_area_class ? blog_area_class : 'blog-area-2 pb-75'}`}>
            <div className="container">
                <div className="row justify-content-center wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-lg-8">
                        <div className="section-title text-center style-2">
                            <span className="section-subtitle">[ {getTranslation(language, 'home.blog.section-subtitle')} ]</span>
                            <h2 className="section-main-title mb-45">{getTranslation(language, 'home.blog.section-main-title')}</h2>
                        </div>
                    </div>
                </div>
                <div className="blog-wrapper wow fadeInUp" data-wow-delay=".3s">
                    {blogItemsList &&
                        <div className="row">
                        {entradas.slice(-3).map((item, num) => (
                            <div className="col-lg-4 col-md-6" key={item.id}>
                                <div className={`blog-single ${blog_single_class ? blog_single_class : 'style-2 mb-45'}`}>
                                    <div className="blog-thumb">
                                        <Link href={`/blog-details/${item.id}`}>
                                            <a>
                                                <img src={item.miniatura} alt={item.titulo} />
                                                {/* {isNew(item.created_at) && <span className="new-label">Nuevo</span>} */}
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-meta-list">
                                            <div className="blog-meta-single">
                                                <div className="blog-meta-text">
                                                    <div className="blog-date">{new Date(item.created_at).toLocaleDateString()}</div>
                                                </div>
                                            </div>
                                            <div className="blog-meta-single">
                                                <div className="blog-meta-text">
                                                    Escrito por <span>{item.autor.nombre}</span> <br />
                                                    {/* <small>{item.autor.cargo}</small> */}
                                                </div>
                                            </div>
                                        </div>
                                        <h2 className="blog-title">
                                            <Link href={`/blog-details/${item.id}`}>
                                                <a>{truncateText(item.titulo, 18)}</a>
                                            </Link>
                                        </h2>
                                        <p className="blog-description">{item.descripcion}</p>
                                        <div className="blog-btn">
                                            <Link href={`/blog-details/${item.id}`}>
                                                <a className="text-btn">
                                                    <i className="fal fa-long-arrow-right"></i>Leer más<i className="fal fa-long-arrow-right"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        </div>
                    }
                </div>
            </div>
        </section>
    );
};

export default BlogSectionTwo;
