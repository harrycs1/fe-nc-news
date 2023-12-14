export const PostArticlePage = () => {
    return (
        <>
            <h1>Post an Article</h1>
            <form>
                <input className="form-input" name="title" type="text" placeholder="Choose a title"></input>
                <input className="form-input" name="topic" type="text" placeholder="Pick a topic"></input>
                <textarea className="form-input form-input-textarea" name="body" type="text" placeholder="Write an article"></textarea>
                <input className="form-input" name="image" type="text" placeholder="Include an image url"></input>
                <button className="form-input-button">Send</button>
            </form>
        </>
    )
}