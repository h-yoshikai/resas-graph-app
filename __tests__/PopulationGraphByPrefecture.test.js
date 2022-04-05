import { cleanup, render, screen } from "@testing-library/react";

import { prefecturesMock } from "@/.mock/prefectureMock";
import PopulationGraphByPrefecture from "@/src/components/PopulationGraphByPrefecture";

afterEach(() => {
  global.fetch.mockReset();
  cleanup();
});
afterAll(() => {
  global.fetch.mockClear();
});

describe("PopulationGraphByPrefecture", () => {
  test("都道府県一覧とグラフエリアが表示される", async () => {
    global.fetch = jest.fn().mockImplementation(prefecturesMock);
    render(<PopulationGraphByPrefecture />);
    expect(screen.getByText("Loading...")).toBeTruthy();
    expect(screen.queryByText("都道府県一覧")).toBeNull();
    expect(screen.getByText("人口構成")).toBeTruthy();

    expect(await screen.findByText("都道府県一覧")).toBeTruthy();
    expect(screen.findByText("北海道")).toBeTruthy();
    expect(screen.findByText("青森県")).toBeTruthy();
    expect(screen.findByText("岩手県")).toBeTruthy();
  });
});
