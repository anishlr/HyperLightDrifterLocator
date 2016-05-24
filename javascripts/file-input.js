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
        "-852962": "https://www.youtube.com/watch?v=zI0Wdnu9D7U#t=1h1m11s",
        "-188000": "https://www.youtube.com/watch?v=eqJS4c7n8Xs#t=1m46s",
        "-172543": "https://www.youtube.com/watch?v=eqJS4c7n8Xs#t=3m34s",
        "-67920": "https://www.youtube.com/watch?v=eqJS4c7n8Xs#t=5m",
        "-1126743": "https://www.youtube.com/watch?v=2sCaNwWbjtQ",
        "-1123612": "https://www.youtube.com/watch?v=2sCaNwWbjtQ",
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
        "-248670": "https://www.youtube.com/watch?v=GVg-tbkVNro#t=57m39s",
        "-1146497": "https://www.youtube.com/watch?v=eqJS4c7n8Xs#t=7m55s",
        "-1907892": "https://www.youtube.com/watch?v=eqJS4c7n8Xs#t=8m20s",
        "-932637": "https://www.youtube.com/watch?v=eqJS4c7n8Xs#t=9m30s"
    },
    "west": {
        "-1347639": "https://www.youtube.com/watch?v=-s3lmcTr1eg#t=1m30s",
        "91880": "https://www.youtube.com/watch?v=-s3lmcTr1eg#t=2m20s",
        "115024": "https://www.youtube.com/watch?v=-s3lmcTr1eg#t=4m25s",
        "124387": "https://www.youtube.com/watch?v=-s3lmcTr1eg#t=5m37s",
        "147331": "https://www.youtube.com/watch?v=-s3lmcTr1eg#t=6m30s",
        "152754": "https://www.youtube.com/watch?v=-s3lmcTr1eg#t=7m50s",
        "184112": "https://www.youtube.com/watch?v=-s3lmcTr1eg#t=11m50s",
        "181173": "https://www.youtube.com/watch?v=-s3lmcTr1eg#t=12m10s",
        "-1781415": "https://www.youtube.com/watch?v=-s3lmcTr1eg#t=13m18s",
        "292939": "https://www.youtube.com/watch?v=-s3lmcTr1eg#t=16m33s",
        "301070": "https://www.youtube.com/watch?v=-s3lmcTr1eg#t=17m27s",
        "306586": "https://www.youtube.com/watch?v=-s3lmcTr1eg#t=18m30s",
        "295690": "https://www.youtube.com/watch?v=-s3lmcTr1eg#t=20m45s",
        "325917": "https://www.youtube.com/watch?v=-s3lmcTr1eg#t=23m46",
        "316015": "https://www.youtube.com/watch?v=-s3lmcTr1eg#t=24m20s",
        "312126": "https://www.youtube.com/watch?v=-s3lmcTr1eg#t=25m14s",
        "333365": "https://www.youtube.com/watch?v=-s3lmcTr1eg#t=27m08s",
        "337456": "https://www.youtube.com/watch?v=-s3lmcTr1eg#t=29m2s",
        "342221": "https://www.youtube.com/watch?v=-s3lmcTr1eg#t=31m12s",
        "-1997651": "https://www.youtube.com/watch?v=-s3lmcTr1eg#t=32m8s",
        "253495": "https://www.youtube.com/watch?v=-s3lmcTr1eg#t=37m33s",
        "252704": "https://www.youtube.com/watch?v=-s3lmcTr1eg#t=40m33s",
        "261520": "https://www.youtube.com/watch?v=-s3lmcTr1eg#t=43m14s",
        "267135": "https://www.youtube.com/watch?v=-s3lmcTr1eg#t=44m36s",
        "267632": "https://www.youtube.com/watch?v=-s3lmcTr1eg#t=45m21s",
        "274061": "https://www.youtube.com/watch?v=-s3lmcTr1eg#t=47m31s",
        "382035": "https://www.youtube.com/watch?v=-s3lmcTr1eg#t=51m11s",
        "-1758191": "https://www.youtube.com/watch?v=-s3lmcTr1eg#t=52m40s",
        "413196": "https://www.youtube.com/watch?v=-s3lmcTr1eg#t=53m20s",
        "396517": "https://www.youtube.com/watch?v=-s3lmcTr1eg#t=54m10s",
        "426114": "https://www.youtube.com/watch?v=-s3lmcTr1eg#t=58m55s",
        "421970": "https://www.youtube.com/watch?v=-s3lmcTr1eg#t=59m53s",
        "427411": "https://www.youtube.com/watch?v=-s3lmcTr1eg#t=1h1m",
        "436752": "https://www.youtube.com/watch?v=-s3lmcTr1eg#t=1h1m35s",
        "421525": "https://www.youtube.com/watch?v=-s3lmcTr1eg#t=1h4m54s",
        "446178": "https://www.youtube.com/watch?v=-s3lmcTr1eg#t=1h6m6s",
        "452706.10": "https://www.youtube.com/watch?v=-s3lmcTr1eg#t=1h9m3s",
        "452706.20": "https://www.youtube.com/watch?v=-s3lmcTr1eg#t=1h9m4s",
        "452706.30": "https://www.youtube.com/watch?v=-s3lmcTr1eg#t=1h9m5s",
        "466844": "https://www.youtube.com/watch?v=-s3lmcTr1eg#t=1h11m1s",
        "133144": "https://www.youtube.com/watch?v=-s3lmcTr1eg#t=1h16m14s",
        "111315": "https://www.youtube.com/watch?v=-s3lmcTr1eg#t=1h16m54s",
        "-1977727": "https://www.youtube.com/watch?v=-s3lmcTr1eg#t=1h18m37s",
        "227097": "https://www.youtube.com/watch?v=-s3lmcTr1eg#t=1h19m57s",
        "145250": "https://www.youtube.com/watch?v=eqJS4c7n8Xs#t=12m36s",
        "265682": "https://www.youtube.com/watch?v=eqJS4c7n8Xs#t=13m56s",
        "422827": "https://www.youtube.com/watch?v=eqJS4c7n8Xs#t=15m34s"
    },
    "south": {
        "-1363522": "https://www.youtube.com/watch?v=ZwYBoZq5vIY#t=4m56s",
        "-1363871": "https://www.youtube.com/watch?v=ZwYBoZq5vIY#t=5m44s",
        "-526738": "https://www.youtube.com/watch?v=ZwYBoZq5vIY#t=10m13s",
        "-1851787": "https://www.youtube.com/watch?v=ZwYBoZq5vIY#t=11m45s",
        "-494801.70": "https://www.youtube.com/watch?v=ZwYBoZq5vIY#t=13m10s",
        "-494801.80": "https://www.youtube.com/watch?v=ZwYBoZq5vIY#t=13m10s",
        "-494801.90": "https://www.youtube.com/watch?v=ZwYBoZq5vIY#t=13m10s",
        "-414219": "https://www.youtube.com/watch?v=ZwYBoZq5vIY#t=15m30s",
        "-602282": "https://www.youtube.com/watch?v=ZwYBoZq5vIY#t=18m11s",
        "-604612": "https://www.youtube.com/watch?v=ZwYBoZq5vIY#t=18m42s",
        "-602430": "https://www.youtube.com/watch?v=ZwYBoZq5vIY#t=19m27s",
        "-596335": "https://www.youtube.com/watch?v=ZwYBoZq5vIY#t=23m57s",
        "-575080": "https://www.youtube.com/watch?v=ZwYBoZq5vIY#t=27m6s",
        "-563608.90": "https://www.youtube.com/watch?v=ZwYBoZq5vIY#t=28m42s",
        "-563608.80": "https://www.youtube.com/watch?v=ZwYBoZq5vIY#t=28m42s",
        "-563608.70": "https://www.youtube.com/watch?v=ZwYBoZq5vIY#t=28m42s",
        "-693122": "https://www.youtube.com/watch?v=ZwYBoZq5vIY#t=31m14s",
        "-458257": "https://www.youtube.com/watch?v=ZwYBoZq5vIY#t=33m14s",
        "-454506": "https://www.youtube.com/watch?v=ZwYBoZq5vIY#t=33m40s",
        "-455008": "https://www.youtube.com/watch?v=ZwYBoZq5vIY#t=34m",
        "-1844720": "https://www.youtube.com/watch?v=ZwYBoZq5vIY#t=35m55s",
        "-1844346": "https://www.youtube.com/watch?v=ZwYBoZq5vIY#t=36m26s",
        "-427921.90": "https://www.youtube.com/watch?v=ZwYBoZq5vIY#t=38m14s",
        "-427921.80": "https://www.youtube.com/watch?v=ZwYBoZq5vIY#t=38m14s",
        "-427921.70": "https://www.youtube.com/watch?v=ZwYBoZq5vIY#t=38m14s",
        "-477441": "https://www.youtube.com/watch?v=ZwYBoZq5vIY#t=41m47s",
        "-396006": "https://www.youtube.com/watch?v=ZwYBoZq5vIY#t=44m20s",
        "-396384": "https://www.youtube.com/watch?v=ZwYBoZq5vIY#t=44m54s",
        "-387472": "https://www.youtube.com/watch?v=ZwYBoZq5vIY#t=47m25s",
        "-1838715": "https://www.youtube.com/watch?v=ZwYBoZq5vIY#t=48m",
        "-388544": "https://www.youtube.com/watch?v=ZwYBoZq5vIY#t=48m40s",
        "-374065": "https://www.youtube.com/watch?v=ZwYBoZq5vIY#t=49m",
        "-368661": "https://www.youtube.com/watch?v=ZwYBoZq5vIY#t=49m29s",
        "-356322.80": "https://www.youtube.com/watch?v=ZwYBoZq5vIY#t=50m25s",
        "-356322.90": "https://www.youtube.com/watch?v=ZwYBoZq5vIY#t=50m25s",
        "-356322.70": "https://www.youtube.com/watch?v=ZwYBoZq5vIY#t=50m25s",
        "-704869": "https://www.youtube.com/watch?v=ZwYBoZq5vIY#t=54m42s",
        "-1852747": "https://www.youtube.com/watch?v=ZwYBoZq5vIY#t=56m2s",
        "-693856": "https://www.youtube.com/watch?v=ZwYBoZq5vIY#t=58m16s",
    },
    "centralTown": {
        "-1938018": "https://www.youtube.com/watch?v=zI0Wdnu9D7U#t=40m26s",
        "-1324377": "https://www.youtube.com/watch?v=eqJS4c7n8Xs#t=26m24s",
        "-1387712": "https://www.youtube.com/watch?v=FXXqQa1nvG0",
        "-1386474": "https://www.youtube.com/watch?v=5jjzNgwwtzw",
        "-1283621": "https://www.youtube.com/watch?v=2sCaNwWbjtQ"
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
    anotherInputFileControl.addEventListener('change', inputFileChange);
}(document, window, 0));

function parseSaveContents(e) {
    try {
        var decodedSave = window.atob(e.target.result);
    } catch(error) {
        notie.alert(3, "Invalid save file", 2.5);
        return;
    }
    var nullTerminatedSave = '{"' + decodedSave.substring(decodedSave.indexOf(SAVE_COLLECTIBLES_IDENTIFIER), decodedSave.length);

    // Remove the trailing null terminator
    var saveString = nullTerminatedSave.toString().replace(/\0/g, "");
    var collectibles = [];

    try {
        var save = JSON.parse(saveString);
        // The save will now contain information on many other things like number of deaths, enemies killed, etc. We need only the gearbit information
        collectibles = save[SAVE_COLLECTIBLES_IDENTIFIER];
    } catch (error) {
        notie.alert(3, "Invalid save file.", 2.5);
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
