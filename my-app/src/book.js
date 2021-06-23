export const Book = (props) => {
	// we uose this withe the first way
	//const { tital, nam, img } = props.book;
	//we uos this with the second way
	const { tital, nam, img, pris } = props;
	return (
		<article>
			<img src={img} />
			<h3>{tital}</h3>
			<h5>{nam}</h5>
			<h3>{pris}</h3>
		</article>
	);
};
// const Book = ({ img, tital, nam }) => {
//anothr way const {img,tital,name}=props;
//	return (
//		<section>
//			{/* <Imeg />
//			<Titel />
//			<Auther /> */}
//			{/* <h3>{props.Auther}</h3> */}
//			<img src={img} />
//			<p>{tital}</p>
//			<h4>{nam}</h4>
///		</section>
//	);
//};
/* const Book = () => {
	return <article>this isa book</article>;
}; */
/* const Imeg = () => (
	<img src="https://images-na.ssl-images-amazon.com/images/I/81BdMSuI5ZS._AC_UL200_SR200,200_.jpg" alt="" />
);
const Titel = () => <p>The Last Thing He Told Me: A Novel</p>;
const Auther = () => <h3>Laura Dave</h3>; */
