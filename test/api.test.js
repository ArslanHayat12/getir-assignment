const axios = require("axios");

describe("POST/api/v1/record", () => {
  it("should return records with the status of 200", async () => {
    const result = await axios.post(
      "http://localhost:3000/api/v1/record",
      JSON.stringify({
        startDate: "2016-01-26",
        endDate: "2018-02-02",
        minCount: 2700,
        maxCount: 3000,
      })
    );
    expect(result.status).toEqual(200);
    expect(result.data).toMatchObject({
      code: 0,
      msg: "SUCCESS",
    });
  });
});
