// React
import { useState } from "react"

// Component
import InfoCard from "components/Common/InfoCard/InfoCard"

export default function Dashboard() {
	// useState
	const [orderCardColorIsOpen, setOrderCardColorIsOpen] = useState(false)
	const [productCardColorIsOpen, setProductCardColorIsOpen] = useState(false)

	// Definition
	const cardContentProduct = [
		{ title: "52 Product" },
		{ title: "15 Category" },
		{ title: "6 Color", color: true }
	]

	const cardContentCategory = [
		{ title: "15 Category" }
	]

	const cardContentOrder = [
		{ title: "12 Product" },
		{ title: "6 Color", color: true }
	]

	// Function
	function handleOnOrdersColorClick() {
		setOrderCardColorIsOpen(!orderCardColorIsOpen)
	}

	function handleOnProductsColorClick() {
		setProductCardColorIsOpen(!productCardColorIsOpen)
	}

	return (
		<div className="flex flex-col h-screen w-full p-10">
			<InfoCard
                title={"Products"}
				list={cardContentProduct}
				state={productCardColorIsOpen}
				onPress={() => handleOnProductsColorClick()}
			/>


			<InfoCard title={"Categories"} list={cardContentCategory} state={false} />


			<InfoCard
                title={"Orders"}
				list={cardContentOrder}
				state={orderCardColorIsOpen}
				onPress={() => handleOnOrdersColorClick()}
			/>
		</div>
	)
}
