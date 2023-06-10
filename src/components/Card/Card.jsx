import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

const Card = () => {

    const [data, setData] = useState([]);
    const [singleData, setSingleData] = useState({});
    const [showAll, setShowAll] = useState(false);
    const [uniqueID, setUniqueID] = useState(null);


    // console.log(uniqueID);
    console.log(singleData);

    

    // useEffect(() => {
    //     // console.log('hello from useEffect');
    //     const loadData2 = async () => {
    //         const res2 = await fetch(`https://openapi.programming-hero.com/api/ai/tools/${uniqueID}`);
    //         const value2 = await res2.json();
    //         // console.log(value.data.tools);
    //         console.log(value2.data);
    //     };

    //     loadData2();

    // }, [uniqueID]);

    const handleShowAll = () => {
        setShowAll(true);
        console.log('hello');
    }
    
    // SORTING DATE
    const handleSort =()=>{
        
        const sortedData = data.sort((a, b)=>{
            return new Date(a.published_in) - new Date(b.published_in)      
        });
        setData([...data, sortedData]);
        
    };

    // console.log(sortedData);

    useEffect(() => {

        const loadData = async () => {
            const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
            const value = await res.json();
            // console.log(value.data.tools);
            setData(value.data.tools);
        };

        loadData();

    }, [])

    useEffect(() => {
        console.log('hello from useEffect');
        fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueID}`)
            .then((response) => response.json())
            .then((data) => setSingleData(data.data))

    }, [uniqueID]);

    // console.log(data);
    

    return (
        <>
            <span onClick={handleSort}>
            <Button>Sort By Date</Button>
            </span>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-12'>
                {/* {
            data.map(singleData=>{
                // console.log(singleData);
                return <SingleData singleData = {singleData}></SingleData>
            })
        } */}

                {/* as same as the above code */}


                {
                    data.slice(0, showAll ? 12 : 6).map(singleData => <SingleData key={singleData.id} singleData={singleData} setUniqueID={setUniqueID}></SingleData>)
                }
            </div>

            {
                !showAll && <span onClick={handleShowAll}><Button>See More</Button></span>
            }

            <Modal singleData={singleData}></Modal>

        </>
    );
};

export default Card;