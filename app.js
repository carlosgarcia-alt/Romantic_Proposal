document.addEventListener('DOMContentLoaded', () => {
  const yes = document.getElementById('btn-si');
  const no = document.getElementById('btn-no');
  if (yes) yes.addEventListener('click', () => window.open('si.html', '_blank', 'noopener,noreferrer'));
  if (no) no.addEventListener('click', () => window.open('no.html', '_blank', 'noopener,noreferrer'));
});
