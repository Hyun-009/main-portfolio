document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger)



    const projectList= document.querySelectorAll('.project-lst>li')


    projectList.forEach((project)=>{
        project.addEventListener('mouseenter',()=>{
            project.classList.add('On')
        })
        project.addEventListener('mouseleave',()=>{
            project.classList.remove('On')
        })
    })

    const s0 = gsap.timeline()

    s0.to(".char1 .in-wrap span", {
        opacity: 1,
        y: 0,
        duration: .5, // 애니메이션 지속 시간
        stagger: .05, // 순차적 애니메이션 간격
        ease: "power3.out" // 부드러운 효과
    });
    s0.to(".char2 .in-wrap span", {
        opacity: 1,
        y: 0,
        duration: .5, // 애니메이션 지속 시간
        stagger: -.05, // 순차적 애니메이션 간격
        ease: "power3.out" // 부드러운 효과
    });
    s0.to(".char3 .in-wrap span", {
        opacity: 1,
        y: 0,
        duration: .5, // 애니메이션 지속 시간
        stagger: .05, // 순차적 애니메이션 간격
        ease: "power3.out" // 부드러운 효과
    });
    s0.to(".char4 .in-wrap span", {
        opacity: 1,
        y: 0,
        duration: .5, // 애니메이션 지속 시간
        stagger: -.05, // 순차적 애니메이션 간격
        ease: "power3.out" // 부드러운 효과
    });
});

const marquee = gsap.timeline()


marquee.addLabel('a')
    .from('.marquee1 .in-wrap', {
        xPercent: -70
    }, 'a')
    .to('.marquee2 .in-wrap', {
        xPercent: -60
    }, 'a')
    .from('.marquee3 .in-wrap', {
        xPercent: -70
    }, 'a')


ScrollTrigger.create({
    animation: marquee,
    trigger: '#s1',
    start: 'top 80%',
    end: '150% 60%',
    scrub: true,
    pin: false
})


// skil


gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
    "(min-width: 1024px)": function () {
        const items = gsap.utils.toArray(".skill-wrap li");
        const container = document.querySelector(".skill-wrap");

        const itemWidthRem = 26;
        const itemGapRem = 5.5;
        const remToPx = parseFloat(getComputedStyle(document.documentElement).fontSize);
        const itemWidth = (itemWidthRem + itemGapRem) * remToPx;
        const totalWidth = items.length * itemWidth;
        const moveX = totalWidth - window.innerWidth;

        container.style.width = `${(itemWidthRem + itemGapRem) * items.length}rem`;

        gsap.to(".skill-wrap", {
            x: -moveX,
            ease: "none",
            scrollTrigger: {
                trigger: "#s2",
                pin: true,
                scrub: 1,
                start: "top 0%",
                end: () => `+=${moveX}+200`, // 💡 정확하게 계산된 거리만큼
                anticipatePin: 1
            }
        });
    }
});


