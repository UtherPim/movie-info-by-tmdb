import './index.scss'

export default function SearchBox() {
    return (
        <form className="searchbox">
            <input
                onClick={handleChange}
                className="searchbox__input typeahead form-control"
                type="text"
                placeholder="Search Movie Title..."
                id="q"
            />
        </form>
    )
}

function handleChange(e) {
    e.preventDefault()
}