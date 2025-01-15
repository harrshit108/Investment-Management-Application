import React from 'react';

function Universe({imageURL}) {
    return (  
        <div className='container mt-5 '>
            <div className='row text-center'>
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
                
                <div className='col-4 mt-5 p-3'>
                    <img src='media/images/smallcaseLogo.png' alt='smallcaseLogo'/>
                    <p className='text-small text-muted mt-2'>Thematic investment platform</p>
                </div>
                <div className='col-4 mt-5 p-3'>
                    <img src='media/images/streakLogo.png' alt='smallcaseLogo' style={{width:'30%'}} />
                    <p className='text-small text-muted mt-2'>Algo & strategy platform</p>
                </div>
                <div className='col-4 mt-5 p-3'>
                    <img src='media/images/sensibullLogo.svg' alt='smallcaseLogo'/>
                    <p className='text-small text-muted mt-2'>Option trading platform</p>
                </div>
                <div className='col-4 mt-5 p-3'>
                    <img src='media/images/zerodhaFundhouse.png' alt='smallcaseLogo' style={{width:'40%'}}/>
                    <p className='text-small text-muted mt-2'>Asset management</p>
                </div>
                <div className='col-4 mt-5 p-3'>
                    <img src='media/images/goldenpiLogo.png' alt='smallcaseLogo'/>
                    <p className='text-small text-muted mt-2'>Bonds trading platform</p>
                </div>
                <div className='col-4 mt-5 p-3'>
                    <img src='media/images/dittoLogo.png' alt='smallcaseLogo' style={{width:'20%'}}/>
                    <p className='text-small text-muted mt-2'>Insurance</p>
                </div>
                <button className='btn btn-primary p-2 mt-2 mb-5' style={{width:"12%",margin: "0 auto"}}>Signup Now</button>
            </div>
        </div>
    );
}

export default Universe;