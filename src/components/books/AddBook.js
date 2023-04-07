const AddBook = () => {
    return (
        <form>
        <h2>ADD NEW BOOK</h2>
        < input id="title" type="text" name="Add" placeholder="Book title" />
        < input id="author" type="text" name="Add" placeholder="Category" />
        <button type="submit">Add</button>
        </form>
    )
}

export default AddBook;