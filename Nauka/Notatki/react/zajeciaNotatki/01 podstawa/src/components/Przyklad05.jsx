const array = [
	{
		id: "produkt1",
		name: "Banan2",
		quantity: 3,
		price: 10,
		items: [],
		metadata: {
			whatever: "cokolwiek",
		},
	},
	{
		id: "produkt2",
		name: "Japko",
		quantity: 4,
		price: 12,
		items: [1, 2, 3, 4],
		metadata: {
			whatever: "cokolwiek2",
		},
	},
	{
		id: "produkt3",
		name: "Orzech",
		quantity: 6,
		price: 40,
		metadata: {
			whatever: "cokolwiek3",
		},
	},
];

export const Przyklad5a = () => {
	return (
		<>
			<p>{array[0].name}test</p>
			<p>{array[0].quantity}test</p>
			<p>{`${array[0].price} cebulionów test`}</p>
			<span>{array[0].metadata.whatever} test</span>
		</>
	);
};
//element.items ? null : element.items.length === 0 ? - jesli nie ma elementu items to zwroci null i
// nie wyswietli obiektu. Jeśli jest a jego zawartość jest równa zero to wyswietli napis
//
// kazdy element bezposrednio podlegajacy tablicy
//musi miec id , po stworzeniu tablicy czyli po mapowaniu by nie
//renderowalo calej tablicy na nowo. Czyli w tym przypadku <p> oraz <div>
//
// Poniżej są to dwa ternary operatory
export const Przyklad5b = () => {
	const mapowanie = array.map((element) => {
		return !element.items ? null : element.items.length === 0 ? (
			<p key={element.id} style={{ color: "red" }}>
				Brak itemsów ziom
			</p>
		) : (
			<div key={element.id}>
				<p>{element.name}</p>
				<p>{element.quantity}</p>
				<p>{`${element.price} cebulionów`}</p>
				<span>{element.metadata.whatever}</span>
			</div>
		);
	});

	return mapowanie;
};
//2:15
