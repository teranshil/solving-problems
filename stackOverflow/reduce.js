
const problem = () => {

     const bowlData = [{ season: 2001, econ: '30' }, { season: 2001, econ: '40' }, { season: 2001, econ: '50' },
         { season: 2001, econ: '60' }, { season: 2002, econ: '30' }, { season: 2002, econ: '40' },
         { season: 2002, econ: '50' }, { season: 2003, econ: '60' }, { season: 2003, econ: '30' },
         { season: 2003, econ: '40' }, { season: 2003, econ: '50' }, { season: 2003, econ: '60' }];

        const economy = bowlData.reduce((a, { season, econ }) => {


            a[season] = a[season] || { sum: 0, count: 0 };
            a[season].sum += +econ;
            a[season].average = a[season].sum / ++a[season].count;

            return a;
        }, Object.create(null));

       const nice = Object.assign(...Object
            .entries(economy)
            .map(([k, { average }]) => ({ [k]: average }))
        );

    console.log(nice);
    console.log(economy);

}

Math.sum = (...a) => Array.prototype.reduce.call(a,(a, b) => a + b);
console.log(Math.sum(...[]));