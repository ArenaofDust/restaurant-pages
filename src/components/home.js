const loadHomeTab = () => {
    const contentDiv = document.querySelector(".content");

    contentDiv.innerHTML = "";

    const createSection = (title, content) => {
        const container = document.createElement("div");
        container.classList.add("content-container");
        contentDiv.append(container);

        const sectionHeader = document.createElement("div");
        sectionHeader.classList.add("section-header");
        sectionHeader.textContent = title;
        container.append(sectionHeader);

        const sectionContent = document.createElement("div");
        sectionContent.classList.add("section-content");
        sectionContent.textContent = content;
        container.append(sectionContent);
    };

    createSection(
        "Welcome to Dust Bowl:",
        "At Dust Bowl, we bring you the best of Southern Western BBQ. Join us for a true taste of the Southwest and genuine Southern hospitality."
    );

    createSection(
        "What We Do:",
        "Nestled in the heart of our community, Dust Bowl is your go-to destination for authentic Southern Western BBQ. Our passion for flavor and tradition is evident in every dish we serve, from our slow-smoked brisket to our tangy, house-made sauces. Whether you’re here for a hearty meal, a family gathering, or just to experience true Southern hospitality, we promise an unforgettable dining experience that celebrates the rich culinary heritage of the Southwest. "
    );

};

export default loadHomeTab;