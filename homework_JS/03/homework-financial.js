const financialData = require("./financial.json");

console.log("Financial data: " + getFiancialObject());

function getFiancialObject() {
  // TODO (create functions for calculations below)
  /// EX1 ///
  const sum = financialData
    .filter((cur) => {
      if (Number(cur.detailsOfPayent.date.split(`-`)[2]) === 2014) {
        return true;
      }
    })
    .reduce((acc, cur) => {
      return acc + Number(cur.cost);
    }, 0);

  /// EX2 ///
  const sumPerCompany = Object.entries(
    financialData.reduce((acc, cur) => {
      acc[cur.detailsOfPayent.company] =
        acc[cur.detailsOfPayent.company] + Number(cur.cost) || Number(cur.cost);
      return acc;
    }, {})
  );

  /// EX3 ///
  const sumPerType = Object.entries(
    financialData.reduce((acc, cur) => {
      acc[cur.detailsOfPayent.Type] =
        acc[cur.detailsOfPayent.Type] + Number(cur.cost) || Number(cur.cost);
      return acc;
    }, {})
  );

  /// EX4 ///
  // CONVERT YEAR //
  const dataConvert = Object(
    financialData.map((cur) => ({
      date: new Date(
        cur.detailsOfPayent.date.split(`-`).reverse().join(`-`)
      ).getMonth(),
      ...cur,
    }))
  );
  // SUM //
  const sumPerMonth = dataConvert.reduce((acc, cur) => {
    acc[cur.detailsOfPayent.date] =
      acc[cur.detailsOfPayent.date] + Number(cur.cost) || Number(cur.cost);
    return acc;
  }, {});

  // EX5 //
  const sumPerDay = Object.entries(
    financialData
      .map(({ cost, detailsOfPayent }) => {
        const weekdayName = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        // SWAP YEAR AND GET DAY
        const [dd, mm, yyyy] = detailsOfPayent.date.split("-");
        let dayIndex = new Date([yyyy, mm, dd].join(`-`)).getDay();
        let dayName;
        weekdayName.forEach((element, i) => {
          if (i === dayIndex) dayName = element;
        });
        return { cost, dayName };
      })
      .reduce((acc, currDay) => {
        acc[currDay.dayName] =
          acc[currDay.dayName] + Number(currDay.cost) || Number(currDay.cost);
        return acc;
      }, {})
  );
  //   let test;
  // ley sumPerDay = Object.entries(sumPerDay);
  /// RESULTS ///
  const financialObject = {
    sum,
    sumPerCompany,
    sumPerType,
    sumPerMonth,
    sumPerDay,
  };
  return Object.entries(financialObject);
}

// TODO (util functions)
console.log(getFiancialObject());
console.log(``);
