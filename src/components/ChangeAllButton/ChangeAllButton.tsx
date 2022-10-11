import { FunctionComponent, useState } from 'react';
import Box from 'components/Box/Box';

const ChangeAllButton: FunctionComponent = () =>
{

    const refresh = () =>{
        window.location.reload()
    }

    return (
        <>
            <button onClick={refresh}>Cambia tutti i colori</button>
        </>
    )
}
export default ChangeAllButton