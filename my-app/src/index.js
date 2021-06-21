import React from 'react';
import ReactDom from 'react-dom';

// varyabels
const firstBook = {
	tital: 'The Last Thing He Told Me: A Novel',
	/* auther: 'Laura Dave', */
	img: 'https://images-na.ssl-images-amazon.com/images/I/81BdMSuI5ZS._AC_UL200_SR200,200_.jpg',
	name: 'Laura Dave'
};
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
			<Book img={firstBook.img} tital={firstBook.tital} name={firstBook.name} />
		</section>
	);
};
const Book = ({ img, tital, name }) => {
	//anothr way const {img,tital,name}=props;
	return (
		<section>
			{/* <Imeg />
			<Titel />
			<Auther /> */}
			{/* <h3>{props.Auther}</h3> */}
			<img src={img} />
			<p>{tital}</p>
			<h4>{name}</h4>
		</section>
	);
};
/* const Book = () => {
	return <article>this isa book</article>;
}; */
/* const Imeg = () => (
	<img src="https://images-na.ssl-images-amazon.com/images/I/81BdMSuI5ZS._AC_UL200_SR200,200_.jpg" alt="" />
);
const Titel = () => <p>The Last Thing He Told Me: A Novel</p>;
const Auther = () => <h3>Laura Dave</h3>; */

ReactDom.render(<Books />, document.getElementById('root'));
