import { TMDB_POSTER_BASE_URL } from '../utils/constantly'

export default function InfoContainer (prop) {

    const { poster_path, title, tagline, overview, genres = [], production_companies = [], release_date, runtime, vote_average, revenue } = prop

    const releaseList = [
        { label: '最初上映日期', value: release_date },
        { label: '影片时常', value: runtime },
        { label: '票房', value: revenue },
        { label: '评分', value: vote_average },
    ]

    return (
        <div className="info-container">
            <div className="video-poster">
                <img src={TMDB_POSTER_BASE_URL + poster_path} alt="影片海报"/>
            </div>
            <div className="video-info">
                <p className="title text-ellipse-1">{title}</p>
                <p className="tagline">{tagline}</p>
                <p className="overview">{overview}</p>
                <p className="genre-list">{ genres.map(g => g.name).join() }</p>
                <p className="production-list">{ production_companies.map(p => p.name).join() }</p>
                <div className="release-detail">
                    {
                        releaseList.map(r => (
                            <div className="release-item" key={r.label}>
                                <p className="release-label">{r.label}</p>
                                <p className="release-info">{r.value}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}