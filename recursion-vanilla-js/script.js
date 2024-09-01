const data = [
    {
        name: "Joe",
        children: [
            { name: "Tom" },
            {
                name: "Tammy",
                children: [
                    { name: "Lynn" },
                    { name: "Vera" }
                ]

            },
        ]
    },
    {
        name: "John"
    },
    {
        name: "Jane"
    },
];


data.forEach((entry) => {
    displayEntry(entry);
});


function displayEntry(entry,level=1) {
    console.log(`${'>'.repeat(level)}${entry.name}`);

    entry.children?.forEach((child) => {
        displayEntry(child, level + 1);
    });
}