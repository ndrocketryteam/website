document.addEventListener("DOMContentLoaded", () => {
    // 1. Automatically create and inject the HTML button into the page
    const scrollToTopBtn = document.createElement("button");
    scrollToTopBtn.id = "scrollToTopBtn";
    scrollToTopBtn.className = "fixed bottom-6 right-6 z-50 opacity-0 pointer-events-none transition-all duration-500 bg-nd-blue text-white hover:bg-dome-gold hover:text-deep-space px-5 py-3 rounded-lg shadow-lg flex items-center gap-2 font-space font-bold uppercase tracking-wider text-sm group";
    scrollToTopBtn.innerHTML = `
        <i class="fa-solid fa-arrow-up group-hover:-translate-y-1 transition-transform duration-300"></i>
        <span>Top</span>
    `;
    document.body.appendChild(scrollToTopBtn);

    const scrollThreshold = 300; // Pixels to scroll before the button appears

    // 2. Show or hide the button based on scroll position
    window.addEventListener("scroll", () => {
        if (window.scrollY > scrollThreshold) {
            scrollToTopBtn.classList.remove("opacity-0", "pointer-events-none");
            scrollToTopBtn.classList.add("opacity-100", "pointer-events-auto");
        } else {
            scrollToTopBtn.classList.add("opacity-0", "pointer-events-none");
            scrollToTopBtn.classList.remove("opacity-100", "pointer-events-auto");
        }
    });

    // 3. Smooth scroll back to the top when clicked
    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});