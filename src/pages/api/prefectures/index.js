const getPrefectures = async (req, res) => {
  const response = await fetch(
    "https://opendata.resas-portal.go.jp/api/v1/prefectures",
    { headers: { "X-API-KEY": process.env.API_KEY } }
  );
  const data = await response.json();
  return res.status(200).json(data);
};

export default getPrefectures;
