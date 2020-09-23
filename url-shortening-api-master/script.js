const APILink = `https://rel.ink/api/links/`;
let link;
let d;
let ul = document.querySelector(".shortner ul");
const btn = document.querySelector(".input~button");
btn.addEventListener("click", async function () {
  link = document.querySelector("input").value;
});
if (link.includes(".")) {
  fetch(APILink, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
    body: JSON.stringify({ url: link }),
  })
    .then((res) => res.json(link))
    .then((data) => {
      console.log(data);
      d = data;

      let url = d.url;
      let hashid = d.hashid;
      let link = APILink + hashid;
      let li = document.createElement("li");
      let p = document.createElement("p");
      p.innerHTML = url;
      li.appendChild(p);
      p = document.createElement("p");
      p.innerHTML = link;

      let button = document.createElement("button");
      button.classList.add("btn");
      button.innerHTML = "Copy";
      li.appendChild(p);
      li.appendChild(button);
      ul.appendChild(li);
    })
    .catch((err) => console.log(err));
}

// const data = await response.json(link);
// console.log(link);
