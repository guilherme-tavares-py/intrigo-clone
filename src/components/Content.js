import React from 'react'
import Typewriter from '../images/typewriter.png'

export default function Content() {
    return(
        <div className='content'>
            <section className='inner-content'>
                <article>
                    <h2>Looking For a Freelance Writer?</h2>
                    <p>Copyright, Product Reviews, Blog Posts you name it. Best quality content delivered fast.</p>

                </article>
            </section>
            <img src={Typewriter} />

        </div>
    )
}