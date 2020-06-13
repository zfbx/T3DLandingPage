var settingStored = false;
var dark = false;

if (typeof(Storage) !== "undefined") {
    if('TorqueDarkMode' in window.localStorage) {
        settingStored = true;
        if(window.localStorage.TorqueDarkMode === 'yes') {
            $("html").addClass("dark-mode");
            dark = true;
        }
    }
    else {
        if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
            $("html").addClass("dark-mode");
            dark = true;
        }
    }
} else {
    if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
        $("html").addClass("dark-mode");
        dark = true;
    }
}

$(document).ready( function() {
    
    if (dark) {
        $('#darkmode-toggle').text('Light Mode');
    }
    $("#darkmode-toggle").click(function() { // enable toggle
        if (dark) {
            if (typeof(Storage) !== "undefined") {
                window.localStorage.setItem("TorqueDarkMode", "no");
            }
            $("html").removeClass("dark-mode");
            $('#darkmode-toggle').text('Dark Mode');
            dark = false;
        } else {
            if (typeof(Storage) !== "undefined") {
                window.localStorage.setItem("TorqueDarkMode", "yes");
            }
            $("html").addClass("dark-mode");
            $('#darkmode-toggle').text('Light Mode');
            dark = true;
        }
    });

});