const sequence = ({ add, double }) => { 

    class CurObj {
      constructor(num) {
        this.num = num
      }

      add(a, b = this.num) {
        let NewNum = add(a, b)
        return new CurObj(NewNum)
      }

      double() {
        let NewNum = double(this.num)
        return  new CurObj(NewNum)
      }

      calculate() {
        return this.num
      }
    }

    return new CurObj(0)
};
