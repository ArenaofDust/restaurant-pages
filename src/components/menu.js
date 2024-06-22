const loadMenuTab = () => {
    const contentDiv = document.querySelector(".content");

    contentDiv.innerHTML = "";

    const createSection = (title) => {
        const container = document.createElement("div");
        container.classList.add("section-container");
        contentDiv.append(container);

        const sectionTitle = document.createElement("div");
        sectionTitle.classList.add("section-title");
        sectionTitle.textContent = title;
        container.append(sectionTitle);
    };

    const createCategory = (category) => {
        const section = document.querySelector(".section-container");

        const sectionHeader = document.createElement("div");
        sectionHeader.classList.add("section-header", category);
        sectionHeader.textContent = category;
        section.append(sectionHeader);
    }

    const createMenuItem = (menuItem, category, price) => {
        const section = document.querySelector(`.${category}`);

        const item = document.createElement("div");
        item.classList.add("item");
        section.append(item);

        const itemName = document.createElement("div");
        itemName.classList.add("item-header");
        itemName.textContent = menuItem;
        item.append(itemName);

        const lineSpacer = document.createElement("div");
        lineSpacer.classList.add("line");
        item.append(lineSpacer);

        const itemCost = document.createElement("div");
		itemCost.classList.add("price");
		itemCost.textContent = price;
		item.append(itemCost);
    }

	createSection("Our Menu");
    createCategory("Appetizers");
    createCategory("Specials");
    createCategory("Drinks");
    createMenuItem("Baked Bread", "Appetizers", "$7.50");
    createMenuItem("Salmon Dip", "Appetizers", "$10.00");
    createMenuItem("Nachos", "Appetizers", "$8.69");
    createMenuItem("Southwestern Egg Rolls", "Appetizers", "$9.50");
    createMenuItem("Rib Special", "Specials", "18.49");
    createMenuItem("Pork Special", "Specials", "22.49");
    createMenuItem("Chicken Special", "Specials", "20.49");
    createMenuItem("Two-Meat Special", "Specials", "19.49");
    createMenuItem("Coffee", "Drinks", "6.50");
    createMenuItem("Beer", "Drinks", "6.50");
    createMenuItem("Soda Can", "Drinks", "3.50");
    createMenuItem("Water", "Drinks", "2.50");


};

export default loadMenuTab;