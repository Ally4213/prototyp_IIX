/**
 * Created by Andi on 13.12.2016.
 */

login = function() {
    localStorage.setItem("state", "logged-in");

    var lo = $(".logged-out");
    lo.children().hide();
    lo.hide();

    var li = $(".logged-in");
    li.children().show();
    li.show();


};

logout = function () {
    localStorage.removeItem("state");

    var lo = $(".logged-out");
    lo.children().show();
    lo.show();

    var li = $(".logged-in");
    li.children().hide();
    li.hide();
}