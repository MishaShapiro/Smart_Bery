function regulator(func, interval, context) {

    let text = ""
    let old_text = ""
    let next = true
  
    setInterval(() => {
      if (old_text !== text) {
        func.call(context, `logged ${text}`)
        old_text = text
      }
    }, interval);
  
    const int = (txt) => {
      if (next) {
        setTimeout(() => {
          func.call(context, `logged ${text}`)
        }, 0);
        next = false 
      }
      text = txt
    }
  
    return int
  }