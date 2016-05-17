/*
  By Osvaldas Valutis, www.osvaldas.info
  Available for use under the MIT License
*/
'use strict';

var GEARBIT_NUMBER_MAPPING = {
    "1": {
        "type": "centralTown",
        "link": "http://www.google.com"
    }
};
var DEFAULT_GEARBIT_INFO = {
    "type": "centralTown",
    "link": "http://www.google.com"
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
        "tab": '<input id="centralTownTab" type="radio" name="tab-group" checked="checked" /> <label for="centralTownTab">Central Town</label>',
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

(function(document, window, index) {
    var inputFile = document.getElementById('inputFile');
    inputFile.addEventListener('change', function(e) {
        // There should only be one file since the input element doesn't allow for selecting multiple files
        var selectedFile = this.files[0];
        if (selectedFile) {
            var reader = new FileReader();
            reader.onload = parseSaveContents;
            reader.readAsText(selectedFile);
        }
    });
}(document, window, 0));

function parseSaveContents(e) {
    var decodedSave = window.atob(e.target.result);
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
    console.log(gearbits);
    var gearbitInfoWrapperControl = document.getElementById("gearbitInfoWrapper");
    var uploadButtonControl = document.getElementById("uploadButton");
    var gearbitInfoControl = document.getElementById("gearbitInfo");
    var gearbitInfoHtml = "";

    gearbitInfoWrapperControl.removeAttribute("contentInvisible");
    gearbitInfoWrapperControl.className = "content";

    uploadButtonControl.removeAttribute("content");
    uploadButtonControl.className = "contentInvisible";

    var gearbits = parseGearbitArray(gearbitArray);

    if (gearbits.centralTown.length > 0) {
        gearbitInfoHtml += GEARBIT_INFO_HTML.centralTown.tab;
    }
    if (gearbits.north.length > 0) {
        gearbitInfoHtml += GEARBIT_INFO_HTML.north.tab;
    }
    if (gearbits.south.length > 0) {
        gearbitInfoHtml += GEARBIT_INFO_HTML.south.tab;
    }
    if (gearbits.east.length > 0) {
        gearbitInfoHtml += GEARBIT_INFO_HTML.east.tab;
    }
    if (gearbits.west.length > 0) {
        gearbitInfoHtml += GEARBIT_INFO_HTML.west.tab;
    }
    if (gearbitInfoHtml.length > 0) {
        var i = 0;
        gearbitInfoHtml += GEARBIT_INFO_CONTENT_WRAPPER_HTML_START;
        if (gearbits.centralTown.length > 0) {
            gearbitInfoHtml += GEARBIT_INFO_HTML.centralTown.contentStart;
            for (i = 0; i < gearbits.centralTown.length; i++) {
                gearbitInfoHtml += '<li><a target="_blank" href="' + gearbits.centralTown[i] + '">' + gearbits.centralTown[i] + '</a></li>';
            }
            gearbitInfoHtml += GEARBIT_INFO_HTML.centralTown.contentEnd;
        }
        if (gearbits.north.length > 0) {
            gearbitInfoHtml += GEARBIT_INFO_HTML.north.contentStart;
            for (i = 0; i < gearbits.north.length; i++) {
                gearbitInfoHtml += '<li><a target="_blank" href="' + gearbits.north[i] + '">' + gearbits.north[i] + '</a></li>';
            }
            gearbitInfoHtml += GEARBIT_INFO_HTML.north.contentEnd;
        }
        if (gearbits.south.length > 0) {
            gearbitInfoHtml += GEARBIT_INFO_HTML.south.contentStart;
            for (i = 0; i < gearbits.south.length; i++) {
                gearbitInfoHtml += '<li><a target="_blank" href="' + gearbits.south[i] + '">' + gearbits.south[i] + '</a></li>';
            }
            gearbitInfoHtml += GEARBIT_INFO_HTML.south.contentEnd;
        }
        if (gearbits.east.length > 0) {
            gearbitInfoHtml += GEARBIT_INFO_HTML.east.contentStart;
            for (i = 0; i < gearbits.east.length; i++) {
                gearbitInfoHtml += '<li><a target="_blank" href="' + gearbits.east[i] + '">' + gearbits.east[i] + '</a></li>';
            }
            gearbitInfoHtml += GEARBIT_INFO_HTML.east.contentEnd;
        }
        if (gearbits.west.length > 0) {
            gearbitInfoHtml += GEARBIT_INFO_HTML.west.contentStart;
            for (i = 0; i < gearbits.west.length; i++) {
                gearbitInfoHtml += '<li><a target="_blank" href="' + gearbits.west[i] + '">' + gearbits.west[i] + '</a></li>';
            }
            gearbitInfoHtml += GEARBIT_INFO_HTML.west.contentEnd;
        }
        gearbitInfoHtml += GEARBIT_INFO_CONTENT_WRAPPER_HTML_END;
    } else {
        gearbitInfoHtml = GEARBIT_INFO_ALL_COLLECTED_HTML;
    }

    gearbitInfoControl.innerHTML = gearbitInfoHtml;
}

function parseGearbitArray(collectedGearbits) {
    var centralTown = [];
    var north = [];
    var south = [];
    var east = [];
    var west = [];

    var allGearbits = Object.keys(GEARBIT_NUMBER_MAPPING);
    var missingGearbits = allGearbits.diff(collectedGearbits);
    for (var i = 0; i < missingGearbits.length; i++) {
        var gearbitInfo = GEARBIT_NUMBER_MAPPING[missingGearbits[i]] || DEFAULT_GEARBIT_INFO;
        if (gearbitInfo.type == "centralTown") {
            centralTown.push(gearbitInfo.link);
        }
        if (gearbitInfo.type == "north") {
            north.push(gearbitInfo.link);
        }
        if (gearbitInfo.type == "south") {
            south.push(gearbitInfo.link);
        }
        if (gearbitInfo.type == "east") {
            east.push(gearbitInfo.link);
        }
        if (gearbitInfo.type == "west") {
            west.push(gearbitInfo.link);
        }
    }

    return {
        centralTown: centralTown,
        north: north,
        south: south,
        east: east,
        west: west
    };
}
