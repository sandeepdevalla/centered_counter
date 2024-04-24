import { expect, test } from 'vitest';
import { update_count } from "./main.ts";

test("render should write hello, world in the app element", () => {
    document.body.innerHTML = `
    <html>
      <body>
        <span class="current_count">
          0
        </span>
      </body>
    </html>
  `;
    update_count();

    const count = document.querySelector(".current_count");

    expect(count?.innerHTML).toBe("1");
});