let header = document.getElementById("header")
let footer = document.getElementById("footer")

header.innerHTML = `<h1>myteam</h1>

<div class="menu_burger">
  
  <label for="checkbox"><img src="/assets/icon-hamburger.svg" alt="menu"></label>
  <input type="checkbox" id="checkbox">
  
  <nav>
    <label for="checkbox"><img src="/assets/icon-close.svg" alt="cross"></label>
    
    <ul>
      <li><a href="/home">home</a></li>
      <li><a href="/about">about</a></li>
      <li><button>contact us</button></li>
    </ul>

    <img src="/assets/bg-pattern-about-1-mobile-nav-1.svg" class="svg_bottom_right" alt="svg">
  </nav>
</div>`

footer.innerHTML += `  <article class="ready">
<h2>Ready to get started?</h2>
<button>contact us</button>

<img class="svg_bottom_left" src="/assets/bg-pattern-home-6-about-5.svg" alt="svg">
</article>

<article class="footer">
<h2>myteam</h2>
<nav>
  <ul>
    <li><a href="/home">home</a></li>
    <li><a href="/about">about</a></li>
  </ul>
</nav>
<p>
  987  Hillcrest Lane <br>
  Irvine, CA <br>
  California 92714 <br>
  Call Us : 949-833-7432 <br>
</p>

<div>
  <img src="/assets/icon-facebook.svg" alt="facebook">
  <img src="/assets/icon-pinterest.svg" alt="pinterest">
  <img src="/assets/icon-twitter.svg" alt="twitter">
</div>

<p>Copyright 2020. All Rights Reserved</p>
</article>`