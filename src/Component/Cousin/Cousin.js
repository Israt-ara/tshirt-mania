import React, { useContext } from 'react';
import { MoneyContext, RingContext } from '../GrandPa/GrandPa';

const Cousin = ({ house }) => {
    const ring = useContext(RingContext)
    const [money, moneyContext] = useContext(MoneyContext);
    return (
        <div>
            <h4>Cousin</h4>
            <p>House: {house}</p>
            <p>Ring: {ring}</p>

            <p>Money: {money}</p>
            <button onClick={() => moneyContext(money + 1)}>Increase</button>
            <button onClick={() => moneyContext(money - 1)}>Decrease</button>
        </div>
    );
};

export default Cousin;