import { useContext } from 'react';
import { UserContext } from '../App';
import Login from './Login';

export default function MenuBar() {
    const { user } = useContext(UserContext);
    return (
        <>
            <nav>
                <p>Menu Bar</p>
                <Login />
            </nav>
        </>
    )
}