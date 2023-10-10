import careNeeded from "./CareNeeded"

function CareScale({ scaleValue, careType}) {
	const range = [1, 2, 3]
	const scaleType = careType === 'light' ? '☀️' : '💧'

	
	return (
		<div onClick={() => careNeeded(scaleValue, careType)}>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale