;(function(){
    "use strict";
    
    var playList = [{
                author: "led zeppelin",
                song: "stairway to heaven",
                duration: "2:03"
            },
            {
                author: "queen",
                song: "bohemian rhapsody",
                duration: "2:30"
            },
            {
                author: "lynyrd skynyrd",
                song: "free bird",
                duration: "1:56"
            },
            {
                author: "deep purple",
                song: "smoke on the water",
                duration: "3:03"
            },
            {
                author: "jimi hendrix",
                song: "all along the watchtower",
                duration: "2:53"
            },
            {
                author: "AC/DC",
                song: "back in black",
                duration: "2:43"
            },
            {
                author: "queen",
                song: "we will rock you",
                duration: "2:13"
            },
            {
                author: "metallica",
                song: "enter sandman",
                duration: "3:03"
            }
        ];

        var music = new Object();
        music.author = "Lolita";
        music.song = "Nebo";
        music.duration = "5:15";
        
        playList.unshift(music);

        var playListEl = document.getElementById("playlist");
        if (playListEl === null) {
            console.log("Element playListEl not found");
            return;
        }

        var playListLi = document.getElementById("playlist-li");
        if (playListLi === null) {
            console.log("Element playListLi not found");
            return;
        }

        var playListTmpl = playListLi.innerHTML;
        var playlistHTML = "";

        // console.log(playListTmpl);

        var callback = function(item) {
            // console.log(item);
            var updatedTpl = playListTmpl;
            updatedTpl = updatedTpl.replace("{{duration}}", item.duration);
            updatedTpl = updatedTpl.replace("{{author}}", item.author);
            updatedTpl = updatedTpl.replace("{{song}}", item.song);
            // console.log(updatedTpl);
            playlistHTML += updatedTpl;
            // console.log(playlistHTML);
        };
        playList.forEach(callback);
      
        console.log("в playlistHTML находится: " + playlistHTML);
        playListEl.innerHTML = playlistHTML;     
        
    
        for (var i = 10; i > 5; i--) {
            console.log(i);
        }
        
        function sum(item1, item2) {
            return item1 + item2;
        }
        console.log(sum(7, 2));

        function numbers (start, end) {
            if (isNaN(start)) {
                console.log("start = NaN");
                return;
            }
            if (isNaN(end)) {
                console.log("end = NaN");
                return;
            }
            for (var i = start; i <= end; i++) {
                console.log(i);
            }
        }
        numbers(3);

        var i = [1, 2, 3];
        i.splice(2, 0, 5, 7);
        console.log(i);
        
        
        
})();
