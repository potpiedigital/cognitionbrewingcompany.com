const BigText = ({ className, text }) => (
	<h2 className={className}>{text}
	<style jsx>{`
		h2 {
			font-size: 33vh;
      line-height: 0.5;
			}
			`}</style>
	</h2>

);

export default BigText;