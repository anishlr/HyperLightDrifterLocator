/*
  By Osvaldas Valutis, www.osvaldas.info
  Available for use under the MIT License
*/
'use strict';

var SAVE_COLLECTIBLES_IDENTIFIER = 'cl'
var SAVE_GEARBIT_FIELD_ID = "0="
var SAVE_COLLECTIBLES_FIELD_DELIMITER = ">"
var SAVE_GEARBIT_FIELD_DELIMITER = "&"

var GEARBIT_INFO_ALL_COLLECTED_HTML = '<p id="allCollectedP">All gearbits collected!</p>'
var GEARBIT_INFO_CONTENT_WRAPPER_HTML_START = '<div id="content">'
var GEARBIT_INFO_CONTENT_WRAPPER_HTML_END = '</div>'
var GEARBIT_INFO_HTML = {
    "centralTown": {
        "tab": '<input id="centralTownTab" type="radio" name="tab-group" checked="checked" /> <label for="centralTownTab">Central Town</label>',
        "content": '<div id="centralTownContent"> <p>Central</p> </div>'
    },
    "north": {
        "tab": '<input id="northTab" type="radio" name="tab-group" /> <label for="northTab">North Zone</label>',
        "content": '<div id="northContent"> <p>North</p> </div>'
    },
    "south": {
        "tab": '<input id="southTab" type="radio" name="tab-group" /> <label for="southTab">South Zone</label>',
        "content": '<div id="southContent"> <p>South</p> </div>'
    },
    "east": {
        "tab": '<input id="eastTab" type="radio" name="tab-group" /> <label for="eastTab">East Zone</label>',
        "content": '<div id="eastContent"> <p>East</p> </div>'
    },
    "west": {
        "tab": '<input id="westTab" type="radio" name="tab-group" /> <label for="westTab">West Zone</label>',
        "content": '<div id="westContent"> <p>West</p> </div>'
    }
}

;
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

    try {
        var save = JSON.parse(saveString);
    } catch (error) {
        alert("Invalid save file.");
        return;
    }

    // The save will now contain information on many other things like number of deaths, enemies killed, etc. We need only the gearbit information
    var collectibles = save[SAVE_COLLECTIBLES_IDENTIFIER];
    var gearbitFieldStartIndex = collectibles.indexOf(SAVE_GEARBIT_FIELD_ID) + SAVE_GEARBIT_FIELD_ID.length;
    var gearbitString = collectibles.substring(gearbitFieldStartIndex, collectibles.indexOf(SAVE_COLLECTIBLES_FIELD_DELIMITER, gearbitFieldStartIndex));

    showGearbitInfo(gearbitString.split(SAVE_GEARBIT_FIELD_DELIMITER));
}

function showGearbitInfo(gearbits) {
    console.log(gearbits);
    var gearbitInfoWrapperControl = document.getElementById("gearbitInfoWrapper");
    var uploadButtonControl = document.getElementById("uploadButton");
    var gearbitInfoControl = document.getElementById("gearbitInfo");
    var central = [];
    var north = [];
    var south = [];
    var east = [];
    var west = [];
    var gearbitInfoHtml = "";

    gearbitInfoWrapperControl.removeAttribute("contentInvisible");
    gearbitInfoWrapperControl.className = "content";

    uploadButtonControl.removeAttribute("content");
    uploadButtonControl.className = "contentInvisible";

    if (central.length > 0) {
        gearbitInfoHtml += GEARBIT_INFO_HTML["centralTown"]["tab"];
    }
    if (north.length > 0) {
        gearbitInfoHtml += GEARBIT_INFO_HTML["north"]["tab"];
    }
    if (south.length > 0) {
        gearbitInfoHtml += GEARBIT_INFO_HTML["south"]["tab"];
    }
    if (east.length > 0) {
        gearbitInfoHtml += GEARBIT_INFO_HTML["east"]["tab"];
    }
    if (west.length > 0) {
        gearbitInfoHtml += GEARBIT_INFO_HTML["west"]["tab"];
    }
    if (gearbitInfoHtml.length > 0) {
        gearbitInfoHtml += GEARBIT_INFO_CONTENT_WRAPPER_HTML_START;
        if (central.length > 0) {
            gearbitInfoHtml += GEARBIT_INFO_HTML["centralTown"]["content"];
        }
        if (north.length > 0) {
            gearbitInfoHtml += GEARBIT_INFO_HTML["north"]["content"];
        }
        if (south.length > 0) {
            gearbitInfoHtml += GEARBIT_INFO_HTML["south"]["content"];
        }
        if (east.length > 0) {
            gearbitInfoHtml += GEARBIT_INFO_HTML["east"]["content"];
        }
        if (west.length > 0) {
            gearbitInfoHtml += GEARBIT_INFO_HTML["west"]["content"];
        }
        gearbitInfoHtml += GEARBIT_INFO_CONTENT_WRAPPER_HTML_END;
    } else {
        gearbitInfoHtml = GEARBIT_INFO_ALL_COLLECTED_HTML;
    }

    gearbitInfoControl.innerHTML = gearbitInfoHtml;
}
