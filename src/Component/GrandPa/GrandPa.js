import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
// import Father from '../Father/father';
import Fatherr from '../Father/Fatherr';
import Uncle from '../Uncle/Uncle';
import './GrandPa.css'


export const RingContext = createContext('matir ring')
export const MoneyContext = createContext(555);
const GrandPa = () => {

    const [house, setHouse] = useState(1);
    const [money, setMoney] = useState(555);
    // const ring = 'diamond ring'
    return (
        <RingContext.Provider value={[house, setHouse]} >
            <MoneyContext.Provider value={[money, setMoney]}>
                <div className='grandpa'>
                    <h2>My GrandPa was a kind person</h2>

                    <section className='flex'>
                        <Fatherr house={house}></Fatherr>
                        <Uncle house={house}></Uncle>
                        <Aunty house={house}></Aunty>
                    </section>
                </div>
            </MoneyContext.Provider>


        </RingContext.Provider >
    )
};

export default GrandPa;