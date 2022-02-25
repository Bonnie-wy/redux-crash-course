import { Map } from "immutable";
import { produce } from " immer";

let book = { title: "Harry Potter" };

function publish(book) {
  book.isPublish = true;
}

publish(book);

console.log(book);

// immutable
let book2 = Map({ title: "Harry Potter" });

function publish(book) {
  return book.set("isPublish", true);
}

book2 = publish(book2);

console.log(book2.toJS());

// immer
let book3 = { title: "Harry Potter" };

function publish(book) {
  produce(book, (draftBook) => {
    draftBook.isPublished = true;
  });
}

let updated = publish(book3);

console.log(book3);
console.log(updated);
