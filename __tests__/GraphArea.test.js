import { cleanup, render, screen } from "@testing-library/react";

import GraphArea from "@/src/components/GraphArea";

afterEach(cleanup);

describe("GraphArea", () => {
  test("タイトルが表示される", () => {
    render(<GraphArea series={[]} />);
    expect(screen.getByText("人口構成")).toBeTruthy();
  });
});
