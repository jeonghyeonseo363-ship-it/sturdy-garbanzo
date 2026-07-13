const scientists = [

{
    name:"리제 마이트너 (Lise Meitner)",
    country:"오스트리아 / 스웨덴",
    field:"핵물리학",
    photo:"images/meitner.jpg",
    achievement:
    "핵분열 현상을 이론적으로 설명하고 원자핵 연구 발전에 크게 기여했습니다.",
    reason:
    "핵분열 연구의 핵심 인물이었지만 1944년 노벨 화학상은 공동 연구자 오토 한에게만 수여되었습니다.",
    fact:
    "핵분열을 설명하는 데 중요한 역할을 했으며 원소 마이트너륨(Meitnerium)은 그녀의 이름에서 유래했습니다."
},

{
    name:"로절린드 프랭클린 (Rosalind Franklin)",
    country:"영국",
    field:"화학 · 생명과학",
    photo:"images/franklin.jpg",
    achievement:
    "DNA 구조 연구에 결정적인 X선 회절 사진(Photo 51)을 촬영했습니다.",
    reason:
    "DNA 구조 발견 과정에서 중요한 자료를 제공했지만 당시 공로가 충분히 인정되지 않았습니다.",
    fact:
    "그녀의 연구 자료는 현대 분자생물학 발전의 중요한 기반이 되었습니다."
},

{
    name:"치엔시웅 우 (Chien-Shiung Wu)",
    country:"중국 / 미국",
    field:"물리학",
    photo:"images/wu.jpg",
    achievement:
    "우 실험을 통해 약한 상호작용에서 패리티 보존 법칙이 성립하지 않음을 증명했습니다.",
    reason:
    "중요한 실험을 수행했지만 노벨상은 이론을 제시한 남성 연구자들에게만 수여되었습니다.",
    fact:
    "현대 물리학에서 '물리학의 퍼스트레이디'라고 불립니다."
},

{
    name:"에미 뇌터 (Emmy Noether)",
    country:"독일",
    field:"수학 · 이론물리학",
    photo:"images/noether.jpg",
    achievement:
    "뇌터 정리를 통해 물리학의 대칭성과 보존 법칙 사이의 관계를 밝혔습니다.",
    reason:
    "여성이라는 이유로 대학에서 정식 교수직을 얻기 어려웠고 업적이 늦게 알려졌습니다.",
    fact:
    "아인슈타인은 그녀를 최고의 수학자 중 한 명으로 평가했습니다."
},

{
    name:"조슬린 벨 버넬 (Jocelyn Bell Burnell)",
    country:"영국",
    field:"천체물리학",
    photo:"images/bell.jpg",
    achievement:
    "펄서(pulsar)를 최초로 발견했습니다.",
    reason:
    "발견 과정에서 중요한 역할을 했지만 지도교수가 노벨상을 받았습니다.",
    fact:
    "현재까지도 천문학 발전에 큰 영향을 준 연구자로 평가받습니다."
},

{
    name:"피에르 퀴리 (Pierre Curie)",
    country:"프랑스",
    field:"물리학",
    photo:"images/pierre.jpg",
    achievement:
    "방사능 연구와 압전효과 연구로 노벨 물리학상을 수상했습니다.",
    reason:
    "마리 퀴리의 남편으로 더 알려져 자신의 독립적인 연구 업적이 상대적으로 가려졌습니다.",
    fact:
    "퀴리 부부의 연구는 현대 방사선 과학의 출발점이 되었습니다."
},

{
    name:"퍼시 줄리언 (Percy Julian)",
    country:"미국",
    field:"화학",
    photo:"images/julian.jpg",
    achievement:
    "식물에서 의약품 원료를 합성하는 방법을 개발했습니다.",
    reason:
    "인종차별로 인해 연구 성과와 업적이 오랫동안 제대로 평가받지 못했습니다.",
    fact:
    "합성 의약품 발전에 중요한 영향을 준 화학자입니다."
},

{
    name:"자그디시 찬드라 보스 (Jagadish Chandra Bose)",
    country:"인도",
    field:"물리학 · 식물학",
    photo:"images/bose.jpg",
    achievement:
    "무선통신 연구와 식물 반응 연구를 진행했습니다.",
    reason:
    "서구 중심의 과학 역사 속에서 그의 연구가 충분히 알려지지 않았습니다.",
    fact:
    "식물이 자극에 반응한다는 사실을 과학적으로 연구했습니다."
}

];


const button = document.getElementById("randomBtn");

let previous = -1;


button.addEventListener("click",()=>{

    let random;

    do{
        random=Math.floor(Math.random()*scientists.length);
    }
    while(random===previous);

    previous=random;


    const scientist=scientists[random];


    document.getElementById("photo").src=scientist.photo;

    document.getElementById("name").innerText=
    scientist.name;

    document.getElementById("country").innerText=
    "🌍 국적 : "+scientist.country;

    document.getElementById("field").innerText=
    "🔬 분야 : "+scientist.field;

    document.getElementById("achievement").innerText=
    scientist.achievement;

    document.getElementById("reason").innerText=
    scientist.reason;

    document.getElementById("fact").innerText=
    scientist.fact;


});
