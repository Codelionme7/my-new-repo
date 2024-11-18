const familyTree = {
    name: "John Doe",
    photo: "https://via.placeholder.com/60",
    details: "Born: 1965",
    children: [
        {
            name: "Anna Doe",
            photo: "https://via.placeholder.com/60",
            details: "Born: 1990",
            children: [
                { name: "Peter Smith", photo: "https://via.placeholder.com/60", details: "Born: 2015", children: [] },
                { name: "Lucy Smith", photo: "https://via.placeholder.com/60", details: "Born: 2018", children: [] }
            ]
        },
        {
            name: "Tom Doe",
            photo: "https://via.placeholder.com/60",
            details: "Born: 1992",
            children: [
                { name: "Chris Doe", photo: "https://via.placeholder.com/60", details: "Born: 2020", children: [] }
            ]
        }
    ]
};

function createFamilyTree(node, container) {
    // Create node element
    const memberDiv = document.createElement("div");
    memberDiv.className = "tree-node";
    memberDiv.innerHTML = `
        <img src="${node.photo}" alt="${node.name}">
        <div class="name">${node.name}</div>
        <div class="details">${node.details}</div>
        <div class="tooltip">${node.details}</div>
    `;

    // Add the current node to the container
    const wrapper = document.createElement("div");
    wrapper.className = "tree-child";
    wrapper.appendChild(memberDiv);

    // If the node has children, create a container for them
    if (node.children && node.children.length > 0) {
        const childrenContainer = document.createElement("div");
        childrenContainer.className = "tree-children";

        node.children.forEach((child) => {
            createFamilyTree(child, childrenContainer);
        });

        wrapper.appendChild(childrenContainer);
    }

    container.appendChild(wrapper);
}

// Build the family tree
const treeContainer = document.getElementById("family-tree-container");
createFamilyTree(familyTree, treeContainer);

