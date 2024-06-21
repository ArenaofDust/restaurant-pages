const loadHomeTab = () => {
    const contentDiv = document.querySelector(".content");

    contentDiv.innerHTML = "";

    const createSection = (title, content) => {
        const container = document.createElement("div");
        container.classList.add("content-container");
        contentDiv.appendI(container);

        const sectionHeader = document.createElement("div");
        sectionHeader.classList.add("section-header");
        sectionHeader.textContent = title;
        container.append(sectionHeader);
    }

}