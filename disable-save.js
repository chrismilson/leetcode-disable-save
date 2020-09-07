var handler = (e) => {
  if (
    e.keyCode === 83 &&
    (e.getModifierState('Control') || e.getModifierState('Meta'))
  ) {
    console.log('Cancelled Save.');
    e.preventDefault();
    e.stopPropagation();
  }
};

document.addEventListener('keydown', handler);
