gsap.registerPlugin(TextPlugin, SplitText, ScrollTrigger, ScrollToPlugin);

let heading = document.querySelector("h1")
let headingParagraph = document.querySelectorAll(".heading-paragraph");
let headerImage = document.querySelector(".header_image");


let headingSplit = new SplitText(heading, { type: "words, chars" });
let paragraphSplit = new SplitText(headingParagraph, { type: "words, chars" });


gsap.from(headerImage, {
    autoAlpha: 0,
    duration: 2,
    delay: 0.5
})

const textAnim = {
    yPercent: "random([100, -100])",
    rotation: "random(-30, 30)",
    ease: "back.out",
    autoAlpha: 0,
    stagger: {
        amount: 0.9,
        from: "random"
    }
};

gsap.from([headingSplit.chars], {
    ...textAnim
})



gsap.from(paragraphSplit.chars, {
    ...textAnim,
    yPercent: 10,
    stagger: {
        amount: 0.5,
        from: "random"
    },
    delay: 1
});


// gsap.from(headingSplit.words, {
//     yPercent:"random ([100, -100])",
//     rotation: "random(-5, 5)",
//     ease: "back.out",
//     repeat: -1,
//     yoyo: true,
//     stagger: {
//         amount: 0.2,
//         from: "random"
//     }
// })



gsap.utils.toArray(".music_card").forEach(card => {
    gsap.fromTo(card,
        {
            x: -100,
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
                scrub: true,
                toggleActions: "play reverse play reverse"
            }
        }
    );
});


