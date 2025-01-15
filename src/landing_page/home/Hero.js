import React from 'react';


function Hero() {
    return ( 
        <div className='Container p-5 mb-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero Images'className='mb-5' style={{padding:"0 10rem 0 10rem"}}/>
                <h1 className='mt-5 fs-3'>Invest in everything</h1>
                <p className='mt-2'>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                <button className='btn btn-primary p-2 mt-2 mb-5' style={{width:"12%",margin: "0 auto"}}>Signup Now</button>
            </div>
        </div>
    );
}

export default Hero;