function getTagContentHTML(tag, content) {
  let result = "";

  let startTag = `<${tag}>`;
  let endTag = `</${tag}>`;

  result += startTag;
  result += content;
  result += endTag;

  return result;
}

function page_load() {
  let root = document.querySelector("#root");

  // console.log(root);

  let myObjects = [
    {
      tag: "h1",
      content: "Moby",
    },
    {
      tag: "p",
      content: "Frontend Developer",
    },
  ];

  // console.log(myObjects);

  /* 
  for (let index = 0; index < myObjects.length; index++) {
    const element = myObjects[index];
  }
*/

  for (myObject of myObjects) {
    root.insertAdjacentHTML(
      "beforeend",
      ` <${myObject.tag}>
          ${myObject.content}
        </${myObject.tag}>`
    );

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
}

window.addEventListener("load", page_load);
