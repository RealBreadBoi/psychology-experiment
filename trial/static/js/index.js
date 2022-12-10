function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const jsPsych = initJsPsych();;



var timeline = [];

var preload = {
    type: jsPsychPreload,
    auto_preload: true 
}
timeline.push(preload);

var consent_trial = {
    type: jsPsychExternalHtml,
    url: "consent",
    cont_btn: 'start',
    check_fn: function(elem) {
        if (document.getElementById('consent_checkbox').checked) {
            return true;
        }
        else {
            return false;
        }
    }
};
timeline.push(consent_trial);

var id_trial = {
    type: jsPsychSurvey,
    title: '',
    button_label_finish: 'Gata',
    required_error: 'Toți itemii trebuie completați',
    pages: [
        [
            {
                type: 'text',
                prompt: 'Inițiale:',
                required: true,
                name: 'initials',
                textbox_columns: 5
            },
            {
                type: 'text',
                prompt: 'Data nașterii',
                required: true,
                name: 'dob',
                input_type: 'date'
            },
        ]
    ]
}
timeline.push(id_trial);

var eq_count = 0;
var eq_trial = 
{
    type: jsPsychSurvey,
    title: `Indicați măsura în care fiecare item vi se aplică:`,
    button_label_finish: 'Gata',
    required_error: 'Toți itemii trebuie completați',
    pages:
    [
        [
            {
                type: 'likert-table',
                name: 'emotional_intelligence',
                prompt: ' ',
                required: true,
                required_error: 'Toți itemii trebuie completați',
                options: [ 'Dezacord Puternic', 'Dezacord', 'Nici Acord, Nici Dezacord', 'Acord', 'Acord Puternic'],
                statements: [
                    { prompt: 'Știu când să vorbesc despre problemele mele personale altor persoane', name: `eq${eq_count++}` },
                    { prompt: 'Când mă confrunt cu obstacole, îmi amintesc momente în care m-am confruntat cu obstacole similare și le-am depășit', name: `eq${eq_count++}` },
                    { prompt: 'Mă aștept să mă descurc bine în majoritatea lucrurilor pe care le încerc', name: `eq${eq_count++}` },
                    { prompt: 'Altor persoane le este ușor să se încreadă în mine', name: `eq${eq_count++}` },
                    { prompt: 'Îmi este greu să înțeleg mesajele non-verbale ale altor persoane', name: `eq${eq_count++}` },
                    { prompt: 'Unele evenimente majore din viața mea m-au determinat să reevaluez ceea ce este important și ce nu este important', name: `eq${eq_count++}` },
                    { prompt: 'Când starea mea de spirit se schimbă, văd noi posibilități', name: `eq${eq_count++}` },
                    { prompt: 'Emoțiile sunt unul dintre lucrurile care fac ca viața mea să merite trăită', name: `eq${eq_count++}` },
                    { prompt: 'Sunt conștient de emoțiile mele pe măsură ce le trăiesc', name: `eq${eq_count++}` },
                    { prompt: 'Mă aștept să se întâmple lucruri bune', name: `eq${eq_count++}` },
                    { prompt: 'Îmi place să-mi împărtășesc emoțiile cu ceilalți', name: `eq${eq_count++}` },
                    { prompt: 'Când trăiesc o emoție pozitivă, știu cum să o fac să persiste', name: `eq${eq_count++}` },
                    { prompt: 'Organizez evenimente plăcute de alte persoane', name: `eq${eq_count++}` },
                    { prompt: 'Caut activități care mă fac fericit(ă)', name: `eq${eq_count++}` },
                    { prompt: 'Sunt conștient(ă) de mesajele non-verbale pe care le transmit altora', name: `eq${eq_count++}` },
                    { prompt: 'Mă prezint într-un mod care lasă o impresie bună asupra celorlalți', name: `eq${eq_count++}` },
                    { prompt: 'Când sunt într-o dispoziție pozitivă, îmi este ușor să rezolv probleme ', name: `eq${eq_count++}` },
                    { prompt: 'Privind expresiile lor faciale, recunosc emoțiile pe care le trăiesc oamenii', name: `eq${eq_count++}` },
                    { prompt: 'Știu de ce mi se schimbă emoțiile', name: `eq${eq_count++}` },
                    { prompt: 'Când sunt într-o dispoziție pozitivă, sunt capabil(ă) să vin cu idei noi', name: `eq${eq_count++}` },
                    { prompt: 'Dețin controlul asupra emoțiilor mele', name: `eq${eq_count++}` },
                    { prompt: 'Îmi recunosc cu ușurință emoțiile pe măsură ce le trăiesc', name: `eq${eq_count++}` },
                    { prompt: 'Mă motivez imaginându-mi un rezultat bun în sarcinile pe care mi le asum', name: `eq${eq_count++}` },
                    { prompt: 'Îi complimentez pe alții când au făcut ceva bine', name: `eq${eq_count++}` },
                    { prompt: 'Sunt conștient de mesajele non-verbale transmise de persoanele din jurul meu', name: `eq${eq_count++}` },
                    { prompt: 'Când o altă persoană îmi vorbește despre un eveniment important din viața ei, aproape că mă simt ca și cum am trăit și eu acest eveniment', name: `eq${eq_count++}` },
                    { prompt: 'Când simt o schimbare în emoții, tind să vin cu idei noi', name: `eq${eq_count++}` },
                    { prompt: 'Când mă confrunt cu o provocare, renunț deoarece cred că voi eșua', name: `eq${eq_count++}` },
                    { prompt: 'Știu ce simt ceilalți doar privindu-i', name: `eq${eq_count++}` },
                    { prompt: 'îi ajut pe ceilalți oameni să se simtă mai bine atunci când sunt la pământ', name: `eq${eq_count++}` },
                    { prompt: 'Folosesc dispozițiile bune pentru a mă ajuta să continui să fac față obstacolelor', name: `eq${eq_count++}` },
                    { prompt: 'Pot să-mi dau seama cum se simt oamenii ascultând tonul vocii lor', name: `eq${eq_count++}` },
                    { prompt: 'Îmi este greu să înțeleg de ce oamenii se simt așa cum se simt', name: `eq${eq_count++}` }
                ]
            }
        ]
    ]
}
timeline.push(eq_trial);

var anxiety_count = 0;
var anxiety_trial = 
{
    type: jsPsychSurvey,
    title: 'Acest chestionar măsoară rolul pe care anxietatea socială îl joacă în viața dumneavoastră. Citiți cu atenție fiecare situație și răspundeți la următoarele două întrebări legate de situația respectivă: 1) Cât de frică vă este în situația respectivă, 2) Cât de des evitați situația respectivă? Dacă întâlniți o situație pe care nu ați trăit-o răspundeți imaginându-vă în acea situație, cât de mare ar fi teama dumneavoastră și cât de des ați evita-o. Evaluați modul în care aceste situații v-au afectat în ultima săptămână.',
    button_label_finish: 'Gata',
    required_error: 'Toți itemii trebuie completați',
    pages:
    [
        [
            {
                type: 'likert-table',
                name: 'anxiety_teama',
                required: true,
                required_error: 'Toți itemii trebuie completați',

                prompt: 'Simt Teama',
                options: ['Defel', 'Puțin', 'Moderat', 'Mult'],
                statements:
                [
                    { prompt: 'Să telefonez în public', name: `anx${anxiety_count++}` },
                    { prompt: 'Să fac parte dintr-un grup mic', name: `anx${anxiety_count++}` },
                    { prompt: 'Să mănânc în locuri publice', name: `anx${anxiety_count++}` },
                    { prompt: 'Să beau cu ceilalți în locuri publice.', name: `anx${anxiety_count++}` },
                    { prompt: 'Să vorbesc cu persoane cu autoritate.', name: `anx${anxiety_count++}` },
                    { prompt: 'Să vorbesc, să joc un rol în fața unei audiențe.', name: `anx${anxiety_count++}` },
                    { prompt: 'Să merg la petreceri.', name: `anx${anxiety_count++}` },
                    { prompt: 'Să lucrez în timp ce sunt observat.', name: `anx${anxiety_count++}` },
                    { prompt: 'Să scriu în timp ce sunt privit.', name: `anx${anxiety_count++}` },
                    { prompt: 'Să sun pe cineva pe care nu cunosc așa de bine.', name: `anx${anxiety_count++}` },
                    { prompt: 'Să vorbesc cu persoane pe care nu le știu așa de bine.', name: `anx${anxiety_count++}` },
                    { prompt: 'Să mă întâlnesc cu persoane străine.', name: `anx${anxiety_count++}` },
                    { prompt: 'Să folosesc baia publică.', name: `anx${anxiety_count++}` },
                    { prompt: 'Să intru într-o încăpere în care toți ceilalți stau jos.', name: `anx${anxiety_count++}` },
                    { prompt: 'Să fiu în centrulatenției.', name: `anx${anxiety_count++}` },
                    { prompt: 'Să iau cuvântul la o întâlnire.', name: `anx${anxiety_count++}` }, 
                    { prompt: 'Să dau un test scris.', name: `anx${anxiety_count++}` },
                    { prompt: 'Să contrazic o persoană pe care nu o cunosc bine.', name: `anx${anxiety_count++}` },
                    { prompt: 'Să mă uit la persoane pe care nu le cunosc bine.', name: `anx${anxiety_count++}` },
                    { prompt: 'Să citesc un raport într-un grup.', name: `anx${anxiety_count++}` }, 
                    { prompt: 'Să mă întâlnesc cu cineva.', name: `anx${anxiety_count++}` },
                    { prompt: 'Să înapoiez ceva la magazin.', name: `anx${anxiety_count++}` },
                    { prompt: 'Să dau o petrecere.', name: `anx${anxiety_count++}` },
                    { prompt: 'Să fac față presiunii unui agent de vânzări.', name: `anx${anxiety_count++}` },
                ]
            },
            {
                type: 'likert-table',
                name: 'anxiety_evit',
                required: true,
                required_error: 'Toți itemii trebuie completați',

                prompt: 'Evit',
                options: ['Defel', 'Puțin', 'Moderat', 'Mult'],
                statements:
                [
                    { prompt: 'Să telefonez în public', name: `anx${anxiety_count++}` },
                    { prompt: 'Să fac parte dintr-un grup mic', name: `anx${anxiety_count++}` },
                    { prompt: 'Să mănânc în locuri publice', name: `anx${anxiety_count++}` },
                    { prompt: 'Să beau cu ceilalți în locuri publice.', name: `anx${anxiety_count++}` },
                    { prompt: 'Să vorbesc cu persoane cu autoritate.', name: `anx${anxiety_count++}` },
                    { prompt: 'Să vorbesc, să joc un rol în fața unei audiențe.', name: `anx${anxiety_count++}` },
                    { prompt: 'Să merg la petreceri.', name: `anx${anxiety_count++}` },
                    { prompt: 'Să lucrez în timp ce sunt observat.', name: `anx${anxiety_count++}` },
                    { prompt: 'Să scriu în timp ce sunt privit.', name: `anx${anxiety_count++}` },
                    { prompt: 'Să sun pe cineva pe care nu cunosc așa de bine.', name: `anx${anxiety_count++}` },
                    { prompt: 'Să vorbesc cu persoane pe care nu le știu așa de bine.', name: `anx${anxiety_count++}` },
                    { prompt: 'Să mă întâlnesc cu persoane străine.', name: `anx${anxiety_count++}` },
                    { prompt: 'Să folosesc baia publică.', name: `anx${anxiety_count++}` },
                    { prompt: 'Să intru într-o încăpere în care toți ceilalți stau jos.', name: `anx${anxiety_count++}` },
                    { prompt: 'Să fiu în centrulatenției.', name: `anx${anxiety_count++}` },
                    { prompt: 'Să iau cuvântul la o întâlnire.', name: `anx${anxiety_count++}` }, 
                    { prompt: 'Să dau un test scris.', name: `anx${anxiety_count++}` },
                    { prompt: 'Să contrazic o persoană pe care nu o cunosc bine.', name: `anx${anxiety_count++}` },
                    { prompt: 'Să mă uit la persoane pe care nu le cunosc bine.', name: `anx${anxiety_count++}` },
                    { prompt: 'Să citesc un raport într-un grup.', name: `anx${anxiety_count++}` }, 
                    { prompt: 'Să mă întâlnesc cu cineva.', name: `anx${anxiety_count++}` },
                    { prompt: 'Să înapoiez ceva la magazin.', name: `anx${anxiety_count++}` },
                    { prompt: 'Să dau o petrecere.', name: `anx${anxiety_count++}` },
                    { prompt: 'Să fac față presiunii unui agent de vânzări.', name: `anx${anxiety_count++}` },
                ]
            },

        ]
    ]
}
timeline.push(anxiety_trial);

var img_instructions = {
    type: jsPsychInstructions,
    pages: [
    `<h5> Reading the Mind in The Eyes (RME) </h5>
    <div style="width: 600px; text-align: start">
        <p>Primul task pe care îl veți parcurge este testul RME.</p> 
        <p>
            Pentru completarea acestui task sunteți rugați să vă 
            uitați atent la imaginea care va apărea pe ecran, și 
            să selectați emoția care este cea mai bine reprezentată 
            în ochii persoanei, din cele 4 opțiuni prezentate.
        </p> 
        <p>
            Pentru a selecta o emoție sunteți rugați să folosiți mouse-ul 
            pentru a da click pe o opțiune (pe PC/laptop) sau să apăsați 
            varianta dorită (pe mobil). Sunteți rugați să alegeți primul 
            răspuns care vă apare instinctiv, și să nu supra-analizați imaginea. 
        </p>
        <p>
            Fiecare imagine are o limită de timp de 20 de secunde, după care se 
            va trece la următoarea.
        </p>
    </div>`
    ],
    show_clickable_nav: true,
    allow_backward: false,
    button_label_next: 'Start'
}
timeline.push(img_instructions);

emotions_eng = [ 'angry', 'disgusted', 'fearful', 'happy', 'sad', 'surprised' ];
emotions_ro = [ 'Nervos', 'Dezgustat', 'Speriat', 'Fericit', 'Trist', 'Surprins' ];

var image_trial = {
    type: jsPsychImageButtonResponse,
    timeline: [],
}

for (var emi = 0; emi < emotions_eng.length; emi++) {
    for (var i = 1; i <= 5; i++) {
        let choices = []
        while (choices.length < 4) {
            if (i % 4 === choices.length) {
                choices.push(emotions_ro[emi])
            }
            else {
                choices.push(emotions_ro[(emi + choices.length + 1) % 6])
            }
        }

        const stim = { 
            stimulus: `static/assets/images/${emotions_eng[emi]}${i}.jpg`, 
            choices: choices, 
            trial_duration: 10000,
            stimulus_width: 800, 
            margin_vertical: 24,
            data: {
                choices: choices,
                stim: `${emotions_eng[emi]}${i}`
            }
        };

        image_trial.timeline.push(stim);
    }
}

shuffleArray(image_trial.timeline);
timeline.push(image_trial);

var vid_instructions = {
    type: jsPsychInstructions,
    pages: [
    `<h5> Reading the Mind in Film (RMF) </h5>
    <div style="width: 600px; text-align: start">
        <p><b>ATENȚIE</b>: Acest task are o componentă audio, vă rog să vă asigurați ca aveți volumul ridicat</p>
        <p>Următorul task pe care îl veți parcurge este testul RMF.</p> 
        <p>
            Pentru completarea acestui task sunteți rugați să vă uitați 
            și să ascultați atent videoclipul scurt care va apărea pe ecran, 
            și să selectați emoția care este cea mai bine reprezentată în acel 
            videoclip, din cele 4 opțiuni prezentate.
        </p> 
        <p>
            Pentru a selecta o emoție sunteți rugați să folosiți mouse-ul pentru 
            a da click pe o opțiune (pe PC/laptop) sau să apăsați varianta dorită (pe mobil). 
            Sunteți rugați să alegeți primul răspuns care vă apare instinctiv, și să nu 
            supra-analizați videoclipul.  
        </p>
        <p>
            Fiecare videoclip are o limită de timp de 20 de secunde, după care se 
            va trece la următoarea.
        </p>
    </div>`
    ],
    show_clickable_nav: true,
    allow_backward: false,
    button_label_next: 'Start'
}
timeline.push(vid_instructions);

var video_trial = {
    type: jsPsychVideoButtonResponse,
    timeline: [],
};

for (var emi = 0; emi < emotions_eng.length; emi++) {
    for (var i = 1; i <= 3; i++) {
        let choices = []
        while (choices.length < 4) {
            if (i % 4 === choices.length) {
                choices.push(emotions_ro[emi])
            }
            else {
                choices.push(emotions_ro[(emi + choices.length + 1) % 6])
            }
        }

        const stim = { 
            stimulus: [ `static/assets/videos/${emotions_eng[emi]}${i}.mp4` ], 
            choices: choices, 
            trial_duration: 13000,
            response_allowed_while_playing: false,
            margin_vertical: 24,
            width: 800,
            data: {
                choices: choices,
                stim: `${emotions_eng[emi]}${i}`
            }
        };

        video_trial.timeline.push(stim);
    }
}

shuffleArray(video_trial.timeline);
timeline.push(video_trial);

var saveData_trial = {
    type: jsPsychCallFunction,
    async: true,
    func: function(done){
      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'upload');
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.onload = function() {
        if(xhr.status == 200){
          var response = JSON.parse(xhr.responseText);
          console.log(response.success);
        }
        done();
      };
      xhr.send(jsPsych.data.get().json());
    }
}
timeline.push(saveData_trial);

jsPsych.run(timeline);
//jsPsych.simulate(timeline);