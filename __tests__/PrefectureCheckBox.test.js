import { cleanup, render, screen } from "@testing-library/react";

import PrefectureCheckBox from "@/src/components/PrefectureCheckBox";

afterEach(cleanup);

describe("PrefectureCheckBox", () => {
  test("都道府県名が表示される", () => {
    render(<PrefectureCheckBox prefCode="1" prefName="北海道" />);
    expect(screen.getByText("北海道")).toBeTruthy();
  });
});
