import Link from "next/link";
import React, { useEffect, useState } from "react";
import BlogAbout from "../blog/blog-about";
import BlogCategories from "../blog/blog-categories";
import BlogSearch from "../blog/blog-search";
import BlogTag from "../blog/blog-tag";
import SidebarBlogs from "../blog/sidebar-blogs";
import SponsorAdd from "../blog/sponsor-add";
import Breadcrumb from "../common/breadcrumb";
import BlogActions from "./blog-actions";
import BlogComment from "./blog-comment";
import BlogForm from "./blog-form";
import BlogNav from "./blog-nav";
import BlogWritter from "./blog-writter";
import { useRouter } from "next/router";
import { obtenerDetallesMultimedia } from "../../service/entradas";
import { getLanguage } from "../../utils/i18n";
import VideoGallery from "../VideoGallery/VideoGallery";
import PortfolioSlider from "./portfolio-slider";
import PortfolioSliderThree from "./portfolio-slider-three";

const BlogDetailsArea = () => {
  const router = useRouter();
  const { id } = router.query;
  const [entradas, setEntradas] = useState(null);
  const [videos, setVideos] = useState([]);
  const [imagenes, setImagenes] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [autor, setAutor] = useState("");
  const language = getLanguage();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await obtenerDetallesMultimedia(id);
        setEntradas(data);

        const videoUrls = data.multimedias
          .filter((media) => media.tipo === "video")
          .map((video) => ({
            id: video.id,
            url: video.url,
          }));

        const imagenes = data.multimedias
          .filter((media) => media.tipo === "imagen")
          .map((imagen) => ({
            id: imagen.id,
            url: imagen.url,
          }));

        if (data.autor) {
          const autorInfo = {
            nombre: data.autor.nombre ,
            cargo: data.autor.cargo ,
            profesion: data.autor.profesion,
          };
          setAutor(autorInfo); 
        } else {
          setAutor({
            nombre: "Nombre no disponible",
            cargo: "Cargo no disponible",
            profesion: "Profesión no disponible",
          });
        }

        setImagenes(imagenes);
        setVideos(videoUrls);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  // console.log(entradas.autor.nombre);
  console.log(entradas)

  useEffect(() => {
    if (entradas) {
      switch (language) {
        case "es":
          setTitulo(entradas.titulo);
          setDescripcion(entradas.descripcion_larga);
          setAutor(entradas.autor);
          break;
        case "en":
          setTitulo(entradas.titulo_ingles);
          setDescripcion(entradas.descripcion_larga_ingles);
          break;
        case "em":
          setTitulo(entradas.titulo_emb);
          setDescripcion(entradas.descripcion_larga_emb);
          setAutor(entradas.autor);

          break;
        default:
          setTitulo(entradas.titulo);
          setDescripcion(entradas.descripcion_larga);
          setAutor(entradas.autor);
          break;
      }
    }
  }, [language, entradas]);

  return (
    <>
      <Breadcrumb
        breadTitle={"blog details"}
        breadSubtitle={"Provides hassle-free backyard transformation"}
        breadHome={"Home"}
        breadMenu={"blog details"}
      />
      <section className="blog-area pt-120 pb-60">
        <div className="container">
          <div className="row wow fadeInUp" data-wow-delay=".3s">
            <div className="col-xl-12 col-lg-10 col-md-12">
              <div className="blog-details-wrapper mb-60">
                <div className="blog-single-details">
                  <div className="blog-meta-list">
                    <div className="blog-meta-single">
                      <div className="blog-meta-icon">
                        <i className="fas fa-eye"></i>
                      </div>
                      <div className="blog-meta-text"></div>
                    </div>
                    <div className="blog-meta-single">
                      <div className="blog-meta-icon">
                        <i className="fas fa-comments"></i>
                      </div>
                      <div className="blog-meta-text">
                        <Link href="/blog-details">
                          <a>{/* Otros enlaces aquí */}</a>
                        </Link>
                      </div>
                    </div>
                    <div className="blog-meta-single">
                      <div className="blog-meta-icon">
                        <i className="fas fa-calendar-alt"></i>
                      </div>
                      <div className="blog-meta-text">
                        {/* {new Date(item.created_at).toLocaleDateString()} */}
                        {entradas && entradas.created_at
                          ? new Date(entradas.created_at).toLocaleDateString(
                              "es-ES",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )
                          : "Fecha no disponible"}
                      </div>
                    </div>
                  </div>
                  <h2>{titulo}</h2>
                  <p>{descripcion}</p>
                  <div className="fotos mt-4">
                    {imagenes.length === 1 ? (
                      <img
                        src={`https://activag10-panel-laravel.orioncolombia.com/${imagenes[0].url}`}
                        alt=""
                        width="800"
                        height="auto"
                      />
                    ) : imagenes.length > 1 ? (
                      <PortfolioSliderThree imagenes={imagenes} />
                    ) : null}
                  </div>
                  {videos.length >= 1 && <VideoGallery videos={videos} />}
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-2 col-md-8">
              <div className="blog-sidebar_wrapper mb-60">
                <BlogAbout autor = {autor}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsArea;
