import { FunctionComponent } from 'react';

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