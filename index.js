import { parse } from 'csv-parse';
import fs from 'fs';

const results = [];

fs.createReadStream("kepler_data.csv")
    .pipe(parse({
        comment: "#",
        columns: true,
    }))
    .on("data", (data) => {
        results.push(data)
    })
    .on("end", () => {
        console.log(results)
        console.log("Done")
    })
    .on("error", (err)=>{
        console.log(err)
    })
    ;