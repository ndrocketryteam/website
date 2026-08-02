// 1. The Navbar HTML stored directly in JavaScript (No 'fetch' needed!)
const navbarHTML = `
    <!-- Navigation -->
    <nav id="navbar" class="fixed w-full z-[100] transition-all duration-300 py-8 px-6 md:px-12 flex justify-between items-center">
        <!-- Logos Container -->
        <div class="flex items-center gap-4 md:gap-8 relative z-[60]">
            <a href="index.html" class="flex items-center cursor-pointer">
                <img id="nav-logo" src="NDRT logo white.png" alt="NDRT Logo" class="h-16 w-auto drop-shadow-md transition-all duration-300">
            </a>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden lg:flex items-center gap-8 font-space text-base font-bold tracking-widest uppercase relative z-[60]">
            <a href="index.html" class="text-white hover:text-dome-gold transition-colors duration-300">HOME</a>
            
            <div class="relative group py-2">
                <button class="text-white hover:text-dome-gold transition-colors duration-300 flex items-center gap-2 focus:outline-none">
                    ABOUT <i class="fa-solid fa-chevron-down text-xs"></i>
                </button>
                <div class="absolute top-full left-0 mt-0 w-48 bg-deep-space/95 backdrop-blur-md border border-nd-blue rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col overflow-hidden font-normal">
                    <a href="about us.html" class="px-4 py-3 text-white hover:bg-nd-blue hover:text-dome-gold transition-colors">About Us</a>
                    <a href="leadership.html" class="px-4 py-3 text-white hover:bg-nd-blue hover:text-dome-gold transition-colors">Leadership</a>
                </div>
            </div>

            <div class="relative group py-2">
                <button class="text-white hover:text-dome-gold transition-colors duration-300 flex items-center gap-2 focus:outline-none">
                    PROJECTS <i class="fa-solid fa-chevron-down text-xs"></i>
                </button>
                <div class="absolute top-full left-0 mt-0 w-52 bg-deep-space/95 backdrop-blur-md border border-nd-blue rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col overflow-hidden font-normal">
                    <a href="usli.html" class="px-4 py-3 text-white hover:bg-nd-blue hover:text-dome-gold transition-colors">USLI</a>
                    <a href="ndxp.html" class="px-4 py-3 text-white hover:bg-nd-blue hover:text-dome-gold transition-colors">NDXP</a>
                    <a href="outreach.html" class="px-4 py-3 text-white hover:bg-nd-blue hover:text-dome-gold transition-colors">OUTREACH</a>
                </div>
            </div>

            <a href="join us.html" class="text-white hover:text-dome-gold transition-colors duration-300">JOIN US</a>
            <a href="contact.html" class="text-white hover:text-dome-gold transition-colors duration-300">CONTACT</a>
            <a href="sponsors.html" class="px-5 py-2 border border-dome-gold text-dome-gold rounded-md hover:bg-dome-gold hover:text-deep-space transition-all duration-300">SPONSORS</a>
        </div>

        <!-- Mobile Menu Button -->
        <button id="mobile-toggle" class="relative z-[60] lg:hidden flex flex-col justify-center items-center w-12 h-12 gap-1.5 focus:outline-none bg-nd-blue/40 backdrop-blur-sm rounded-full border border-nd-blue/50">
            <span class="ham-line line-1 w-6 h-[2px] bg-white rounded-full"></span>
            <span class="ham-line line-2 w-6 h-[2px] bg-white rounded-full"></span>
            <span class="ham-line line-3 w-6 h-[2px] bg-white rounded-full"></span>
        </button>
    </nav>

    <!-- Mobile Menu Overlay -->
    <div id="mobile-fullscreen-menu" class="fixed inset-0 bg-[#02050A]/95 backdrop-blur-xl z-[90] lg:hidden flex flex-col pt-32 pb-10 px-8 overflow-y-auto">
        <div class="flex flex-col gap-6 w-full max-w-md mx-auto font-space uppercase font-bold tracking-widest text-2xl">
            <a href="index.html" class="mobile-nav-item delay-item-1 text-white hover:text-dome-gold transition-colors block border-b border-white/10 pb-4">Home</a>

            <div class="mobile-nav-item delay-item-2 border-b border-white/10 pb-4">
                <button class="accordion-trigger w-full flex justify-between items-center text-white hover:text-dome-gold focus:outline-none">
                    <span>About</span>
                    <i class="fa-solid fa-chevron-down text-lg accordion-chevron"></i>
                </button>
                <div class="mobile-accordion-content">
                    <div class="mobile-accordion-inner flex flex-col gap-4 pt-4 pl-4 font-inter text-lg font-normal capitalize tracking-normal">
                        <a href="about us.html" class="text-gray-400 hover:text-white flex items-center gap-3"><span class="w-2 h-2 rounded-full bg-gray-600"></span> About Us</a>
                        <a href="leadership.html" class="text-gray-400 hover:text-white flex items-center gap-3"><span class="w-2 h-2 rounded-full bg-gray-600"></span> Leadership</a>
                    </div>
                </div>
            </div>

            <div class="mobile-nav-item delay-item-3 border-b border-white/10 pb-4">
                <button class="accordion-trigger w-full flex justify-between items-center text-white hover:text-dome-gold focus:outline-none">
                    <span>Projects</span>
                    <i class="fa-solid fa-chevron-down text-lg accordion-chevron text-gray-500"></i>
                </button>
                <div class="mobile-accordion-content">
                    <div class="mobile-accordion-inner flex flex-col gap-4 pt-4 pl-4 font-inter text-lg font-normal capitalize tracking-normal">
                        <a href="usli.html" class="text-gray-400 hover:text-white flex items-center gap-3"><span class="w-2 h-2 rounded-full bg-gray-600"></span> NASA USLI</a>
                        <a href="ndxp.html" class="text-gray-400 hover:text-white flex items-center gap-3"><span class="w-2 h-2 rounded-full bg-gray-600"></span> Project NDXP</a>
                        <a href="outreach.html" class="text-gray-400 hover:text-white flex items-center gap-3"><span class="w-2 h-2 rounded-full bg-gray-600"></span> Outreach</a>
                    </div>
                </div>
            </div>

            <a href="join us.html" class="mobile-nav-item delay-item-4 text-white hover:text-dome-gold transition-colors block border-b border-white/10 pb-4">Join Us</a>
            <a href="contact.html" class="mobile-nav-item delay-item-5 text-white hover:text-dome-gold transition-colors block border-b border-white/10 pb-4">Contact</a>
            <div class="mobile-nav-item delay-item-6 pt-4">
                <a href="sponsors.html" class="block w-full text-center py-4 bg-dome-gold text-deep-space rounded-lg hover:bg-white transition-colors duration-300">Sponsors</a>
            </div>
        </div>
    </div>
`;

// 2. Inject HTML into the page when it loads
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('navbar-container');
    if (container) {
        container.innerHTML = navbarHTML;
        initializeNavbarLogic(); // Run all the effects now that the HTML exists!
    }
});

// 3. The Logic (Highlights, Scroll, Mobile Menu)
function initializeNavbarLogic() {
    const navbar = document.getElementById('navbar');
    const navLogo = document.getElementById('nav-logo');
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileMenu = document.getElementById('mobile-fullscreen-menu');
    const body = document.body;

    // --- Active Page Highlighting ---
    let currentPath = window.location.pathname.split('/').pop();
    if (currentPath === '') currentPath = 'index.html'; 
    currentPath = decodeURIComponent(currentPath);

    const allLinks = document.querySelectorAll('#navbar a, #mobile-fullscreen-menu a');

    allLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        if (href && decodeURIComponent(href) === currentPath) {
            
            // --- SPECIAL RULE FOR THE SPONSOR BUTTON ---
            if (href === 'sponsors.html') {
                // Fills in the background and changes text to dark
                link.classList.remove('text-dome-gold'); 
                link.classList.add('bg-dome-gold', 'text-deep-space');
            } 
            // --- RULE FOR ALL NORMAL TEXT LINKS ---
            else {
                link.classList.remove('text-white', 'text-gray-400');
                link.classList.add('text-dome-gold');

                const dot = link.querySelector('span.rounded-full');
                if (dot) {
                    dot.classList.remove('bg-gray-600');
                    dot.classList.add('bg-dome-gold');
                }
            }

            // Dropdown parent highlighting for Desktop
            const desktopDropdown = link.closest('.group');
            if (desktopDropdown) {
                const parentBtn = desktopDropdown.querySelector('button');
                if (parentBtn) {
                    parentBtn.classList.remove('text-white');
                    parentBtn.classList.add('text-dome-gold');
                }
            }

            // Dropdown parent highlighting for Mobile
            const mobileDropdown = link.closest('.mobile-nav-item');
            if (mobileDropdown) {
                const parentTrigger = mobileDropdown.querySelector('.accordion-trigger');
                if (parentTrigger) {
                    parentTrigger.classList.remove('text-white');
                    parentTrigger.classList.add('text-dome-gold');
                }
            }
        }
    });

    // --- Desktop/Mobile Scroll Effect ---
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-deep-space/95', 'backdrop-blur-md', 'shadow-lg', 'shadow-nd-blue/20');
            navbar.classList.remove('py-8');
            navbar.classList.add('py-3');
            navLogo.classList.remove('h-16');
            navLogo.classList.add('h-10');
        } else {
            navbar.classList.remove('bg-deep-space/95', 'backdrop-blur-md', 'shadow-lg', 'shadow-nd-blue/20');
            navbar.classList.add('py-8');
            navbar.classList.remove('py-3');
            navLogo.classList.add('h-16');
            navLogo.classList.remove('h-10');
        }
    });

    // --- Mobile Menu Toggle ---
    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('menu-btn-active');
            mobileMenu.classList.toggle('menu-active');
            
            if (mobileMenu.classList.contains('menu-active')) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = '';
                document.querySelectorAll('.mobile-accordion-content').forEach(acc => acc.classList.remove('accordion-open'));
                document.querySelectorAll('.accordion-trigger').forEach(btn => btn.classList.remove('accordion-open-parent'));
            }
        });
    }

    // --- Accordion Logic ---
    const accordionTriggers = document.querySelectorAll('.accordion-trigger');
    accordionTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const content = trigger.nextElementSibling;
            content.classList.toggle('accordion-open');
            trigger.classList.toggle('accordion-open-parent');
        });
    });
}