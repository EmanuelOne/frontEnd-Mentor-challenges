let container = document.querySelector(".container");

let continent, p, box, data;
let ul = document.querySelector(".dropdown ul");
ul.classList.add("hide");
let samp;
let regions = new Set();
//   comma the populatio before append
const comma = (n) => {
  n = n.split("");
  for (let i = n.length - 1; i >= 0; i -= 3) {
    if (i != n.length - 1) {
      n.splice(i + 1, 0, ",");
    }
  }
  n = n.join("");
  return n;
};
let img;
fetch(`https://restcountries.eu/rest/v2/all`)
  .then((res) => res.json())
  .then((d) => {
    // console.log(d);
    data = d;

    data.forEach((element) => {
      let name = element.name;
      let src = element.flag;
      let regio = element.region;
      regions.add(regio);
      let populate = element.population;
      let capita = element.capital;
      let box = document.createElement("div");
      let flex = document.createElement("div");
      flex.classList.add("flex");
      box.classList.add("box");
      let img = document.createElement("img");
      let h3 = document.createElement("h3");
      let region = document.createElement("p");
      let population = document.createElement("p");
      let capital = document.createElement("p");

      populate = comma(`${populate}`);
      region.innerHTML = "<span>region:</span> " + regio;
      population.innerHTML = "<span>Population:</span> " + populate;
      capital.innerHTML = "<span>Capital:</span> " + capita;
      h3.innerHTML = name;
      //   console.log(population.innerHTML);
      img.setAttribute("src", src);
      flex.appendChild(h3);
      flex.appendChild(region);
      flex.appendChild(population);
      flex.appendChild(capital);
      box.appendChild(img);
      box.appendChild(flex);
      //   if (h3.innerHTML.length > 15) {
      //     // h3.style.fontSize = "14px";
      //     // h3.style.fontWeight = "bolder";
      //     population.classList.add("mg0");
      //     region.classList.add("mg0");
      //     capital.classList.add("mg0");
      //   }
      container.appendChild(box);
      //   console.log(name, populate, capita, regio, src);
    });
    box = document.querySelectorAll(".box");
    box.forEach((b, i) => {
      b.addEventListener("click", () => {
        let d = data[i];
        samp = d;
        let span1 = [
          `<span>Native name:</span> `,
          `<span>Population: </span>`,
          `<span>Region: </span>`,
          `<span>Sub Region: </span>`,
          `<span>Capital: </span>`,
        ];
        let span2 = [
          "<span>Top level domain:</span>",
          "<span>Currency:</span>",
          "<span>Languages:</span>",
        ];
        // let span3 = ["France", "German", "Russia"];
        let name = d.name;
        let nativeName = d.nativeName;
        let population = d.population.toString();
        population = comma(population);
        let region = d.region;
        let currency = d.currencies.map((e) => e.name);
        let subRegion = d.subregion;
        let languages = d.languages.map((e) => e.name);
        let borders = d.borders;
        let capital = d.capital;
        let src = d.flag;
        let topLevelDomain = d.topLevelDomain;
        let countries = [];
        let [...r2_p_all] = [topLevelDomain, currency, languages];
        data.forEach((e) => {
          borders.forEach((c) => {
            if (e.alpha3Code == c) {
              countries.push(e.name);
            }
          });
        });
        console.log("clicked", i, data[i]);
        document.querySelector(".content").classList.add("hide");
        document.querySelector(".view").classList.add("show");
        img = document.querySelector(".row img");
        img.setAttribute("src", src);
        let h2 = document.querySelector(".r1 h2");
        h2.innerHTML = name;
        let all_P_r2 = document.querySelectorAll(".r2 p");

        all_P_r2.forEach((e, i) => {
          e.innerHTML = span2[i] + r2_p_all[i];
        });
        let all_P_r1 = document.querySelectorAll(".r1 p");
        let [...r1_p_all] = [
          nativeName,
          population,
          region,
          subRegion,
          capital,
        ];
        let r3 = document.querySelector(".r3");
        r3.innerHTML = "<span>Border Countries:</span>";
        if (countries.length > 0) {
          countries.forEach((e, i) => {
            let p = document.createElement("p");
            p.innerHTML = countries[i];
            r3.appendChild(p);
          });
        } else {
          let p = document.createElement("p");
          p.innerHTML = "No Border Country";
          r3.appendChild(p);
        }
        all_P_r1.forEach((e, i) => {
          e.innerHTML = span1[i] + r1_p_all[i];
        });
      });
    });
    document.querySelector(".back").addEventListener("click", () => {
      document.querySelector(".content").classList.remove("hide");
      document.querySelector(".view").classList.remove("show");
    });
    [...continent] = regions;
    continent.forEach((e) => {
      let para = document.createElement("p");

      para.innerHTML = e;
      if (e.length > 1) {
        ul.appendChild(para);
      }
    });
  })
  .catch((e) => console.log(e));
let input = document.querySelector("input");
input.addEventListener("change", () => {
  let v =
    document.querySelector("input").value.slice(0, 1).toLocaleUpperCase() +
    document.querySelector("input").value.slice(1).toLocaleLowerCase();
  box.forEach((e) => {
    let b = e.childNodes[1].childNodes[0];
    let name = e.childNodes[1].childNodes[0].innerHTML;
    e.classList.remove("show");

    if (name.includes(v) && v.length >= 2) {
      e.classList.remove("hide");

      e.classList.add("show");

      console.log("wow", e);
    } else {
      e.classList.add("hide");
    }
  });
});
let serve;
//DropDown
let btnText = document.querySelector(".dropdown button p");
let dropdown = document.querySelector(".dropdown");
let drop = dropdown.innerHTML;
dropdown.addEventListener("click", () => {
  ul.classList.toggle("hide");
  p = document.querySelectorAll("ul p");
  p.forEach((e) => {
    e.addEventListener("click", () => {
      btnText.innerText = e.innerHTML;
      box.forEach((ele) => {
        ele.classList.add("hide");
        serve = ele.childNodes[1].childNodes[1].innerText;
        if (serve.includes(e.innerHTML)) {
          ele.classList.remove("hide");
        }
      });
    });
  });
});
let navBtn = document.querySelector("nav p");
navBtn.addEventListener("click", () => {
  document.querySelector("body").classList.toggle("bgBody");
  document.querySelector("nav").classList.toggle("bgElement");
  document.querySelectorAll(".box").forEach((e) => {
    e.classList.toggle("bgElement");
  });
  if (navBtn.childNodes[1].classList.toggle("btn")) {
    navBtn.childNodes[1].innerHTML = "Ligth Mode";
  } else {
    navBtn.childNodes[1].innerHTML = "Dark Mode";
  }
  document
    .querySelectorAll(".black")
    .forEach((e) => e.classList.toggle("bgElement"));
  document.querySelectorAll(".but").forEach((e) => e.classList.toggle("btn"));
  document
    .querySelectorAll(".bac")
    .forEach((e) => e.classList.toggle("bgElement"));
});
