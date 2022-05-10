const jobScheduling = function(startTime, endTime, profit) {

    const jobs = [];
    for (let index = 0; index < profit.length; index++) {
        jobs.push( new Job(startTime[index], endTime[index], profit[index]) );
    }

};

class Job {
    #start;
    #end;
    #profit = 0;

    constructor(start, end, profit) {
        this.#start = start;
        this.#end = end;
        this.#profit = profit;
    }
}