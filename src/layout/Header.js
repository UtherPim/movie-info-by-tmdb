import { ReactComponent as TMDB } from '../assets/icons/tmdb.svg';
import { AutoComplete, Input, ConfigProvider } from 'antd'
import { getVideoListBySearch, fetchVideoDetail } from '../api'
import {useState} from "react";
import { TMDB_BACKDROP_BASE_URL } from '../utils/constantly'
export default function Header(prop) {

    const [options, setOptions] = useState([])
    const { setVideoInfo } = prop

    const confirmSearchVideo = (e) => {
        getVideoListBySearch(e.target.value).then(res => {
            const results = res.data.results
            const options = results.map(m => ({
                label: m.title,
                value: m.title,
                id: m.id,
            }))
            setOptions(options)
        })
    }

    const onSelectOption = (v, option) => {
        fetchVideoDetail(option.id).then(res => {
            setVideoInfo(res.data)
            const {backdrop_path} = res.data
            document.body.style.backgroundImage = `url(${TMDB_BACKDROP_BASE_URL + backdrop_path})`
            console.log(res.data);
        })
    }

    return (
        <ConfigProvider
            theme={{
                components: {
                    Input: {
                        colorBgContainer: '#000',
                        activeBg: '#000',
                        colorText: '#fff',
                        hoverBorderColor: '#fff',
                        activeBorderColor: '#fff',
                        colorTextPlaceholder: 'rgba(255, 255, 255, .5)'
                    }
                },
            }}
        >
            <div className="header-container">
                <div className="power-logo">
                    <TMDB/>
                </div>
                <div className="search-container">
                    <AutoComplete
                        options={options}
                        style={{width: '100%'}}
                        onSelect={onSelectOption}
                    >
                        <Input placeholder="搜索影片名称..." size="large" onPressEnter={confirmSearchVideo}/>
                    </AutoComplete>
                </div>
            </div>
        </ConfigProvider>
    )
}