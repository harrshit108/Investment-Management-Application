import React from 'react';


function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/images/largestBroker.svg' alt='Broker' />
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1 className='fs-3'>Largest stock broker in India</h1>
                    <p className='mb-5'> 2+ million Zerodha clients contribute to over 15% of all retail order <br></br> 
                        volumes in India daily by trading and investing in:
                    </p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Futures and Options</p>
                                </li>
                                <li>
                                    <p>Commodity derivatives</p>
                                </li>
                                <li>
                                    <p>Currency derivatives</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Stocks & IPOs</p>
                                </li>
                                <li>
                                    <p>Direct mutual funds</p>
                                </li>
                                <li>
                                    <p>Bonds and Govt. Securities</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src='media\images\pressLogos.png' style={{width:"90%"}} alt='Presslogo'/>
                </div>
            </div>
        </div>
    );
}

export default Awards;