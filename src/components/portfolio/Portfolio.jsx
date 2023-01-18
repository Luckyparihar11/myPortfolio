import React from "react";
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';


const data=[
    {
        id: 1,
        image: IMG6,
        title: 'Gym Website',
        github: 'https://github.com/Luckyparihar11/GYM-Website',
        demo: 'https://gymwebsitefronted.netlify.app',

    },
    {
        id: 2,
        image: IMG2,
        title: 'Drum-Kit',
        github: 'https://github.com/Luckyparihar11/drum-kit',
        demo: 'https://night-light-cafe.netlify.app',

    },
    {
        id: 3,
        image: IMG5,
        title: 'Simon-Game',
        github: 'https://github.com/Luckyparihar11/Simon-Game',
        demo: 'https://react-e-commerce-project123.netlify.app/',

    },

      {
         id: 4,
         image: IMG4,
         title: 'Keeper App',
         github: 'https://github.com/Luckyparihar11/Keeper-App',
         demo: 'https://reservet.netlify.app/',

     },

     {
      id: 5,
      image: IMG3,
      title: 'TinDog',
      github: 'https://github.com/Luckyparihar11/Tindog-website',
      demo: 'https://reservet.netlify.app/',

  }
    // {
    //     id: 4,
    //     image: IMG4,
    //     title: 'My Portfolio',
    //     github: 'https://github.com/Kartikay123/reservet',
    //     demo: 'https://reservet.netlify.app/',

    // }

]

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h2 className="mehnat">My Projects</h2>
            <div className="container portfolio-container">

            {
                data.map(({id,image,title,github,demo})=>{
                    return(
                        <article key={id}className='portfolio-item'>
                    <div className="portfolio-item-image">
                       <img src={image} alt={title}/>
                    </div>
                    <h3 className="kkk">{title}</h3>
                    <div className="portfolio-item-cta">
                    <a href={github} className="btn" rel="noreferrer" target='_blank'>Github</a>
                        <a href={demo} className="btn btn-primary" rel="noreferrer" target='_blank'>Live Demo</a>
                    </div>
                       

                </article>
                    )
                })
            }


                {/* <article className='portfolio-item'>
                    <div className="portfolio-item-image">
                       <img src={IMG1} alt="Unknown"/>
                    </div>
                    <h3>Smart India Hackathon(2022)</h3>
                    <div className="portfolio-item-cta">
                    <a href="https://github.com/Kartikay123/reservet" className="btn" target='_blank'>Github</a>
                        <a href="https://reservet.netlify.app/" className="btn btn-primary" target='_blank'>Live Demo</a>
                    </div>
                </article> */}


                {/* <article className='portfolio-item'>
                    <div className="portfolio-item-image">
                       <img src={IMG1} alt="Unknown"/>
                    </div>
                    <h3>Smart India Hackathon(2022)</h3>
                    <div className="portfolio-item-cta">
                    <a href="https://github.com/Kartikay123/reservet" className="btn" target='_blank'>Github</a>
                        <a href="https://reservet.netlify.app/" className="btn btn-primary" target='_blank'>Live Demo</a>
                    </div>
                </article> */}

            </div>
        </section>
    );
}
export default Portfolio;
