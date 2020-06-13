var settingStored = false;
var dark = false;
if (typeof(Storage) !== "undefined") {
    // enable storing the setting
    if('TorqueDarkMode' in window.localStorage) {
        settingStored = true;
        if(window.localStorage.TorqueDarkMode === 'yes') {
            $("html").addClass("dark-mode");
            dark = true;
        }
    }
    else {
        // check if they want dark mode explicitly, else set light mode for now
        if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
            $("html").addClass("dark-mode");
            dark = true;
        }
    }
} else {
    // query preference and only set dark mode if yes.
    if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
        $("html").addClass("dark-mode");
        dark = true;
    }
}

$(document).ready( function() {
    if (dark) {
        $('#darkmode-toggle').text('Light Mode');
    }
    if (typeof(Storage) !== "undefined") {
        $("#darkmode-toggle").click(function() { // enable toggle
            if (dark) {
                window.localStorage.setItem("TorqueDarkMode", "no");
                $("html").removeClass("dark-mode");
                $('#darkmode-toggle').text('Light Mode');
            } else {
                window.localStorage.setItem("TorqueDarkMode", "yes");
                $("html").addClass("dark-mode");
                $('#darkmode-toggle').text('Dark Mode');
            }
            /*if(settingStored) {
                if(window.localStorage.TorqueDarkMode === 'yes') {
                    $("#darkmode-preference").html("Your current preference is set to: <b>dark mode</b>");
                    $("#darkmode-yes").prop("checked", true);
                }
                else {
                    $("#darkmode-preference").html("Your current preference is set to: <b>light mode</b>");
                    $("#darkmode-no").prop("checked", true);
                }
            } else {
                if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
                    $("#darkmode-preference").html("Your preference has been autodetected as <b>dark mode</b> based on system settings, you can override it here.");
                    $("#darkmode-yes").prop("checked", true);
                }
                else if(window.matchMedia("(prefers-color-scheme: light)").matches) {
                    $("#darkmode-preference").html("Your preference has been autodetected as <b>light mode</b> based on system settings, you can override it here.");
                    $("#darkmode-no").prop("checked", true);
                }
                else {
                    $("#darkmode-preference").html("You are currently being shown <b>light mode</b> as we can't detect a preference from your browser, you can make a choice here.");
                    $("#darkmode-no").prop("checked", true);
                }
            }
            $("#darkmode-modal").modal();*/
        });
        /*
        $("#darkmode-save-button").click(function() {
            if($("#darkmode-yes").prop("checked")) {
                window.localStorage.setItem("TorqueDarkMode", "yes");
                $("html").addClass("dark-mode");
            }
            else {
                window.localStorage.setItem("TorqueDarkMode", "no");
                $("html").removeClass("dark-mode");
            }
            settingStored = true;
            $("#darkmode-modal").modal('hide');
        });*/
    } else {
        // make the toggle just an actual toggle that doesn't save anything
        $("#darkmode-toggle").click(function() {
            //$("html").toggleClass("dark-mode");
            
            if (dark) {
                window.localStorage.setItem("TorqueDarkMode", "no");
                $("html").removeClass("dark-mode");
                $('#darkmode-toggle').text('Light Mode');
            } else {
                window.localStorage.setItem("TorqueDarkMode", "yes");
                $("html").addClass("dark-mode");
                $('#darkmode-toggle').text('Dark Mode');
            }
        });
    }

});