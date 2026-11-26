
document.addEventListener("DOMContentLoaded", () => {
    // Navigation links
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();

            navLinks.forEach((item) => {
                item.classList.remove("active");
            });

            link.classList.add("active");
        });
    });

    // Search field
    const searchInput = document.querySelector(
        'input[type="search"], input[placeholder*="Search"]'
    );

    if (searchInput) {
        searchInput.addEventListener("input", () => {
            const searchText = searchInput.value.toLowerCase();
            const rows = document.querySelectorAll(".files-table tbody tr");

            rows.forEach((row) => {
                row.style.display = row.textContent
                    .toLowerCase()
                    .includes(searchText) ? "" : "none";
            });
        });
    }

    // Upload button
    const uploadButtons = document.querySelectorAll(
        ".primary-button, .secondary-button"
    );

    uploadButtons.forEach((button) => {
        if (button.textContent.toLowerCase().includes("upload")) {
            button.addEventListener("click", () => {
                const fileInput = document.createElement("input");
                fileInput.type = "file";
                fileInput.multiple = true;

                fileInput.addEventListener("change", () => {
                    if (fileInput.files.length > 0) {
                        alert(
                            fileInput.files.length +
                            " file(s) selected. Cloud upload will be connected later."
                        );
                    }
                });

                fileInput.click();
            });
        }
    });

    console.log("Data Driver interface is ready!");
});
