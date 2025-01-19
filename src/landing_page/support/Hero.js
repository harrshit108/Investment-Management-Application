import React from 'react';

function Hero() {
    return (  
        <section className='container-fluid' id='supportHero'>
            <div className='p-5' id='supportWrapper'>
                <h5>Support Portal</h5>
                <a href='abc' style={{marginRight:"10rem"}}>Track Ticket</a>
            </div>
            <div className='row p-5 m-3'>
                <div className='col-8 p-3 '>
                    <h1 className='fs-5'>Search for an answer or browse help topics to create a ticket</h1>
                    <input placeholder='Eg: how do i activate F&O, why is my order getting rejected..' /><br/>
                        <a href='abc' className='mx-3' >Track account opening</a>
                        <a href='abc' className='mx-3'>Track segment activation</a>
                        <a href='abc' className='mx-3'>Intraday margins</a> <br/>
                        <a href='abc' className='mx-3'>Kite user manual</a>
                </div>
                <div className='col-4 p-3' >
                    <h1 className='fs-5'>Featured</h1>
                    <ol>
                        <li>
                            <a href='abc' >Track account opening</a>
                        </li>
                        <li>
                            <a href='abc' >Track segment activation</a>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;