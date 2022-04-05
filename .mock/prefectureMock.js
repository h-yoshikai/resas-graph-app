export const prefecturesMock = () =>
  new Promise((resolve) => {
    resolve({
      ok: true,
      status: 200,
      json: async () => ({
        message: null,
        result: [
          {
            prefCode: 1,
            prefName: "北海道",
          },
          {
            prefCode: 2,
            prefName: "青森県",
          },
          {
            prefCode: 3,
            prefName: "岩手県",
          },
        ],
      }),
    });
  });
