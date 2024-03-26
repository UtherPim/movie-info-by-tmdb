import axios from "axios";
import {TMDB_API_BASE_URL} from '../utils/constantly'

export const getVideoListBySearch = searchKey => axios({
    url: `${TMDB_API_BASE_URL}/search/movie`,
    params: {
        query: searchKey,
        api_key: '40a118ba49c2e9577f28c321b16d7e9a',
        language: 'zh-CN'
    }
})

export const fetchVideoDetail = id => axios({
    url: `${TMDB_API_BASE_URL}/movie/${id}`,
    params: {
        api_key: '40a118ba49c2e9577f28c321b16d7e9a',
        language: 'zh-CN'
    }
})