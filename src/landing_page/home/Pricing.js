import React from 'react';


function Pricing() {
    return (  
        <div className='container '>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='fs-3 mb-3'>Unbeatable pricing</h1>
                    <p>
                        We pioneered the concept of discount broking and price <br/>
                        transparency in India. Flat fees and no hidden charges.
                    </p>
                    <a href='abc' style={{textDecoration:"none"}}>See pricing &nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col-6 mb-5'>
                    <div className='row text-center'>
                        <div className='col border p-3'>
                            <h1 className='fs-3 mb-4 my-3'>&#8377;0</h1>
                            <p>Free equity delivery and <br/> direct mutual funds</p>
                        </div>
                        <div className='col border p-3'>
                            <h1 className='fs-3 mb-4 my-3'>&#8377;20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;