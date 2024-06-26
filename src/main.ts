import { factory } from './factory';

let start = 0;
let step = 1;
let count = factory(start, step);
function update_count_and_reset_counter() {
  count = factory(start, step);
}

const start_at_control = document.getElementById(
  'start_at',
) as HTMLInputElement;

const step_control = document.getElementById('step') as HTMLInputElement;

start_at_control?.addEventListener('change', e => {
  start = Number(e?.target?.value || 0);
  update_count_and_reset_counter();
});

step_control?.addEventListener('change', e => {
  step = Number(e?.target?.value || 1);
  update_count_and_reset_counter();
});

const count_button = document.querySelector(
  '.count_button',
) as HTMLButtonElement;

export function update_count() {
  const current_count = document.querySelector(
      '.current_count',
  ) as HTMLSpanElement;
  current_count.innerHTML = count() + '';
}

count_button?.addEventListener('click', update_count);
