namespace SomeNS { export someFund2() { } }

namespace SomeNS {
  export namespace InnerNS {
    export someFunc() { }
  }
}
SomeNS.InnerNS.someFunc();