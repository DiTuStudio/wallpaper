var appName = "Wallpaper";
var storeUrl =
  "https://codecanyon.net/item/taearn-make-money-flutter-app/44937626";
var date = "2024-05-21";

function onIndexLoad() {
  document.title = appName + " Flutter";
  document.getElementById("storeUrl").href = storeUrl;
}

function onPolicyLoad() {
  document.title = appName + " " + "Privacy Policy";
  getData();
}

function onTermLoad() {
  document.getElementById("appName2").innerHTML = appName;
  document.title = appName + " " + "Terms and Conditions";
  getData();
}

function getData() {
  document.getElementById("appName").innerHTML = appName;
  document.getElementById("date").innerHTML = date;
}
