import { useContext } from 'react';
import { UserContext } from '../App';

export default function Login() {
    const { user, setUser } = useContext(UserContext);
    return (
        <>
            {
                !user
                    ? <button onClick={()=>setUser('Eddie')}>Login</button>
                    : null
            }
        </>
    )
}