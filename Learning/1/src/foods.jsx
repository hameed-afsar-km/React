function Foods() {
    const items = [{ id: 1, name: "Banana", calories: 127 },
    { id: 2, name: "Orange", calories: 172 },
    { id: 3, name: "Lime", calories: 107 }
    ];
    // items.sort((a, b) => b.name.localeCompare(a.name));
    // items.sort((a, b) => a.name.localeCompare(b.name));
    // items.sort((a, b) => a.calories - b.calories);
    items.sort((a, b) => b.calories - a.calories);

    const fruits = items.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; {fruit.calories}</li>);
    return (<ol>{fruits}</ol>);
}

export default Foods;