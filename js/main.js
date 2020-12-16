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
      content: "Frontend Developer"
    }
  ];

  // console.log(myObjects);
}

window.addEventListener("load", page_load);
