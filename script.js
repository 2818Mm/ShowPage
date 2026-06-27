const img = document.getElementById('mainImage');
const info = document.getElementById('info');

img.addEventListener('load', () => {
  info.textContent = `图片加载成功 — 尺寸: ${img.naturalWidth} × ${img.naturalHeight}`;
});

img.addEventListener('error', () => {
  info.textContent = '图片加载失败，请检查文件路径';
});

img.addEventListener('click', () => {
  img.classList.toggle('zoomed');
});
