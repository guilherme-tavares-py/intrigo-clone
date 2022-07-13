import React from 'react'
import Typewriter from '../images/typewriter.png'
import Paper from '../images/paper.png'

export default function Content() {
    return(
        <div className='content'>
            <section className='inner-content'>
                
                <article>
                    <h2>Looking For a Freelance Writer?</h2>
                    <p>Copyright, Product Reviews, Blog Posts you name it. Best quality content delivered fast.</p>
                    <button>Contact</button>
                </article>
                <img src={Typewriter} />
            </section>
            
            <section className='inner-content'>
                <img id="paper-img" src={Paper} />
                <article id="inner-article-bottom">
                    <h2>Need a Realiable SEO Expert</h2>
                    <p>Let's have a look at your website and see where you can improve Speed, SEO, and Responsive Design.</p>
                    <button>Hire Me</button>
                </article>
            </section>

        </div>
    )
}