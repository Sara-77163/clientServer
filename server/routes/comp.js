const express = require("express")
const router = express.Router()
router.get("/:Calculation/:N", (req, res) => {
    const { Calculation, N } = req.params
    let number = [];
    if (Calculation === "primes") {
        for (let i = 2; i <= N; i++)
         {
            let flag = false
            const sqrt=Math.sqrt(i)
            for (let j = 2; j <= sqrt; j++) {
                console.log(i , j,i % j)
                if (i % j === 0)
                {
                   
                    flag = true
                }
                    
            }
            if (flag===false)
            {
                number.push(i)
            }
                
        }
    }
    if (Calculation === "factorial") {
        let res = 1;
        for (let i = 1; i <= N; i++) {
            res *= i
        }
        number.push(res)
    }
    res.json(number)
})
module.exports = router