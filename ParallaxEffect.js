// ==========================================
        // Header Text Parallax Effect
        // ==========================================
        const heroText = document.getElementById('hero-text');
        let parallaxTicking = false;

        window.addEventListener('scroll', () => {
            if (!parallaxTicking) {
                window.requestAnimationFrame(() => {
                    // Only run the math if we are still at the top of the page (saves performance)
                    if (heroText && window.scrollY <= window.innerHeight) {
                        
                        // Moving it negatively on the Y axis makes it scroll up faster than the page. 
                        // * 0.4 means it goes up 40% faster than the section below it. 
                        // Feel free to tweak the 0.4 up or down to dial in the exact speed you want!
                        heroText.style.transform = `translateY(-${window.scrollY * 1}px)`;
                    }
                    parallaxTicking = false;
                });
                parallaxTicking = true;
            }
        });