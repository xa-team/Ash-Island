function fillZero(width, str){
    return str.length >= width ? str:new Array(width-str.length+1).join('0')+str;//남는 길이만큼 0으로 채움
}
function ChangePage(idMyDiv) {
    var objDiv = document.getElementById(idMyDiv);
    var obj1 = document.getElementById("profile_table");
    var obj1_1 = document.getElementById("profile_bg");
    var obj2 = document.getElementById("album_main");
    var obj2_2 = document.getElementById("lyrics_paranoid");
    var obj3 = document.getElementById("album_single_1");
    var obj4 = document.getElementById("others");
    // var list_btn2 = document.getElementsByClassName("album_main_sidebar");
    var list_btn2 = document.getElementById("ams");
    var list_btn3 = document.getElementById("ass");
    var play_btn = document.getElementById("play_music_btn");
    var table_lyrics = document.getElementById('lyrics_paranoid');
    // var btn = document.getElementById("btn-jungyue"); 버튼 비활성화 display = none으로 해도 됨.
    // if (objDiv.style.display == "block") {
    //     objDiv.style.display = "none"; 
    // }
    // else { objDiv.style.display = "block"; }

    if (objDiv.id == obj1.id) {
        objDiv.style.display = "block";
        obj1_1.style.display = "block";
        obj2.style.display = "none";
        obj2_2.style.display = "none";
        list_btn2.style.display = "none";
        // obj3.style.display = "none";
        list_btn3.style.display = "none";
        obj4.style.display = "none";
        play_btn.style.display = "none";
        table_lyrics.style.display = "none";
        ChangeBg(99);
    }
    else if (objDiv.id == obj2.id) {
        obj1.style.display = "none";
        obj1_1.style.display = "none";
        objDiv.style.display = "block";
        obj2_2.style.display = "block";
        list_btn2.style.display = "block";
        // obj3.style.display = "none";
        list_btn3.style.display = "none";
        obj4.style.display = "none";
        play_btn.style.display = "none";
        table_lyrics.style.display = "none";
        ChangeBg(99);
    }
    else if (objDiv.id == obj3.id) {
        obj1.style.display = "none";
        obj1_1.style.display = "none";
        obj2.style.display = "none";
        list_btn2.style.display = "none";
        list_btn3.style.display = "block";
        obj4.style.display = "none";
        play_btn.style.display = "none";
        table_lyrics.style.display = "none";
        ChangeBg(98);
    }
    else if (objDiv.id == obj4.id) {
        obj1.style.display = "none";
        obj1_1.style.display = "none";
        obj2.style.display = "none";
        list_btn2.style.display = "none";
        // obj3.style.display = "none";
        list_btn3.style.display = "none";
        objDiv.style.display = "block";
        table_lyrics.style.display = "none";
        ChangeBg(99);
    }
}

const btn_back = document.querySelector("#back");

const CLICKED_CLASS = "btn_clicked";
const BG_CLICKED_CLASS = "bg_clicked"

function ChangeBg(a) {
    if (a == 99) {
        for (var i = 1; i < 7; i++) {
            var others = document.querySelector("#album_single_" + i);
            if (others.classList.contains(BG_CLICKED_CLASS)) {
                others.classList.remove(BG_CLICKED_CLASS);
            }
        }
        return;
    }
    else if (a == 98) {
        for (var i = 1; i < 7; i++) {
            const fontc = document.querySelector("#SINGLE_" + i);
            if (fontc.classList.contains(CLICKED_CLASS)) {
                var others = document.querySelector("#album_single_" + i);
                others.classList.add(BG_CLICKED_CLASS);
                return;
            }
        }
    }
    const bg_picture = document.querySelector("#album_single_" + a);
    if (!(bg_picture.classList.contains(BG_CLICKED_CLASS))) {
        bg_picture.classList.add(BG_CLICKED_CLASS);
        for (var i = 1; i < 7; i++) {
            var others = document.querySelector("#album_single_" + i);
            if (others.classList.contains(BG_CLICKED_CLASS) && i != a) {
                others.classList.remove(BG_CLICKED_CLASS);
            }
        }
    }
}
function ChangeFont(album, a) {
    const album_title = ("#" + album + "_");
    const title = document.querySelector("#" + album + "_" + a);
    if (!(title.classList.contains(CLICKED_CLASS))) {
        title.classList.add(CLICKED_CLASS);
        for (var i = 1; i < 8; i++) {
            var others = document.querySelector("#" + album + "_" + i);
            if (others.classList.contains(CLICKED_CLASS) && i != a) {
                others.classList.remove(CLICKED_CLASS);
            }
        }
    }
}
function ChangeLyrics(music_name) {
    if (music_name == 'Paranoid') {
        var lyrics = "<p>Im livin' in a fuckin paranoid<br>밤 새 나를 지켜 오늘도<br>잠을 못 자 All night long<br>나는 혼자 All night long<br>길을 걸어가다 뒤를 봐</p><p>Paranoid ya ya ya ya ya<br>(paranoid paranoid paranoid)<br>Paranoid ya ya ya ya ya<br>(Paranoid paranoid paranoid)<br>Paranoid ya ya ya ya ya<br>(Paranoid paranoid paranoid)<br>Paranoid ya ya ya ya ya<br>(Paranoid paranoid paranoid)</p><p>별이 보일 때쯤 나는 눈을 감았네<br>머리까지 이불을 덮어 내가 잘 안 보이게<br>누군가 내 삶을 뺏아가도 모르기에<br>거릴 걸을 때는 뒤를 돌아 버릇돼<br>매일이 난 너무 두려워 누가 날 죽일 수도<br>When open ma eyes 어떤 것도 안 보이는 걸<br>지금 시간에도 누가 날 겨누고 있어<br>알지 안 일어날 걸 하지만 아무도 몰라<br>Oh plz don't talk anymore<br>멈춰 머리 안에 소리도<br>제발 아무나 날 데리러 Cuz</p><p>Im livin' in a fuckin paranoid<br>밤 새 나를 지켜 오늘도<br>잠을 못 자 All night long<br>나는 혼자 All night long<br>길을 걸어가다 뒤를 봐<br>Paranoid ya ya ya ya ya<br>(Paranoid paranoid paranoid)<br>Paranoid ya ya ya ya ya<br>(Paranoid paranoid paranoid)<br>Paranoid ya ya ya ya ya<br>(Paranoid paranoid paranoid)<br>Paranoid ya ya ya ya ya<br>(Paranoid paranoid paranoid)</p><p>Yeah look at my eyes sad<br>Too many lies there<br>Im gonna die<br>차라리 더 나아 나를 저 달이 달래<br>Oh I wanna be alone yeah<br>또 봤지 내 눈에 고인<br>피와 똑같은 이 Voice 맴돌아 공기 중에<br>Oh plz don't talk anymore<br>멈춰 머리 안에 소리도<br>제발 아무나 날 데리러 Cuz</p><p>Im livin' in a fuckin paranoid<br>밤 새 나를 지켜 오늘도<br>잠을 못 자 All night long<br>나는 혼자 All night long<br>길을 걸어가다 뒤를 봐</p>";
        document.getElementById('lyrics_paranoid').innerHTML = lyrics;
    }
    else if (music_name == 'Valhalla') {
        var lyrics = "<p>아지랑이 같애 불이 꺼진 담배<br>where is ma fuckin valhalla<br>천장은 우리 방패 매일 아름답게<br>불에 타며 빛이 나길 바래 valhalla<br>valhalla valhalla</p><p>여기는 우리 사하라 몸을 묻었지 한가운데<br>에 꽂은 창과 흔적 이란 피바다<br>이 몸이 전부 다할 때 이곳이 아름답게<br>오늘은 내 모든 걸 바쳐 싸우리<br>죽을 때까지 남겨<br>내 감정, 이 가슴의 한<br>오늘 내가 죽어도 내 목소리 하나 만은<br>딱 한 사람만의 귀나 마음에<br>머물 수만 있다면<br>나 칼을 잡아 달이 떠올라질 때까지 싸워<br>이곳에 혼자 남아 외롭지 아니 할까<br>떠 있는 달을 봐<br>오늘도 방은 밝아 나 딱 하나의 바람<br>이 방의 불을 도 빛이 나길 valhalla</p><p>아지랑이 같애 불이 꺼진 담배<br>where is ma fuckin valhalla<br>천장은 우리 방패 매일 아름답게<br>불에 타며 빛이 나길 바래 valhalla<br>valhalla valhalla</p><p>Bitch im a soldier<br>내 무긴 phone 총알을 장전<br>매번 적어내려 내 bullet,<br>Fuck you 여긴 모두 적<br>뿐인 valhalla you know<br>여긴 마치 전쟁터 난 피를 뿌려 모니터에<br>다시 올 땐 내게 추억으로 남아<br>이제 여기는 valhalla<br>나뿐이 멈춰있는 공터는 아마 예전과 같아<br>내 길은 정상 내려다보겠지<br>나의 발자국과 남은 사람<br>보여 like butterfly 난 걸어가 혼자<br>어디론가로 난 햇살은 나를 밝혀<br>밤새 걸었던 나에게 비춰주는 보상<br>그곳을 모름 닥쳐 난<br>피 흘리고 다쳐가며<br>더 싸웠고 난 돌아갈게 나를 봐</p><p>아지랑이 같애 불이 꺼진 담배<br>where is ma fuckin valhalla<br>천장은 우리 방패 매일 아름답게<br>불에 타며 빛이 나길 바래 valhalla<br>valhalla valhalla</p><p>Still living in Valhalla from 1llibition<br>여의도 Asgard<br>여긴 영원히 젊지<br>밤마다 포도색으로 만들어<br>BombaySapphire<br>Yeah that’s our primetime<br>iPod made quiet night<br>너의 질문엔 나의 새벽이 답하지<br>너흰 될 수 없거든 Hans Landa<br>마차를 타 새벽 색의 카레라<br>월계관을 짜 전부터 바래왔지<br>난 환상 따위엔 일말의 관심도 없지<br>그 노이만이 날 valhalla로 바래다줘<br>Yeah God blessin’<br>은잔은 손목에 I did it<br>Yeah Bitch I’m with it<br>아직 부족하지 so I need it<br>I need it I need it More and more<br>빛나야 해 늦은 오후에도<br>이 궁전 안의 거울에서<br>어떤 바보들은 여우 됐어<br>여긴 내다 버리네<br>난 포도주를 거기다 뿌리겠지<br>I’m in Valhalla 천장뿐이던<br>내 과거까지 비추네 샹들리에</p><p>아지랑이 같애 불이 꺼진 담배<br>where is ma fuckin valhalla<br>천장은 우리 방패 매일 아름답게<br>불에 타며 빛이 나길 바래 valhalla<br>valhalla Valhalla</p>";
        document.getElementById('lyrics_paranoid').innerHTML = lyrics;
    }
    else if (music_name == 'DEADSTAR') {
        var lyrics = "<p>I can see the stars shinin when I wake up<br>그래 내가 원하던 별이 됐어<br>매일 밤 내 눈앞에 환히 빛을 던<br>넌 빛이 나지 않아 when u wash the make up<br>woh?<br>난 아름답지 않아 매일 마다<br>빨간 피가 묻어 손바닥엔<br>깨져버린 유리 조각과<br>내 꿈들이 밟혀있어 “I'm the star”</p><p>what the fuck is your decision?<br>별이 되는 거 말고 답은 없지 원한 거라<br>바로 알겠지 넌 reason<br>별이 됐단 거 말고 답은 역시 all i wanted<br>love 감정 까먹어 반복 난 또 쳐웃어 이게 원한 거야?<br>한번 다시 물어 다 몰랐더라면 차라리 더 편할 거야<br>달빛 on head like spotlight 그럴 거란 환상<br>꿈속에 생각은 꼭 아름답진 않아<br>다들 알어 밤이 오듯 아침은 밝아<br>허나 “아침이 오듯이 밤이 또 찾아와”</p><p>I can see the stars shinin when I wake up<br>그래 내가 원하던 별이 됐어<br>매일 밤 내 눈앞에 환히 빛을 냈던<br>넌 빛이 나지 않아 when u wash the make up<br>woh?<br>난 아름답지 않아 매일 마다<br>빨간 피가 묻어 손바닥엔<br>깨져버린 유리 조각과<br>내 꿈들이 밟혀있어 “I'm the star”</p><p>달빛을 받아 방금 비워낸 잔에<br>마시려 하나 입은 허무를 담네<br>영문을 몰라, 달빛은 달꺼라<br>내 무의식이 말했었는데<br>난 살을 찢어, 고통은 느껴지는데<br>Oh my, 다시 또, 고통이 울부짖는데<br>절대 안 믿겨 이것이 현실이라는 게<br>그대는 이뻐, 하지만 우아하진 않은 것 같애 <br>Ay lady we can fuck, but<br>우린 나눌 수 없네 그 사랑이라는 것<br>무대에서 웃지만 안으론 울어대<br>나의 공간을 울리는 문장은 ‘나 술 원해’<br>Hey I’m a fuckin star, so bright<br>살아 rockstar life<br>검은 밤 속 나는 그저 달릴 뿐<br>내게 유성이라 이름 붙여, 환상을<br>찾아 헤매던 내 끝은 그저 파멸뿐</p><p>I can see the stars shinin when I wake up<br>그래 내가 원하던 별이 됐어<br>매일 밤 내 눈앞에 환히 빛을 냈던<br>넌 빛이 나지 않아 when u wash the make up<br>woh?<br>난 아름답지 않아 매일 마다<br>빨간 피가 묻어 손바닥엔<br>깨져버린 유리 조각과<br>내 꿈들이 밟혀있어 “I'm the star”</p>";
        document.getElementById('lyrics_paranoid').innerHTML = lyrics;
    }
    else if (music_name == 'Forgot U') {
        var lyrics = "<p>너무 어려 너가 아직은 많이 몰라<br>겁이 나 my all night fall in depression like<br>너무 어려 넌 아직은 많이 몰라<br>겁이 난대도</p><p>울다 보니 forgot u<br>forgot u forgot u forgot<br>울다 보니 forgot u<br>forgot u forgot u forgot<br>울다 보니 forgot</p><p>울어 잠겼다 풀어 밤낮이<br>반복 빨리 감어 나를 매번<br>since i was 아무것도 모를 때로<br>벙쪄 방에 가둬놓은 채로<br>아직 많이 모르나 봐 겁이나<br>내일 매일 목소린 날 때려<br>상처가 심해가 나를 봐<br>비참하게 몰아 방구석에는<br>많은 virus가 더 쌓여 가지<br>dyin' maybe im dyin'<br>아마 다 잊어가는 중야 아마도<br>그저 울다가 기억까지도 아마도 나도</p><p>너무 어려 너가 아직은 많이 몰라<br>겁이 나 my all night<br>fall in depression like<br>너무 어려 넌 아직은 많이 몰라<br>겁이 난대도</p><p>울다 보니 forgot u<br>forgot u forgot u forgot<br>울다 보니 orgot u<br>forgot u forgot u forgot<br>울다 보니 forgot</p><p>나도 잘 몰라 이런 거는<br>여자 없다고 우는 거는<br>못해 나 자 힘든 척은<br>약을 먹고 또 불을 꺼<br>겁이 나지만 its okay<br>더 이상 나도 i dont care<br>우린 어려서 일없데<br>떠나는 나를 understand me<br>가 더 어릴 때로<br>넌 너의 자신대로 돌아가<br>돌아가되 날 잊지마<br>원해 다시 그때로<br>될 수 없어 대로는<br>또 난 울다 보니 Forgot you, you, you<br>울다 보니 Forgot you, you, you<br>울다 보니 Forgot</p>";
        document.getElementById('lyrics_paranoid').innerHTML = lyrics;
    }
    else if (music_name == 'Jamsuham') {
        var lyrics = "<p>오늘은 나를 찾지 마 yeah<br>억지로 나를 가둬<br>이곳은 너무 차가워<br>방안에 앉아 갇혀<br>i feel like 잠수함 (i feel like 잠수함)<br>yeah i feel like 잠수함 (나는 잠수함)</p><p>오늘은 나를 찾지 마 yeah<br>억지로 나를 놔둬<br>이곳은 너무 차가워<br>방안에 혼자<br>가라앉아 잠수함 (i feel like 잠수함)<br>yeah i feel like 잠수함 (나는 잠수함)</p><p>오랜만이야 how r u<br>나는 question mark 안에 how 'bout u<br>내가 나를 잊어가<br>im on fuckin drunken drive<br>몰라 어딘지 oh my who the fuck r u<br>해는 뜨는 중인데 나는 배고파<br>생각이 나 우리 엄마가<br>아침에 해주는 밥상 but<br>난 이렇게 죽어가<br>난 이렇게 죽어가 거울로 내 눈도 못 봐<br>편해 차라리 혼자 yeah i feel like 잠수함</p><p>잠수함 ... 잠수함 ... 잠수함 ...<br>yeah i feel like 잠수함</p><p>오늘은 나를 찾지 마 yeah<br>억지로 나를 가둬<br>이곳은 너무 차가워<br>방안에 앉아 갇혀<br>i feel like 잠수함 (i feel like 잠수함)<br>yeah i feel like 잠수함 (나는 잠수함)</p><p>오늘은 나를 찾지 마 yeah<br>억지로 나를 놔둬<br>이곳은 너무 차가워<br>방안에 혼자<br>가라앉아 잠수함 (i feel like 잠수함)<br>yeah i feel like 잠수함 (나는 잠수함)</p><p>Countin’ up my dollars<br>Countin’ up my commas<br>I don’t fuck with numbers<br>Round it up to hunnids<br>Never liked school cuz<br>they dropped me non stop<br>Now my drums drop like<br>my grades When I chop<br>Fallin in deep Puffin’ up heat<br>Grindin for weeks I don’t do sleep<br>I sense all them mufuckers<br>tryna get at me<br>But homie i don’t really<br>know u what u see in me<br>Just a part of ur imagination tryna be<br>On to something tellin’ u stuff u<br>ain’t never seen nah<br>Wake the fuck up U a stuck up<br>Wastin my luck I don’t do luck<br>Roof top Drop top Goin up like non stop<br>Cuz I’m rockin’ all these moves so<br>I don’t really got time<br>Im a fuckin’ shark Bitch i never park<br>Ima do my part Singin’ notes my art<br>Thinkin’ 'bout my motion dive<br>Never fuck with noisy types<br>Overthinkin 'bout my life<br>Cuz im a person in disguise</p>";
        document.getElementById('lyrics_paranoid').innerHTML = lyrics;
    }
    else if (music_name == 'Q_Mark') {
        var lyrics = "<p>yeah question mark 머리 뒤에다 띄워<br>난 이 혼란에 겁 allergy<br>오늘은 뭐가 날 기다려<br>내일이면 다시 돌아 fuck<br>yeah im in circle but 아닌 척<br>잠에 못 들어 하루 종일<br>오늘은 뭐가 날 기다려<br>내일이면 또 나가리 fuck</p><p>yeah question mark 머리 뒤에다 띄워<br>난 이 혼란에 겁 allergy<br>오늘은 뭐가 날 기다려<br>내일이면 다시 돌아 fuck<br>yeah im in circle but 아닌 척<br>잠에 못 들어 하루 종일<br>오늘은 뭐가 날 기다려<br>내일이면 또 나가리 fuck</p><p>또 나가리 fuck 뭐가 뭔지 몰라 yeah<br>어제도 잠을 못 잤네<br>일어나 공기도 탁해<br>뭐 땜이겠어? 뻔해 뭐 담배<br>정말 난 정답에<br>목메도 매일 똑같애<br>밖에는 죄다 liar<br>내 방안에 빛도 slience<br>어디로 가 는지는 몰라 그래도 이길<br>마지막에는 마침표가<br>내 기분이 좆같애도 난 원안에 살어<br>이걸 적어 그래 fuckin 예술가<br>빡치는 moment 닥치고 workin<br>밤에는 울어도 내 탓이지 그래<br>난 돌아가고 싶어도 못 돌아가네 또<br>question mark</p><p>yeah question mark 머리 뒤에다 띄워<br>난 이 혼란에 겁 allergy<br>오늘은 뭐가 날 기다려<br>내일이면 다시 돌아 fuck<br>yeah im in circle but 아닌 척<br>잠에 못 들어 하루 종일<br>오늘은 뭐가 날 기다려<br>내일이면 또 나가리 fuck</p><p>yeah question mark 머리 뒤에다 띄워<br>난 이 혼란에 겁 allergy<br>오늘은 뭐가 날 기다려<br>내일이면 다시 돌아 fuck<br>yeah im in circle but 아닌 척<br>잠에 못 들어 하루 종일<br>오늘은 뭐가 날 기다려<br>내일이면 또 나가리 fuck</p><p>난 계속 모른척하고 달릴래<br>미래 따위 don't look back<br>어차피 성공이 정해진 것처럼<br>다시 목표로 급행<br>이유 없이 탓을 하던 그때<br>돌아갈 일 없게끔 말야 절대<br>존중해 줄래 내 선택 가끔은<br>다시 또 무너질거란 걸 알지만<br>멈출 일 없단 걸 나보다 너가 더 잘알잖어<br>아직은 멀었지만 난 여기까지 왔는 걸<br>위로가 되고싶어<br>지워버린 뒤에 내 물음표<br>안심한 니 표정 보고싶어<br>난 작은 도움이 되고싶어<br>약속해 무너질 일 없단 걸</p><p>배달원은 시비조 메뉴는 좀 비리고<br>번호인 줄 알았던 그녀의 대답도 스도쿠<br>또 괜히 일이 꼬여 또 괜히 일이 꼬여<br>문제는 여전히 오늘은 내일의 미리 보기<br>흘러가 비슷하게<br>신박한 건 너의 뻔한 미움밖에<br>사실 나도 걔넬 증오하지<br>뒤졌으면 한다고<br>세상이 아름답다 했어<br>난 음 좆까 인스타그램<br>I don’t wanna get pain<br>I don’t wanna get pain<br>상처를 봐준다며 아예 발가벗겨 보려해<br>우선 믿기 시작하면 전부 다 편할거래<br>불편하다 말해야 되는거 조차 불편한데<br>이런 질문들은 모여 토성의 고리가 됐지<br>근데 토성은 고리 덕에 아름다운거 같애<br>그래 더 멀리서 봐 내 혼란이 가치를 갖게<br>So what’s next</p><p>yeah question mark 머리 뒤에다 띄워<br>난 이 혼란에 겁 allergy<br>오늘은 뭐가 날 기다려<br>내일이면 다시 돌아 fuck<br>yeah im in circle but 아닌 척<br>잠에 못 들어 하루 종일<br>오늘은 뭐가 날 기다려<br>내일이면 또 나가리 fuck</p><p>yeah question mark 머리 뒤에다 띄워<br>난 이 혼란에 겁 allergy<br>오늘은 뭐가 날 기다려<br>내일이면 다시 돌아 fuck<br>yeah im in circle but 아닌 척<br>잠에 못 들어 하루 종일<br>오늘은 뭐가 날 기다려<br>내일이면 또 나가리 fuck</p>";
        document.getElementById('lyrics_paranoid').innerHTML = lyrics;
    }
    else if (music_name == 'Fall') {
        var lyrics = "<p>I'm alone and sad, you fuck my world<br>I won't lie, I fuckin' loved you girl<br>Please don't leave me alone<br>But you are gone and I'm fallin' down<br>너는 갔고 나는 남아 혼자<br>이 자리에서 기다려 니 연락<br>꽤 오래됐지 its been a long time<br>너에겐 아닐까 봐 그게 겁나<br>너무 아름다웠던 기억만 남은 자리에<br>나만 홀로 싸워 떠난 너와<br>이젠 더는 못 본다는 사실 하나와 아픔만이<br>겁을 줘 밤마다 떠올라<br>니가 싫어하던 것 니가 싫어하던 말투<br>또 싫어하던 모든 게 다 빌어먹을 나였지<br>만 이젠 다 고쳤어 니가 원하던 거<br>돌아오길 바래도 넌 없어<br>I said forgot you<br>밤마다 나를 잊어가는 기분이란<br>뜻이였지 yeah, fuck I do<br>Wont lie to you<br>이젠 넌 옆에 없어 진짜로 잊을 시간이니<br>Forgot you<br>I'm alone and sad, you fuck my world<br>I won't lie, I fuckin' loved you girl<br>Please don't leave me alone<br>But you are gone and I'm fallin' down<br>Fall, fall, fall<br>Fall, fall, fall<br>I'm alone and sad, you fuck my world<br>I won't lie, I fuckin' loved you girl</p>";
        document.getElementById('lyrics_paranoid').innerHTML = lyrics;
    }
    else if (music_name == 'How R U'){
        var lyrics = "<p>난 그대가 좀 불행한 것 같애<br/>livin' life no lying<br/>다시 눈물을 받네<br/>받던 그릇이 닳게<br/>안 그럴게 다신<br/>의미 없는 가식<br/>livin' life no lying<br/>livin' life no lying<br/><br/><br/>how r u how 'bout u<br/>how r u how 'bout u<br/>how r u how 'bout u<br/>how r u how 'bout u<br/>
how r u
        <br/>
        <br/>
        <br/>
얼마 안 가 처음과 다르게
        <br/>
힘이 풀리고 빛바래가던 다짐
        <br/>
그대 요즘 뭐든 물어봐도
        <br/>
답은 없고 왜 그렇게 조용한지
        <br/>
매일 밤에 나는 그 생각에 울어
        <br/>
다리 힘이 풀려 눈을 감지만
        <br/>
이건 아닌 거 같애 몇 번을 봐도
        <br/>
어두워지는 당신 얼굴을 봤지
        <br/>
        <br/>
        <br/>
how r u 물어 풀린 단추
        <br/>
끊어지는 밧줄에 거리감은 반쯤
        <br/>
how r u 달아 줄래 단추
        <br/>
요즘 어때 안 좋아 보여 how r u
        <br/>
        <br/>
        <br/>
how r u how 'bout u
        <br/>
how r u how 'bout u
        <br/>
how r u how 'bout u
        <br/>
how r u how 'bout u
        <br/>
how r u
        <br/>
        <br/>
        <br/>
난 그대가 좀 불행한 것 같애
        <br/>
livin' life no lying
        <br/>
다시 눈물을 받네
        <br/>
받던 그릇이 닳게
        <br/>
안그럴게 다신
        <br/>
의미 없는 가식
        <br/>
livin' life no lying
        <br/>
livin' life no lying
        <br/>
        <br/>
        <br/>
how r u how 'bout u
        <br/>
how r u how 'bout u
        <br/>
how r u how 'bout u
        <br/>
how r u how 'bout u
        <br/>
how r u
    </p>"
    }
}

var audio = new Audio();
isStop = false;
var interval_1;
var interval_2;
var interval_currenttime;
var interval_scroll;

function ChangeMusic(album_name) {
    update_Scroll(album_name);
    isStop = false;
    var music = './resource/music/' + album_name + '.mp3';
    audio = new Audio(music);
    // if(audio.volume == 1){
    //     audio.volume = document.getElementById("music_volume").value;
    // }
    // var value_volume = (audio.volume * 100);
    // document.getElementById("music_volume").value = audio.volume;
    audio.volume = document.getElementById('music_volume').value;
    interval_2 = setInterval(update_Volume, 10);
    // interval_currenttime = setInterval(update_CT, 100);
    // var obj_volume_value = document.getElementById("input_volume_size").innerHTML = value_volume + "%";


    ChangeLyrics(album_name);
    var obj_table = document.getElementById('lyrics_paranoid');
    obj_table.scrollTop = 0;
    interval_scroll = setInterval(() => { update_Scroll(album_name) }, 1000);
}
function Func_Play() {
    if (isStop == true) {
        clearInterval(interval_1);
    }
    var obj_music = document.getElementById("music_range");
    obj_music.value = audio.currentTime;
}
function update_Scroll(music_name) {
    if (isStop == true) {
        clearInterval(interval_scroll);
    }
    var obj_table = document.getElementById('lyrics_paranoid');
    var num1 = audio.duration;
    var num2 = audio.currentTime;
    var x = Math.ceil((num2 / num1) * 100);
    if (audio.currentTime == 0) {
        obj_table.scrollTop = 0;
    }
    else if (((x * (obj_table.scrollHeight / 100)) - (obj_table.scrollHeight / 11) >= 0) && music_name == 'Paranoid') {
        obj_table.scrollTop = (x * (obj_table.scrollHeight / 100)) - (obj_table.scrollHeight / 11);
    }
    else if (((x * (obj_table.scrollHeight / 100)) - (obj_table.scrollHeight / 8) >= 0) && music_name == 'Valhalla') {
        obj_table.scrollTop = (x * (obj_table.scrollHeight / 100)) - (obj_table.scrollHeight / 7);
    }
    else if (((x * (obj_table.scrollHeight / 100)) - (obj_table.scrollHeight / 8) >= 0) && music_name == 'DEADSTAR') {
        obj_table.scrollTop = (x * (obj_table.scrollHeight / 100)) - (obj_table.scrollHeight / 7);
    }
    else if (((x * (obj_table.scrollHeight / 100)) - (obj_table.scrollHeight / 8) >= 0) && music_name == 'Forgot U') {
        obj_table.scrollTop = (x * (obj_table.scrollHeight / 100)) - (obj_table.scrollHeight / 7);
    }
    else if (((x * (obj_table.scrollHeight / 100)) - (obj_table.scrollHeight / 8) >= 0) && music_name == 'Jamsuham') {
        obj_table.scrollTop = (x * (obj_table.scrollHeight / 100)) - (obj_table.scrollHeight / 7);
    }
    else if (((x * (obj_table.scrollHeight / 100)) - (obj_table.scrollHeight / 8) >= 0) && music_name == 'Q_Mark') {
        obj_table.scrollTop = (x * (obj_table.scrollHeight / 100)) - (obj_table.scrollHeight / 7);
    }
    else if (((x * (obj_table.scrollHeight / 100)) - (obj_table.scrollHeight / 8) >= 0) && music_name == 'Fall') {
        obj_table.scrollTop = (x * (obj_table.scrollHeight / 100)) - (obj_table.scrollHeight / 7);
    }
}
function update_Volume() {
    // if(isStop == true){
    //     clearInterval(interval_2);
    // }
    var value_volume_update = Math.ceil(audio.volume * 100);
    document.getElementById("input_volume_size").innerHTML = (value_volume_update) + "%";
    // var obj_volume_value = document.getElementById("input_volume_size").innerHTML = audio.currentTime;
}
function update_CT(){
    if(isStop == true){
        clearInterval(interval_currenttime);
    }
    var value_CT_update_1 = Math.ceil(audio.currentTime / 60 -1);
    var value_CT_update_2 = Math.ceil(audio.currentTime % 60);
    // value_CT_update_2 = fillZero(2, value_CT_update_2);
    // document.getElementById('music_currentTime').innerHTML = 'music_currentTime';
    if(value_CT_update_1 < 0){
        value_CT_update_1 = 0;
    }
    document.getElementById("music_currentTime").innerHTML = (value_CT_update_1) + ":" + (fillZero(2, String(value_CT_update_2)));
}
function init() {
    isStop = false;
    audio.play();
    interval_1 = setInterval(Func_Play, 1000);
    interval_currenttime = setInterval(update_CT, 1000);
}
function free() {
    audio.pause();
    isStop = true;
}
function page_Reload() {
    var btn_Play = document.getElementById('play_music_btn');
    var table_lyrics = document.getElementById('lyrics_paranoid');
    btn_Play.style.display = 'none';
    table_lyrics.style.display = 'none';
    setTimeout(show_btn_play(), 10);
}
function show_btn_play(){
    var btn_Play = document.getElementById('play_music_btn');
    var table_lyrics = document.getElementById('lyrics_paranoid');
    btn_Play.style.display = 'block';
    table_lyrics.style.display = 'block';
}