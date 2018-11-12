---
model: post
title: Competitive Programming Utilities
description: Funciones útiles que utilizo en programación competitiva.
path: competitive-programming-utilities
thumbnail: >-
  /img/https_-2f-2fcdn.evbuc.com-2fimages-2f38462400-2f173216012503-2f1-2foriginal.png
date: '2018-08-26T16:14:51-05:00'
published: true
style: medium-img
tags:
  - Competitive Programming
---
Estas son algúnas funciones utiles que cree y/o recopile para  Programacioń Competitiva, de cierta forma hay una copia de algunas funciónes de javascript, específicamente la librería string. Para todas las funciónes también tienes la complejidad en notacion **O grande**. Esperó que te sea útil.
#### String a mayúsculas ó minúsculas
```cpp
#include <algorithm>   // transform()
#include <cctype>      // toupper(), tolower()
#include <functional>  // ptr_fun()
#include <iostream>    // cin, cout
#include <string>      // getline(), string
using namespace std;

int main() {
  cout << "Enter something: " << flush;
  string s;
  getline( cin, s );

  transform( s.begin(), s.end(), s.begin(), ptr_fun <int, int> ( toupper ) );
  cout << "Uppercase: " << s << endl;

  transform( s.begin(), s.end(), s.begin(), ptr_fun <int, int> ( tolower ) );
  cout << "Lowercase: " << s << endl;

  return 0;
  }
```
