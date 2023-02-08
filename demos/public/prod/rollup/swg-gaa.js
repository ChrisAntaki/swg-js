!function(){"use strict";const e="swg-google-sign-in-button",t="swg-google-3p-sign-in-button",i="swg-sign-in-with-google-button",n="swg-publisher-sign-in-button",o="swg-google-sign-in-iframe",a="swg-registration-button-container",r="swg-regwall-container",s="swg-regwall-dialog",l="swg-regwall-title",g=String.raw,c=String.raw,p=g`
  <iframe
    id="${o}"
    class="gaa-metering-regwall--iframe"
    src="$iframeUrl$"
  >
  </iframe>
`,u=g`
  <style>
    ${c`
  .gaa-metering-regwall--dialog-spacer,
  .gaa-metering-regwall--dialog,
  .gaa-metering-regwall--logo,
  .gaa-metering-regwall--title,
  .gaa-metering-regwall--description,
  .gaa-metering-regwall--description strong,
  .gaa-metering-regwall--iframe,
  .gaa-metering-regwall--registration-button-container,
  .gaa-metering-regwall--casl {
    all: initial !important;
    box-sizing: border-box !important;
    font-family: Roboto, arial, sans-serif !important;
  }

  .gaa-metering-regwall--dialog-spacer {
    background: linear-gradient(0, #808080, transparent) !important;
    bottom: 0 !important;
    display: block !important;
    position: fixed !important;
    width: 100% !important;
  }

  @keyframes slideUp {
    from {
      transform: translate(0, 200px) !important;
    }
    to {
      transform: translate(0, 0) !important;
    }
  }

  .gaa-metering-regwall--dialog {
    animation: slideUp 0.5s !important;
    background: white !important;
    border-radius: 12px 12px 0 0 !important;
    box-shadow: 0px -2px 6px rgba(0, 0, 0, 0.3) !important;
    display: block !important;
    margin: 0 auto !important;
    max-width: 100% !important;
    padding: 24px 20px !important;
    pointer-events: auto !important;
    width: 410px !important;
  }

  .gaa-metering-regwall--logo {
    display: block !important;
    margin: 0 auto 24px !important;
  }

  .gaa-metering-regwall--title {
    color: #000 !important;
    display: block !important;
    font-size: 16px !important;
    margin: 0 0 8px !important;
    outline: none !important;
  }

  .gaa-metering-regwall--description {
    color: #646464 !important;
    display: block !important;
    font-size: 14px !important;
    line-height: 19px !important;
    margin: 0 0 30px !important;
  }

  .gaa-metering-regwall--description strong {
    color: #646464 !important;
    font-size: 14px !important;
    line-height: 19px !important;
    font-weight: bold !important;
  }

  .gaa-metering-regwall--iframe {
    border: none !important;
    display: block !important;
    height: 44px !important;
    margin: 0 0 30px !important;
    width: 100% !important;
  }

  .gaa-metering-regwall--registration-button-container {
    border: none !important;
    display: block !important;
    height: 44px !important;
    margin: 0 0 30px !important;
    width: 100% !important;
  }

  .gaa-metering-regwall--casl {
    color: #646464 !important;
    display: block !important;
    font-size: 12px !important;
    text-align: center !important;
    margin: -16px auto 32px !important;
  }

  .gaa-metering-regwall--casl a {
    color: #1967d2 !important;
  }

  .gaa-metering-regwall--line {
    background-color: #ddd !important;
    display: block !important;
    height: 1px !important;
    margin: 0 0 24px !important;
  }

  .gaa-metering-regwall--publisher-sign-in-button {
    color: #1967d2 !important;
    cursor: pointer !important;
    display: block !important;
    font-size: 12px !important;
    text-decoration: underline !important;
  }

  .gaa-metering-regwall--google-sign-in-button {
    height: 36px !important;
    margin: 0 auto 30px !important;
  }

  .gaa-metering-regwall--google-sign-in-button > div {
    animation: swgGoogleSignInButtonfadeIn 0.32s !important;
  }

  @keyframes swgGoogleSignInButtonfadeIn {
    from {
      opacity: 0 !important;
    }
    to {
      opacity: 1 !important;
    }
  }
`}
  </style>

  <div class="gaa-metering-regwall--dialog-spacer">
    <div
      role="dialog"
      aria-modal="true"
      class="gaa-metering-regwall--dialog"
      id="${s}"
      aria-labelledby="${l}"
    >
      <img
        alt="Google"
        class="gaa-metering-regwall--logo"
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3NCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDc0IDI0Ij48cGF0aCBmaWxsPSIjNDI4NUY0IiBkPSJNOS4yNCA4LjE5djIuNDZoNS44OGMtLjE4IDEuMzgtLjY0IDIuMzktMS4zNCAzLjEtLjg2Ljg2LTIuMiAxLjgtNC41NCAxLjgtMy42MiAwLTYuNDUtMi45Mi02LjQ1LTYuNTRzMi44My02LjU0IDYuNDUtNi41NGMxLjk1IDAgMy4zOC43NyA0LjQzIDEuNzZMMTUuNCAyLjVDMTMuOTQgMS4wOCAxMS45OCAwIDkuMjQgMCA0LjI4IDAgLjExIDQuMDQuMTEgOXM0LjE3IDkgOS4xMyA5YzIuNjggMCA0LjctLjg4IDYuMjgtMi41MiAxLjYyLTEuNjIgMi4xMy0zLjkxIDIuMTMtNS43NSAwLS41Ny0uMDQtMS4xLS4xMy0xLjU0SDkuMjR6Ii8+PHBhdGggZmlsbD0iI0VBNDMzNSIgZD0iTTI1IDYuMTljLTMuMjEgMC01LjgzIDIuNDQtNS44MyA1LjgxIDAgMy4zNCAyLjYyIDUuODEgNS44MyA1LjgxczUuODMtMi40NiA1LjgzLTUuODFjMC0zLjM3LTIuNjItNS44MS01LjgzLTUuODF6bTAgOS4zM2MtMS43NiAwLTMuMjgtMS40NS0zLjI4LTMuNTIgMC0yLjA5IDEuNTItMy41MiAzLjI4LTMuNTJzMy4yOCAxLjQzIDMuMjggMy41MmMwIDIuMDctMS41MiAzLjUyLTMuMjggMy41MnoiLz48cGF0aCBmaWxsPSIjNDI4NUY0IiBkPSJNNTMuNTggNy40OWgtLjA5Yy0uNTctLjY4LTEuNjctMS4zLTMuMDYtMS4zQzQ3LjUzIDYuMTkgNDUgOC43MiA0NSAxMmMwIDMuMjYgMi41MyA1LjgxIDUuNDMgNS44MSAxLjM5IDAgMi40OS0uNjIgMy4wNi0xLjMyaC4wOXYuODFjMCAyLjIyLTEuMTkgMy40MS0zLjEgMy40MS0xLjU2IDAtMi41My0xLjEyLTIuOTMtMi4wN2wtMi4yMi45MmMuNjQgMS41NCAyLjMzIDMuNDMgNS4xNSAzLjQzIDIuOTkgMCA1LjUyLTEuNzYgNS41Mi02LjA1VjYuNDloLTIuNDJ2MXptLTIuOTMgOC4wM2MtMS43NiAwLTMuMS0xLjUtMy4xLTMuNTIgMC0yLjA1IDEuMzQtMy41MiAzLjEtMy41MiAxLjc0IDAgMy4xIDEuNSAzLjEgMy41NC4wMSAyLjAzLTEuMzYgMy41LTMuMSAzLjV6Ii8+PHBhdGggZmlsbD0iI0ZCQkMwNSIgZD0iTTM4IDYuMTljLTMuMjEgMC01LjgzIDIuNDQtNS44MyA1LjgxIDAgMy4zNCAyLjYyIDUuODEgNS44MyA1LjgxczUuODMtMi40NiA1LjgzLTUuODFjMC0zLjM3LTIuNjItNS44MS01LjgzLTUuODF6bTAgOS4zM2MtMS43NiAwLTMuMjgtMS40NS0zLjI4LTMuNTIgMC0yLjA5IDEuNTItMy41MiAzLjI4LTMuNTJzMy4yOCAxLjQzIDMuMjggMy41MmMwIDIuMDctMS41MiAzLjUyLTMuMjggMy41MnoiLz48cGF0aCBmaWxsPSIjMzRBODUzIiBkPSJNNTggLjI0aDIuNTF2MTcuNTdINTh6Ii8+PHBhdGggZmlsbD0iI0VBNDMzNSIgZD0iTTY4LjI2IDE1LjUyYy0xLjMgMC0yLjIyLS41OS0yLjgyLTEuNzZsNy43Ny0zLjIxLS4yNi0uNjZjLS40OC0xLjMtMS45Ni0zLjctNC45Ny0zLjctMi45OSAwLTUuNDggMi4zNS01LjQ4IDUuODEgMCAzLjI2IDIuNDYgNS44MSA1Ljc2IDUuODEgMi42NiAwIDQuMi0xLjYzIDQuODQtMi41N2wtMS45OC0xLjMyYy0uNjYuOTYtMS41NiAxLjYtMi44NiAxLjZ6bS0uMTgtNy4xNWMxLjAzIDAgMS45MS41MyAyLjIgMS4yOGwtNS4yNSAyLjE3YzAtMi40NCAxLjczLTMuNDUgMy4wNS0zLjQ1eiIvPjwvc3ZnPg=="
      />

      <div
        class="gaa-metering-regwall--title"
        id="${l}"
        tabindex="0"
      >
        $SHOWCASE_REGWALL_TITLE$
      </div>

      <div class="gaa-metering-regwall--description">
        $SHOWCASE_REGWALL_DESCRIPTION$
      </div>

      $SHOWCASE_REGISTRATION_BUTTON$ $SHOWCASE_REGWALL_CASL$

      <div class="gaa-metering-regwall--line"></div>

      <a
        id="${n}"
        class="gaa-metering-regwall--publisher-sign-in-button"
        tabindex="0"
        href="#"
      >
        $SHOWCASE_REGWALL_PUBLISHER_SIGN_IN_BUTTON$
      </a>
    </div>
  </div>
`,m=g`
  <div
    id="${a}"
    class="gaa-metering-regwall--registration-button-container"
  ></div>
`,d=g`
  <div class="gaa-metering-regwall--casl">$SHOWCASE_REGWALL_CASL$</div>
`,h=c`
  #${t},
    #${i},
    #${e} {
    margin: 0 auto;
  }

  #${i} {
    width: 220px;
  }

  #${t} > div,
  #${i} > div,
  #${e} > div {
    animation: fadeIn 0.32s;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  #${t} .abcRioButton.abcRioButtonBlue,
  #${i} .abcRioButton.abcRioButtonBlue,
  #${e} .abcRioButton.abcRioButtonBlue {
    background-color: #1a73e8;
    box-shadow: none;
    -webkit-box-shadow: none;
    border-radius: 4px;
    width: 100% !important;
  }
  #${t}
    .abcRioButton.abcRioButtonBlue
    .abcRioButtonIcon,
  #${i}
    .abcRioButton.abcRioButtonBlue
    .abcRioButtonIcon,
  #${e}
    .abcRioButton.abcRioButtonBlue
    .abcRioButtonIcon {
    display: none;
  }
  /** Hides default "Sign in with Google" text. */
  #${t}
    .abcRioButton.abcRioButtonBlue
    .abcRioButtonContents
    span[id^='not_signed_'],
  #${i}
    .abcRioButton.abcRioButtonBlue
    .abcRioButtonContents
    span[id^='not_signed_'],
  #${e}
    .abcRioButton.abcRioButtonBlue
    .abcRioButtonContents
    span[id^='not_signed_'] {
    font-size: 0 !important;
  }
  /** Renders localized "Sign in with Google" text instead. */
  #${t}
    .abcRioButton.abcRioButtonBlue
    .abcRioButtonContents
    span[id^='not_signed_']::before,
  #${i}
    .abcRioButton.abcRioButtonBlue
    .abcRioButtonContents
    span[id^='not_signed_']::before,
  #${e}
    .abcRioButton.abcRioButtonBlue
    .abcRioButtonContents
    span[id^='not_signed_']::before {
    content: '$SHOWCASE_REGWALL_GOOGLE_SIGN_IN_BUTTON$';
    font-size: 15px;
  }
`,I=c`
  body {
    margin: 0;
    overflow: hidden;
  }
  ${h}
`,N=I+c`
    #${t} .abcRioButtonContents {
      font-family: Roboto, arial, sans-serif;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 0.21px;
      margin-left: 6px;
      margin-right: 6px;
      vertical-align: top;
    }
    #${t} .abcRioButton {
      border-radius: 1px;
      box-shadow: 0 2px 4px 0 rgb(0 0 0 / 25%);
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      -webkit-transition: background-color 0.218s, border-color 0.218s,
        box-shadow 0.218s;
      transition: background-color 0.218s, border-color 0.218s,
        box-shadow 0.218s;
      -webkit-user-select: none;
      -webkit-appearance: none;
      background-color: #fff;
      background-image: none;
      color: #262626;
      cursor: pointer;
      outline: none;
      overflow: hidden;
      position: relative;
      text-align: center;
      vertical-align: middle;
      white-space: nowrap;
      width: auto;
    }
    #${t} .abcRioButtonBlue {
      border: none;
      color: #fff;
    }
  `,L=g`
  <div style="height:36px;width:180px;" class="abcRioButton abcRioButtonBlue">
    <span style="font-size:15px;line-height:34px;" class="abcRioButtonContents">
      <span id="not_signed_in">Sign in with Google</span>
    </span>
  </div>
`,A={bg:"Получавайте повече с Google",bn:"Google-এ আরও অনেক কিছুর সুবিধা পান",cs:"Získejte s&nbsp;Googlem víc",da:"Få adgang til mere med Google",de:"Immer gut informiert mit Google",el:"Αποκτήστε περισσότερα με την Google",en:"Get more with Google",es:"Disfruta de más artículos con Google","es-419":"Disfruta más artículos con Google","es-ar":"Disfruta más artículos con Google",fr:"Plus de contenus avec Google","fr-ca":"Aller plus loin avec Google",hi:"Google की मदद से ज़्यादा मुफ़्त लेख पाएं",it:"Con Google puoi avere di più",ja:"Google からのプレゼント",kn:"Google ನಿಂದ ಹೆಚ್ಚಿನ ಪ್ರಯೋಜನ ಪಡೆಯಿರಿ",lt:"Gaukite daugiau su „Google“",lv:"Iegūstiet vairāk ar Google",ml:"Google ഉപയോഗിച്ച് കൂടുതൽ പ്രയോജനങ്ങൾ നേടൂ",mr:"Google वापरून बरेच काही मिळवा",nl:"Krijg meer met Google",pl:"Z&nbsp;Google dostajesz więcej","pt-br":"Veja mais com o Google","pt-pt":"Obtenha mais com a Google",ro:"Mai multe beneficii cu Google",sk:"Získajte viac s&nbsp;Googlom",sl:"Izkoristite več z Googlom",sv:"Få mer med Google",ta:"Google மூலம் மேலும் பல கட்டுரைகளைப் படியுங்கள்",te:"Googleతో మరిన్ని ప్రయోజనాలను పొందండి"},f={bg:'<strong></strong>За съдържанието обикновено се изисква плащане, но Google ви дава достъп без парично заплащане до тази и други статии, когато се регистрирате за <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph> с профила си в Google.',bn:'<strong></strong>এই কন্টেন্ট অ্যাক্সেস করার জন্য সাধারণত পেমেন্ট করতে হয় কিন্তু Google আপনাকে এই নিবন্ধ ফ্রিতে অ্যাক্সেস করতে এবং সেইসাথে অনেক কিছু পেতে সাহায্য করছে। এই সুবিধা পাওয়ার জন্য Google অ্যাকাউন্ট ব্যবহার করে আপনাকে <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph>-এ রেজিস্টার করতে হবে।',cs:'<strong></strong>Tento obsah je obvykle zpoplatněn, ale pokud se do publikace <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph> zaregistrujete pomocí účtu Google, získáte od Googlu přístup zdarma.',da:'<strong></strong>Du skal normalt betale for at få adgang til dette indhold, men hvis du tilmelder dig <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph> med din Google-konto, giver Google dig gratis adgang til artiklen og andet indhold.',de:'<strong></strong>Dieser Inhalt ist normalerweise kostenpflichtig. Google gewährt dir jedoch kostenlos Zugriff auf diesen Artikel und andere Inhalte, wenn du dich mit deinem Google-Konto bei <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph> registrierst.',el:'<strong></strong>Συνήθως απαιτείται πληρωμή για αυτό το περιεχόμενο, αλλά η Google σας προσφέρει πρόσβαση χωρίς χρέωση σε αυτό το άρθρο και σε πολλά ακόμη, εάν εγγραφείτε στην έκδοση <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph> με χρήση του Λογαριασμού σας Google.',en:'<strong></strong>This content usually requires payment, but Google is giving you free access to this article and more when you register with <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph> using your Google Account.',es:'<strong></strong>Normalmente, es necesario pagar para ver este contenido, pero Google te ofrece acceso gratuito a este y otros artículos si te registras en <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph> con tu cuenta de Google.',"es-419":'<strong></strong>Normalmente, es necesario pagar para ver este contenido, pero Google te ofrece acceso gratuito a este y otros artículos si te registras en <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph> con tu Cuenta&nbsp;de&nbsp;Google.',"es-ar":'<strong></strong>Normalmente, es necesario pagar para ver este contenido, pero Google te ofrece acceso gratuito a este y otros artículos si te registras en <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph> con tu Cuenta&nbsp;de&nbsp;Google.',fr:'<strong></strong>Ce contenu est généralement payant, mais vous pouvez lire cet article et d\'autres contenus gratuitement grâce à Google en vous inscrivant sur <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph> avec votre compte Google.',"fr-ca":"<strong></strong>Ce contenu est généralement payant, mais Google vous offre un accès gratuit à cet article et à d'autres si vous vous inscrivez à <ph name=\"PUBLICATION\"><ex>AP News</ex>{publication}</ph> à l'aide de votre compte Google.",hi:'<strong></strong>आम तौर पर, इस कॉन्टेंट को पढ़ने के लिए पैसे चुकाने पड़ते हैं. हालांकि, Google की मदद से, इस लेख और अन्य कॉन्टेंट को मुफ़्त में ऐक्सेस किया जा सकता है. इसके लिए, आपको Google खाते का इस्तेमाल करके, <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph> में रजिस्टर करना होगा.',it:'<strong></strong>Generalmente questi contenuti sono a pagamento, ma Google ti offre accesso gratuito a questo e ad altri articoli se ti registri a <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph> usando il tuo Account Google.',ja:'<strong></strong>通常、この記事をお読みいただくにはお支払いが必要ですが、お使いの Google アカウントで <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph> に登録すると、この記事を無料でお読みいただけます。',kn:'<strong></strong>ಸಾಮಾನ್ಯವಾಗಿ ಈ ವಿಷಯಕ್ಕಾಗಿ ಹಣ ಪಾವತಿಸಬೇಕಾಗುತ್ತದೆ, ಆದರೆ ನೀವು <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph> ಗೆ ನಿಮ್ಮ Google ಖಾತೆಯ ಮೂಲಕ ನೋಂದಾಯಿಸಿಕೊಂಡಾಗ Google ಈ ಲೇಖನ ಮತ್ತು ಇನ್ನಷ್ಟು ವಿಷಯಗಳಿಗೆ ನಿಮಗೆ ಉಚಿತವಾದ ಪ್ರವೇಶವನ್ನು ನೀಡುತ್ತದೆ.',lt:'<strong></strong>Šis turinys paprastai yra mokamas, tačiau „Google“ suteikia jums prieigą prie šio straipsnio ir kt. be papildomo mokesčio, kai užsiregistruojate „<ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph>“ naudodami savo „Google“ paskyrą.',lv:'<strong></strong>Parasti šis ir maksas saturs, taču Google piešķirs jums bezmaksas piekļuvi šim un citiem rakstiem, ja reģistrēsieties izdevumam <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph> ar savu Google kontu.',ml:'<strong></strong>സാധാരണ ഈ ഉള്ളടക്കത്തിന് പണം നൽകേണ്ടതുണ്ട്, എന്നാൽ Google അക്കൗണ്ട് ഉപയോഗിച്ച് <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph> എന്നതിൽ രജിസ്‌റ്റർ ചെയ്യുമ്പോൾ, ഈ ലേഖനത്തിലേക്കും മറ്റും Google നിങ്ങൾക്ക് സൗജന്യ ആക്‌സസ് നൽകുന്നു.',mr:'<strong></strong>या आशयासाठी सामान्यतः पेमेंट आवश्यक असते पण तुम्ही तुमचे Google खाते वापरून <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph> मध्ये नोंदणी करता तेव्हा, Google तुम्हाला या लेखाचा आणि आणखी बऱ्याच आशयाचा विनामूल्य ॲक्सेस देते.',nl:'<strong></strong>Voor deze content moet je eigenlijk betalen. Maar Google geeft je kosteloos toegang tot dit artikel en andere content als je je registreert bij <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph> via je Google-account.',pl:'<strong></strong>Te treści zazwyczaj wymagają opłaty, ale dzięki Google możesz bezpłatnie przeczytać ten artykuł i&nbsp;korzystać z&nbsp;innych materiałów po zarejestrowaniu się w&nbsp;publikacji <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph> za pomocą konta Google.',"pt-br":'<strong></strong>Normalmente, é preciso pagar por este conteúdo. Porém, basta você se registrar na publicação <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph> usando sua Conta do Google para ter acesso a esta matéria e muito mais sem custos financeiros.',"pt-pt":'<strong></strong>Geralmente, este conteúdo requer um pagamento, mas a Google concede-lhe acesso gratuito a este artigo e muito mais ao registar-se na publicação <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph> com a sua Conta Google.',ro:'<strong></strong>Acest conținut este de obicei cu plată, dar Google vă oferă acces fără costuri la acest articol și la altele când vă înregistrați la <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph> folosind Contul Google.',sk:'<strong></strong>Tento obsah je obvykle platený, ale ak sa do publikácie <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph> zaregistrujete účtom Google, získate od Googlu bezplatný prístup k&nbsp;tomuto článku a&nbsp;ďalšie výhody.',sl:'<strong></strong>Za to vsebino je običajno zahtevano plačilo, vendar vam Google omogoča dostop do tega članka in drugega brez stroškov, če se z računom Google registrirate pri publikaciji <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph>.',sv:'<strong></strong>Det krävs vanligtvis betalning för det här innehållet, men Google ger dig gratis åtkomst till artikeln och annat innehåll när du registrerar dig hos <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph> med ditt Google-konto.',ta:'<strong></strong>வழக்கமாக இந்த உள்ளடக்கத்தை வாசிக்க கட்டணம் செலுத்த வேண்டியிருக்கும். ஆனால் <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph> இல் உங்கள் Google கணக்கைப் பயன்படுத்திப் பதிவுசெய்யும்போது இந்தக் கட்டுரைக்கும் மேலும் பலவற்றுக்கும் Google இலவச அணுகலை வழங்குகிறது.',te:'<strong></strong>ఈ కంటెంట్‌కు మీరు సాధారణంగా పేమెంట్ చేయాల్సి ఉంటుంది, కానీ మీరు Google ఖాతాను ఉపయోగించి <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph>తో రిజిస్టర్ చేసుకున్నప్పుడు, ఈ వార్తా కథనానికి ఇంకా మరెన్నో వాటికి Google, ఉచిత యాక్సెస్‌ను ఇస్తుంది.'},x={bg:"Вече сте се регистрирали? Вход",bn:"আগে থেকেই রেজিস্টার করেছেন? সাইন-ইন করুন",cs:"Jste už zaregistrováni? Přihlásit se",da:"Er du allerede tilmeldt? Log ind",de:"Bereits registriert? Anmelden",el:"Έχετε εγγραφεί ήδη; Σύνδεση",en:"Already registered? Sign in",es:"¿Ya te has registrado? Iniciar sesión","es-419":"¿Ya te registraste? Accede","es-ar":"¿Ya tienes una cuenta?",fr:"Déjà inscrit&nbsp;? Connectez-vous","fr-ca":"Déjà inscrit? Se connecter",hi:"पहले से रजिस्टर किया हुआ है? साइन इन करें",it:"Hai già effettuato la registrazione? Accedi",ja:"登録済みの方: ログイン",kn:"ಈಗಾಗಲೇ ನೋಂದಾಯಿಸಲಾಗಿದೆಯೇ? ಸೈನ್ ಇನ್",lt:"Jau užsiregistravote? Prisijungti",lv:"Vai esat jau reģistrējies? Pierakstīties",ml:"മുമ്പേ രജിസ്റ്റർ ചെയ്തിട്ടുണ്ടോ? സൈൻ ഇൻ ചെയ്യുക",mr:"आधीपासून नोंदणी केली आहे का? साइन इन करा",nl:"Al geregistreerd? Inloggen",pl:"Jesteś już zarejestrowanym użytkownikiem? Zaloguj się","pt-br":"Já se inscreveu? Fazer login","pt-pt":"Já fez o seu registo? Inicie sessão",ro:"V-ați înregistrat deja? Conectați-vă",sk:"Už máte zaregistrovaný účet? Prihlásiť sa",sl:"Ste že registrirani? Prijavite se.",sv:"Har du redan registrerat dig? Logga in",ta:"ஏற்கெனவே பதிவுசெய்துள்ளீர்களா? உள்நுழைக",te:"ఇప్పటికే రిజిస్టర్ చేయబడి ఉందా? సైన్ ఇన్ చేయండి"},b={bg:"Вход с Google",bn:"Google দিয়ে সাইন-ইন করুন",cs:"Přihlásit se přes Google",da:"Log ind med Google",de:"Über Google anmelden",el:"Σύνδεση μέσω Google",en:"Sign in with Google",es:"Iniciar sesión con Google","es-419":"Acceder con Google","es-ar":"Acceder con Google",fr:"Se connecter avec Google","fr-ca":"Se connecter avec Google",hi:"Google से साइन इन करें",it:"Accedi con Google",ja:"Google でログイン",kn:"Google ಖಾತೆ ಬಳಸಿಕೊಂಡು ಸೈನ್ ಇನ್ ಮಾಡಿ",lt:"Prisijunkite su „Google“",lv:"Pierakstīties, izmantojot Google",ml:"Google ഉപയോഗിച്ച് സൈൻ ഇൻ ചെയ്യുക",mr:"Google वापरून साइन इन करा",nl:"Inloggen met Google",pl:"Zaloguj się przez Google","pt-br":"Fazer login com o Google","pt-pt":"Iniciar sessão com o Google",ro:"Conectați-vă cu Google",sk:"Prihlásiť sa účtom Google",sl:"Prijavite se z Googlom",sv:"Logga in med Google",ta:"Google மூலம் உள்நுழைக",te:"Googleతో సైన్ ఇన్ చేయండి"},w={bg:'Прегледайте <ph name="LINK_START"><ex>&lt;a&gt;</ex></ph>Общите условия за канадското законодателство за борба със спама<ph name="LINK_END"><ex>&lt;/a&gt;</ex></ph> на <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph>',bn:'<ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph>-এর <ph name="LINK_START"><ex>&lt;a&gt;</ex></ph>CASL শর্ত<ph name="LINK_END"><ex>&lt;/a&gt;</ex></ph> পর্যালোচনা করুন',cs:'Prostudujte si <ph name="LINK_START"><ex>&lt;a&gt;</ex></ph>podmínky CASL<ph name="LINK_END"><ex>&lt;/a&gt;</ex></ph> publikace <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph>',da:'Gennemgå <ph name="LINK_START"><ex>&lt;a&gt;</ex></ph>CASL-vilkårene<ph name="LINK_END"><ex>&lt;/a&gt;</ex></ph> (Canadian Anti-Spam Legislation, canadisk lovgivning vedrørende antispam) for <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph>',de:'<ph name="LINK_START"><ex>&lt;a&gt;</ex></ph>CASL-Bedingungen<ph name="LINK_END"><ex>&lt;/a&gt;</ex></ph> von <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph> ansehen',el:'Ελέγξτε αν τηρούνται στη δημοσίευση <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph> οι <ph name="LINK_START"><ex>&lt;a&gt;</ex></ph>Όροι CASL<ph name="LINK_END"><ex>&lt;/a&gt;</ex></ph>',en:'Review <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph>\'s <ph name="LINK_START"><ex>&lt;a&gt;</ex></ph>CASL terms<ph name="LINK_END"><ex>&lt;/a&gt;</ex></ph>',es:'Consulta los <ph name="LINK_START"><ex>&lt;a&gt;</ex></ph>términos de la CASL<ph name="LINK_END"><ex>&lt;/a&gt;</ex></ph> de <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph>',"es-419":'Consulta las <ph name="LINK_START"><ex>&lt;a&gt;</ex></ph>condiciones de CASL<ph name="LINK_END"><ex>&lt;/a&gt;</ex></ph> de <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph>',fr:'Consultez les <ph name="LINK_START"><ex>&lt;a&gt;</ex></ph>Conditions d\'utilisation LCAP (Loi canadienne anti-pourriel)<ph name="LINK_END"><ex>&lt;/a&gt;</ex></ph> de <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph>',"fr-ca":'Consulter les <ph name="LINK_START"><ex>&lt;a&gt;</ex></ph>conditions d\'utilisation relatives à la Loi canadienne antipourriel (LCAP)<ph name="LINK_END"><ex>&lt;/a&gt;</ex></ph> de la publication <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph>',hi:'<ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph> की <ph name="LINK_START"><ex>&lt;a&gt;</ex></ph>सीएएसएल (कैनेडियन एंटी-स्पैम लेजिस्लेशन) से जुड़ी शर्तों<ph name="LINK_END"><ex>&lt;/a&gt;</ex></ph> के बारे में पढ़ें',it:'Rileggi i <ph name="LINK_START"><ex>&lt;a&gt;</ex></ph>termini della legge CASL<ph name="LINK_END"><ex>&lt;/a&gt;</ex></ph> di <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph>',ja:'<ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph> の <ph name="LINK_START"><ex>&lt;a&gt;</ex></ph>CASL 規約<ph name="LINK_END"><ex>&lt;/a&gt;</ex></ph>を見る',kn:'<ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph> ನ <ph name="LINK_START"><ex>&lt;a&gt;</ex></ph>CASL ನಿಯಮಗಳು<ph name="LINK_END"><ex>&lt;/a&gt;</ex></ph> ಅನ್ನು ಪರಿಶೀಲಿಸಿ',lt:'Peržiūrėkite „<ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph>“ <ph name="LINK_START"><ex>&lt;a&gt;</ex></ph>CASL sąlygas<ph name="LINK_END"><ex>&lt;/a&gt;</ex></ph>',lv:'Pārskatīt <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph> <ph name="LINK_START"><ex>&lt;a&gt;</ex></ph>CASL noteikumus<ph name="LINK_END"><ex>&lt;/a&gt;</ex></ph>',ml:'<ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph> എന്നതിന്റെ <ph name="LINK_START"><ex>&lt;a&gt;</ex></ph>CASL നിബന്ധനകൾ<ph name="LINK_END"><ex>&lt;/a&gt;</ex></ph> അവലോകനം ചെയ്യുക',mr:'<ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph> च्या <ph name="LINK_START"><ex>&lt;a&gt;</ex></ph>CASL अटी<ph name="LINK_END"><ex>&lt;/a&gt;</ex></ph> यांचे पुनरावलोकन करा',nl:'Bekijk de <ph name="LINK_START"><ex>&lt;a&gt;</ex></ph>CASL-voorwaarden<ph name="LINK_END"><ex>&lt;/a&gt;</ex></ph> van <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph>',pl:'Zapoznaj się z&nbsp;<ph name="LINK_START"><ex>&lt;a&gt;</ex></ph>warunkami CASL<ph name="LINK_END"><ex>&lt;/a&gt;</ex></ph> publikacji <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph>',"pt-br":'Confira os <ph name="LINK_START"><ex>&lt;a&gt;</ex></ph>termos da CASL<ph name="LINK_END"><ex>&lt;/a&gt;</ex></ph> da publicação <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph>',"pt-pt":'Analise os <ph name="LINK_START"><ex>&lt;a&gt;</ex></ph>termos da CASL<ph name="LINK_END"><ex>&lt;/a&gt;</ex></ph> da publicação <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph>',ro:'Examinați <ph name="LINK_START"><ex>&lt;a&gt;</ex></ph>Termenii CASL<ph name="LINK_END"><ex>&lt;/a&gt;</ex></ph> ai <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph>',sk:'Prečítajte si <ph name="LINK_START"><ex>&lt;a&gt;</ex></ph>podmienky CASL<ph name="LINK_END"><ex>&lt;/a&gt;</ex></ph> publikácie <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph>',sl:'Preglejte <ph name="LINK_START"><ex>&lt;a&gt;</ex></ph>pogoje CASL<ph name="LINK_END"><ex>&lt;/a&gt;</ex></ph> za publikacijo <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph>',sv:'Läs <ph name="LINK_START"><ex>&lt;a&gt;</ex></ph>villkoren i lagstiftningen CASL<ph name="LINK_END"><ex>&lt;/a&gt;</ex></ph> för <ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph>',ta:'<ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph> இன் <ph name="LINK_START"><ex>&lt;a&gt;</ex></ph>CASL விதிமுறைகளைப்<ph name="LINK_END"><ex>&lt;/a&gt;</ex></ph> பாருங்கள்',te:'<ph name="PUBLICATION"><ex>AP News</ex>{publication}</ph>‌కు సంబంధించిన <ph name="LINK_START"><ex>&lt;a&gt;</ex></ph>CASL నియమాల<ph name="LINK_END"><ex>&lt;/a&gt;</ex></ph>ను రివ్యూ చేయండి'},S="swg-gaa-post-message-stamp",T="introduction",M="user",y="error",C="gsi-button-click",P="siwg-button-click",E="3p-button-click",G={FREE:"FREE",SUBSCRIBER:"SUBSCRIBER",METERING:"METERING"},j={RESERVED_USER:"RESERVED_USER"},_=3009;function v(e){if(/swg.debug=1/.test(self.location.hash)){const e=Array.prototype.slice.call(arguments,0);e.unshift("[Subscriptions]"),U.apply(U,e)}}function U(e){console.log.apply(console,arguments)}function R(e){console.warn.apply(console,arguments)}function O(e,t,i){if(!e){const e=(t=t||"Assertion failed").split("%s");let i=e.shift();for(let t=2;t<arguments.length;t++){const n=arguments[t],o=e.shift();i+=B(n)+o}throw new Error(i)}return e}function B(e){return e&&1==e.nodeType?e.tagName.toLowerCase()+(e.id?"#"+e.id:""):e}function D(e){return JSON.parse(e)}function z(e,t){try{return D(e)}catch(i){return void(t&&t(i))}}const k="EVENT_SHOWCASE_UNLOCKED_BY_SUBSCRIPTION",$="EVENT_SHOWCASE_UNLOCKED_BY_METER",K="EVENT_SHOWCASE_UNLOCKED_FREE_PAGE",W="EVENT_SHOWCASE_NO_ENTITLEMENTS_REGWALL",F="EVENT_SHOWCASE_INELIGIBLE_PAYWALL",Y="EVENT_SHOWCASE_NO_ENTITLEMENTS_PAYWALL",H=/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/;let Z,J;function Q(e){Z||(Z=self.document.createElement("a"),J=self.UrlCache||(self.UrlCache=Object.create(null)));const t=J[e];if(t)return t;const i=function(e,t){e.href=t;const i={href:e.href,protocol:e.protocol,host:e.host,hostname:e.hostname,port:"0"==e.port?"":e.port,pathname:e.pathname,search:e.search,hash:e.hash,origin:e.protocol+"//"+e.host};return e.origin&&"null"!==e.origin?i.origin=e.origin:"data:"!==i.protocol&&i.host||(i.origin=i.href),i}(Z,e);return J[e]=i}function V(e){return e?(/^[?#]/.test(e)?e.slice(1):e).split("&").reduce(((e,t)=>{const i=t.split("=");try{const t=decodeURIComponent(i[0]||""),n=decodeURIComponent(i[1]||"");t&&(e[t]=n)}catch(n){R(`SwG could not parse a URL query param: ${i[0]}`)}return e}),{}):{}}const q=Q(self.window.location.href),X=Q(self.document.referrer),ee={["EVENT_SHOWCASE_METER_OFFERED"]:[3010,3011],[k]:[3007],[$]:[3010,3008],[K]:[3012],[W]:[_,22,23],[Y]:[_,1],[F]:[3013,_]};function te(e,t=!1){const i=V(e);return!(!(i.gaa_at&&i.gaa_n&&i.gaa_sig&&i.gaa_ts)||!t&&"na"===i.gaa_at||parseInt(i.gaa_ts,16)<Date.now()/1e3)}function ie(e){(self.SWG=self.SWG||[]).push(e)}async function ne(){await new Promise((e=>{const t=setInterval((()=>{self.gapi&&(clearInterval(t),e())}),50)})),await new Promise((e=>self.gapi.load("auth2",e))),self.gapi.auth2.getAuthInstance()||self.gapi.auth2.init()}function oe({analyticsEvent:e,showcaseEvent:t,isFromUserAction:i}={}){ie((async n=>{const o=await n.getEventManager(),a=t?ee[t]||[]:[e];for(const e of a)o.logEvent({eventType:e,eventOriginator:1,isFromUserAction:i,additionalParameters:null})}))}class ae{static getQueryString(){return self.location.search}}let re;const se=["Webkit","webkit","Moz","moz","O","o"];function le(e,t,i){if(t.startsWith("--"))return t;re||(re={});let n=re[t];if(!n||i){if(n=t,void 0===e[t]){const i=function(e){return e.charAt(0).toUpperCase()+e.slice(1)}(t),o=function(e,t){for(let i=0;i<se.length;i++){const n=se[i]+t;if(void 0!==e[n])return n}return""}(e,i);void 0!==e[o]&&(n=o)}i||(re[t]=n)}return n}function ge(e,t){for(const i in t)e.style.setProperty(le(t,i),t[i].toString(),"important")}function ce(e,t,i,n,o){const a=le(e.style,t,o);a&&(e.style[a]=n?i+n:i)}function pe(e,t){for(const i in t)ce(e,i,t[i])}function ue(e,t,i,n){const o=e.createElement(t);if(function(e,t){for(const i in t)"style"==i?pe(e,t[i]):e.setAttribute(i,t[i])}(o,i),null!=n)if("string"==typeof n)o.textContent=n;else if(n.nodeType)o.appendChild(n);else if("length"in n)for(let a=0;a<n.length;a++)o.appendChild(n[a]);else O(!1,"Unsupported content: %s",n);return o}function me(e,t){const i=ue(e.getWin().document,"style",{type:"text/css"});return i.textContent=t,e.getHead().appendChild(i),i}function de(e,t){const i=e.en;if("object"!=typeof e||!t)return i;let n="string"==typeof t?t:he(t);n=n.toLowerCase(),n=n.replace(/_/g,"-");const o=n.split("-");for(;o.length;){const t=o.join("-");if(t in e)return e[t];o.pop()}return i}function he(e){return e.lang?e.lang:e.ownerDocument&&e.ownerDocument.documentElement.lang?e.ownerDocument.documentElement.lang:"en"}function Ie(e){const t=function(e){return e.readyState}(e);return"loading"!=t&&"uninitialized"!=t}class Ne{constructor(e){const t=!!e.document;this.t=t?e:e.defaultView,this.i=t?e.document:e}getWin(){return this.t}getRootNode(){return this.i}getRootElement(){return this.i.documentElement}getHead(){return this.i.head}getBody(){return this.i.body}isReady(){return Ie(this.i)}whenReady(){return e=this.i,new Promise((t=>{!function(e,t){!function(e,t,i){if(t(e))return void i(e);let n=!1;const o=()=>{t(e)&&!n&&(i(e),n=!0,e.removeEventListener("readystatechange",o))};e.addEventListener("readystatechange",o)}(e,Ie,t)}(e,t)}));var e}addToFixedLayer(e){return Promise.resolve()}}function Le(e){return 9===e.nodeType||e.document?new Ne(e):e}const Ae={"-":"+",_:"/"};function fe(e){if("undefined"!=typeof TextDecoder)return new TextDecoder("utf-8").decode(e);const t=function(e){const t=new Array(e.length);for(let i=0;i<e.length;i++)t[i]=String.fromCharCode(e[i]);return t.join("")}(new Uint8Array(e));return decodeURIComponent(escape(t))}function xe(e){return function(e){const t=new Uint8Array(e.length);for(let i=0;i<e.length;i++){const n=e.charCodeAt(i);O(n<=255,"Characters must be in range [0,255]"),t[i]=n}return t}(atob(e.replace(/[-_]/g,(e=>Ae[e]))))}class be{constructor(){}decode(e){return this.o(e).payload}o(e){function t(){throw new Error(`Invalid token: "${e}"`)}const i=e.split(".");3!=i.length&&t();const n=xe(i[0]),o=xe(i[1]);return{header:z(fe(n),t),payload:z(fe(o),t),verifiable:`${i[0]}.${i[1]}`,sig:i[2]}}}class we{static async show({iframeUrl:e,caslUrl:t}){if(!te(ae.getQueryString())){const e="[swg-gaa.js:GaaMeteringRegwall.show]: URL needs fresh GAA params.";return R(e),Promise.reject(e)}oe({showcaseEvent:W,isFromUserAction:!1}),we.l({iframeUrl:e,caslUrl:t}),we.g({iframeUrl:e}),we.p();try{const e=await we.u();return we.remove(),e}catch(i){throw we.remove(),i}}static async showWithNativeRegistrationButton({caslUrl:e,googleApiClientId:t,rawJwt:i=!0}){oe({showcaseEvent:W,isFromUserAction:!1}),we.l({iframeUrl:"",caslUrl:e,useNativeMode:!0});try{const e=await we.createNativeRegistrationButton({googleApiClientId:t});return we.remove(),i?e:(new be).decode(e.credential)}catch(n){we.remove(),v(`Regwall failed: ${n}`)}}static showWithNative3PRegistrationButton({caslUrl:e,authorizationUrl:t}){return oe({showcaseEvent:W,isFromUserAction:!1}),we.l({iframeUrl:"",caslUrl:e,useNativeMode:!0}),we.createNative3PRegistrationButton({authorizationUrl:t})}static remove(){const e=self.document.getElementById(r);e&&e.remove()}static async signOut(){await ne(),await self.gapi.auth2.getAuthInstance().signOut()}static l({iframeUrl:e,caslUrl:t,useNativeMode:i=!1}){const n=he(self.document.body),o=we.m(),a=/<ph name="PUBLICATION".+?\/ph>/g,g=ue(self.document,"div",{id:r});ge(g,{all:"unset","background-color":"rgba(32, 33, 36, 0.6)",border:"none",bottom:"0",height:"100%",left:"0",opacity:"0","pointer-events":"none",position:"fixed",right:"0",transition:"opacity 0.5s",top:"0",width:"100%","z-index":2147483646});let c="";t&&(c=d.replace("$SHOWCASE_REGWALL_CASL$",de(w,n)).replace(/<ph name="LINK_START".+?\/ph>/g,`<a href="${encodeURI(t)}" target="_blank">`).replace(/<ph name="LINK_END".+?\/ph>/g,"</a>").replace(a,`<strong>${o}</strong>`));let h="";return i?h=m:(e=function(e,t,i){const n=e.indexOf("?"),o=e.indexOf("#");let a="";return-1!=o&&(a=e.substring(o),e=e.substring(0,o)),-1==n?e+="?":n<e.length-1&&(e+="&"),(e+=encodeURIComponent("lang")+"="+encodeURIComponent(i))+a}(e,0,n),h=p.replace("$iframeUrl$",e)),g.innerHTML=u.replace("$SHOWCASE_REGISTRATION_BUTTON$",h).replace("$SHOWCASE_REGWALL_TITLE$",de(A,n)).replace("$SHOWCASE_REGWALL_DESCRIPTION$",de(f,n).replace(a,o)).replace("$SHOWCASE_REGWALL_PUBLISHER_SIGN_IN_BUTTON$",de(x,n)).replace("$SHOWCASE_REGWALL_CASL$",c),self.document.body.appendChild(g),g.offsetHeight,ge(g,{opacity:1}),we.h(),self.document.getElementById(s).addEventListener("animationend",(()=>{self.document.getElementById(l).focus()})),g}static m(){const e=we.I();if(e)return e;const t=we.N();if(t)return t;throw new Error("Showcase articles must define a publisher name with either JSON-LD or Microdata.")}static I(){var e;const t=Array.prototype.slice.call(self.document.querySelectorAll('script[type="application/ld+json"]')).map((e=>D(e.textContent)));for(let i=0;i<t.length;i++){const n=t[i],o=null==(e=null==n?void 0:n.publisher)?void 0:e.name;if(o)return o;n&&"object"==typeof n&&t.push(...Object.values(n))}}static N(){const e=self.document.querySelectorAll('[itemscope][itemtype][itemprop="publisher"] [itemprop="name"]');for(const t of e){const e=t.content;if(e)return e}}static h(){self.document.getElementById(n).addEventListener("click",(e=>{e.preventDefault(),oe({analyticsEvent:1036,isFromUserAction:!0}),ie((e=>e.triggerLoginRequest({linkRequested:!1})))}))}static u(){return new Promise(((e,t)=>{self.addEventListener("message",(i=>{i.data.stamp===S&&(i.data.command===M&&e(i.data.gaaUser||i.data.returnedJwt),i.data.command===y&&t("Google Sign-In could not render"))}))}))}static p(){self.addEventListener("message",(e=>{e.data.stamp===S&&e.data.command===C&&oe({analyticsEvent:1035,isFromUserAction:!0}),e.data.stamp===S&&e.data.command===P&&oe({analyticsEvent:1060,isFromUserAction:!0}),e.data.stamp===S&&e.data.command===E&&oe({analyticsEvent:1063,isFromUserAction:!0})}))}static g({iframeUrl:e}){const t=self.document.getElementById(o);t.onload=()=>{t.contentWindow.postMessage({stamp:S,command:T},new URL(e).origin)}}static createNativeRegistrationButton({googleApiClientId:e}){const t=he(self.document.body),n=self.document.getElementById(a);if(!n)return!1;const o=h.replace("$SHOWCASE_REGWALL_GOOGLE_SIGN_IN_BUTTON$",de(b,t));me(Le(self.document),o);const r=ue(self.document,"div",{id:i,tabIndex:0});function s(){oe({analyticsEvent:1060,isFromUserAction:!0})}return n.appendChild(r),new Promise((t=>{self.google.accounts.id.initialize({client_id:e,callback:t}),self.google.accounts.id.renderButton(r,{type:"standard",theme:"outline",text:"continue_with",logo_alignment:"center",click_listener:s})}))}static createNative3PRegistrationButton({authorizationUrl:e}){const i=he(self.document.body),n=self.document.getElementById(a);if(!n)return!1;const o=N.replace("$SHOWCASE_REGWALL_GOOGLE_SIGN_IN_BUTTON$",de(b,i));me(Le(self.document),o);const r=ue(self.document,"div",{id:t,tabIndex:0});return r.innerHTML=L,n.appendChild(r),r.addEventListener("click",(()=>{oe({analyticsEvent:1063,isFromUserAction:!0}),self.setTimeout((()=>{self.open(e,"_parent")}),10)})),r}}function Se(e){let t;return t=e>=1e14||e<=-1e14?Math.floor(e/1e6):e>=1e11||e<=-3e10?Math.floor(e/1e3):e,t}class Te{constructor(){this.userState={},this.L=()=>{},this.A=()=>{}}static getGaaUserPromise(){return new Promise((e=>{Te.L=e}))}static setGaaUser(e){Te.L(e)}static getLoginPromise(){return new Promise((e=>{Te.A=e}))}static resolveLogin(){Te.A()}static init(e){if(!e||!Te.validateParameters(e))return v("[gaa.js:GaaMetering.init]: Invalid params."),!1;const t=Te.S(),{googleApiClientId:i,authorizationUrl:n,allowedReferrers:o,showcaseEntitlement:a,caslUrl:r,showPaywall:s,userState:l,handleSwGEntitlement:g,registerUserPromise:c,handleLoginPromise:p,publisherEntitlementPromise:u,rawJwt:m}=e,d=a?()=>{}:e.unlockArticle;if(Te.userState=l,Te.publisherEntitlementPromise=u,!Te.isGaa(o))return v("Extended Access - Invalid gaa parameters or referrer."),!1;async function h(){if(v("show Google Regwall"),await Te.getOnReadyPromise(),i){const e=await we.showWithNativeRegistrationButton({caslUrl:r,googleApiClientId:i,rawJwt:m});Te.setGaaUser(e);const t=await c;v("registerUserPromise resolved"),Te.validateUserState(t)&&(Te.userState=t,I())}else we.showWithNative3PRegistrationButton({caslUrl:r,authorizationUrl:n})}function I(){if(!Te.validateUserState(Te.userState))return v("Invalid userState object"),!1;if(!0===Te.userState.granted){const e={[G.SUBSCRIBER]:k,[G.FREE]:K,[G.METERING]:$};void 0!==G[Te.userState.grantReason]&&ie((t=>{t.setShowcaseEntitlement({entitlement:e[Te.userState.grantReason],isUserRegistered:Te.isCurrentUserRegistered(),subscriptionTimestamp:Te.getSubscriptionTimestamp()}),v("unlocked for "+Te.userState.grantReason)})),d()}else(e=Te.userState).registrationTimestamp?ie((t=>{v("getting entitlements from Google"),v(Te.newUserStateToUserState(e)),t.getEntitlements(Te.newUserStateToUserState(e))})):h();var e}ie((async e=>{if(e.init(t),oe({analyticsEvent:3025,isFromUserAction:!1}),e.setOnLoginRequest((()=>Te.handleLoginRequest(p,I))),e.setOnNativeSubscribeRequest((()=>s())),e.setOnEntitlementsResponse((e=>Te.setEntitlements(e,o,d,g,h,s))),"granted"in l&&"grantReason"in l)I();else if(Te.T())Te.userState.grantReason=G.FREE,Te.userState.granted=!0,v("Article free from markup."),I();else if(a)v(a),e.consumeShowcaseEntitlementJwt(a);else{v("resolving publisherEntitlement");const e=await u;Te.validateUserState(e)?(Te.userState=e,I()):v("Publisher entitlement isn't valid")}}))}static async handleLoginRequest(e,t){Te.resolveLogin();const i=await e;if(!Te.validateUserState(i))return v("invalid handleLoginUserState"),!1;Te.userState=i,we.remove(),v("GaaMeteringRegwall removed"),t()}static async setEntitlements(e,t,i,n,o,a){const r=await e;r.enablesThisWithGoogleMetering()?r.consume((()=>{i()})):r.enablesThis()?n(r):!Te.isCurrentUserRegistered()&&Te.isGaa(t)?o():(ie((e=>{Te.userState.paywallReason===j.RESERVED_USER?e.setShowcaseEntitlement({entitlement:F,isUserRegistered:Te.isCurrentUserRegistered(),subscriptionTimestamp:Te.getSubscriptionTimestamp()}):e.setShowcaseEntitlement({entitlement:Y,isUserRegistered:Te.isCurrentUserRegistered(),subscriptionTimestamp:Te.getSubscriptionTimestamp()})})),a())}static isCurrentUserRegistered(){return Te.isUserRegistered(Te.userState)}static isUserRegistered(e){return void 0!==e.id&&""!=e.id}static validateParameters(e){let t=!0;"googleApiClientId"in e&&"authorizationUrl"in e||!("googleApiClientId"in e)&&!("authorizationUrl"in e)?(v("Either googleApiClientId or authorizationUrl should be supplied but not both."),t=!1):"authorizationUrl"in e?"string"==typeof e.authorizationUrl&&Q(e.authorizationUrl).href===e.authorizationUrl||(v("authorizationUrl is not a valid URL"),t=!1):"string"==typeof e.googleApiClientId&&-1!=e.googleApiClientId.indexOf(".apps.googleusercontent.com")||(v("Missing googleApiClientId, or it is not a string, or it is not in a correct format"),t=!1),"allowedReferrers"in e&&Array.isArray(e.allowedReferrers)||(v("Missing allowedReferrers or it is not an array"),t=!1);const i="showcaseEntitlement"in e?["showPaywall"]:["showPaywall","unlockArticle"];for(let o=0;o<i.length;o++)i[o]in e&&"function"==typeof e[i[o]]||(v(`Missing ${i[o]} or it is not a function`),t=!1);"handleSwGEntitlement"in e&&"function"!=typeof e.handleSwGEntitlement&&(v("handleSwGEntitlement is provided but it is not a function"),t=!1);const n="authorizationUrl"in e?["handleLoginPromise"]:["handleLoginPromise","registerUserPromise"];for(let o=0;o<n.length;o++)n[o]in e&&Te.isPromise(e[n[o]])||(v(`Missing ${n[o]} or it is not a promise`),t=!1);if("publisherEntitlementPromise"in e&&!Te.isPromise(e.publisherEntitlementPromise)&&(v("publisherEntitlementPromise is provided but it is not a promise"),t=!1),"userState"in e||"publisherEntitlementPromise"in e)if("userState"in e&&"object"!=typeof e.userState)v("userState is not an object"),t=!1;else{const i=e.userState;"granted"in i&&(!i.granted||Te.T()||"grantReason"in i)||"publisherEntitlementPromise"in e||(v("Either granted and grantReason have to be supplied or you have to provide pubisherEntitlementPromise"),t=!1)}else v("userState or publisherEntitlementPromise needs to be provided"),t=!1;return t}static isGaa(e=[]){if(!te(ae.getQueryString(),!0))return!1;const t=Q(self.document.referrer);return!(("https"!==(n=(n=i=(i=t)||X)||q).protocol&&"https:"!==n.protocol||!function(e){return e=e||q,H.test(e.hostname)}(i))&&-1==e.indexOf(t.hostname)&&(v(`This page's referrer ("${t.origin}") can't grant Google Article Access.`),1));var i,n}static S(){const e=Te.M();if(e)return e;const t=Te.C();if(t)return t;throw new Error("Showcase articles must define a publisher ID with either JSON-LD or Microdata.")}static M(){var e;const t=self.document.querySelectorAll('script[type="application/ld+json"]');for(let i=0;i<t.length;i++){let n=D(t[i].textContent);Array.isArray(n)||(n=[n]);const o=null==(e=n.find((e=>{var t;return null==(t=null==e?void 0:e.isPartOf)?void 0:t.productID})))?void 0:e.isPartOf.productID;if(o)return o}}static C(){const e=self.document.querySelectorAll('[itemscope][itemtype][itemprop="isPartOf"] [itemprop="productID"]');for(let t=0;t<e.length;t++){const i=e[t].content;if(i)return i}}static T(){return Te.P()||Te.G()||!1}static P(){var e;const t=[...self.document.querySelectorAll('script[type="application/ld+json"]')];for(const i of t){let t=D(i.textContent);Array.isArray(t)||(t=[t]);const n=null==(e=t.find((e=>null==e?void 0:e.isAccessibleForFree)))?void 0:e.isAccessibleForFree;if("boolean"==typeof n)return n;if("string"==typeof n)return"true"===n.toLowerCase()}return!1}static G(){const e=self.document.querySelectorAll('[itemscope][itemtype] [itemprop="isAccessibleForFree"]');for(let t=0;t<e.length;t++){const i=e[t].content;if(v(typeof i),i)return"true"==i.toLowerCase()}return!1}static isPromise(e){return e&&"[object Promise]"===Object.prototype.toString.call(e)}static newUserStateToUserState(e){const t=Se(e.registrationTimestamp);return{metering:{state:{id:e.id,standardAttributes:{registered_user:{timestamp:t}}}}}}static validateUserState(e){if(!e)return!1;let t=!0;if("granted"in e&&"boolean"==typeof e.granted||(v("userState.granted is missing or invalid (must be true or false)"),t=!1),!0===e.granted&&void 0===G[e.grantReason]&&(v("if userState.granted is true then userState.grantReason has to be either METERING, or SUBSCRIBER"),t=!1),!0===e.granted&&e.grantReason===G.SUBSCRIBER&&("id"in e&&"registrationTimestamp"in e?("number"!=typeof e.registrationTimestamp||e.registrationTimestamp%1!=0?(v("userState.registrationTimestamp invalid, userState.registrationTimestamp needs to be an integer and in seconds"),t=!1):Se(e.registrationTimestamp)>Date.now()/1e3&&(v("userState.registrationTimestamp is in the future"),t=!1),e.grantReason===G.SUBSCRIBER&&("subscriptionTimestamp"in e?"number"!=typeof e.subscriptionTimestamp||e.subscriptionTimestamp%1!=0?(v("userState.subscriptionTimestamp invalid, userState.subscriptionTimestamp needs to be an integer and in seconds"),t=!1):Se(e.subscriptionTimestamp)>Date.now()/1e3&&(v("userState.subscriptionTimestamp is in the future"),t=!1):(v("subscriptionTimestamp is required if userState.grantReason is SUBSCRIBER"),t=!1))):(v("Missing user ID or registrationTimestamp in userState object"),t=!1)),"id"in e||"registrationTimestamp"in e){if(!("id"in e))return v("Missing user ID in userState object"),!1;if(!("registrationTimestamp"in e))return v("Missing registrationTimestamp in userState object"),!1}return"paywallReason"in e&&(e.granted&&(v("userState.granted must be false when paywallReason is supplied."),t=!1),void 0===j[e.paywallReason]&&(v("userState.paywallReason has to be empty or set to RESERVED_USER."),t=!1)),t}static getOnReadyPromise(){return new Promise((e=>{"complete"===self.document.readyState?e():self.window.addEventListener("load",(()=>{e()}))}))}static getSubscriptionTimestamp(){var e;return(null==(e=null==Te?void 0:Te.userState)?void 0:e.subscriptionTimestamp)||null}}U("Subscriptions Showcase Version: 1.0-1675886390235"),self.GaaGoogleSignInButton=class{static async show({allowedOrigins:t}){const i=V(ae.getQueryString()).lang||"en",n=I.replace("$SHOWCASE_REGWALL_GOOGLE_SIGN_IN_BUTTON$",de(b,i));me(Le(self.document),n);const o=new Promise((e=>{self.addEventListener("message",(i=>{-1!==t.indexOf(i.origin)&&i.data.stamp===S&&i.data.command===T&&e((e=>{i.source.postMessage(e,i.origin)}))}))}));async function a(){(await o)({stamp:S,command:y})}for(const e of t){const t=new URL(e),i=t.origin===e,n="http:"===t.protocol||"https:"===t.protocol;if(!i||!n)return R(`[swg-gaa.js:GaaGoogleSignInButton.show]: You specified an invalid origin: ${e}`),void a()}try{await ne();const t=ue(self.document,"div",{id:e,tabIndex:0});self.document.body.appendChild(t),t.addEventListener("click",(async()=>{(await o)({stamp:S,command:C})}));const i=await new Promise((t=>{self.gapi.signin2.render(e,{longtitle:!0,onsuccess:t,prompt:"select_account",scope:"profile email",theme:"dark"})})),n=i.getBasicProfile(),a=i.getAuthResponse(!0),r={idToken:a.id_token,name:n.getName(),givenName:n.getGivenName(),familyName:n.getFamilyName(),imageUrl:n.getImageUrl(),email:n.getEmail(),authorizationData:a};(await o)({stamp:S,command:M,gaaUser:r})}catch(r){a()}}},self.GaaGoogle3pSignInButton=class{static show({allowedOrigins:e,authorizationUrl:i,redirectMode:n=!1}){const o=V(ae.getQueryString()).lang||"en",a=N.replace("$SHOWCASE_REGWALL_GOOGLE_SIGN_IN_BUTTON$",de(b,o));me(Le(self.document),a);const r=ue(self.document,"div",{id:t,tabIndex:0});r.innerHTML=L,r.onclick=async()=>{(await s)({stamp:S,command:E}),n?self.setTimeout((()=>{self.open(i,"_parent")}),10):self.open(i)},self.document.body.appendChild(r);const s=new Promise((t=>{self.addEventListener("message",(i=>{-1!==e.indexOf(i.origin)&&i.data.stamp===S&&i.data.command===T&&t((e=>{i.source.postMessage(e,i.origin)}))}))}));async function l(){(await s)({stamp:S,command:y})}for(let t=0;t<e.length;t++){const i=e[t],n=new URL(i),o=n.origin===i,a="http:"===n.protocol||"https:"===n.protocol;if(!o||!a)return R(`[swg-gaa.js:GaaGoogle3pSignInButton.show]: You specified an invalid origin: ${i}`),void l()}self.addEventListener("message",(t=>{-1!==e.indexOf(t.origin)&&t.data.stamp===S&&t.data.command===M&&self.parent.postMessage(t.data,t.origin)}))}static gaaNotifySignIn({gaaUser:e}){self.opener.postMessage({stamp:S,command:M,gaaUser:e})}},self.GaaSignInWithGoogleButton=class{static async show({clientId:e,allowedOrigins:t,rawJwt:n=!1}){const o=V(ae.getQueryString()).lang||"en",a=I.replace("$SHOWCASE_REGWALL_GOOGLE_SIGN_IN_BUTTON$",de(b,o));me(Le(self.document),a);const r=new Promise((e=>{self.addEventListener("message",(i=>{-1!==t.indexOf(i.origin)&&i.data.stamp===S&&i.data.command===T&&e((e=>{i.source.postMessage(e,i.origin)}))}))}));async function s(){(await r)({stamp:S,command:y})}async function l(){(await r)({stamp:S,command:P})}for(let i=0;i<t.length;i++){const e=t[i],n=new URL(e),o=n.origin===e,a="http:"===n.protocol||"https:"===n.protocol;if(!o||!a)return R(`[swg-gaa.js:GaaSignInWithGoogleButton.show]: You specified an invalid origin: ${e}`),void s()}try{const o=ue(self.document,"div",{id:i,tabIndex:0});self.document.body.appendChild(o);const a=await new Promise((n=>{self.google.accounts.id.initialize({client_id:e,callback:n,allowed_parent_origin:t}),self.google.accounts.id.renderButton(self.document.getElementById(i),{type:"standard",theme:"outline",text:"continue_with",logo_alignment:"center",width:o.offsetWidth,height:o.offsetHeight,click_listener:l})})),s=(new be).decode(a.credential),g=n?a:s;(await r)({stamp:S,command:M,jwtPayload:s,returnedJwt:g})}catch(g){s()}}},self.GaaMeteringRegwall=we,self.GaaMetering=Te}();
