
document.getElementById('u_s').innerHTML = JSON.parse(sessionStorage.getItem("user_score"));
document.getElementById('c_s').innerHTML = JSON.parse(sessionStorage.getItem("comp_score"));
let rules = document.getElementById("rls");
document.getElementById("rbtn").onclick = () => {

rules.classList.toggle("active");
document.getElementById("into").onclick = () => {
rules.classList.remove("active");
};
};

// finctions
function verify(num) {
let won;
let score = JSON.parse(sessionStorage.getItem("user_score"));
let scr = JSON.parse(sessionStorage.getItem("comp_score"));
console.log("user: ", num);
c = Math.floor(Math.random() * 3);
console.log("computer :", c);
if ((num == 0) & (c == 2) || (num == 1) & (c == 0) || (num == 2) & (c == 1)) {
won = "u";
} else if (
(num == 0) & (c == 0) ||
(num == 1) & (c == 1) ||
(num == 2) & (c == 2)
) {
won = "b";
} else {
won = "c";
}
console.log(won);
if (won == "u") {

score = score + 1;
sessionStorage.setItem("user_score", score);
document.getElementById("u_s").innerHTML = score;
if (num == 0) {
  document.getElementById("middle").innerHTML = `
  <center>
  <div class="container3">
  <div class="bigdiv">
    <h1>Your choice</h1>
    <div id="smalldiv" class="u">
    <i align = "center"
    class="fas fa-hand-rock"
    style="color: black"
  ></i>
    </div>
  </div>
  <h1 id="h"> You won</h1>
  <div class="bigdiv">
    <h1>Computers choice</h1>
    <div id="smalldiv" class="c">
    <i align = "center"
    class="fas fa-hand-scissors"
    style=" color: black"
  ></i>
    </div>
  </div>
</div>

<button id = "replay" onclick = "reply()"> Play again </button>
<a href="cong.html"><button id="nxt">Next </button></a>
  </center>
  `;
} else if (num == 1) {
  document.getElementById("middle").innerHTML = `<center>
    <div class="container3">
  <div class="bigdiv">
    <h1>Your choice</h1>
    <div id="smalldiv" class="u">
    <i align = "center" class="fas fa-hand-paper" style="color: black"></i>
    </div>
  </div>
  <h1 id="h"> You won</h1>
  <div class="bigdiv">
    <h1>Computers choice</h1>
    <div id="smalldiv" class="c">
    <i align = "center"
    class="fas fa-hand-rock" 
    style=" color: black"
  ></i>
    </div>
  </div>
</div>

<button id = "replay" onclick = "reply()"> Play again </button>
<a href="cong.html"><button id="nxt">Next </button></a>
    `;
} else {
  document.getElementById("middle").innerHTML = `<center> <div class="container3">
  <div class="bigdiv">
    <h1>Your choice</h1>
    <div id="smalldiv" class="u">
      <i align = "center"
        class="fas fa-hand-scissors"
        style="color: black"
      ></i>
    </div>
  </div>
  <h1 id="h">You won</h1>
  <div class="bigdiv">
    <h1>Computers choice</h1>
    <div id="smalldiv" class="c">
      <i align = "center" class="fas fa-hand-paper" style=" color: black"></i>
    </div>
  </div>
</div>
<button id = "replay" onclick = "reply()"> Play again </button>
<a href="cong.html"><button id="nxt">Next </button></a>
</center>
`;
}
} else if (won == "c") {

scr = scr + 1;
sessionStorage.setItem("comp_score", scr);
document.getElementById("c_s").innerText = scr;
if (num == 0) {
  document.getElementById(
    "middle"
  ).innerHTML = `<center> <div class="container3">
  <div class="bigdiv">
    <h1>Your choice</h1>
    <div id="smalldiv" class="c">
    <i
    class="fas fa-hand-rock"
    style=" color: black"
  ></i>
    </div>
  </div>
  <h1 id="h">computer won</h1>
  <div class="bigdiv">
    <h1>Computers choice</h1>
    <div id="smalldiv" class="u">
      <i align = "center" class="fas fa-hand-paper" style="color: black"></i>
    </div>
  </div>
</div>
<button id = "replay" onclick = "reply()"> Play again </button>

</center>`;
} else if (num == 1) {
  document.getElementById(
    "middle"
  ).innerHTML = `<center> <div class="container3">
  <div class="bigdiv">
    <h1>Your choice</h1>
    <div id="smalldiv" class="c">
    <i align = "center" class="fas fa-hand-paper" style=" color: black"></i>
    </div>
  </div>
  <h1 id="h">Computer won</h1>
  <div class="bigdiv">
    <h1 > Computers choice</h1>
    <div id="smalldiv" class="u">
    <i
    class="fas fa-hand-scissors"
    style="color: black"
  ></i>
    </div>
  </div>
</div>
<button id = "replay" onclick = "reply()"> Play again </button>

</center>`;
} else {
  document.getElementById(
    "middle"
  ).innerHTML = `<center> <div class="container3">
  <div class="bigdiv">
  <h1>Yuour choice</h1>
    <div id="smalldiv" class="c">
    <i
    class="fas fa-hand-scissors"
    style=" color: black"
  ></i>
    </div>
  </div>
  <h1 id="h">Computer won</h1>
  <div class="bigdiv">
    <h1  >Computers choice</h1>
    <div id="smalldiv" class="u">
    <i
    class="fas fa-hand-rock"
    style="color: black"
  ></i>
    </div>
  </div>
</div>
<button id = "replay" onclick = "reply()"> Play again </button>

</center>`;
}
} else {

if (num == 0) {
  document.getElementById(
    "middle"
  ).innerHTML = `<center> <div class="container3">
  <div class="bigdiv">
  <h1>Your choice</h1>
    <div id="smalldiv" class="c">
    <i
    class="fas fa-hand-rock"
    style="color: black"
  ></i>
    </div>
  </div>
  <h1 id="h">Both won</h1>
  <div class="bigdiv">
    <h1  >Computers choice</h1>
    <div id="smalldiv" class="c">
    <i
    class="fas fa-hand-rock"
    style="color: black"
  ></i>
    </div>
  </div>
</div>
<button id = "replay" onclick = "reply()"> Replay </button>

</center>`;
} else if (num == 1) {
  document.getElementById(
    "middle"
  ).innerHTML = `<center> <div class="container3">
  <div class="bigdiv">
  <h1>Your choice</h1>
    <div id="smalldiv" class="c">
    <i align = "center" class="fas fa-hand-paper" style=" color: black"></i>
    </div>
  </div>
  <h1 id="h">Both won</h1>
  <div class="bigdiv">
    <h1  >Computers choice</h1>
    <div id="smalldiv" class="c">
    <i align = "center" class="fas fa-hand-paper" style=" color: black"></i>
    </div>
  </div>
</div>
<button id = "replay" onclick = "reply()"> Replay </button>

</center>`;
} else {
  document.getElementById(
    "middle"
  ).innerHTML = `<center> <div class="container3">
  <div class="bigdiv">
  <h1>Your choice</h1>
    <div id="smalldiv" class="c">
    <i
    class="fas fa-hand-scissors"
    style="color: black"
  ></i>
    </div>
  </div>
  <h1 id="h">Both  won</h1>
  <div class="bigdiv">
    <h1  >Computers choice</h1>
    <div id="smalldiv" class="c">
    <i
    class="fas fa-hand-scissors"
    style="color: black"
  ></i>
    </div>
  </div>
</div>
<button id = "replay" onclick = "reply()"> Replay </button>

</center>`;
}
}
}
function reply() {
document.getElementById("middle").innerHTML = `<div class="container2">
        <div class="l1" id="l1">
          <button class="btn" id="btn1" onclick="verify(0)">
            <i
              class="fas fa-hand-rock"
              style=" color: black"
            ></i>
          </button>
          <button class="btn" id="btn2" onclick="verify(1)">
            <i
              class="fas fa-hand-paper"
              style=" color: black"
            ></i>
          </button>
        </div>

        <div class="l2" id="l2">
          <button class="btn" id="btn3" onclick="verify(2)">
            <i
              class="fas fa-hand-scissors"
              style=" color: black"
            ></i>
          </button>
        </div>
      </div>`

}


