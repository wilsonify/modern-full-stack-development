
/// <reference path="file1.ts" />
/// <reference path="file2.ts" />
import h = MyFirstNamespace.homeworld;
SomeNS.someFunc1();
SomeNS.someFunc2();

import sf = SomeNS.InnerNS.someFunc;
sf();