// *************************************
// ****         READ BOOKS          ****
// *************************************

interface Book {
  title: string;
  isRead: boolean;
}

export function isBookRead(books: Book[], titleToSearch: string): boolean {
  const bookTarget = books.find((book) => book.title === titleToSearch);
  if (!bookTarget) return false;
  return bookTarget?.isRead ?? false;
}
