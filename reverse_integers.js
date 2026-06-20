var reverse = function(x) {
    let rev=0;
    while(x!==0){
        let pop=x%10;
        x=(x/10)|0;
        rev=rev*10+pop;
    }
    if((rev|0) !== rev){
        return 0;
    }
    return rev;
};