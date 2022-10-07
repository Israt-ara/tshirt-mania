// import React, { useContext } from 'react';
import SpecialPerson from '../SpecialPerson/SpecialPerson';

const Myself = ({ house }) => {
    //  const ring= useContext
    return (
        <div>
            <h3>Myself</h3>
            <p>house : {house}</p>
            <SpecialPerson></SpecialPerson>
        </div>
    );
};

export default Myself;