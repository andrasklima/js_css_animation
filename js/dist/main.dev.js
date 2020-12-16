"use strict";

function getTagContentHTML(tag, content) {
  var result = "";
  var startTag = "<".concat(tag, ">");
  var endTag = "</".concat(tag, ">");
  result += startTag;
  result += content;
  result += endTag;
  return result;
}

function page_load() {
  var root = document.querySelector("#root"); // console.log(root);

  var myObjects = [{
    tag: "h1",
    content: "Moby"
  }, {
    tag: "p",
    content: "Frontend Developer"
  }]; // console.log(myObjects);

  /* 
  for (let index = 0; index < myObjects.length; index++) {
    const element = myObjects[index];
  }
  */

  for (var _i = 0, _myObjects = myObjects; _i < _myObjects.length; _i++) {
    myObject = _myObjects[_i];
    root.insertAdjacentHTML("beforeend", " <".concat(myObject.tag, ">\n          ").concat(myObject.content, "\n        </").concat(myObject.tag, ">"));
    /* 
    root.insertAdjacentHTML(
      "beforeend",
      getTagContentHTML(myObject.tag, myObject.content)
    );
    */
    // console.log(myObject.tag);
  }
  /* 
  myObjects.forEach(function (element) {
    console.log(element);
  });
  */


  root.addEventListener("click", function () {
    root.classList.toggle("clicked");
  });
}

window.addEventListener("load", page_load);