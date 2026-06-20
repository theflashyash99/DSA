// Problem Statement

// Given an array prices where:

// prices[i]

// represents the stock price on day i, find the maximum profit possible by buying once and selling once.

// Conditions:

// Buy before selling
// If no profit is possible, return 0

// Example:

// Input: [7,1,5,3,6,4]
// Output: 5

// Explanation:

// Buy at price 1
// Sell at price 6
// Profit = 6 - 1 = 5



var maxProfit = function(prices) {
    let min = prices[0];
    let maxProfit = 0;

    for (let  i = 0 ; i< prices.length ; i++){
        if(prices[i]-min> maxProfit){
            maxProfit = prices[i]-min
        }

        if(prices[i]<min){
            min=prices[i]
        }
    }
    return maxProfit;
};