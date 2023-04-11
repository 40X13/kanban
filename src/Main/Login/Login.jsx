import {useDispatch, useSelector} from "react-redux";
import {changeIsAuthStatus} from "../../redux/authSlice";
import {useState} from "react";

const Login = () => {

    const isAuth = useSelector(state => state.auth.isAuth);
    const dispatch = useDispatch();

    const [controller, setController] = useState(false);
    const [currentLoginTyping, setCurrentLoginTyping] = useState('');
    const [currentPasswordTyping, setCurrentPasswordTyping] = useState('');


    const submitHandler = () => {
        if (currentLoginTyping) {
            setController(true);
        }

        if (currentLoginTyping && currentPasswordTyping) {
            setCurrentLoginTyping('');
            setCurrentPasswordTyping('');
            setController(false);
            dispatch(changeIsAuthStatus(true));
        }
    }

    if (isAuth) return (
        <>
            <h1>User name</h1>
            <button onClick={()=>dispatch(changeIsAuthStatus(false))}  >log aut</button>
        </>
    )

    return (
        <>
            {!controller ?
                <input type="text" value={currentLoginTyping} onChange={e => setCurrentLoginTyping(e.target.value)}/>
                :
                <>
                    <span>{currentLoginTyping}</span>
                    <input type="password" value={currentPasswordTyping} onChange={e => setCurrentPasswordTyping(e.target.value)}/>
                </>
            }
            <button onClick={submitHandler}>enter</button>
        </>
    );
}


export default Login;