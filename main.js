class Book{
    constructor(bookName, isbn, author){
        this.bookName = bookName;
        this.isbn = isbn;
        this.author = author;
    }

    static isEmpty(book){
        if(book.bookName == '' || book.isbn == '' || book.author == ''){
            return true;
        }
        return false;
    }
}

function addBook(book){
    const table = document.querySelector("#table");
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${book.bookName}</td>
    <td>${book.isbn}</td>
    <td>${book.author}</td>
    <td><a href="#" id="delete" class="button">Delete</a></td>`
    table.appendChild(row);
}

function clearFields(){
    document.querySelector("#bookname").value = '';
    document.querySelector("#isbn").value = '';
    document.querySelector("#author").value = '';

}

document.querySelector("#add").addEventListener('click',(e)=>{
    e.preventDefault();
    const bookName = document.querySelector("#bookname").value;
    const isbn = document.querySelector("#isbn").value;
    const author = document.querySelector("#author").value;
    const book = new Book(bookName, isbn, author);
    console.log(bookName);
    console.log(isbn);
    if (!Book.isEmpty(book)){
        addBook(book);
        clearFields();
    }
});

document.addEventListener('click', (e)=>{
    const target = e.target.closest("#delete");
    if (target){
        console.log("delete clicked");
        e.target.parentElement.parentElement.remove();
    }
})