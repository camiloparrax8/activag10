import React from 'react';

const BlogAbout = ({autor}) => {

    console.log(autor);
    return (
        <div className="sidebar-widget sidebar-about mb-50">
            <h4 className="sidebar-widget-title">Escritor</h4>
            <div className="sidebar-about-content">
              
                <h4 className="member-name">{autor.nombre}</h4>
                <p>{autor.profesion} <br /> {autor.cargo}.</p>
              
            </div>
        </div>
    );
};

export default BlogAbout;