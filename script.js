gsap.registerPlugin(ScrollTrigger);

function addImageScaleAnimation() {
    gsap.utils.toArray("section").forEach((section, index) => {
        const image = document.querySelector(`#preview-${index + 1} img`);
        if (!image) return;  // Skip if image not found

        const startCondition = "bottom top";
        gsap.to(image, {
            scrollTrigger: {
                trigger: section,
                start: startCondition,
                end: () => {
                    const viewportHeight = window.innerHeight;
                    const sectionBottom = section.offsetTop + section.offsetHeight;
                    const additionalDistance = viewportHeight * 0.5;
                    const endValue = sectionBottom - viewportHeight + additionalDistance;
                    return `${endValue}px`;
                },
                scrub: 1,
            },
            scale: 3,
            transformOrigin: "center center",
            ease: "none",
        });
    });
}
addImageScaleAnimation();

function animateClipPath(
    sectionId,
    previewId,
    startClipPath,
    endClipPath,
    start = "top center",
    end = "bottom top"
) {
    let section = document.querySelector(sectionId);
    let preview = document.querySelector(previewId);

    if (!section || !preview) return;  // Skip if section or preview not found

    gsap.to(preview, {
        scrollTrigger: {
            trigger: section,
            start: start,
            end: end,
            scrub: 0.125,
        },
        clipPath: endClipPath,
        ease: "none",
    });
}

animateClipPath(
    "#section-1",
    "#preview-1",
    "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
);

const totalSections = 6;

for (let i = 2; i <= totalSections; i++) {
    let currentSection = `#section-${i}`;
    let prevPreview = `#preview-${i - 1}`;
    let currentPreview = `#preview-${i}`;

    animateClipPath(
        currentSection,
        prevPreview,
        "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        "top bottom",
        "center center"
    );

    if (i < totalSections) {
        animateClipPath(
            currentSection,
            currentPreview,
            "polygon(0% 0%, 100% 100%, 100% 100%, 0% 100%)",
            "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            "center center",
            "bottom top"
        );
    }
}


gsap.to(".mainline p", {
  y: -50,  
  opacity: 0.8,  
  duration: 1,  
  stagger: 0.2,  // Delay between each line of text
  ease: "power1.out",  
  scrollTrigger: {
    trigger: ".footer",  
    start: "top center",  
    toggleActions: "play none none reverse",  
  }
});

document.addEventListener('DOMContentLoaded', function() {
    gsap.to(".fadeimg", {
      opacity: 1,
      duration: 5, 
      ease: "power2.out" 
    });
  });
  
  //
  