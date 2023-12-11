      
        
        const menuButton = document.getElementById("menuButton");
        const menu = document.getElementById("menu");
        menuButton.addEventListener("change", () => {
            const expand = menuButton.getAttribute("aria-expanded") === "true";
            menuButton.setAttribute("aria-expanded", !expand);
            menu.setAttribute("aria-hidden", expand);
        });
