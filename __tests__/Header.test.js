import { cleanup, render, screen } from "@testing-library/react";

import Header from "@/src/components/Header";

afterEach(cleanup);

describe("Header", () => {
  test("ヘッダーのタイトルが表示される", () => {
    render(<Header />);
    expect(screen.getByText("都道府県ごとの人口構成")).toBeTruthy();
  });
});
