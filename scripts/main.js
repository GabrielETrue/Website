for (let i = 0; i < 20; i++) {
  let star = document.createElement('div');
  star.className = 'particle';
  star.style.left = Math.random() * 100 + 'vw';
  star.style.top = Math.random() * 100 + 'vh';
  document.body.appendChild(star);
}