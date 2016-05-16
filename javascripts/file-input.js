/*
  By Osvaldas Valutis, www.osvaldas.info
  Available for use under the MIT License
*/
'use strict';

var SAVE_COLLECTIBLES_IDENTIFIER = 'cl'
var SAVE_GEARBIT_FIELD_ID = "0="
var SAVE_COLLECTIBLES_FIELD_DELIMITER = ">"
var SAVE_GEARBIT_FIELD_DELIMITER = "&"

var GEARBIT_INFO_HTML_TEMPLATE = '<input id="centralTown" type="radio" name="tab-group" checked="checked" />' +
    '<label for="centralTown">Central Town</label>' +
    '<input id="north" type="radio" name="tab-group" />' +
    '<label for="north">North Zone</label>' +
    '<input id="south" type="radio" name="tab-group" />' +
    '<label for="south">South Zone</label>' +
    '<input id="east" type="radio" name="tab-group" />' +
    '<label for="east">East Zone</label>' +
    '<input id="west" type="radio" name="tab-group" />' +
    '<label for="west">West Zone</label>' +
    '<div id="content">' +
    '<div id="centralTownContent"> <p>Central</p> </div>' +
    '<div id="northContent"> <p>North</p> </div>' +
    '<div id="southContent"> <p>South</p> </div>' +
    '<div id="eastContent"> <p>East</p> </div>' +
    '<div id="westContent"> <p>West</p> </div>' +
    '</div>'

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
    var gearbits = gearbitString.split(SAVE_GEARBIT_FIELD_DELIMITER);

    var gearbitInfoWrapperControl = document.getElementById("gearbitInfoWrapper");
    var uploadButtonControl = document.getElementById("uploadButton");

    gearbitInfoWrapperControl.removeAttribute("contentInvisible");
    gearbitInfoWrapperControl.className = "content";

    uploadButtonControl.removeAttribute("content");
    uploadButtonControl.className = "contentInvisible";

    var gearbitInfoControl = document.getElementById("gearbitInfo");
    gearbitInfoControl.innerHTML = GEARBIT_INFO_HTML_TEMPLATE;
}
