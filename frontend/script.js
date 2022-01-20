var body = {
  longUrl: "",
};
var longurl = "";
var resBody = "";
$("#submit").click(function () {
  longurl = $('input[name="url"]').val();
  body.longUrl = longurl;

  var xmlhttp = new XMLHttpRequest(); // new HttpRequest instance
  var theUrl = "http://localhost:5000/api/url/shorten";
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // document.getElementById("demo").innerHTML =
      // this.responseText;
      resBody = JSON.parse(this.responseText);
      $("#short-url").text(resBody.shortUrl);
      console.log(shorturl);
    }
  };
  xmlhttp.open("POST", theUrl);
  xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xmlhttp.send(JSON.stringify(body));
});
