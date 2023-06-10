import React from 'react';

const Button = (props) => {
    // console.log(props);
    const {children} = props;
    return (
        <div className='flex items-center justify-center my-5'>
            <button className="btn btn-error">{children}</button>  
        </div>
    );
};

export default Button;