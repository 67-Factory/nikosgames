function loadingscreenremove() {
    const loadingDiv = document.getElementById('load');
    if (loadingDiv) {
        setTimeout(() => {
            loadingDiv.remove(); 
        }, 1000);
    }
}

function maybebadwifi() {
    setTimeout(() => {
        const notloading = document.getElementById('notloading');
        const loadingDiv = document.getElementById('load');
        if (notloading && loadingDiv) {
            notloading.textContent = "you may have bad internet or the site isn't loading properly. try refreshing in a bit. if the problem is still here check the console for details.";
        };
    }, 7000);
}
maybebadwifi();
function randomtext() {
    const randomtexts = [
        "hi niko",
        "i take this back",
        "teach thinking im learning but im actually playing the shot",
    "niko is love niko is life",
"why is the ugb community so competitive, like god damn",
"hi whoever you are",
"idk what to put here",
"cool magic trick, javascript:alert('whatevertext')",
"christmas season is HERE!",
"ITS TIMEEEEEEEEEE!!",
"i hope ur day is nice",
"as of typing this, i only have 2 hours of sleep left",
"wear ur christmas hat!",
"there will never be a update log bc im lazy",
"me and the bois 💀💀🤣🤣",
"need a panic key? set one in settings!",
"pstt theres a settings option",
"join the discord server",
"you can change the color theme in settings!",
"yes we are ALL cracking miku right..?",
"i already know im gonna get bullied for these messages",
"bro the no/existence/n of you and me is cool",
"catygarden is so cool",
"bro im in vsc rn and it keeps suggesting stay hydrated",
"suggest games plz",]
    const randomIndex = Math.floor(Math.random() * randomtexts.length);
    const randomtextElement = document.getElementById('randomtext');
    if (randomtextElement) {
        randomtextElement.textContent = randomtexts[randomIndex];
    }
}
    function updateDateTime() {
        const now = new Date();
        const datetimeString = now.toLocaleString();
        if (document.getElementById('datetime')) {
        document.getElementById('datetime').innerHTML = datetimeString;
        }
    }
    updateDateTime();
    setInterval(updateDateTime, 1000); 

randomtext();
function homepage() {
   window.location.href = "index.html";
}
function g() {
   window.location.href = "g.html";
}
function i() {
   window.location.href = "i.html";
}
function l() {
   window.location.href = "l.html";
}
function p() {
    alert("rn the ACTUAL proxy is in wip so this is just an iframed proxy page for now");
     var confirmthing = confirm("go to page?");
    if  (confirmthing == true) {
   window.location.href = "p.html";
    }
}
let msgnotify = `\n\u200b\n`
function randomlinks() {
  const randomthing = Math.floor(Math.random() * 20) + 1;
  let replyMessage = document.getElementById('textlink').textContent

  if (randomthing == 1) {
    replyMessage = 'link 1: https://rubber-recovered-14541013.codehs.me/ ' +
    msgnotify;
  } else if (randomthing == 2) {
    replyMessage = 'link 2: https://saratogaschools.net/Schooltool/home ' +
    msgnotify;
  } else if (randomthing == 3) {
    replyMessage = 'link 3: https://script.google.com/macros/s/AKfycbxQvbCW4DXTvZxQnB6f8h1IkWR_l2Yos4ww0196J9st06UOZyl8sAEGweDDW8IVtoaG/exec ' +
    msgnotify;
  } else if (randomthing == 4) {
    replyMessage = 'link 4: https://securly.com.mji.ro/g ' +
    msgnotify;
  } else if (randomthing == 5) {
    replyMessage = 'link 5: https://sites.google.com/view/classroom6x ' +
    msgnotify;
  } else if (randomthing == 6) {
    replyMessage = 'link 6: https://hungry.freetls.fastly.net/projects.html ' +
    msgnotify;
  } else if (randomthing == 7) {
    replyMessage = 'proxy/game? link 7: https://schooltutoringinfo.dns.army/ ' +
    msgnotify;
  } else if (randomthing == 8) {
    replyMessage = 'proxy/game? link 8: https://vapor-official.netlify.app/ ' +
    msgnotify;
  } else if (randomthing == 9) {
    replyMessage = 'link 9: https://mangooooooo-15886206.codehs.me/ ' +
    msgnotify;
  } else if (randomthing == 10) {
    replyMessage = 'link 10: https://diddyblud-15885854.codehs.me/ ' +
    msgnotify;
  } else if (randomthing == 11) {
    replyMessage = 'link 11: https://ikeepmakingcopysthisissoeasylmao-15887060.codehs.me/ ' +
    msgnotify;
  } else if (randomthing == 12) {
    replyMessage = 'link 12: https://nuckfiggers-15887068.codehs.me/ (the url is something, and yes it does work 💔) ' +
    msgnotify;
  } else if (randomthing == 13) {
    replyMessage = 'link 13: https://dipndots.dns.army/popular/ ' +
    msgnotify;
  } else if (randomthing == 14) {
    replyMessage = 'link 14: https://slipnslides.dns.army/ ' +
    msgnotify;
  } else if (randomthing == 15) {
    replyMessage = 'link 15: https://imgonnagooutswining.dynv6.net/ ' +
    msgnotify;
  } else if (randomthing == 16) {
    replyMessage = 'link 16: https://dipndots.dns.army/ ' +
    msgnotify;
  } else if (randomthing == 17) {
    replyMessage = 'proxy/game? link 17: https://d1k2ushrdsg1ci.cloudfront.net/ ' +
    msgnotify;
  } else if (randomthing == 18) {
    replyMessage = 'proxy/game? link 18: https://d2m20l9dhwzqsk.cloudfront.net/ ' +
    msgnotify;
  } else if (randomthing == 19) {
    replyMessage = 'proxy/game? link 19: https://dflxwdy90i0hf.cloudfront.net/ ' +
    msgnotify;
  } else if (randomthing == 20) {
    replyMessage = 'link 20: https://hat.global.ssl.fastly.net/pages/games?upd= ' +
    msgnotify;
  }
  document.getElementById('textlink').textContent = replyMessage;
}
function uhkeysmth() {
    const input = document.getElementById('game-search');
    const filter = input.value.toUpperCase();

    const gamesContainer = document.getElementById('main');
    
    const games = gamesContainer.getElementsByClassName('game');

    for (let i = 0; i < games.length; i++) {
        const gameTitle = games[i].querySelector('h2');
        
        if (gameTitle) {
            const txtValue = gameTitle.textContent || gameTitle.innerText;
            
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                games[i].style.display = ""; 
            } else {
                games[i].style.display = "none";
            }
        }
    }
}
function randomicon() {
    const icons = [
        "images/randomuhicons/youtube.png",
        "images/randomuhicons/tiktok.png",
        "images/randomuhicons/instagram.png" ]
    const randomIndex = Math.floor(Math.random() * icons.length);
    const iconElement = document.getElementById('randomicon');
    if (iconElement) {
        iconElement.src = icons[randomIndex];
    }

}
setInterval(randomicon, 5000);
function comingsoon() {
    alert("coming soon!");
}
function aboutblank() {
    const siteUrl = "i.html"; 
    const newWindow = window.open('about:blank', '_blank');

    if (newWindow) {
        newWindow.document.documentElement.style.height = "100%";
        newWindow.document.body.style.height = "100%";
        newWindow.document.body.style.width = "100%";
        newWindow.document.body.style.margin = "0";
        newWindow.document.body.style.padding = "0";
        const iframe = newWindow.document.createElement('iframe');
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.border = "none";
        iframe.src = siteUrl;
        
        newWindow.document.body.appendChild(iframe);

    } else {
        alert('allow a pop up plz speed (u need it for this to work)');
    }
}
window.addEventListener('load', function() {
    if (!localStorage.getItem('nosnow')) {
(function initsnow() {
    const canvas = document.getElementById('snowCanvas');
    const ctx = canvas.getContext('2d');
    const maxSnowflakes = 100;
    const snowflakes = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    for (let i = 0; i < maxSnowflakes; i++) {
        snowflakes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            radius: Math.random() * 3 + 1,
            speed: Math.random() * 1 + 0.5,
            drift: Math.random() * 0.5 - 0.25,
            opacity: Math.random() * 0.6 + 0.4
        });
    }

    (function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < snowflakes.length; i++) {
            const flake = snowflakes[i];

            flake.y += flake.speed;
            flake.x += flake.drift;

            if (flake.y > canvas.height) {
                flake.x = Math.random() * canvas.width;
                flake.y = -10;
                flake.radius = Math.random() * 3 + 1;
                flake.speed = Math.random() * 1 + 0.5;
                flake.drift = Math.random() * 0.5 - 0.25;
                flake.opacity = Math.random() * 0.6 + 0.4;
            }

            if (flake.x > canvas.width) flake.x = 0;
            else if (flake.x < 0) flake.x = canvas.width;

            ctx.beginPath();
            ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
            ctx.fill();
        }

        requestAnimationFrame(animate);
    })();
})();
    }
});
if (localStorage.getItem('custom')) {
    const customGame = JSON.parse(localStorage.getItem('custom'));
    const customGameDiv = document.getElementById('customapp');
    const titleForLoad = document.getElementById('titleforload');
    if (customGameDiv && titleForLoad) {
        customGameDiv.querySelector('img').src = customGame.imglink || 'images/funnyicon.png';
        customGameDiv.querySelector('img').alt = customGame.title;
        titleForLoad.textContent = customGame.title;
    }
}
function removesnow() {
    var question = confirm("are you disabling snow or enabling it? (ok = disable, cancel = enable)");
    if (!question) {
        localStorage.removeItem('nosnow');
        window.location.reload();
        return;
    }
    localStorage.setItem('nosnow', 'true');
    window.location.reload();
}
function colortheme() {
    var theme = prompt("color? (hint hex code of the color)");
    localStorage.setItem('theme', theme);
    window.location.reload();
}
if (localStorage.getItem('theme')) {
    const theme = localStorage.getItem('theme');
    document.documentElement.style.setProperty('background-image', 'none');
    document.body.style.setProperty('background-color', theme);
    document.body.style.setProperty('background-image', 'none'); 
    document.documentElement.style.setProperty('--main-color', theme);
}
function panicbutton() {
    var keybind = prompt("set ur keybind (single character only)");
    localStorage.setItem('panickey', keybind);
    document.getElementById('uhkey').textContent = "panic key: " + keybind;
    window.location.reload();
}
if (localStorage.getItem('panickey')) {
    if (document.getElementById('uhkey')) {
        document.getElementById('uhkey').textContent = "panic key: " + localStorage.getItem('panickey');
    }
}
document.onkeydown = function(event) {
    if (localStorage.getItem('panickey')) {
        var panickey = localStorage.getItem('panickey');
        if (event.key === panickey) {
            window.location.href = "https://www.google.com";
        }  
    }
}
    const mainContainer = document.getElementById('main');
    if (mainContainer) {
        if (document.getElementById('game-count')) {   
        const gameElements = mainContainer.querySelectorAll('.game');
        const gameCount = gameElements.length;
        const countDisplay = document.getElementById('game-count');
        countDisplay.textContent = `Amount of Games: ${gameCount}`;
        }
    } else {
        console.error("Main container element not found!");
    }
function changeicontitle() {
    localStorage.setItem('iconchange', 'true');
    window.location.reload();
}
if (localStorage.getItem('iconchange')) {
    document.title = "Google";
    document.querySelector("link[rel='icon']").href = "https://www.google.com/favicon.ico";
}
function deletedata() {
    var confirmDelete = confirm("are you sure? this will delete all your custom games and settings");
    if (!confirmDelete) {
        return;
    }
    javascript:void(0);
    localStorage.clear();
    window.location.reload();
}
const gamesContainer = document.getElementById('main');

if (gamesContainer) {
    gamesContainer.addEventListener('click', function(event) {
        
        const gameElement = event.target.closest('.game');

        if (gameElement && gameElement.id) {
            const gameId = gameElement.id;

            console.log("id:", gameId);

            switch (gameId) {
                case "suggest":
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSeEmckyZz35r7AXPTHntmQxqIgdu5JdiifW6QlyWpgH-NIWpA/viewform?usp=dialog";
    break;
case "discord":
    window.location.href = "https://discord.gg/aSKPJhcN7b";
    break;
    case "custom":
    var title = prompt("whats the title of your game/app?");
    var link = prompt("whats the link to your game/app?");
    var imglink = prompt("whats the link to your game's/app's icon? (leave blank for default icon)");
    if (title && link) {
        const cookie = localStorage.setItem('custom', JSON.stringify({ title: title, link: link, imglink: imglink }));
        window.location.reload();
    }
    break;
case "customapp":
    const customGame = JSON.parse(localStorage.getItem('custom'));
    if (customGame && customGame.link) {
        window.location.href = customGame.link;
    }
    break;
    case "angry":
    window.location.href = "games/Angry Birds Chrome.html";
    break;
case "crazy":
    window.location.href = "games/Crazy Cattle 3D.html";
    break;
case "12":
    window.location.href = "games/12 Mini Battles.html";
    break;
    case "boxing":
    window.location.href = "games/Boxing Random.html";
    break;
    case "awesome":
    window.location.href = "games/Awesome Tanks.html";
    break;
    case "awesome2":
    window.location.href = "games/Awesome Tanks 2.html";
    break;
    case "happy":
    window.location.href = "games/Happy Wheels.html";
    break;
    case "mine":
    window.location.href = "games/Minesweeper Mania.html";
    break;
    case "nubby":
    window.location.href = "games/Nubby's Number Factory.html";
    break;
    case "retro":
    window.location.href = "games/Retro Bowl.html";
    break;
    case "retroc":
    window.location.href = "games/Retro Bowl College.html";
    break;
case "old1v1":
    window.location.href = "games/old1v1.html";
    break;
case "1v1":
    window.location.href = "games/1v1.lol/one.html";
    break;
case "baldi":
    window.location.href = "games/bbp.html";
    break;
case "basket":
    window.location.href = "games/Basket Random.html";
    break;
    case "badsim":
    window.location.href = "games/Bad Time Simulator.html";
    break;
case "basketbro":
    window.location.href = "games/Basket Bros.html";
    break;
case "basketstar":
    window.location.href = "games/Basketball Stars.html";
    break;
case "bendy":
    window.location.href = "games/Bendy and the Ink Machine.html";
    break;
case "balatropico":
    window.location.href = "games/balatropico.html";
    break;
case "balatro":
    window.location.href = "games/balatro/index.html";
    break;
case "buckshot":
    window.location.href = "games/Buckshot Roulette.html";
    break;
case "buildnow":
    window.location.href = "games/BuildNow.gg.html";
    break;
    case "birdgame":
    window.location.href = "games/birdgame.mp4";
    break;
    case "bitlife":
    window.location.href = "games/BitLife.html";
    break;
case "celeste":
    window.location.href = "games/Celeste.html";
    break;
case "pico":
    window.location.href = "games/Celeste PICO.html";
    break;
case "class09":
    window.location.href = "games/Class of '09.html";
    break;
case "cluster":
    window.location.href = "games/Cluster Rush.html";
    break;
case "cookiec":
    window.location.href = "games/Cookie Clicker.html";
    break;
case "crossyroad":
    window.location.href = "games/Crossy Road.html";
    break;
case "cuphead":
    window.location.href = "games/cuphead.html";
    break;
    case "candy":
    window.location.href = "games/Candy Crush.html";
    break;
case "deltat":
    window.location.href = "games/Deltatraveler.html";
    break;
case "doom":
    window.location.href = "games/DOOM.html";
    break;
case "doom2":
    window.location.href = "games/Doom 2.html";
    break;
    case "deltarune":
    window.location.href = "games/deltarune.html";
    break;
case "endo":
    window.location.href = "games/Endoparasitic.html";
    break;
    case "endroll":
    window.location.href = "games/Endroll.html";
    break;
case "fnaf":
    window.location.href = "games/Five Nights at Freddy's.html";
    break;
case "fnaf2":
    window.location.href = "games/Five Nights at Freddy's 2.html";
    break;
case "fnaf3":
    window.location.href = "games/Five Nights at Freddy's 3.html";
    break;
case "fnaf4":
    window.location.href = "games/Five Nights at Freddy's 4.html";
    break;
case "fnf":
    window.location.href = "games/Friday Night Funkin.html";
    break;
case "gachalife":
    window.location.href = "games/life.html";
    break;
case "gdlite":
    window.location.href = "games/Geometry Dash Lite.html";
    break;
case "granny":
    window.location.href = "games/Granny.html";
    break;
case "granny2":
    window.location.href = "games/Granny 2.html";
    break;
case "granny3":
    window.location.href = "games/Granny 3.html";
    break;
case "gunspin":
    window.location.href = "games/Gunspin.html";
    break;
    case "over":
    window.location.href = "games/overit.html";
    break;
case "halflife":
    window.location.href = "games/halflife.html";
    break;
case "hk":
    window.location.href = "games/hk.html";
    break;
case "hotline":
    window.location.href = "games/hotline.html";
    break;
    case "breakout":
    window.location.href = "games/Idle Breakout.html";
    break;
    case "dice":
    window.location.href = "games/Idle Dice.html";
    break;
case "jellymario":
    window.location.href = "games/Jelly Mario.html";
    break;
case "justfall":
    window.location.href = "games/JustFall.lol.html";
    break;
     case "jelly":
    window.location.href = "games/Jelly Restaurant.html";
    break;
    case "jetpack":
    window.location.href = "games/Jetpack Joyride.html";
    break;
case "karlson":
    window.location.href = "games/Karlson.html";
    break;
case "kinder":
    window.location.href = "games/Kindergarten.html";
    break;
case "kinder2":
    window.location.href = "games/Kindergarten 2.html";
    break;
    case "zombies":
    window.location.href = "games/zombies.html";
    break;
case "madness":
    window.location.href = "games/Madness.html";
    break;
case "melon":
    window.location.href = "games/Melon Playground.html";
    break;
case "mc":
    window.location.href = "games/minecraft.html";
    break;
case "oneshot":
    window.location.href = "games/oneshot.html";
    break;
case "omori":
    window.location.href = "games/OMORI.html";
    break;
    case "punch":
    window.location.href = "games/Oshi Oshi Punch!.html";
    break;
case "people":
    window.location.href = "games/People Playground.html";
    break;
case "pizza":
    window.location.href = "games/Pizza Tower.html";
    break;
case "plants":
    window.location.href = "games/Plants vs Zombies.html";
    break;
case "gardenless":
    window.location.href = "games/Plants vs. Zombies 2 Gardenless.html";
    break;
case "arena":
    window.location.href = "games/Quake III Arena.html";
    break;
case "ragdoll":
    window.location.href = "games/Ragdoll Archers.html";
    break;
case "ragdollhit":
    window.location.href = "games/Ragdoll Hit.html";
    break;
case "repo":
    window.location.href = "games/R.E.P.O.html";
    break;
case "school":
    window.location.href = "games/Schoolboy Runaway.html";
    break;
    case "swordfight":
    window.location.href = "games/Swordfight!!.html";
    break;
case "slender":
    window.location.href = "games/Slender & The 8 Pages.html";
    break;
case "slope":
    window.location.href = "games/Slope.html";
    break;
case "solar":
    window.location.href = "games/Solar Smash.html";
    break;
case "sonic":
    window.location.href = "games/Sonic Mania.html";
    break;
case "space":
    window.location.href = "games/Space Waves.html";
    break;
case "subway":
    window.location.href = "games/Subway Surfers.html";
    break;
case "supermario":
    window.location.href = "games/Super Mario 64.html";
    break;
case "bros":
    window.location.href = "games/Super Mario Bros.html";
    break;
case "super":
    window.location.href = "games/Superhot.html";
    break;
case "smash":
    window.location.href = "games/smashkarts.html";
    break;
case "tattle":
    window.location.href = "games/Tattletail.html";
    break;
case "thatsnot":
    window.location.href = "games/That's Not My Neighbor.html";
    break;
case "side":
    window.location.href = "games/The Deadseat.html";
    break;
case "man":
    window.location.href = "games/The Man In The Window.html";
    break;
case "tunnel":
    window.location.href = "games/Tunnel Rush.html";
    break;
case "ultrakill":
    window.location.href = "games/ULTRAKILL.html";
    break;
case "undertaleyellow":
    window.location.href = "games/Undertale Yellow.html";
    break;
    case "undertale":
    window.location.href = "games/undertale/index.html";
    break;
case "webf":
    window.location.href = "games/WebFishing.html";
    break;
case "yume":
    window.location.href = "games/Yume Nikki.html";
    break;
                // Add more cases here for other game divs you add:
                // case "game2":
                //     window.location.href = "games/game2.html";
                //     break;
                
                default:
                    console.log("no route:", gameId);
                    break;
            }
        }
    });
}
window.addEventListener('load', () => {
    loadingscreenremove();
});