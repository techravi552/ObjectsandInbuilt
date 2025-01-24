

function bookProperties(ditails) {

    for (keys in ditails) {

        console.log(keys, ":", ditails[keys])
    }
}

let book = { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 };

bookProperties(book)