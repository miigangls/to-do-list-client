import React from 'react';

const add = () => {
    return (
        <div className="row">
            <form className="form">
                <div className="input-row ">
                    <div className="eleven columns">
                        <input className="u-full-width" type="text"  />
                    </div>
                    <div className="one columns">
                        <button className="button-primary"><i className="fas fa-plus"></i></button>
                    </div>    
                </div>
            </form>
        </div>
    );
};

export default add;