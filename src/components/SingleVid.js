import React from 'react'
import { useNavigate } from 'react-router-dom';

function SingleVid(props) {
    const { title, imgUrl, id } = props;
    const navigate = useNavigate();
    function handlePlay(id) {
        props.currVideo(id);
       
        navigate("/play");
    }
    return (
        <div className="card" style={{ width: "18rem", cursor: "pointer" }} onClick={function () {
            handlePlay(id);
        }}>
            <img src={imgUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
            </div>
        </div>
    )
}

export default SingleVid