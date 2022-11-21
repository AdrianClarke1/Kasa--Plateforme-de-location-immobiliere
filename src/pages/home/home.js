import React from 'react';
import image from "../../assets/homeImage.jpg"
import "./home.css"
import Card from "../../components/card/card"

function Home(){
    return (
        <main>
        <section className="sectionIntro">
            <img src={image} alt="Paysage bord de mer" />
            <h1>Chez vous, partout et ailleurs</h1>
        </section>
            <Card />
        </main>
    )
}

export default Home;