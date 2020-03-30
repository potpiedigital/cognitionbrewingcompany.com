import ListingItem from './Listing-item';

const OnDeck = () => {
	return (
		<div className="on-deck">
			<div className="on-deck-content">
				<h4>On Deck</h4>
				<ListingItem 
					title="Bloody Scream"
					desc="Cream Ale"
					numbers="5.5% ABV - 45 IBU"
					rating="beer rating img"
				/>
				<ListingItem 
					title="Tricephalic Head Tripel"
					desc="Belgian Tripel"
					numbers="9.4% ABV - 34 IBU"
					rating="beer rating img"
				/>
				<ListingItem 
					title="Skeleton Wolves Red"
					desc="Red Ale - American Amber / Red"
					numbers="4% ABV - 23 IBU"
					rating="beer rating img"
				/>
				<ListingItem 
					title="Hobjection Your Honor"
					desc="IPA - American"
					numbers="6.5% ABV - 45 IBU"
					rating="beer rating img"
				/>
			</div>
			<style jsx>{`
				.on-deck {
					background-color: #ededed;
					border-left: 3px solid #a73a3a;
					border-right: 3px solid #a73a3a;
					display: flex;
					flex-direction: column;
					grid-column: 13 / 16;
					grid-row: 1 / 3;
					clip-path: polygon(0 0, 100% 0, 100% 83%, 0% 100%);
				}
				.on-deck-content {
					margin-top: 2em;
					margin-left: 2em;
				}
				`}</style>
		</div>
	)

};

export default OnDeck;