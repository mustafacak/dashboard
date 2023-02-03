interface Iprops {
    title?: string,
    list: any[],
    state: boolean,
    onPress?: () => void
    
}

export default function InfoCard({title, list, state, onPress }: Iprops) {
	return (
        <>
            {title && <h1 className="text-3xl font-bold">{title}</h1>}
            <div className="card-container">
                <div className="card">
                    <ul className="card-list">
                        {
                            list.map((listItem, index) => {
                                return (
                                listItem.color ?
                                <li>
                                    <button onClick={onPress} className="hover:cursor-pointer mr-2">{listItem.title}</button>
                                    <div className={`color-palette ${state ? "scale-100" : "scale-0"}`}>
                                        <div className="bg-red-500 color-item"></div>
                                        <div className="bg-green-500 color-item"></div>
                                        <div className="bg-blue-500 color-item"></div>
                                        <div className="bg-yellow-500 color-item"></div>
                                    </div>
                                </li>
                                :
                                <li key={index}>{listItem.title}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
	)
}
