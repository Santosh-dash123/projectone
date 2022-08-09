import React from 'react';
import { NavLink } from 'react-router-dom';
import web1 from "../images/s1.jpg";
import web2 from "../images/s2.jpg";
import web3 from "../images/s3.jpg";
import web4 from "../images/s4.jpg";
import web5 from "../images/s5.jpg";
import web6 from "../images/s8.jpg";

const Card = () => {
    const data = [
        {
            id : 1,
            imgsrc : web1, //Here we import that image as a variable so in javascript we can directly use no need of curly braces .
            title : "Software Devlopment"
        },
        {
            id : 2,
            imgsrc : web2,
            title : "App Devlopment"
        },
        {
            id : 3,
            imgsrc : web3,
            title : "Android Devlopment"
        },
        {
            id : 4,
            imgsrc : web4,
            title : "C# Devloper"
        },
        {
            id : 5,
            imgsrc : web5,
            title : "Java Devloper"
        },
        {
            id : 6,
            imgsrc : web6,
            title : "Python Devloper"
        }
    ]
    return (
        <>
            {data.map((accept)=>{
                return <div className='col-md-4 col-10 mx-auto' key={accept.id}>
                <div className="card">
                    <img src={accept.imgsrc} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{accept.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="/contact" className="btn btn-outline-primary">Contact us</NavLink>
                    </div>
                </div>
            </div>
            })}
        </>
    );
};

export default Card;
