function printWords(dict) {
    let res = ""
    function Words(dict, part) {
      let next_dict = dict
      while (next_dict) {
        let keys = Object.keys(next_dict)
        if (keys.length === 1) {
          next_dict = next_dict[keys[0]]
          part += keys[0]
          if (!next_dict) {
            res += part + " "
            return
          }
        } else {
          for (let key of keys) {
            Words(next_dict[key], part + key)
          }
          return
        }
      }
    }
  
    Words(dict, "")
    return res.slice(0, res.length - 1)
  }