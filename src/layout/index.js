import ZHeader from './Header'
import InfoContainer from "./InfoContainer";
import './index.scss'
import {useEffect, useState} from "react";
import {fetchVideoDetail} from "../api";
import {TMDB_BACKDROP_BASE_URL} from "../utils/constantly";
export default function Layout() {

    const [videoInfo, setVideoInfo] = useState(null)

    useEffect(() => {
        fetchVideoDetail(157336).then(res => {
            const {backdrop_path} = res.data
            document.body.style.backgroundImage = `url(${TMDB_BACKDROP_BASE_URL + backdrop_path})`
            setVideoInfo(res.data)
        })
    }, []);

    return(
        <div className="app-container">
            <ZHeader setVideoInfo={setVideoInfo} />
            <InfoContainer {...videoInfo} />
        </div>
    )
}