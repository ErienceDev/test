const express = require("express");
const app = express();
const Binance = require("binance-api-node").default;
const current_time = Date.now();

const client = Binance({
  apiKey: "0d1e94b104dd54fde98dec9a83f8916b1af3daa0c81c8c754b59ce3d62c8a00a",
  apiSecret: "fd6302c060bdf02d8c5e369cc433eb802f6fa09b22317ae1a113f5ff86c40841",
  getTime: function () {
    return Date.now();
  },
  httpBase: "https://testnet.binancefuture.com",
  httpFutures: "https://testnet.binancefuture.com/fapi/v1/",
  wsFutures: "wss://stream.binancefuture.com",
});

app.get("/", async function (req, res) {
  console.log(
    await client.order({
      symbol: "BTCUSDT",
      side: "BUY",
      type: "MARKET",
      positionSide: "BOTH",
      quantity: "1",
      price: "22360",
    })
  );

  // client.ws.ticker("BTCUSDT", async (ticker) => {
  //   console.log("ticker", ticker);
  //   console.log("Future ping", await client.futuresPing());
  //   console.log("Future Book", await client.futuresBook({ symbol: "BTCUSDT" }));
  //   console.log("candles", await client.futuresCandles({ symbol: "BTCUSDT" }));
  // });

  res.send("Hello World");
});

app.get("/buy", async function (req, res) {
  res.send("Hello Bhavik");
});

app.listen(8080);
