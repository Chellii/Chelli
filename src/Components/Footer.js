import {
    AiOutlineGithub, 
    AiFillLinkedin, 
    AiFillTwitterSquare,
    AiOutlineMail
} from 'react-icons/ai'
import '../styles/Footer.css'

export default function Footer() {
    return (
        <footer>
            <p>Created by Chelli</p>
            <div className="socialnet">
                <AiOutlineGithub color={'#553000'} size={45} style={{'paddingRight': 25}} />
                <AiFillLinkedin size={45} style={{'paddingRight': 25}} />
                <AiFillTwitterSquare size={45}  style={{'paddingRight': 25}} />
                <AiOutlineMail size={45} />
            </div>
        </footer>
    )
}