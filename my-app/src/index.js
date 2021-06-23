import React from 'react';
import ReactDom from 'react-dom';
import { Book } from './book';
import { theBook } from './books';

/* const tital = 'The Last Thing He Told Me: A Novel';
const imag = 'https://images-na.ssl-images-amazon.com/images/I/81BdMSuI5ZS._AC_UL200_SR200,200_.jpg';
const Auther = 'Laura Dave'; */

/*function Greeting() {
	return <h1>healo react</h1>;
}*/

/* const Greeting = () => {
	return (
		<div>
			<Lerning />
			<Gredin />
		</div>
	);
};
const Lerning = () => <h1>lerning react</h1>;
const Gredin = () => <h2>heloo mj</h2>; */
const Books = () => {
	return (
		<section>
			{/* 	<Book /> */}
			{/* <Book img={firstBook.img} tital={firstBook.tital} name={firstBook.name} /> */}
			{theBook.map((boo) => {
				//const { tital, nam, img, pris } = book;
				return (
					/* <div>
						<h4>{tital}</h4>
						<h6>{nam}</h6>
					</div> */
					//the first way to set the prop
					//<Book key={book.id} book={book} />
					//a nather way is to uos a sbred obritor
					<Book key={boo.id} {...boo} />
				);
			})}
		</section>
	);
};

ReactDom.render(<Books />, document.getElementById('root'));
