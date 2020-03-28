const ListingItem = ({title, desc, numbers, rating}) => (
		<div className="listing">
			<h5>{title}</h5>
			<p>{desc}</p>
			<p>{numbers}</p>
			<p>{rating}</p>
	<style jsx>{`
	.listing {
			display: flex;
			flex-direction: column;
			height: auto;
			width: auto;
			padding: 1em 1em 0 0;
		}

		h4, p {
			margin: 0;
		}
		
		`}</style>
	</div>

);

export default ListingItem;