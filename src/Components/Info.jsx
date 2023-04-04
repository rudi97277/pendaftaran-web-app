import {useNavigate} from "react-router-dom"
const Info = () => {
    const navigate = useNavigate()

    return (
        <div>
            <h3>HOME INFO</h3>
            <button onClick={() => navigate('/login') }>Login</button>
            <button onClick={() => navigate('/register') }>Register</button>
        </div>
        
    )
}

export default Info