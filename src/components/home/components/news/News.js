import React from 'react'
import './News.css'
import post1 from '../../../../images/post-1-570x461.jpg'
import post2 from '../../../../images/post-2-270x215.jpg'
import post3 from '../../../../images/post-3-270x215.jpg'
const News = () => {
    return (
        <section className='newsSection'>
            <div className='newsContainer'>
                <h2>Latest news</h2>
                <div className='newsMainContainer'>
                    <div className='newsLeftContainer'>
                        <article className="post post-nikki post-nikki-2">
                            <div className="post-nikki-figure"><img src={post1} />
                            </div>
                            <div className="post-nikki-body">
                                <div>
                                    <div className="post-nikki-time">
                                        <time datetime="2020-09-08">August 9, 2020</time>
                                    </div>
                                    <div className="post-nikki-title"><a href="#">Deciphering your cat’s language</a></div>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className='newsRightContainer'>
                        <div className='newsRightContainerInner'>
                            <div className='rightDiv1'>
                                <article className="post post-nikki">
                                    <div className="unit unit-spacing-lg flex-column flex-md-row align-items-center">
                                        <div className="unit-left"><a className="post-nikki-figure" href="#"><img src={post2}/></a></div>
                                        <div className="unit-body">
                                            <div className="post-nikki-time">
                                                <time datetime="2020-09-08">August 9, 2020</time>
                                            </div>
                                            <div className="post-nikki-title"><a href="#">Easy tricks to teach your dog</a></div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className='rightDiv2'>
                            <article className="post post-nikki">
                                    <div className="unit unit-spacing-lg flex-column flex-md-row align-items-center">
                                        <div className="unit-left"><a className="post-nikki-figure" href="#"><img src={post3}/></a></div>
                                        <div className="unit-body">
                                            <div className="post-nikki-time">
                                                <time datetime="2020-09-08">August 9, 2020</time>
                                            </div>
                                            <div className="post-nikki-title"><a href="#">8 tips for taking the perfect photo of your pet</a></div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default News