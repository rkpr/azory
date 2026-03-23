 const data = [
      {
        label: "Jakie są kierunki?",
        title: "Jakie są kierunki?",
        video: "videos/oferta_720p.mp4",
        text: "U nas możesz iść do technikum albo do szkoły branżowej pierwszego stopnia. W technikum masz dwa kierunki: technik transportu kolejowego i technik fotografii i multimediów. A jeśli chcesz szybciej zdobyć konkretny zawód, to szkoła branżowa daje sporo możliwości."
      },
      {
        label: "Jak wygląda rekrutacja?",
        title: "Jak wygląda rekrutacja?",
        video: "videos/przyjecie_720p.mp4",
        text: "Rekrutacja do naszej szkoły jest naprawdę prosta. Najpierw składasz wniosek online, potem donosisz świadectwo i wyniki egzaminu ósmoklasisty. Dostaniesz też skierowanie na badania lekarskie, a później sprawdzasz listę przyjętych."
      },
      {
        label: "Terminy rekrutacji",
        title: "Jakie są terminy?",
        video: "videos/terminy_720p.mp4",
        text: "Terminy rekrutacji co roku ustala kuratorium. Najpierw składasz wniosek, potem pojawiają się listy, a na końcu potwierdzasz wybór szkoły. I ważne — pamiętaj, żeby zaznaczyć naszą szkołę jako pierwszy wybór."
      },
      {
        label: "Dlaczego Azory?",
        title: "Dlaczego warto wybrać Azory?",
        video: "videos/dlaczego_my_720p.mp4",
        text: "U nas uczysz się rzeczy, które naprawdę się przydają. Mamy nowoczesne pracownie, sprzęt, symulatory i konkretne kierunki. W technikum możesz zdobyć zawód i podejść do matury, a w branżowej skupiasz się na konkretnym fachu."
      },
      {
        label: "Atmosfera w szkole",
        title: "Jaka jest atmosfera?",
        video: "videos/atmosfera_720p.mp4",
        text: "U nas jest przyjazna, koleżeńska atmosfera. Łatwo się dogadać, szybko poznajesz nowych ludzi i po prostu dobrze się tu czujesz. Z nauczycielami też da się normalnie pogadać i liczyć na pomoc."
      },
      {
        label: "Jak z dojazdami?",
        title: "Jak z dojazdami?",
        video: "videos/dojazdy_720p.mp4",
        text: "Spokojnie — mamy to przemyślane. Lekcje zwykle zaczynają się po 8:00, a plan układamy tak, żeby bez problemu zdążyć na autobus czy inne połączenie."     
      },
      {
        label: "Czy dam radę?",
        title: "Czy dam sobie radę?",
        video: "videos/dasz_rade_720p.mp4",
        text: "Jasne - W każdej szkole trzeba się trochę pouczyć, ale jeśli będziesz się starać, to spokojnie dasz radę. A kiedy coś będzie trudne, możesz liczyć na pomoc."
      },
      {
        label: "Zajęcia zawodowe",
        title: "Jak wyglądają zajęcia zawodowe?",
        video: "videos/zawodowe_720p.mp4",
        text: "Na zajęciach zawodowych na pewno nie jest nudno. Jest dużo praktyki, robimy różne projekty i korzystamy z pracowni oraz sprzętu, który naprawdę robi robotę. Uczysz się rzeczy przydatnych później w pracy."
      },
      {
        label: "Praktyki",
        title: "Czy są praktyki lub staże?",
        video: "videos/praktyki_720p.mp4",
        text: "Tak — w technikum praktyki odbywają się w 3 i 4 klasie i trwają miesiąc. W szkole branżowej masz zajęcia ogólne w szkole, a zawodu uczysz się u pracodawcy — i dostajesz za to wynagrodzenie."
        },
        {
        label: "Egzaminy zawodowe",
        title: "Czy zdaje się egzaminy zawodowe?",
        video: "videos/egzaminy_720p.mp4",
        text: "Tak — w trakcie nauki zdajesz egzaminy zawodowe, które potwierdzają Twoje umiejętności. Dzięki temu masz konkretny zawód w ręku."
      },
      {
        label: "Pierwsze dni",
        title: "Jak wyglądają pierwsze dni?",
        video: "videos/pierwsze_dni_720p.mp4",
        text: "Spokojnie - Na początku poznajesz klasę, nauczycieli i szkołę. Każdy jest wtedy w podobnej sytuacji, więc szybko się odnajdziesz."
      },
      {
        label: "Życie szkoły",
        title: "Co się dzieje poza lekcjami?",
        video: "videos/zycie_szkoly_720p.mp4",
        text: "Dużo się dzieje — są wydarzenia szkolne, akcje, samorząd i różne inicjatywy. Możesz się zaangażować i mieć realny wpływ na to, co się dzieje w szkole."
      },
      {
        label: "Co po szkole?",
        title: "Co po tej szkole?",
        video: "videos/po_szkole_720p.mp4",
        text: "Po naszej szkole możesz iść do pracy w swoim zawodzie albo kontynuować naukę. Wszystko zależy od Ciebie i tego, w którą stronę chcesz iść. To Ty decydujesz, co dalej."
      },
      {
        label: "Doświadczenie",
        title: "Czy trzeba mieć jakieś doświadczenie?",
        video: "videos/doswiadczenie_720p.mp4",
        text: "Nie, nie trzeba. Wszystko jest tłumaczone od podstaw, więc spokojnie dasz sobie radę. A jeśli w czymś już jesteś dobry i chcesz się rozwijać, to nauczyciele i samorząd uczniowski pomogą Ci znaleźć swoją drogę."
      }
    ];

    const video = document.getElementById("video");
    const videoSource = document.getElementById("videoSource");
    const title = document.getElementById("title");
    const text = document.getElementById("text");
    const buttons = document.getElementById("buttons");

    function setActiveButton(activeBtn) {
      document.querySelectorAll(".buttons button").forEach(btn => {
        btn.classList.remove("active");
      });
      activeBtn.classList.add("active");
    }

    function playItem(item, btn) {
      setActiveButton(btn);

      video.pause();
      video.muted = false;
      videoSource.src = item.video;
      video.load();

      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }

      title.textContent = item.title;
      text.innerHTML = "<p>" + item.text + "</p>";

      if (window.innerWidth < 1024) {
        document.querySelector(".player-card").scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }

    data.forEach((item) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = item.label;

      btn.addEventListener("click", () => {
        playItem(item, btn);
      });

      buttons.appendChild(btn);
    });