import React from 'react';

const Modal = (props) => {

    console.log(props.singleData);

    const { image_link, description, integrations, features } = props.singleData;
    console.log(image_link);
    console.log(features);
    // making array with an array of object -> Object.keys
    console.log(Object.keys(features || {}));
    console.log(Object.values(features || {}));

    return (
        <>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <div className="card lg:card-side bg-base-100">
                        <div className="card-body">
                            <h2 className="card-title">{description ? description : 'NOT FOUND'}</h2>

                            <div className='flex justify-between mt-5'>
                                <div>
                                    <h3 className='text-xl font-bold'>Features</h3>
                                    {
                                        Object.values(features || {}).map(feature => <p>{feature.feature_name}</p>)
                                    }
                                </div>
                                <div>
                                    <h3 className='text-xl font-bold'>Integrations</h3>
                                    {integrations &&
                                        integrations.map(integration => <p>{integration ? integration : 'not found'}</p>)
                                    }
                                </div>
                            </div>

                        </div>

                        <figure className='w-full'>
                            <img className='w-full h-full' src={image_link && image_link[0]} alt="Album" />
                        </figure>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my_modal_6" className="btn">Close!</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;