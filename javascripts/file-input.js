/*
  Adapted the original code by Osvaldas Valutis, www.osvaldas.info.
  Available for use under the MIT License.
*/
'use strict';

var GEARBIT_NUMBER_MAPPING = {
    "north": {
        "-1372159": "https://www.youtube.com/watch?v=zI0Wdnu9D7U#t=6m20s",
        "-1937851": "https://www.youtube.com/watch?v=zI0Wdnu9D7U#t=7m12s",
        "-1915296": "https://www.youtube.com/watch?v=zI0Wdnu9D7U#t=9m7s",
        "-1153846": "https://www.youtube.com/watch?v=zI0Wdnu9D7U#t=9m15s",
        "-1914165": "https://www.youtube.com/watch?v=zI0Wdnu9D7U#t=9m55s",
        "-1102820": "https://www.youtube.com/watch?v=zI0Wdnu9D7U#t=12m28s",
        "-1102059": "https://www.youtube.com/watch?v=zI0Wdnu9D7U#t=12m40s",
        "-1096923": "https://www.youtube.com/watch?v=zI0Wdnu9D7U#t=14m26s",
        "-1095173": "https://www.youtube.com/watch?v=zI0Wdnu9D7U#t=15m4s",
        "-1078558": "https://www.youtube.com/watch?v=zI0Wdnu9D7U#t=17m22s",
        "-1066739": "https://www.youtube.com/watch?v=zI0Wdnu9D7U#t=18m26s",
        "-1065935": "https://www.youtube.com/watch?v=zI0Wdnu9D7U#t=18m53s",
        "-997450": "https://www.youtube.com/watch?v=zI0Wdnu9D7U#t=21m26s",
        "-995622": "https://www.youtube.com/watch?v=zI0Wdnu9D7U#t=22m42s",
        "-967035": "https://www.youtube.com/watch?v=zI0Wdnu9D7U#t=26m16s",
        "-956949": "https://www.youtube.com/watch?v=zI0Wdnu9D7U#t=27m1s",
        "-952463": "https://www.youtube.com/watch?v=zI0Wdnu9D7U#t=28m24s",
        "-934767": "https://www.youtube.com/watch?v=zI0Wdnu9D7U#t=30m23s",
        "-928455": "https://www.youtube.com/watch?v=zI0Wdnu9D7U#t=32m35s",
        "-917792": "https://www.youtube.com/watch?v=zI0Wdnu9D7U#t=33m2s",
        "-907251": "https://www.youtube.com/watch?v=zI0Wdnu9D7U#t=34m6s",
        "-1052014": "https://www.youtube.com/watch?v=zI0Wdnu9D7U#t=36m26s",
        "-1036027": "https://www.youtube.com/watch?v=zI0Wdnu9D7U#t=36m47s",
        "-1465613": "https://www.youtube.com/watch?v=zI0Wdnu9D7U#t=40m03s",
        "-826553": "https://www.youtube.com/watch?v=zI0Wdnu9D7U#t=41m58s",
        "-1881891": "https://www.youtube.com/watch?v=zI0Wdnu9D7U#t=43m4s",
        "-806721": "https://www.youtube.com/watch?v=zI0Wdnu9D7U#t=44m22s",
        "-816405": "https://www.youtube.com/watch?v=zI0Wdnu9D7U#t=45m9s",
        "-805940": "https://www.youtube.com/watch?v=zI0Wdnu9D7U#t=45m29s",
        "-805800": "https://www.youtube.com/watch?v=zI0Wdnu9D7U#t=45m44s",
        "-1016165": "https://www.youtube.com/watch?v=zI0Wdnu9D7U#t=46m",
        "-788905.90": "https://www.youtube.com/watch?v=zI0Wdnu9D7U#t=48m26s",
        "-788905.70": "https://www.youtube.com/watch?v=zI0Wdnu9D7U#t=48m26s",
        "-788905.80": "https://www.youtube.com/watch?v=zI0Wdnu9D7U#t=48m26s",
        "-1066018": "https://www.youtube.com/watch?v=zI0Wdnu9D7U#t=51m12s",
        "-1133350": "https://www.youtube.com/watch?v=zI0Wdnu9D7U#t=55m5s",
        "-1138373": "https://www.youtube.com/watch?v=zI0Wdnu9D7U#t=56m54s",
        "-882399": "https://www.youtube.com/watch?v=zI0Wdnu9D7U#t=58m53s",
        "-876954": "https://www.youtube.com/watch?v=zI0Wdnu9D7U#t=59m51s",
        "-874835": "https://www.youtube.com/watch?v=zI0Wdnu9D7U#t=1h37s",
        "-1887473": "https://www.youtube.com/watch?v=zI0Wdnu9D7U#t=1h1m11s",
        "-867435": "https://www.youtube.com/watch?v=zI0Wdnu9D7U#t=1h2m8s",
        "-862569": "https://www.youtube.com/watch?v=zI0Wdnu9D7U#t=1h6m6s",
        "-852962": "https://www.youtube.com/watch?v=zI0Wdnu9D7U#t=1h1m11s"
    },
    "east": {
        "-1935475": "https://www.youtube.com/watch?v=GVg-tbkVNro#t=50s",
        "-1353566": "https://www.youtube.com/watch?v=GVg-tbkVNro#t=1m22s",
        "-282324": "https://www.youtube.com/watch?v=GVg-tbkVNro#t=2m3s",
        "-287608": "https://www.youtube.com/watch?v=GVg-tbkVNro#t=2m57s",
        "-272376": "https://www.youtube.com/watch?v=GVg-tbkVNro#t=4m26s",
        "-278035": "https://www.youtube.com/watch?v=GVg-tbkVNro#t=6m4s",
        "-186145": "https://www.youtube.com/watch?v=GVg-tbkVNro#t=9m",
        "-1818059": "https://www.youtube.com/watch?v=GVg-tbkVNro#t=10m45s",
        "-188270": "https://www.youtube.com/watch?v=GVg-tbkVNro#t=11m50s",
        "-188863": "https://www.youtube.com/watch?v=GVg-tbkVNro#t=13m",
        "-173339": "https://www.youtube.com/watch?v=GVg-tbkVNro#t=16m20s",
        "-166352": "https://www.youtube.com/watch?v=GVg-tbkVNro#t=16m43s",
        "-163733": "https://www.youtube.com/watch?v=GVg-tbkVNro#t=18m25s",
        "-1814353": "https://www.youtube.com/watch?v=GVg-tbkVNro#t=21m9s",
        "-144178": "https://www.youtube.com/watch?v=GVg-tbkVNro#t=21m30s",
        "-123999": "https://www.youtube.com/watch?v=GVg-tbkVNro#t=24m25s",
        "-1812282": "https://www.youtube.com/watch?v=GVg-tbkVNro#t=25m30s",
        "-123225": "https://www.youtube.com/watch?v=GVg-tbkVNro#t=26m15s",
        "-112110": "https://www.youtube.com/watch?v=GVg-tbkVNro#t=27m15s",
        "-1811089": "https://www.youtube.com/watch?v=GVg-tbkVNro#t=28m44s",
        "-107235": "https://www.youtube.com/watch?v=GVg-tbkVNro#t=30m55s",
        "-95695": "https://www.youtube.com/watch?v=GVg-tbkVNro#t=31m48s",
        "-94934": "https://www.youtube.com/watch?v=GVg-tbkVNro#t=35m46s",
        "-242695": "https://www.youtube.com/watch?v=GVg-tbkVNro#t=36m11s",
        "-216030": "https://www.youtube.com/watch?v=bGSNIkBMTvM",
        "-218193": "https://www.youtube.com/watch?v=GVg-tbkVNro#t=37m51s",
        "-68604": "https://www.youtube.com/watch?v=GVg-tbkVNro#t=38m29s",
        "-66942": "https://www.youtube.com/watch?v=GVg-tbkVNro#t=38m45s",
        "-66957": "https://www.youtube.com/watch?v=GVg-tbkVNro#t=42m",
        "-63768": "https://www.youtube.com/watch?v=GVg-tbkVNro#t=42m52s",
        "-66916": "https://www.youtube.com/watch?v=GVg-tbkVNro#t=43m42s",
        "-57427": "https://www.youtube.com/watch?v=GVg-tbkVNro#t=46m42s",
        "-53799": "https://www.youtube.com/watch?v=GVg-tbkVNro#t=46m43s",
        "-45676.70": "https://www.youtube.com/watch?v=GVg-tbkVNro#t=49m49s",
        "-45676.80": "https://www.youtube.com/watch?v=GVg-tbkVNro#t=49m50s",
        "-45676.90": "https://www.youtube.com/watch?v=GVg-tbkVNro#t=49m51s",
        "-53992": "https://www.youtube.com/watch?v=GVg-tbkVNro#t=51m8s",
        "-18775": "https://www.youtube.com/watch?v=GVg-tbkVNro#t=52m16s",
        "-8152": "https://www.youtube.com/watch?v=GVg-tbkVNro#t=54m19s",
        "-5448": "https://www.youtube.com/watch?v=GVg-tbkVNro#t=54m20s",
        "-6403": "https://www.youtube.com/watch?v=GVg-tbkVNro#t=54m50s",
        "2564": "https://www.youtube.com/watch?v=GVg-tbkVNro#t=56m23s",
        "-248670": "https://www.youtube.com/watch?v=GVg-tbkVNro#t=57m39s"
    },
    "west": {
    },
    "south": {
    },
    "centralTown": {
        "-1938018": "https://www.youtube.com/watch?v=zI0Wdnu9D7U#t=40m26s"
    }
};
var SAVE_COLLECTIBLES_IDENTIFIER = 'cl';
var SAVE_GEARBIT_FIELD_ID = "0=";
var SAVE_COLLECTIBLES_FIELD_DELIMITER = ">";
var SAVE_GEARBIT_FIELD_DELIMITER = "&";

var GEARBIT_INFO_ALL_COLLECTED_HTML = '<p id="allCollectedP">All gearbits collected!</p>';
var GEARBIT_INFO_CONTENT_WRAPPER_HTML_START = '<div id="content">';
var GEARBIT_INFO_CONTENT_WRAPPER_HTML_END = '</div>';
var GEARBIT_INFO_HTML = {
    "centralTown": {
        "tab": '<input id="centralTownTab" type="radio" name="tab-group" /> <label for="centralTownTab">Central Town</label>',
        "contentStart": '<div id="centralTownContent"><ul>',
        "contentEnd": '</ul></div>'
    },
    "north": {
        "tab": '<input id="northTab" type="radio" name="tab-group" /> <label for="northTab">North Zone</label>',
        "contentStart": '<div id="northContent"><ul>',
        "contentEnd": '</ul></div>'
    },
    "south": {
        "tab": '<input id="southTab" type="radio" name="tab-group" /> <label for="southTab">South Zone</label>',
        "contentStart": '<div id="southContent"><ul>',
        "contentEnd": '</ul></div>'
    },
    "east": {
        "tab": '<input id="eastTab" type="radio" name="tab-group" /> <label for="eastTab">East Zone</label>',
        "contentStart": '<div id="eastContent"><ul>',
        "contentEnd": '</ul></div>'
    },
    "west": {
        "tab": '<input id="westTab" type="radio" name="tab-group" /> <label for="westTab">West Zone</label>',
        "contentStart": '<div id="westContent"><ul>',
        "contentEnd": '</ul></div>'
    }
};

// Credits - http://stackoverflow.com/a/4026828/1383051
Array.prototype.diff = function(a) {
    return this.filter(function(i) {
        return a.indexOf(i) < 0;
    });
};

function inputFileChange() {
    // There should only be one file since the input element doesn't allow for selecting multiple files
    var selectedFile = this.files[0];
    if (selectedFile) {
        var reader = new FileReader();
        reader.onload = parseSaveContents;
        reader.readAsText(selectedFile);
    }
}

(function(document, window, index) {
    var inputFileControl = document.getElementById('inputFile');
    inputFileControl.addEventListener('change', inputFileChange);
    
    var anotherInputFileControl = document.getElementById('anotherInputFile');
    anotherInputFile.addEventListener('change', inputFileChange);
}(document, window, 0));

function parseSaveContents(e) {
    try {
        var decodedSave = window.atob(e.target.result);
    } catch(e) {
        alert("Invalid save file");
    }
    console.log(decodedSave);
    var nullTerminatedSave = '{"' + decodedSave.substring(decodedSave.indexOf(SAVE_COLLECTIBLES_IDENTIFIER), decodedSave.length);

    // Remove the trailing null terminator
    var saveString = nullTerminatedSave.toString().replace(/\0/g, "");
    var collectibles = [];

    try {
        var save = JSON.parse(saveString);
        // The save will now contain information on many other things like number of deaths, enemies killed, etc. We need only the gearbit information
        collectibles = save[SAVE_COLLECTIBLES_IDENTIFIER];
    } catch (error) {
        alert("Invalid save file.");
        return;
    }

    var gearbitFieldStartIndex = collectibles.indexOf(SAVE_GEARBIT_FIELD_ID) + SAVE_GEARBIT_FIELD_ID.length;
    var gearbitString = collectibles.substring(gearbitFieldStartIndex, collectibles.indexOf(SAVE_COLLECTIBLES_FIELD_DELIMITER, gearbitFieldStartIndex));

    showGearbitInfo(gearbitString.split(SAVE_GEARBIT_FIELD_DELIMITER));
}

function showGearbitInfo(gearbitArray) {
    var gearbitInfoWrapperControl = document.getElementById("gearbitInfoWrapper");
    var uploadButtonControl = document.getElementById("uploadButton");
    var gearbitInfoControl = document.getElementById("gearbitInfo");
    var gearbitInfoHtml = "";

    gearbitInfoWrapperControl.removeAttribute("contentInvisible");
    gearbitInfoWrapperControl.className = "content";

    uploadButtonControl.removeAttribute("content");
    uploadButtonControl.className = "contentInvisible";

    var missingGearbits = parseGearbitArray(gearbitArray);
    
    // First construct the HTML for the tabs based on the missing gearbits
    for(var zone in missingGearbits) {
        if(missingGearbits.hasOwnProperty(zone)) {
            if(missingGearbits[zone].length > 0) {
                gearbitInfoHtml += GEARBIT_INFO_HTML[zone].tab;
            }
        }
    }
    
    // Then add in the HTML for each missing gearbit, if there were any
    if(gearbitInfoHtml.length > 0) {
        gearbitInfoHtml += GEARBIT_INFO_CONTENT_WRAPPER_HTML_START;
        for(var zone in missingGearbits) {
            if(missingGearbits.hasOwnProperty(zone)) {
                if(missingGearbits[zone].length > 0) {
                    gearbitInfoHtml += GEARBIT_INFO_HTML[zone].contentStart;
                    for(var i = 0; i < missingGearbits[zone].length; i++) {
                        for(var gearbit in missingGearbits[zone][i]) {
                            if(missingGearbits[zone][i].hasOwnProperty(gearbit)) {
                                gearbitInfoHtml += '<li><a target="_blank" href="' + missingGearbits[zone][i][gearbit] + '">' + missingGearbits[zone][i][gearbit] + '</a></li>';
                            }
                        }
                		}
                    gearbitInfoHtml += GEARBIT_INFO_HTML[zone].contentEnd;
                }
            }
        }
        gearbitInfoHtml += GEARBIT_INFO_CONTENT_WRAPPER_HTML_END;
    } else {
        gearbitInfoHtml = GEARBIT_INFO_ALL_COLLECTED_HTML;
    }
    
    gearbitInfoControl.innerHTML = gearbitInfoHtml;
    
    if(gearbitInfoHtml.length > 0) {
        // Make sure the first tab is selected
        var firstInputTabControl = document.querySelector("#gearbitInfo input");
        if(firstInputTabControl) {
            firstInputTabControl.checked = true;
        }
    }
}

function parseGearbitArray(collectedGearbits) {
    var missingGearbits = {};
    
    for(var zone in GEARBIT_NUMBER_MAPPING) {
        if(GEARBIT_NUMBER_MAPPING.hasOwnProperty(zone)) {
            var allGearbitsInThisZone = Object.keys(GEARBIT_NUMBER_MAPPING[zone]);
            var gearbitsMissingInThisZone = allGearbitsInThisZone.diff(collectedGearbits);
            
            missingGearbits[zone] = [];
            
            for (var i = 0; i < gearbitsMissingInThisZone.length; i++) {
                var missingGearbitInfo = {};
                missingGearbitInfo[gearbitsMissingInThisZone[i]] = GEARBIT_NUMBER_MAPPING[zone][gearbitsMissingInThisZone[i]];
                missingGearbits[zone].push(missingGearbitInfo);
            }
        }
    }
    
    return missingGearbits;
}

function toggleSaveInfo() {
    var tooltipControl = document.getElementById("saveFileLocationTooltip");
    if(tooltipControl.style.opacity == 1) {
        tooltipControl.style.opacity = 0;
    } else {
        tooltipControl.style.opacity = 1;
    }
}

document.querySelector("#saveFileLocation a").addEventListener('click', toggleSaveInfo);
