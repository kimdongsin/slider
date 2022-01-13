const prev = document.querySelector(".main__buttombox__prev");
const next = document.querySelector(".main__buttombox__next");
const images = document.querySelectorAll(".main__backbox__img");
const dot = document.querySelectorAll(".main__dotbox__dot");

let count = 1;
let pas = setInterval(autoDot, 5000);

// 토글 제어 변수
let toggle = true;


// 자동 재시작 함수
function ntgle() {

    // 토글의 값을 가져옴
    if (toggle) {
        toggle = false;

        // pas를 멈춘다
        clearInterval(pas);

        // setTimeout으로 즉시 한번만 실행
        setTimeout(function () {

            // 토글 값 변경
            toggle = false;

            // 함수를 재실행 (재귀)
            ntgle();
        }, 0); // 0초로 해둔 이유 : 초가 중첩되서 0초로 해둠

    } else { // false일 경우

        // setInterval로 자동으로 넘어가게 실행
        pas = setInterval(autoDot, 5000);

        // 토글 값 변경
        toggle = true;
    }
}

// 다음 이미지 보여주기 함수
function nextFnc() {
    if (count === images.length) {
        count = 0;
    }

    for (let i = 0; i < images.length; i++) {
        images[i].classList.add("none");
        dot[i].classList.remove("bdot");
    }
    images[count].classList.remove("none");
    dot[count].classList.add("bdot");
    count += 1;
}

//이전 이미지 보여주기 함수
function prevFnc() {
    count -= 1;

    if (count === 0) {
        count = 4;
    }

    for (let i = 0; i < images.length; i++) {
        images[i].classList.add("none");
        dot[i].classList.remove("bdot");
    }
    images[count - 1].classList.remove("none");
    dot[count - 1].classList.add("bdot");
}


next.addEventListener("click", function () {
    if (!toggle) {
        nextFnc();
        return;
    } else {
        nextFnc();
        ntgle();
    }
});

prev.addEventListener("click", function () {
    if (!toggle) {
        prevFnc();
        return;
    } else {
        prevFnc();
        ntgle();
    }

})

//점 시작고정
dot[0].classList.add("bdot");


//점 선택 시 멈춤, 자동 넘기기
for (let i = 0; i < dot.length; i++) {
    dot[i].addEventListener("click", function () {
        for (let j = 0; j < dot.length; j++) {
            images[j].classList.add("none");
            dot[j].classList.remove("bdot");

            if (!toggle) {
                count = i+1;
            } else {
                count = i+1;
                ntgle();
            }
        }
        images[i].classList.remove("none");
        dot[i].classList.add("bdot");
    })
}


//자동 넘기기 함수
function autoDot() {
    count + 1;

    if (count === images.length) {
        count = 0;
    }

    console.log(count);
    for (let i = 0; i < images.length; i++) {
        images[i].classList.add("none");
        dot[i].classList.remove("bdot");
    }
    console.log(count);
    images[count].classList.remove("none");
    dot[count].classList.add("bdot");

    count += 1;
}