import React, { useContext, useState } from 'react';
const Context = useContext();

const MyGrandChild = () => {
    const [fruit, setFruit] = useContext(Context);
    return <button onClick={()=>setFruit('banana')}></button>
}

export default MyGrandChild;