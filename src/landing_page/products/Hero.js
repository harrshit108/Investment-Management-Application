import React from 'react';

function Hero() {
    return (  
        <div className='container mb-5 border-bottom'>
            <div className='text-center mt-5 p-5'>
                <h1>Zerodha Products</h1>
                <h4 className='text-muted mt-3 fs-4'>Sleek, modern, and intuitive trading platforms</h4>
                <p className='mt-3 mb-5'>Check out our <a href='abc' style={{textDecoration:"none"}}>investment offerings →</a></p>
            </div>
        </div>
    );
}

export default Hero;