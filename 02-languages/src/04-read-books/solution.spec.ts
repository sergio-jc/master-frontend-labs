import { isBookRead } from "./solution";

const setup = () => {
  const books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
  ];
  return { books };
};

describe("isBookRead", () => {
  it("should return a boolean if the book is read or not", () => {
    const { books } = setup();

    for (const book of books) {
      const result = isBookRead(books, book.title);
      expect(result).toBe(book.isRead);
    }
  });

  it("should return false if the book is not in the list", () => {
    const { books } = setup();
    const result = isBookRead(books, "Some random book");
    expect(result).toBe(false);
  });

  it("should return false if the books array is empty", () => {
    const result = isBookRead([], "Some random book");
    expect(result).toBe(false);
  });

  it("should return false if no title is provided", () => {
    const { books } = setup();
    const result = isBookRead(books, "");
    expect(result).toBe(false);
  });
});
