function printWords(dict) {
    let res = ""
    
    function Finder(dict, tempRes) {
        for (let key in dict) {
            if (dict[key]) {
                Finder(dict[key], tempRes + key)
            } else {
                res += tempRes + key + " "
                return
            }
        }
    }

    Finder(dict, "")
    return res.slice(0, res.length - 1)
}