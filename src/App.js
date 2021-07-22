// import logo from "./logo.svg";
import "./App.css";
import Footer from "./Footer";
import React, { useState, useEffect } from "react";
import Cabecera from "./components/Cabecera";

function App() {
  const [listNews, setListNews] = useState({});

  useEffect(() => {
    // DEMO: Para obtener los datos de la API en nuestro localhost usar un proxy
    // URL API: https://newsapi.org/v2/everything?q=tesla&from=2021-06-19&sortBy=publishedAt&apiKey=0c76dce6efd947d0bd1f6ac1f4324b9e
    // NEW URL: https://newsapi.org/v2/everything?q=tesla&from=2021-07-19&apiKey=34d6193c617441eeb152186da0e6f8eb

    // const proxyUrl = "https://cors-anywhere.herokuapp.com/"; // URL PROXY (si no te permite por temas de permisos)
    const qInTitle = "tesla"; // noticias sobre "tesla"
    const from = "2021-07-19"; // fecha noticias publicadas (desde)
    const apiKey = "34d6193c617441eeb152186da0e6f8eb"; // reemplazar tu API KEY
    const url = `https://newsapi.org/v2/everything?q=${qInTitle}&from=${from}&apiKey=${apiKey}`;
    const request = new Request(url);

    fetch(request)
      .then((response) => response.json()) // convierte a JSON
      .then((news) => {
        // si todo es correcto lista los resultados en consola
        console.log(news);
        setListNews(news);
      })
      .catch((error) => {
        // si hubo un error impreme los detalles en consola
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <Cabecera></Cabecera>
      <h1 className="h1">Lista Noticias de Tesla</h1>
      <section className="Section">
        {listNews.articles &&
          listNews.articles.map((item) => (
            <div className="Article">
              <a key={item.publishedAt} className="a" href={item.url}>
                {item.title}
              </a>
              <br />
              <img
                key={item.publishedAt}
                className="Image"
                src={item.urlToImage}
                alt={item.title}
              />
              <br />
              <p key={item.publishedAt} className="p">
                {item.content}
              </p>
              <br />
              <p className="foot">
                {item.author} <br /> {item.publishedAt}
              </p>
            </div>
          ))}
      </section>
      <Footer />
    </div>
  );
}

export default App;
