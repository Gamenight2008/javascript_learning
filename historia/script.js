const btn = document.getElementById('btn');
const text = document.getElementById('text');
const page_title = document.getElementById('sub_title');
const img1 = document.getElementById('img_1');
const img2 = document.getElementById('img_2');
const img3 = document.getElementById('img_3');
const img4 = document.getElementById('img_4');
const img5 = document.getElementById('img_5');
const img6 = document.getElementById('img_6');

let count = 0;

img1.style.display = 'none';
img2.style.display = 'none';
img3.style.display = 'none';
img4.style.display = 'none';
img5.style.display = 'none';
img6.style.display = 'none';

btn.addEventListener('click', () => {
    count++;
    if(count === 1) {
        // Changing pictures
        img1.style.display = 'block';
        img2.style.display = 'none';
        img3.style.display = 'none';
        img4.style.display = 'none';
        img5.style.display = 'none';
        img6.style.display = 'none';

        // Change the text

        page_title.innerText = 'Ateny';
        btn.innerText = 'Następny';
        text.textContent = 'Ateńska demokracja ' +
            '1. Początkowo w Atenach rządzili przedstawiciele kilku rodów, spośród których corocznie wybierano 9 urzęd- ników - archontów. ' +
            '2. Niepokoje społeczne prowadziły do prób reform prawa i ustroju. W 621 r. p.n.e. podjął je Drakon, w 594 r. p.n.e. - Solon, dzięki któremu dostęp do urzędów oparto na kryterium zamożności, a do udziału w zgromadzeniu do- puszczono wszystkich obywateli. ' +
            '3. Ustrój demokratyczny wprowadził Klejstenes w 508 r. p.n.e. Odtąd ateńska polis dzieliła się na 10 fyl, z których co- rocznie losowano członków Rady Pięciuset. Rada przy- gotowywała obrady zgromadzenia ludowego (eklezji), w których udział mogli brać wszyscy obywatele. Nato- miast podczas wyborów strategów (dowódców armii) obywatele głosowali na konkretne osoby. ' +
            '4. Podstawą demokracji był powszechny dostęp do urzę- dów, ograniczenie liczby kadencji do jednej oraz diety wypłacane uboższyan obywatelom';
    }else if(count === 2) {
        // Changing pictures
        img1.style.display = 'none';
        img2.style.display = 'none';
        img3.style.display = 'none';
        img4.style.display = 'none';
        img5.style.display = 'none';
        img6.style.display = 'block';

        text.textContent = 'Starożytna Sparta ' +
            '1. Sparta (Lacedemon) została utworzona w IX w. p.n.e. Wyróżniała się znacznym obszarem i specyficznymi pra- wami i obyczajami, których twórcą miał być Likurg. ' +
            '2. Sparta była oligarchią - władzę sprawowała nieliczna grupa przedstawicieli najznamienitszych rodów: dwaj dziedziczni królowie, kolegium 5 eforów (wybieranych na roczne kadencje) i rada złożona z 28 osób powyżej 60. roku życia (geruzja). W ważniejszych kwestiach decydo- wało zgromadzenie obywateli (apella). ' +
            '3. Społeczeństwo Sparty składało się z trzech grup. Pet- noprawni obywatele - spartiaci - byli nieliczni i formalnie równi, a ich głównym zadaniem było doskonalenie się w walce. Periojkowie byli wolni, ale nie posiadali praw politycznych. Trudnili się uprawą ziemi, rzemiosłem i han- dlem. Najniżej w hierarchii znajdowali się heloci - niewolni chłopi. ' +
            '4. W Sparcie obowiązywał wyjątkowy system wychowania agoge, który obejmował wszystkich obywateli i pro- wadzony był pod nadzorem państwa. Jego celem było kształtowanie sprawności fizycznej i posłuszeństwa, a więc cech przydatnych na polu bitwy';
        page_title.innerText = 'Sparta';
        btn.innerText = 'Następny';

    }else if(count === 3) {
        // Changing pictures
        img1.style.display = 'none';
        img2.style.display = 'none';
        img3.style.display = 'none';
        img4.style.display = 'block';
        img5.style.display = 'none';
        img6.style.display = 'none';

        text.textContent = 'Podboje Aleksandra Macedońskiego ' +
            '1. Do IV w. p.n.e. Macedonia była królestwem położonym na północnych obrzeżach świata greckiego. ' +
            'Od 360 r. p.n.e. panował tu Filip II. ' +
            '2. Konflikty wśród greckich poleis doprowadziły do za łamania się potęgi Aten (w 404 r. p.n.e.) i Sparty (w 371 r. p.n.e.).' +
            ' W połowie IV w. p.n.e., na skutek reform Fi lipa II, wzrosła potęga Macedonii. W bitwie pod Cheronea (338 r. p.n.e.) jej armia pokonała koalicję greckich poleis.' +
            ' Następnie Grekom narzucono członkostwo w utworzo nym do walki z Persją Związku Korynckim. Panowanie następcy Filipa II - Aleksandra III (336-323 p.n.e.) - wypełniały' +
            ' wojny i podboje, w trakcie których jego siły opanowały rozległe perskie imperium. Po śmierci Aleksandra jego imperium podzielono pomię dzy jego wodzów (diadochów).' +
            ' Z czasem części te stały się niezależnymi królestwami - monarchiami hellenistycznymi. Epoka hellenistyczna trwała od 323 do 30 r. p.n.e. Był to okres ekspansji' +
            ' greckiej kultury i rozwoju nauki, wspie anego przez patronat poszczególnych władców helle histycznych. Symbolem tego ożywienia była biblioteka ✓ Aleksandrii';
        page_title.innerText = 'Macedonia';
        btn.innerText = 'Następny';
        /*    }else if(count === 4) {
                text.textContent = '';
                page_title.innerText = 'Images z podr';
                btn.innerText = 'Następny';
            */
    }else if(count === 4) {
        // Changing pictures

        img1.style.display = 'none';
        img2.style.display = 'none';
        img3.style.display = 'none';
        img4.style.display = 'none';
        img5.style.display = 'none';
        img6.style.display = 'none';

        page_title.innerText = 'Grecja (ogólnie)';
        text.textContent = 'Kultura starożytnej Grecji ' +
            '1. Starożytna Grecja jest ojczyzną filozofii - rozumowych dociekań, prowadzących do pełniejszego objaśnienia praw rządzącychświatem. W V-IV w. p.n.e. w Atenach działali Sokrates, Platon i Arystoteles. ' +
            '2. Najwcześniejsze znane greckie dzieła literackie to eposy autorstwa Homera (Iliada, Odyseja) i poemat epicki He zjoda (Prace i dnie) spisane w VIII w. p.n.e. W późniejszym okresie rozwijała się także grecka liryka. ' +
            '3. WVIIV w. p.n.e. tworzyli pierwsi greccy historycy: Hero dot - autor Dziejów opowiadających o wojnach grecko -perskich, oraz Tukidydes - autor Wojny peloponeskiej. ' +
            '4. Grecki teatr wywodził się z obrzędów ku czci boga Dio nizosa, a same sztuki pisano i wystawiano w ramach za wodów. Do najwybitniejszych tragików zalicza się Ajschy losa, Sofoklesa i Eurypidesa, do komików - Arystofanesa. ' +
            '5. W architekturze monumentalnej dominowały budowle kamienne wznoszone w trzech porządkach: doryckim, jońskim lub korynckim. 6. W społeczeństwie greckim ważną rolę odgrywała rywali zacja. Urządzane ku czci bóstw (Zeusa i Apollina) zawody sportowe igrzyska - składały się z wielu konkurencji (m.in. biegów, wyścigów rydwanów, zapasów)'
    }else if(count === 5) {
        // Changing pictures

        img1.style.display = 'none';
        img2.style.display = 'none';
        img3.style.display = 'none';
        img4.style.display = 'none';
        img5.style.display = 'none';
        img6.style.display = 'none';

        page_title.innerText = 'Ogol';
        text.textContent =
            '1. W architekturze monumentalnej dominowały budowle kamienne wznoszone w trzech porządkach: doryckim, jońskim lub korynckim. 6. W społeczeństwie greckim ważną rolę odgrywała rywali zacja. Urządzane ku czci bóstw (Zeusa i Apollina) zawody sportowe igrzyska - składały się z wielu konkurencji (m.in. biegów, wyścigów rydwanów, zapasów)' +
            '\n' +
            'Jońscy filozofowie przyrody okresu archaicznego|\n' +
            'Tales z Miletu (VII, VI w. p.n.e), woda|\n' +
            'Heraklit z Efezu; ogień, "panta rhei|"\n' +
            'Demokryt z Abdery (atomista)|\n' +
            'Empiryzm - nauka na podstawie eksperymentów|\n' +
            'Filozofia - Umiłowanie mądrości|\n' +
            'Epistemologia (teoria poznania): rocjonalizm i empiryzm|\n' +
            'Herodot - Dzieje (Historyk, opisał piramidy, znaki itp.)|\n' +
            'Tukidydes Wojna Peloponeska (Opisał wojne peloponeską)|\n' +
            'Literatura|\n' +
            'Homer Illiada, Odyseja|\n' +
            'Hezjod Teogonia, Prace i dni|\n' +
            'Arkintos Zburzenie Illionu|\n' +
            'Stasinos Opowieści cypryjskie|\n' +
            'Hagias Powroty|\n'

    } else{
        img1.style.display = 'none';
        img2.style.display = 'none';
        img3.style.display = 'block';
        img4.style.display = 'none';
        img5.style.display = 'none';
        img6.style.display = 'none';

        text.textContent = 'Wojny grecko-perskie ' +
            '1. W połowie VI w. p.n.e. Persowie utworzyli rozległe impe- num, które obejmowało ziemie od Indusu po wybrzeża Morza Śródziemnego. ' +
            '2. W 499 r. p.n.e. w greckich miastach w Azji Mniejszej do- szło do wybuchu antyperskiego powstania, które wspie- raly m.in. Ateny. ' +
            '3. W odpowiedzi w 490 r. p.n.e. Persowie uderzyli na Gre- cję, jednak ich siły zostały rozbite w bitwie pod Marato- nem. Bitwa ukazała wyższość hoplitów i ich szyku bojo- wego - falangi - nad armią perską. 1. Kolejna wyprawa Persów odbyła się w 480 r. p.n.e. Po sforsowaniu bronionego przez Spartan przesmyku Ter- mopile Persowie złupili Ateny, ale ich flota została znisz- czona w bitwie pod Salaminą. Rok później Grecy rozbili perskie sily lądowe w bitwie pod Platejami. W celu prowadzenia dalszych walk z Persami w 478 r. p.n.e. Grecy utworzyli Związek Morski, który zrzeszał 200 państw pod przewodnictwem (hegemonia) Aten. Ostatecznie pokój z Persją zawarto w 449 r. p.n.e. Podboje Aleksandra Macedońskiego Do IV w. p.n.e. Macedonia była królestwem położonym na północnych obrzeżach świata greckiego. Od 360 r. p.n.e. panował tu Filip II';
        page_title.innerText = 'Wojny Perskie';
        btn.innerText = 'Następny';
        count = 0;
    }
});