import { cleanup, render, screen } from "@testing-library/react";
import { SWRConfig } from "swr";
import "@testing-library/jest-dom";

import { prefecturesMock } from "@/.mock/prefectureMock";
import SelectPrefectureArea from "@/src/components/SelectPrefectureArea";

afterEach(() => {
  global.fetch.mockReset();
  cleanup();
});
afterAll(() => {
  global.fetch.mockClear();
});

describe("SelectPrefectureArea_Success", () => {
  test("タイトルと都道府県が表示される", async () => {
    global.fetch = jest.fn().mockImplementation(prefecturesMock);
    render(<SelectPrefectureArea />);
    expect(screen.getByText("Loading...")).toBeTruthy();
    expect(screen.queryByText("都道府県一覧")).toBeNull();
    expect(await screen.findByText("都道府県一覧")).toBeTruthy();
    expect(await screen.findByText("北海道")).toBeTruthy();
    expect(await screen.findByText("青森県")).toBeTruthy();
    expect(await screen.findByText("岩手県")).toBeTruthy();
  });
  test("エラーが表示される", async () => {
    const testMiddleware = () => {
      return () => {
        return {
          data: undefined,
          error: new Error(),
          mutate: (_) => Promise.resolve(),
          isValidating: false,
        };
      };
    };
    render(
      <SWRConfig value={{ use: [testMiddleware] }}>
        <SelectPrefectureArea />
      </SWRConfig>
    );
    expect(await screen.findByText("error")).toBeTruthy();
  });
});
