import React from 'react';
import "./Book.css";

interface BookProps {
    thumbnail: string,
    isbn: number,
    quantity: number,
    publisher: string,
    publishDate: string,
    categories: Array<string>,
    authors: Array<string>,
    title: string
}

export const Book = ({isbn, quantity, thumbnail, title, authors, categories, publisher, publishDate}: BookProps) => (
    <tr className="Book-row">
        <td><input defaultValue={isbn} /></td>
        <td><input defaultValue={quantity} /></td>
        <td><img src={thumbnail} alt="Book Cover of {title}"/></td>
        <td>{title}</td>
        <td>{authors}</td>
        <td>{categories}</td>
        <td>{publisher}</td>
        <td>{publishDate}</td>
    </tr>
);