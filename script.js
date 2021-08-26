

function myfunc() {
      
  let x = document.getElementById("form-control").value;
  let y = "https://api.dictionaryapi.dev/api/v2/entries/en/" + x;
  
  fetch(y)
    .then((response) => {
      return response.json();
    })
    .then((word) => {
      console.log(word);
      const a = word[0].word;
      let p = (document.getElementById("tit").innerHTML = a);
      const b = word[0].meanings[0].definitions[0].definition;
      let s = (document.getElementById("def").innerHTML = b);
      const e = word[0].meanings[0].definitions[0].example;
      if (e !== undefined) {
        let f = (document.getElementById("pef").innerHTML = e);
      } else {
        let f = (document.getElementById("pef").innerHTML =
          "No Examples Related to this..");
      }
      const d = word[0].meanings[1].definitions[0].definition;
      let o = (document.getElementById("pit").innerHTML = d);
      const m = word[0].meanings[1].definitions[0].example;
      if (m !== undefined) {
        let g = (document.getElementById("lef").innerHTML = m);
      } else {
        let g = (document.getElementById("lef").innerHTML =
          "No Examples Related to this..");
      }
      const hands1 = document.getElementById('ncwlc').hidden=false;
      const hands2 = document.getElementById('ncwc').hidden=false;
      
      
      
    });
}
