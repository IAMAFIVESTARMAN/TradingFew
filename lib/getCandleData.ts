const getCandleData = async (timeDuration: string, section = "hist") => {
  // console.log(timeDuration);
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BITFINEXAPI_URL}trade:${timeDuration}:tBTCUSD/${section}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
      }
    );

    if (res.ok) {
      const data = await res.json();

      return data;
    }
  } catch (err) {
    return err;
  }
};

export default getCandleData;
