// 변수 선언
const links = document.querySelectorAll('.menu-list li a')
const sections = document.querySelectorAll('#wrap > section')
const menuList = document.querySelector('.menu-list')
const header = document.querySelector('header')
const navBtn = document.querySelector('.navBtn')
const toggleMenu= document.querySelectorAll('.toggle-menu li')

let pageNum = 0
let totalNum = sections.length
let scrolling = false  // gsap 애니메이션 중 스크롤 방지용 flag

// 초기 실행
init(pageNum)

header.classList.add('loading')
// 스크롤 이벤트
window.addEventListener('scroll', function () {
    if (scrolling) return  // gsap 애니메이션 중에는 리턴

    let scroll = window.scrollY || window.pageYOffset
    let sc0Height = document.querySelector('#s0').offsetHeight


    console.log(sc0Height)

    // 현재 섹션 체크
    for (let i = 0; i < totalNum; i++) {
        if (
            scroll > sections[i].offsetTop - window.outerHeight / 1.5 &&
            scroll < sections[i].offsetTop - window.outerHeight / 1.5 + sections[i].offsetHeight
        ) {
            pageNum = i
            init(pageNum)
            funcObj[`f_${pageNum}`]()  // 섹션별 실행 함수 호출
        }
    }



    if(sc0Height<=scroll){
        header.classList.add('tBtn-open')
    }else{
        
        header.classList.remove('tBtn-open')
    }


})

// 메뉴 클릭 이벤트
links.forEach(function (link, index) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        scrollToSection(index, function () {
            let scroll = window.scrollY || window.pageYOffset
            let sc0Height = document.querySelector('#s0').offsetHeight

            if (scroll < sc0Height) {
                header.classList.remove('tBtn-open')
            }
        })
      });
})

toggleMenu.forEach(function(tmenu,index){
    tmenu.addEventListener('click',function(e){
        e.preventDefault()
        scrollToSection(index)
        let scroll = window.scrollY || window.pageYOffset
        let sc0Height = document.querySelector('#s0').offsetHeight
    

        if (scroll < sc0Height) {
            header.classList.remove('tBtn-open');
          }
    
          // ✅ Home 메뉴일 경우 사이드 메뉴 닫기
          if (index === 0) {
            header.classList.remove('sideNav-open');
          }
    })


})


function scrollToSection(index,callback) {
    // scrolling = true; // gsap 애니메이션 중 스크롤 막기
    // init(index);      // 사용자 정의 초기화 함수 (필요시 조정)
  
    gsap.to(window, {
        duration: 1,
        scrollTo: { y: `#s${index}` },
        onComplete: function () {
            scrolling = false
            if (typeof callback === 'function') callback()
        }
    })
  }

// navBtn 메뉴 열기/닫기
navBtn.addEventListener('click', function () {
    header.classList.toggle('sideNav-open')
})

// 섹션별 실행 함수
let funcObj = {
    f_0: function () {
        console.log('0번 함수')
    },
    f_1: function () {
        console.log('1번 함수')
    },
    f_2: function () {
        console.log('1번 함수')
    },
    f_3: function () {
        console.log('2번 함수')
    },
    f_4: function () {
        console.log('4번 함수')
    }
}

// 메뉴, 섹션 active 처리 함수
function init(i) {
    if (!links[i] || !sections[i]) return; // 범위 초과 시 리턴
    links.forEach(link => link.classList.remove('active'))
    sections.forEach(section => section.classList.remove('current'))

    links[i].classList.add('active')
    sections[i].classList.add('current')
}
