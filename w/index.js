let divWraper = document.createElement('div');
divWraper.className = "wraper";
document.body.append(divWraper);

let Disp = document.createElement('textarea');
Disp.className = "disp";

divWraper.append(Disp);
let DispText=document.querySelector(".disp")
DispText.placeholder= "RSS";
DispText.focus();

let divBoard = document.createElement('div');
divBoard.className = "key-board";
divWraper.append(divBoard)

let divInfo = document.createElement('div');
divInfo.innerHTML = "<div>Клавиатура создана в операционной системе Windows <br>Смена языка: Left CTRL+ Left SHIFT </div>";
divInfo.className = "Info";
divWraper.append(divInfo)

function getLine() {
    let result = [];
    for(let i=1; i<=5; i++) {
      let Line = document.createElement('div');
      Line.className = "line conteiner";
      
      result.push(Line);
    }
    return result;
  }
  divBoard.append(...getLine())

  function getButLine1() {
    let result = []
      for(let i=0; i<14; i++) {
      let butL1 = document.createElement('div');
      butL1.className = `but b1${i}`;
      result.push(butL1)
    //   butL1.setAttribute ('data-len', 'now `')
    }
    return result;
  }
  document.querySelector(".key-board > div:nth-child(1)").append(...getButLine1())

  function getButLine2() {
    let result = []
      for(let i=0; i<15; i++) {
      let butL2 = document.createElement('div');
      butL2.className = `but b2${i}`;
      result.push(butL2)
    //   butL1.setAttribute ('data-len', 'now `')
    }
    return result;
  }
  document.querySelector(".key-board > div:nth-child(2)").append(...getButLine2())

  function getButLine3() {
    let result = []
      for(let i=0; i<13; i++) {
      let butL3 = document.createElement('div');
      butL3.className = `but b3${i}`;
      result.push(butL3)
    //   butL1.setAttribute ('data-len', 'now `')
    }
    return result;
  }
  document.querySelector(".key-board > div:nth-child(3)").append(...getButLine3())

  function getButLine4() {
    let result = []
      for(let i=0; i<14; i++) {
      let butL4 = document.createElement('div');
      butL4.className = `but b4${i}`;
      result.push(butL4)
    //   butL1.setAttribute ('data-len', 'now `')
    }
    return result;
  }
  document.querySelector(".key-board > div:nth-child(4)").append(...getButLine4())

  function getButLine5() {
    let result = []
      for(let i=0; i<9; i++) {
      let butL5 = document.createElement('div');
      butL5.className =`but b5${i}`;
      result.push(butL5)
    //   butL1.setAttribute ('data-len', 'now `')
    }
    return result;
  }
  document.querySelector(".key-board > div:nth-child(5)").append(...getButLine5())

  document.querySelector(".b10").innerHTML= "<p>~</p> <p>`</p>"
  document.querySelector(".b11").innerHTML= "<p>!</p> <p>1</p>"
  document.querySelector(".b12").innerHTML= "<p>@</p> <p>2</p>"
  document.querySelector(".b13").innerHTML= "<p>#</p> <p>3</p>"
  document.querySelector(".b14").innerHTML= "<p>$</p> <p>4</p>"
  document.querySelector(".b15").innerHTML= "<p>%</p> <p>5</p>"
  document.querySelector(".b16").innerHTML= "<p>:</p> <p>6</p>"
  document.querySelector(".b17").innerHTML= "<p>?</p> <p>7</p>"
  document.querySelector(".b18").innerHTML= "<p>*</p> <p>8</p>"
  document.querySelector(".b19").innerHTML= "<p>(</p> <p>9</p>"
  document.querySelector(".b110").innerHTML= "<p>)</p> <p>0</p>"
  document.querySelector(".b111").innerHTML= "<p>_</p> <p>-</p>"
  document.querySelector(".b112").innerHTML= "<p>+</p> <p>=</p>"
  document.querySelector(".b113").innerHTML= "<p>&#8592</p>"


  document.querySelector(".b20").innerHTML= "<p>Tab</p>"
  document.querySelector(".b21").innerHTML= "<p>Q</p>"
  document.querySelector(".b21 > p").setAttribute('data-i18', 'Q')
  document.querySelector(".b22").innerHTML= "<p>W</p>"
  document.querySelector(".b22 > p").setAttribute('data-i18', 'W')
  document.querySelector(".b23").innerHTML= "<p>E</p>"
  document.querySelector(".b23 > p").setAttribute('data-i18', 'E')
  document.querySelector(".b24").innerHTML= "<p>R</p>"
  document.querySelector(".b24 > p").setAttribute('data-i18', 'R')
  document.querySelector(".b25").innerHTML= "<p>T</p>"
  document.querySelector(".b25 > p").setAttribute('data-i18', 'T')
  document.querySelector(".b26").innerHTML= "<p>Y</p>"
  document.querySelector(".b26 > p").setAttribute('data-i18', 'Y')
  document.querySelector(".b27").innerHTML= "<p>U</p>"
  document.querySelector(".b27 > p").setAttribute('data-i18', 'U')
  document.querySelector(".b28").innerHTML= "<p>I</p>"
  document.querySelector(".b28 > p").setAttribute('data-i18', 'I')
  document.querySelector(".b29").innerHTML= "<p>O</p>"
  document.querySelector(".b29 > p").setAttribute('data-i18', 'O')
  document.querySelector(".b210").innerHTML= "<p>P</p>"
  document.querySelector(".b210 > p").setAttribute('data-i18', 'P')
  document.querySelector(".b211").innerHTML= "<p>[</p>"
  document.querySelector(".b211 > p").setAttribute('data-i18', '[')
  document.querySelector(".b212").innerHTML= "<p>]</p>"
  document.querySelector(".b212 > p").setAttribute('data-i18', ']')
  document.querySelector(".b213").innerHTML= "<p>/</p> <p>\\</p>"
  document.querySelector(".b214").innerHTML= "<p>DEL</p>"

  document.querySelector(".b30").innerHTML= "<p>Caps lock</p>"
  document.querySelector(".b31").innerHTML= "<p>A</p>"
  document.querySelector(".b31 > p").setAttribute('data-i18', 'A')
  document.querySelector(".b32").innerHTML= "<p>S</p>"
  document.querySelector(".b32 > p").setAttribute('data-i18', 'S')
  document.querySelector(".b33").innerHTML= "<p>D</p>"
  document.querySelector(".b33 > p").setAttribute('data-i18', 'D')
  document.querySelector(".b34").innerHTML= "<p>F</p>"
  document.querySelector(".b34 > p").setAttribute('data-i18', 'F')
  document.querySelector(".b35").innerHTML= "<p>G</p>"
  document.querySelector(".b35 > p").setAttribute('data-i18', 'G')
  document.querySelector(".b36").innerHTML= "<p>H</p>"
  document.querySelector(".b36 > p").setAttribute('data-i18', 'H')
  document.querySelector(".b37").innerHTML= "<p>J</p>"
  document.querySelector(".b37 > p").setAttribute('data-i18', 'J')
  document.querySelector(".b38").innerHTML= "<p>K</p>"
  document.querySelector(".b38 > p").setAttribute('data-i18', 'K')
  document.querySelector(".b39").innerHTML= "<p>L</p>"
  document.querySelector(".b39 > p").setAttribute('data-i18', 'L')
  document.querySelector(".b310").innerHTML= "<p>;</p>"
  document.querySelector(".b310 > p").setAttribute('data-i18', ';')
  document.querySelector(".b311").innerHTML= "<p>'</p>"
  document.querySelector(".b311 > p").setAttribute('data-i18', '\'')
  document.querySelector(".b312").innerHTML= "<p>Enter</p>"


  document.querySelector(".b40").innerHTML= "<p>Shift</p>"
  document.querySelector(".b41").innerHTML= "<p>\\</p>"
  document.querySelector(".b42").innerHTML= "<p>Z</p>"
  document.querySelector(".b42 > p").setAttribute('data-i18', 'Z')
  document.querySelector(".b43").innerHTML= "<p>X</p>"
  document.querySelector(".b43 > p").setAttribute('data-i18', 'X')
  document.querySelector(".b44").innerHTML= "<p>C</p>"
  document.querySelector(".b44 > p").setAttribute('data-i18', 'C')
  document.querySelector(".b45").innerHTML= "<p>V</p>"
  document.querySelector(".b45 > p").setAttribute('data-i18', 'V')
  document.querySelector(".b46").innerHTML= "<p>B</p>"
  document.querySelector(".b46 > p").setAttribute('data-i18', 'B')
  document.querySelector(".b47").innerHTML= "<p>N</p>"
  document.querySelector(".b47 > p").setAttribute('data-i18', 'N')
  document.querySelector(".b48").innerHTML= "<p>M</p>"
  document.querySelector(".b48 > p").setAttribute('data-i18', 'M')
  document.querySelector(".b49").innerHTML= "<p>,</p>"
  document.querySelector(".b49 > p").setAttribute('data-i18', ',')
  document.querySelector(".b410").innerHTML= "<p>.</p>"
  document.querySelector(".b410 > p").setAttribute('data-i18', '.')
  document.querySelector(".b411").innerHTML= "<p>/</p>"
  document.querySelector(".b412").innerHTML= "<p>&#9650</p>"
  document.querySelector(".b413").innerHTML= "<p>Shift</p>"

  document.querySelector(".b50").innerHTML= "<p>Ctrl</p>"
  document.querySelector(".b51").innerHTML= "<p>Win</p>"
  document.querySelector(".b52").innerHTML= "<p>Alt</p>"
  document.querySelector(".b53").innerHTML= "<p></p>"
  document.querySelector(".b54").innerHTML= "<p>Alt</p>"
  document.querySelector(".b55").innerHTML= "<p>Ctrl</p>"
  document.querySelector(".b56").innerHTML= "<p>&#9664</p>"
  document.querySelector(".b57").innerHTML= "<p>&#9660</p>"
  document.querySelector(".b58").innerHTML= "<p>&#9654</p>"

   
  let whatCapslock=['Up','Down']
  let CapsCur=whatCapslock[0]

  document.addEventListener('keyup', function (event) {  
    console.log(document.querySelector(arrCode[event.code]).classList[1]==='b30')
    if(document.querySelector(arrCode[event.code]).classList[1]==='b30'){
        if (CapsCur===whatCapslock[0]) {
            CapsCur=whatCapslock[1]
        } else {CapsCur=whatCapslock[0]}
        console.log(CapsCur)
    }
  })

 document.addEventListener('click', function (event) {  
    if (event.target.classList[1]==='b30'){
        if (CapsCur===whatCapslock[0]) {
            CapsCur=whatCapslock[1]
        } else {CapsCur=whatCapslock[0]}
        console.log(CapsCur)
        return
    }  
  })


 let bannedArr = ["b113", "b20", "b214", "b30", "b312", "b40", "b413", "b412","b50", "b51", "b52", "b53", "b54", "b55", "b56", "b57", "b58"]
  
 let dublButArr = ["b10", "b11", "b12", "b13", "b14", "b15", "b16", "b17","b18", "b19", "b110", "b111", "b112", "b113", "b213" ]

 let arrCode = {
    Digit0:".b110",
    Digit1:".b11",
    Digit2:".b12",
    Digit3:".b13",
    Digit4:".b14",
    Digit5:".b15",
    Digit6:".b16",
    Digit7:".b17",
    Digit8:".b18",
    Digit9:".b19",
    Minus:".b111",
    Equal:".b112",
    Backspace:".b113",
    Backquote:".b10",
    Tab:".b20",
    KeyQ:".b21",
    KeyW:".b22",
    KeyE:".b23",
    KeyR:".b24",
    KeyT:".b25",
    KeyY:".b26",
    KeyU:".b27",
    KeyI:".b28",
    KeyO:".b29",
    KeyP:".b210",
    BracketLeft:".b211",
    BracketRight:".b212",
    Backslash:".b213",
    Delete:".b214",
    CapsLock:".b30",
    KeyA:".b31",
    KeyS:".b32",
    KeyD:".b33",
    KeyF:".b34",
    KeyG:".b35",
    KeyH:".b36",
    KeyJ:".b37",
    KeyK:".b38",
    KeyL:".b39",
    Semicolon:".b310",
    Quote:".b311",
    Enter:".b312",
    ShiftLeft:".b40",
    IntlBackslash:".b41", 
    KeyZ:".b42",
    KeyX:".b43",
    KeyC:".b44",
    KeyV:".b45",
    KeyB:".b46",
    KeyN:".b47",
    KeyM:".b48",
    Comma:".b49",
    Period:".b410",  
    Slash:".b411", 
    ArrowUp:".b412",
    ShiftRight:".b413",
    ControlLeft:".b50",
    MetaLeft:".b51",
    AltLeft:".b52",
    Space:".b53",
    AltRight:".b54",
    ControlRight:".b55",
    ArrowLeft:".b56",
    ArrowDown:".b57",
    ArrowRight:".b58",
}

import i18Obj from './translate.js';
const objectData = document.querySelectorAll('[data-i18]');

let lang=['en','ru']
let langCur=lang[0]

function switcherLang() {            
      if (langCur===lang[0]) {
          langCur=lang[1]
          document.querySelector(".b10").innerHTML= "<p>Ё</p>"
          document.querySelector(".b10 > p").className='leftUp'
      } else {
      langCur=lang[0]
      document.querySelector(".b10").innerHTML= "<p>~</p> <p>`</p>"
      document.querySelector(".b10 > p:nth-child(1)").className='leftUp'
      document.querySelector(".b10 > p:nth-child(2)").className='align-centr'
      }
      console.log(langCur)
      objectData.forEach((el)=> {el.textContent = i18Obj[langCur][el.dataset.i18];
    });
    }
    

    function setterCurrentLang(langCur) {            
      if (langCur===lang[1]) {
          document.querySelector(".b10").innerHTML= "<p>Ё</p>"
          document.querySelector(".b10 > p").className='leftUp'
          objectData.forEach((el)=> {el.textContent = i18Obj[langCur][el.dataset.i18];
          });
      } else {
      langCur=lang[0]
      document.querySelector(".b10").innerHTML= "<p>~</p> <p>`</p>"
      document.querySelector(".b10 > p:nth-child(1)").className='leftUp'
      document.querySelector(".b10 > p:nth-child(2)").className='align-centr'
      }
      console.log(langCur)
      objectData.forEach((el)=> {el.textContent = i18Obj[langCur][el.dataset.i18];
    });
    }
    setterCurrentLang(langCur)


  document.querySelectorAll("p:nth-child(1)").forEach(e=>e.className='leftUp')
  
  document.querySelectorAll("p:nth-child(2)").forEach(e=>e.className='align-centr')

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Tab' || event.key === 'Alt' || event.key==='Meta') {
        event.preventDefault()}
    document.querySelector(arrCode[event.code]).classList.add('rrr')
    DispText.focus()
  });
  
  function chengerLangLeft(func, ...codes) {
    let pressed = new Set();
    document.addEventListener('keydown', function() {
      pressed.clear();
    });
    document.addEventListener('keyup', function(event) {
      
        pressed.add(document.querySelector(arrCode[event.code]).classList[1]);
        if (pressed.size==2){for (let code of codes) { 
            if (!pressed.has(code)) {
              return;
            }
          }
          pressed.clear();
          func();}
    });
  }

  chengerLangLeft(
    switcherLang,
    "b40",
    "b50"
  );


  function chengerLangRight(func, ...codes) {
    let pressed = new Set();
    document.addEventListener('keydown', function() {
      pressed.clear();
    });
    document.addEventListener('keyup', function(event) {
        pressed.add(document.querySelector(arrCode[event.code]).classList[1]);
        if (pressed.size==2){for (let code of codes) { 
            if (!pressed.has(code)) {
              return;
            }
          }
          pressed.clear();
          func();}
    });
  }

  chengerLangRight(
    switcherLang,
    "b413",
    "b55"
  );


  document.addEventListener('keyup', function(event) {
    if (document.querySelector(arrCode[event.code]).classList.contains('rrr')) {
      document.querySelector(arrCode[event.code]).classList.remove('rrr')
      DispText.focus()
    }   
  });

  document.addEventListener('mousedown', function(event) {
    if (event.target.classList.contains('but')) {
        event.target.classList.add('rrr')
    }
    if (event.target.closest('.but')) {
        event.target.closest('.but').classList.add('rrr')
    }
  });

  document.addEventListener('mouseup', function(event) {
    
    if (event.target.classList.contains('but')) {
        event.target.classList.remove('rrr')
    }
    if (event.target.closest('.but')) {
        event.target.closest('.but').classList.remove('rrr')
    }
  });


  document.addEventListener('mousedown', function(event) {
    if (event.target.classList.contains('but')) {
        if (event.target.classList[1]==='b40' || event.target.classList[1]==='b413') {
            event.target.classList.add('downShift')
        }
    }
    if (event.target.closest('.but')) {
        if (event.target.classList[1]==='b40' || event.target.classList[1]==='b413') {
            event.target.classList.add('downShift')
        }
    }
  });

  document.addEventListener('mouseup', function(event) {
    
    if (event.target.classList.contains('but')) {
        if (event.target.classList[1]==='b40' || event.target.classList[1]==='b413') {
            event.target.classList.remove('downShift')
        }
    }
    if (event.target.closest('.but')) {
        if (event.target.classList[1]==='b40' || event.target.classList[1]==='b413') {
            event.target.classList.remove('downShift')
        }
    }
  });


  function addDownShift (event){
      if (document.querySelector(arrCode[event.code]).classList[1]==='b40'||document.querySelector(arrCode[event.code]).classList[1]==='b413'){
        document.querySelector(arrCode[event.code]).classList.add('downShift')
      }
  }
  document.addEventListener('keydown', addDownShift)

  function removeDownShift (event){
      if (document.querySelector(arrCode[event.code]).classList[1]==='b40'||document.querySelector(arrCode[event.code]).classList[1]==='b413'){
        document.querySelector(arrCode[event.code]).classList.remove('downShift')
      }
  }
  document.addEventListener('keyup', removeDownShift)


function writeText (ev){
    if (!bannedArr.includes(ev.target.closest('.but').classList[1]) && !dublButArr.includes(ev.target.closest('.but').classList[1])){
        if (CapsCur===whatCapslock[0] && (document.querySelector('.b40').classList.contains('downShift'))) {
            DispText.setRangeText(ev.target.closest('.but').querySelector(" p.leftUp").innerHTML.toLowerCase(), DispText.selectionStart, DispText.selectionEnd, "end")
           }
        if (CapsCur===whatCapslock[1] && (document.querySelector('.b40').classList.contains('downShift'))) {
            DispText.setRangeText(ev.target.closest('.but').querySelector(" p.leftUp").innerHTML, DispText.selectionStart, DispText.selectionEnd, "end")
           }
        if(CapsCur===whatCapslock[0] && (!document.querySelector('.b40').classList.contains('downShift'))){
            DispText.setRangeText(ev.target.closest('.but').querySelector(" p.leftUp").innerHTML, DispText.selectionStart, DispText.selectionEnd, "end")
        } 
        if (CapsCur===whatCapslock[1] && (!document.querySelector('.b40').classList.contains('downShift'))) {
            DispText.setRangeText(ev.target.closest('.but').querySelector(" p.leftUp").innerHTML.toLowerCase(), DispText.selectionStart, DispText.selectionEnd, "end")
         }
    } if (!bannedArr.includes(ev.target.closest('.but').classList[1]) && dublButArr.includes(ev.target.closest('.but').classList[1])) {
        if (document.querySelector('.b40').classList.contains('downShift') && !ev.target.closest('.but').classList.contains('b10')) {
            DispText.setRangeText(ev.target.closest('.but').querySelector(" p.leftUp").innerHTML, DispText.selectionStart, DispText.selectionEnd, "end")
           } else if (!document.querySelector('.b40').classList.contains('downShift') && !ev.target.closest('.but').classList.contains('b10')) {
                DispText.setRangeText(ev.target.closest('.but').querySelector(" p.align-centr").innerHTML, DispText.selectionStart, DispText.selectionEnd, "end")
            } else if (document.querySelector('.b40').classList.contains('downShift') && ev.target.closest('.but').classList.contains('b10') && langCur==='en') {
                DispText.setRangeText(ev.target.closest('.but').querySelector(" p.leftUp").innerHTML, DispText.selectionStart, DispText.selectionEnd, "end")
            } else if (!document.querySelector('.b40').classList.contains('downShift') && ev.target.closest('.but').classList.contains('b10') && langCur==='en') {
                DispText.setRangeText(ev.target.closest('.but').querySelector("p.align-centr").innerHTML, DispText.selectionStart, DispText.selectionEnd, "end")
            } else if (CapsCur===whatCapslock[0] && !document.querySelector('.b40').classList.contains('downShift') && ev.target.closest('.but').classList.contains('b10') && langCur==='ru') {
                DispText.setRangeText(ev.target.closest('.but').querySelector("p.leftUp").innerHTML, DispText.selectionStart, DispText.selectionEnd, "end")
            } else if (CapsCur===whatCapslock[0] && document.querySelector('.b40').classList.contains('downShift') && ev.target.closest('.but').classList.contains('b10') && langCur==='ru') {
                DispText.setRangeText(ev.target.closest('.but').querySelector("p.leftUp").innerHTML.toLowerCase(), DispText.selectionStart, DispText.selectionEnd, "end")
            } else if (CapsCur===whatCapslock[1] && document.querySelector('.b40').classList.contains('downShift') && ev.target.closest('.but').classList.contains('b10') && langCur==='ru') {
                DispText.setRangeText(ev.target.closest('.but').querySelector("p.leftUp").innerHTML, DispText.selectionStart, DispText.selectionEnd, "end")
            } else if (CapsCur===whatCapslock[1] && !document.querySelector('.b40').classList.contains('downShift') && ev.target.closest('.but').classList.contains('b10') && langCur==='ru') {
                DispText.setRangeText(ev.target.closest('.but').querySelector("p.leftUp").innerHTML.toLowerCase(), DispText.selectionStart, DispText.selectionEnd, "end")
            }
                }
}
document.querySelectorAll('.but').forEach(e=>e.addEventListener('click', writeText))

document.addEventListener('click', function(){
   DispText.focus()
})

function moveToLeftCursor(){
        DispText.selectionStart=DispText.selectionStart-1
        DispText.selectionEnd=DispText.selectionEnd-1
}
document.querySelector(".b56").addEventListener('click', moveToLeftCursor)

function moveToRightCursor(){
        DispText.selectionStart = DispText.selectionStart +1
        DispText.selectionEnd = DispText.selectionStart
}
document.querySelector(".b58").addEventListener('click', moveToRightCursor)


function deleteRenge(){
            DispText.selectionEnd=DispText.selectionEnd+1
            Disp.setRangeText('', DispText.selectionStart, DispText.selectionEnd, "end")
}
document.querySelector(".b214").addEventListener('click', deleteRenge)


function BackspaceRenge(){
          Disp.selectionStart=Disp.selectionStart-1
          Disp.setRangeText('', DispText.selectionStart, DispText.selectionEnd, "end")       
}
document.querySelector(".b113").addEventListener('click', BackspaceRenge)

function SpaseRenge(){
        DispText.setRangeText(" ", DispText.selectionStart, DispText.selectionEnd, "end")
}
document.querySelector(".b53").addEventListener('click', SpaseRenge)

function TabRenge(){
  
      DispText.setRangeText("      ", DispText.selectionStart, DispText.selectionEnd, "end")
  
}
document.querySelector(".b20").addEventListener('click', TabRenge)


function TabRengeKeyboard (event){
  if (document.querySelector(arrCode[event.code]).classList[1]==='b20'){
    DispText.setRangeText("      ", DispText.selectionStart, DispText.selectionEnd, "end")
  }
}
document.addEventListener('keydown', TabRengeKeyboard)


function ArrowUpboard (event){

  if (event.key === 'ArrowUp') {
    event.preventDefault()}
  if (document.querySelector(arrCode[event.code]).classList[1]==='b412'){
    DispText.setRangeText("\u25B2", DispText.selectionStart, DispText.selectionEnd, "end")
  }
}
document.addEventListener('keydown', ArrowUpboard)

function ArrowDownboard (event){
  if (event.key === 'ArrowDown') {
    event.preventDefault()}
  if (document.querySelector(arrCode[event.code]).classList[1]==='b57'){
    DispText.setRangeText('\u25BC', DispText.selectionStart, DispText.selectionEnd, "end")
  }
}
document.addEventListener('keydown', ArrowDownboard)


function ArrowDownboardmouse(){
      DispText.setRangeText('\u25BC', DispText.selectionStart, DispText.selectionEnd, "end")
}
document.querySelector(".b57").addEventListener('click', ArrowDownboardmouse)

function ArrowUPboardmouse(){
  
      DispText.setRangeText('\u25B2', DispText.selectionStart, DispText.selectionEnd, "end")
  
}
document.querySelector(".b412").addEventListener('click', ArrowUPboardmouse)

function EnterRenge(){
  console.log(2)
        DispText.setRangeText('\n', DispText.selectionStart, DispText.selectionEnd, "end")
}
document.querySelector(".b312").addEventListener('click', EnterRenge)

function setLocalStorage() {
    localStorage.setItem('lang', langCur);
    }
  window.addEventListener('beforeunload', setLocalStorage)
  
  function getLocalStorage() {
    if(localStorage.getItem('lang')) {
        langCur = localStorage.getItem('lang');
        setterCurrentLang(langCur)
    }
  }
  window.addEventListener('load', getLocalStorage)
