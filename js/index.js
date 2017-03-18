$(document).ready(function() {
  $("#0").click(function() {
    if (parseInt(document.getElementById("otvet").innerHTML) == 0) {
      document.getElementById("otvet").innerHTML = 0;
    } else {
      if (document.getElementById("otvet").innerHTML == "+" || document.getElementById("otvet").innerHTML == "x" || document.getElementById("otvet").innerHTML == "-" || document.getElementById("otvet").innerHTML == "/") {

      } else {
        if (parseInt(document.getElementById("otvet").innerHTML) <= 99999999999 && parseInt(document.getElementById("otvet").innerHTML) >= -99999999999) {
          document.getElementById("otvet").innerHTML = document.getElementById("otvet").innerHTML + "0";
        } else {
          document.getElementById("otvet").innerHTML = 0;
          document.getElementById("otvetvnizu").innerHTML = "Digit Limit Met";
          k = 1;
        };
        if (parseInt(document.getElementById("otvetvnizu").innerHTML) == 0) {
          document.getElementById("otvetvnizu").innerHTML = 0;
        } else {
          if (parseInt(document.getElementById("otvet").innerHTML) <= 99999999999 && parseInt(document.getElementById("otvet").innerHTML) > -99999999999) {
            if (document.getElementById("otvetvnizu").innerHTML !== "Digit Limit Met") {
              document.getElementById("otvetvnizu").innerHTML = document.getElementById("otvetvnizu").innerHTML + "0";
            }
          }
        };
      };
    }
  });
  $("#9").click(function() {
    //Proverka chasti vverhu
    if (String(document.getElementById("otvetvnizu").innerHTML).length < 36) {
      if (parseInt(document.getElementById("otvet").innerHTML) == 0) {
        document.getElementById("otvet").innerHTML = 9;
      } else {
        if (document.getElementById("otvet").innerHTML !== "/" && document.getElementById("otvet").innerHTML !== "X" && document.getElementById("otvet").innerHTML !== "-" && document.getElementById("otvet").innerHTML !== "+") {
          if (parseFloat(document.getElementById("otvet").innerHTML) <= 999999999999 && parseFloat(document.getElementById("otvet").innerHTML) >= -99999999999) {
            document.getElementById("otvet").innerHTML = document.getElementById("otvet").innerHTML + "9";
          } else {
            document.getElementById("otvet").innerHTML = 0;
            document.getElementById("otvetvnizu").innerHTML = "Digit Limit Met";
            k = 0;
          }
        }
        if (document.getElementById("otvet").innerHTML == "/" || document.getElementById("otvet").innerHTML == "X" || document.getElementById("otvet").innerHTML == "-" || document.getElementById("otvet").innerHTML == "+") {
          document.getElementById("otvet").innerHTML = 9;
        }
      };
      //Otvet vnizu chast proverki
      if (parseInt(document.getElementById("otvetvnizu").innerHTML) == 0) {
        document.getElementById("otvetvnizu").innerHTML = 9;
      } else {
        if (document.getElementById("otvetvnizu").innerHTML !== "/" && document.getElementById("otvetvnizu").innerHTML !== "X" && document.getElementById("otvetvnizu").innerHTML !== "-" && document.getElementById("otvetvnizu").innerHTML !== "+") {
          if (document.getElementById("otvetvnizu").innerHTML !== "Digit Limit Met") {
            if (parseInt(document.getElementById("otvet").innerHTML) <= 9999999999999 && parseInt(document.getElementById("otvet").innerHTML) >= -99999999999) {
              document.getElementById("otvetvnizu").innerHTML = document.getElementById("otvetvnizu").innerHTML + "9";
            }
          } else {
            if (k == 0) {
              k = 1;
            } else {
              document.getElementById("otvetvnizu").innerHTML = 9;
              k = 0;
            }
          }
        }
      }
    } else {
      document.getElementById("otvet").innerHTML = 0;
      document.getElementById("otvetvnizu").innerHTML = "Digit Limit Met";
      k = 1;
    }
  });
  $("#8").click(function() {
    //Proverka chasti vverhu
    if (String(document.getElementById("otvetvnizu").innerHTML).length < 36) {
      if (parseInt(document.getElementById("otvet").innerHTML) == 0) {
        document.getElementById("otvet").innerHTML = 8;
      } else {
        if (document.getElementById("otvet").innerHTML !== "/" && document.getElementById("otvet").innerHTML !== "X" && document.getElementById("otvet").innerHTML !== "-" && document.getElementById("otvet").innerHTML !== "+") {
          if (parseFloat(document.getElementById("otvet").innerHTML) <= 999999999999 && parseFloat(document.getElementById("otvet").innerHTML) >= -99999999999) {
            document.getElementById("otvet").innerHTML = document.getElementById("otvet").innerHTML + "8";
          } else {
            document.getElementById("otvet").innerHTML = 0;
            document.getElementById("otvetvnizu").innerHTML = "Digit Limit Met";
            k = 0;
          }
        }
        if (document.getElementById("otvet").innerHTML == "/" || document.getElementById("otvet").innerHTML == "X" || document.getElementById("otvet").innerHTML == "-" || document.getElementById("otvet").innerHTML == "+") {
          document.getElementById("otvet").innerHTML = 8;
        }
      };
      //Otvet vnizu chast proverki
      if (parseInt(document.getElementById("otvetvnizu").innerHTML) == 0) {
        document.getElementById("otvetvnizu").innerHTML = 8;
      } else {
        if (document.getElementById("otvetvnizu").innerHTML !== "/" && document.getElementById("otvetvnizu").innerHTML !== "X" && document.getElementById("otvetvnizu").innerHTML !== "-" && document.getElementById("otvetvnizu").innerHTML !== "+") {
          if (document.getElementById("otvetvnizu").innerHTML !== "Digit Limit Met") {
            if (parseInt(document.getElementById("otvet").innerHTML) <= 9999999999999 && parseInt(document.getElementById("otvet").innerHTML) >= -99999999999) {
              document.getElementById("otvetvnizu").innerHTML = document.getElementById("otvetvnizu").innerHTML + "8";
            }
          } else {
            if (k == 0) {
              k = 1;
            } else {
              document.getElementById("otvetvnizu").innerHTML = 8;
              k = 0;
            }
          }
        }
      }
    } else {
      document.getElementById("otvet").innerHTML = 0;
      document.getElementById("otvetvnizu").innerHTML = "Digit Limit Met";
      k = 1;
    }
  });
  $("#7").click(function() {
    //Proverka chasti vverhu
    if (String(document.getElementById("otvetvnizu").innerHTML).length < 36) {
      if (parseInt(document.getElementById("otvet").innerHTML) == 0) {
        document.getElementById("otvet").innerHTML = 7;
      } else {
        if (document.getElementById("otvet").innerHTML !== "/" && document.getElementById("otvet").innerHTML !== "X" && document.getElementById("otvet").innerHTML !== "-" && document.getElementById("otvet").innerHTML !== "+") {
          if (parseFloat(document.getElementById("otvet").innerHTML) <= 999999999999 && parseFloat(document.getElementById("otvet").innerHTML) >= -99999999999) {
            document.getElementById("otvet").innerHTML = document.getElementById("otvet").innerHTML + "7";
          } else {
            document.getElementById("otvet").innerHTML = 0;
            document.getElementById("otvetvnizu").innerHTML = "Digit Limit Met";
            k = 0;
          }
        }
        if (document.getElementById("otvet").innerHTML == "/" || document.getElementById("otvet").innerHTML == "X" || document.getElementById("otvet").innerHTML == "-" || document.getElementById("otvet").innerHTML == "+") {
          document.getElementById("otvet").innerHTML = 7;
        }
      };
      //Otvet vnizu chast proverki
      if (parseInt(document.getElementById("otvetvnizu").innerHTML) == 0) {
        document.getElementById("otvetvnizu").innerHTML = 7;
      } else {
        if (document.getElementById("otvetvnizu").innerHTML !== "/" && document.getElementById("otvetvnizu").innerHTML !== "X" && document.getElementById("otvetvnizu").innerHTML !== "-" && document.getElementById("otvetvnizu").innerHTML !== "+") {
          if (document.getElementById("otvetvnizu").innerHTML !== "Digit Limit Met") {
            if (parseInt(document.getElementById("otvet").innerHTML) <= 9999999999999 && parseInt(document.getElementById("otvet").innerHTML) >= -99999999999) {
              document.getElementById("otvetvnizu").innerHTML = document.getElementById("otvetvnizu").innerHTML + "7";
            }
          } else {
            if (k == 0) {
              k = 1;
            } else {
              document.getElementById("otvetvnizu").innerHTML = 7;
              k = 0;
            }
          }
        }
      }
    } else {
      document.getElementById("otvet").innerHTML = 0;
      document.getElementById("otvetvnizu").innerHTML = "Digit Limit Met";
      k = 1;
    }
  });
  $("#6").click(function() {
    //Proverka chasti vverhu
    if (String(document.getElementById("otvetvnizu").innerHTML).length < 36) {
      if (parseInt(document.getElementById("otvet").innerHTML) == 0) {
        document.getElementById("otvet").innerHTML = 6;
      } else {
        if (document.getElementById("otvet").innerHTML !== "/" && document.getElementById("otvet").innerHTML !== "X" && document.getElementById("otvet").innerHTML !== "-" && document.getElementById("otvet").innerHTML !== "+") {
          if (parseFloat(document.getElementById("otvet").innerHTML) <= 999999999999 && parseFloat(document.getElementById("otvet").innerHTML) >= -99999999999) {
            document.getElementById("otvet").innerHTML = document.getElementById("otvet").innerHTML + "6";
          } else {
            document.getElementById("otvet").innerHTML = 0;
            document.getElementById("otvetvnizu").innerHTML = "Digit Limit Met";
            k = 0;
          }
        }
        if (document.getElementById("otvet").innerHTML == "/" || document.getElementById("otvet").innerHTML == "X" || document.getElementById("otvet").innerHTML == "-" || document.getElementById("otvet").innerHTML == "+") {
          document.getElementById("otvet").innerHTML = 6;
        }
      };
      //Otvet vnizu chast proverki
      if (parseInt(document.getElementById("otvetvnizu").innerHTML) == 0) {
        document.getElementById("otvetvnizu").innerHTML = 6;
      } else {
        if (document.getElementById("otvetvnizu").innerHTML !== "/" && document.getElementById("otvetvnizu").innerHTML !== "X" && document.getElementById("otvetvnizu").innerHTML !== "-" && document.getElementById("otvetvnizu").innerHTML !== "+") {
          if (document.getElementById("otvetvnizu").innerHTML !== "Digit Limit Met") {
            if (parseInt(document.getElementById("otvet").innerHTML) <= 9999999999999 && parseInt(document.getElementById("otvet").innerHTML) >= -99999999999) {
              document.getElementById("otvetvnizu").innerHTML = document.getElementById("otvetvnizu").innerHTML + "6";
            }
          } else {
            if (k == 0) {
              k = 1;
            } else {
              document.getElementById("otvetvnizu").innerHTML = 6;
              k = 0;
            }
          }
        }
      }
    } else {
      document.getElementById("otvet").innerHTML = 0;
      document.getElementById("otvetvnizu").innerHTML = "Digit Limit Met";
      k = 1;
    }
  });
  $("#5").click(function() {
    //Proverka chasti vverhu
    if (String(document.getElementById("otvetvnizu").innerHTML).length < 36) {
      if (parseInt(document.getElementById("otvet").innerHTML) == 0) {
        document.getElementById("otvet").innerHTML = 5;
      } else {
        if (document.getElementById("otvet").innerHTML !== "/" && document.getElementById("otvet").innerHTML !== "X" && document.getElementById("otvet").innerHTML !== "-" && document.getElementById("otvet").innerHTML !== "+") {
          if (parseFloat(document.getElementById("otvet").innerHTML) <= 999999999999 && parseFloat(document.getElementById("otvet").innerHTML) >= -99999999999) {
            document.getElementById("otvet").innerHTML = document.getElementById("otvet").innerHTML + "5";
          } else {
            document.getElementById("otvet").innerHTML = 0;
            document.getElementById("otvetvnizu").innerHTML = "Digit Limit Met";
            k = 0;
          }
        }
        if (document.getElementById("otvet").innerHTML == "/" || document.getElementById("otvet").innerHTML == "X" || document.getElementById("otvet").innerHTML == "-" || document.getElementById("otvet").innerHTML == "+") {
          document.getElementById("otvet").innerHTML = 5;
        }
      };
      //Otvet vnizu chast proverki
      if (parseInt(document.getElementById("otvetvnizu").innerHTML) == 0) {
        document.getElementById("otvetvnizu").innerHTML = 5;
      } else {
        if (document.getElementById("otvetvnizu").innerHTML !== "/" && document.getElementById("otvetvnizu").innerHTML !== "X" && document.getElementById("otvetvnizu").innerHTML !== "-" && document.getElementById("otvetvnizu").innerHTML !== "+") {
          if (document.getElementById("otvetvnizu").innerHTML !== "Digit Limit Met") {
            if (parseInt(document.getElementById("otvet").innerHTML) <= 9999999999999 && parseInt(document.getElementById("otvet").innerHTML) >= -99999999999) {
              document.getElementById("otvetvnizu").innerHTML = document.getElementById("otvetvnizu").innerHTML + "5";
            }
          } else {
            if (k == 0) {
              k = 1;
            } else {
              document.getElementById("otvetvnizu").innerHTML = 5;
              k = 0;
            }
          }
        }
      }
    } else {
      document.getElementById("otvet").innerHTML = 0;
      document.getElementById("otvetvnizu").innerHTML = "Digit Limit Met";
      k = 1;
    }
  });
  $("#4").click(function() {
    //Proverka chasti vverhu
    if (String(document.getElementById("otvetvnizu").innerHTML).length < 36) {
      if (parseInt(document.getElementById("otvet").innerHTML) == 0) {
        document.getElementById("otvet").innerHTML = 4;
      } else {
        if (document.getElementById("otvet").innerHTML !== "/" && document.getElementById("otvet").innerHTML !== "X" && document.getElementById("otvet").innerHTML !== "-" && document.getElementById("otvet").innerHTML !== "+") {
          if (parseFloat(document.getElementById("otvet").innerHTML) <= 999999999999 && parseFloat(document.getElementById("otvet").innerHTML) >= -99999999999) {
            document.getElementById("otvet").innerHTML = document.getElementById("otvet").innerHTML + "4";
          } else {
            document.getElementById("otvet").innerHTML = 0;
            document.getElementById("otvetvnizu").innerHTML = "Digit Limit Met";
            k = 0;
          }
        }
        if (document.getElementById("otvet").innerHTML == "/" || document.getElementById("otvet").innerHTML == "X" || document.getElementById("otvet").innerHTML == "-" || document.getElementById("otvet").innerHTML == "+") {
          document.getElementById("otvet").innerHTML = 4;
        }
      };
      //Otvet vnizu chast proverki
      if (parseInt(document.getElementById("otvetvnizu").innerHTML) == 0) {
        document.getElementById("otvetvnizu").innerHTML = 4;
      } else {
        if (document.getElementById("otvetvnizu").innerHTML !== "/" && document.getElementById("otvetvnizu").innerHTML !== "X" && document.getElementById("otvetvnizu").innerHTML !== "-" && document.getElementById("otvetvnizu").innerHTML !== "+") {
          if (document.getElementById("otvetvnizu").innerHTML !== "Digit Limit Met") {
            if (parseInt(document.getElementById("otvet").innerHTML) <= 9999999999999 && parseInt(document.getElementById("otvet").innerHTML) >= -99999999999) {
              document.getElementById("otvetvnizu").innerHTML = document.getElementById("otvetvnizu").innerHTML + "4";
            }
          } else {
            if (k == 0) {
              k = 1;
            } else {
              document.getElementById("otvetvnizu").innerHTML = 4;
              k = 0;
            }
          }
        }
      }
    } else {
      document.getElementById("otvet").innerHTML = 0;
      document.getElementById("otvetvnizu").innerHTML = "Digit Limit Met";
      k = 1;
    }
  });
  $("#3").click(function() {
    //Proverka chasti vverhu
    if (String(document.getElementById("otvetvnizu").innerHTML).length < 36) {
      if (parseInt(document.getElementById("otvet").innerHTML) == 0) {
        document.getElementById("otvet").innerHTML = 3;
      } else {
        if (document.getElementById("otvet").innerHTML !== "/" && document.getElementById("otvet").innerHTML !== "X" && document.getElementById("otvet").innerHTML !== "-" && document.getElementById("otvet").innerHTML !== "+") {
          if (parseFloat(document.getElementById("otvet").innerHTML) <= 999999999999 && parseFloat(document.getElementById("otvet").innerHTML) >= -99999999999) {
            document.getElementById("otvet").innerHTML = document.getElementById("otvet").innerHTML + "3";
          } else {
            document.getElementById("otvet").innerHTML = 0;
            document.getElementById("otvetvnizu").innerHTML = "Digit Limit Met";
            k = 0;
          }
        }
        if (document.getElementById("otvet").innerHTML == "/" || document.getElementById("otvet").innerHTML == "X" || document.getElementById("otvet").innerHTML == "-" || document.getElementById("otvet").innerHTML == "+") {
          document.getElementById("otvet").innerHTML = 3;
        }
      };
      //Otvet vnizu chast proverki
      if (parseInt(document.getElementById("otvetvnizu").innerHTML) == 0) {
        document.getElementById("otvetvnizu").innerHTML = 3;
      } else {
        if (document.getElementById("otvetvnizu").innerHTML !== "/" && document.getElementById("otvetvnizu").innerHTML !== "X" && document.getElementById("otvetvnizu").innerHTML !== "-" && document.getElementById("otvetvnizu").innerHTML !== "+") {
          if (document.getElementById("otvetvnizu").innerHTML !== "Digit Limit Met") {
            if (parseInt(document.getElementById("otvet").innerHTML) <= 9999999999999 && parseInt(document.getElementById("otvet").innerHTML) >= -99999999999) {
              document.getElementById("otvetvnizu").innerHTML = document.getElementById("otvetvnizu").innerHTML + "3";
            }
          } else {
            if (k == 0) {
              k = 1;
            } else {
              document.getElementById("otvetvnizu").innerHTML = 3;
              k = 0;
            }
          }
        }
      }
    } else {
      document.getElementById("otvet").innerHTML = 0;
      document.getElementById("otvetvnizu").innerHTML = "Digit Limit Met";
      k = 1;
    }
  });
  $("#2").click(function() {
    //Proverka chasti vverhu
    if (String(document.getElementById("otvetvnizu").innerHTML).length < 36) {
      if (parseInt(document.getElementById("otvet").innerHTML) == 0) {
        document.getElementById("otvet").innerHTML = 2;
      } else {
        if (document.getElementById("otvet").innerHTML !== "/" && document.getElementById("otvet").innerHTML !== "X" && document.getElementById("otvet").innerHTML !== "-" && document.getElementById("otvet").innerHTML !== "+") {
          if (parseFloat(document.getElementById("otvet").innerHTML) <= 999999999999 && parseFloat(document.getElementById("otvet").innerHTML) >= -99999999999) {
            document.getElementById("otvet").innerHTML = document.getElementById("otvet").innerHTML + "2";
          } else {
            document.getElementById("otvet").innerHTML = 0;
            document.getElementById("otvetvnizu").innerHTML = "Digit Limit Met";
            k = 0;
          }
        }
        if (document.getElementById("otvet").innerHTML == "/" || document.getElementById("otvet").innerHTML == "X" || document.getElementById("otvet").innerHTML == "-" || document.getElementById("otvet").innerHTML == "+") {
          document.getElementById("otvet").innerHTML = 2;
        }
      };
      //Otvet vnizu chast proverki
      if (parseInt(document.getElementById("otvetvnizu").innerHTML) == 0) {
        document.getElementById("otvetvnizu").innerHTML = 2;
      } else {
        if (document.getElementById("otvetvnizu").innerHTML !== "/" && document.getElementById("otvetvnizu").innerHTML !== "X" && document.getElementById("otvetvnizu").innerHTML !== "-" && document.getElementById("otvetvnizu").innerHTML !== "+") {
          if (document.getElementById("otvetvnizu").innerHTML !== "Digit Limit Met") {
            if (parseInt(document.getElementById("otvet").innerHTML) <= 9999999999999 && parseInt(document.getElementById("otvet").innerHTML) >= -99999999999) {
              document.getElementById("otvetvnizu").innerHTML = document.getElementById("otvetvnizu").innerHTML + "2";
            }
          } else {
            if (k == 0) {
              k = 1;
            } else {
              document.getElementById("otvetvnizu").innerHTML = 2;
              k = 0;
            }
          }
        }
      }
    } else {
      document.getElementById("otvet").innerHTML = 0;
      document.getElementById("otvetvnizu").innerHTML = "Digit Limit Met";
      k = 1;
    }
  });
  $("#1").click(function() {
    //Proverka chasti vverhu
    if (String(document.getElementById("otvetvnizu").innerHTML).length < 36) {
      if (parseInt(document.getElementById("otvet").innerHTML) == 0) {
        document.getElementById("otvet").innerHTML = 1;
      } else {
        if (document.getElementById("otvet").innerHTML !== "/" && document.getElementById("otvet").innerHTML !== "X" && document.getElementById("otvet").innerHTML !== "-" && document.getElementById("otvet").innerHTML !== "+") {
          if (parseFloat(document.getElementById("otvet").innerHTML) <= 999999999999 && parseFloat(document.getElementById("otvet").innerHTML) >= -99999999999) {
            document.getElementById("otvet").innerHTML = document.getElementById("otvet").innerHTML + "1";
          } else {
            document.getElementById("otvet").innerHTML = 0;
            document.getElementById("otvetvnizu").innerHTML = "Digit Limit Met";
            k = 0;
          }
        }
        if (document.getElementById("otvet").innerHTML == "/" || document.getElementById("otvet").innerHTML == "X" || document.getElementById("otvet").innerHTML == "-" || document.getElementById("otvet").innerHTML == "+") {
          document.getElementById("otvet").innerHTML = 1;
        }
      };
      //Otvet vnizu chast proverki
      if (parseInt(document.getElementById("otvetvnizu").innerHTML) == 0) {
        document.getElementById("otvetvnizu").innerHTML = 1;
      } else {
        if (document.getElementById("otvetvnizu").innerHTML !== "/" && document.getElementById("otvetvnizu").innerHTML !== "X" && document.getElementById("otvetvnizu").innerHTML !== "-" && document.getElementById("otvetvnizu").innerHTML !== "+") {
          if (document.getElementById("otvetvnizu").innerHTML !== "Digit Limit Met") {
            if (parseInt(document.getElementById("otvet").innerHTML) <= 9999999999999 && parseInt(document.getElementById("otvet").innerHTML) >= -99999999999) {
              document.getElementById("otvetvnizu").innerHTML = document.getElementById("otvetvnizu").innerHTML + "1";
            }
          } else {
            if (k == 0) {
              k = 1;
            } else {
              document.getElementById("otvetvnizu").innerHTML = 1;
              k = 0;
            }
          }
        }
      }
    } else {
      document.getElementById("otvet").innerHTML = 0;
      document.getElementById("otvetvnizu").innerHTML = "Digit Limit Met";
      k = 1;
    }
  });
  $("#plus").click(function() {
    if (document.getElementById("otvet").innerHTML !== "/" && document.getElementById("otvet").innerHTML !== "X" && document.getElementById("otvet").innerHTML !== "-" && document.getElementById("otvet").innerHTML !== "+" && document.getElementById("otvet").innerHTML !== 0) {
      if ((document.getElementById("otvetvnizu").innerHTML).search("=") == -1) {
        //Verh
        document.getElementById("otvet").innerHTML = "+";
        g = 1;
        //Niz
        document.getElementById("otvetvnizu").innerHTML = document.getElementById("otvetvnizu").innerHTML + "+";
      } else {
        document.getElementById("otvet").innerHTML = "+";
        document.getElementById("otvetvnizu").innerHTML = result + "+";
      }
    }
  });
  $("#umnozhenie").click(function() {
    if (document.getElementById("otvet").innerHTML !== "/" && document.getElementById("otvet").innerHTML !== "X" && document.getElementById("otvet").innerHTML !== "-" && document.getElementById("otvet").innerHTML !== "+" && document.getElementById("otvet").innerHTML !== 0) {
      if ((document.getElementById("otvetvnizu").innerHTML).search("=") == -1) {
        //Verh
        document.getElementById("otvet").innerHTML = "X";
        g = 1;
        //Niz
        document.getElementById("otvetvnizu").innerHTML = document.getElementById("otvetvnizu").innerHTML + "*";
      } else {
        document.getElementById("otvet").innerHTML = "X";
        document.getElementById("otvetvnizu").innerHTML = result + "*";
      }
    }
  });
  $("#minus").click(function() {
    if (document.getElementById("otvet").innerHTML !== "/" && document.getElementById("otvet").innerHTML !== "X" && document.getElementById("otvet").innerHTML !== "-" && document.getElementById("otvet").innerHTML !== "+" && document.getElementById("otvet").innerHTML !== 0) {
      if ((document.getElementById("otvetvnizu").innerHTML).search("=") == -1) {
        //Verh
        document.getElementById("otvet").innerHTML = "-";
        g = 1;
        //Niz
        document.getElementById("otvetvnizu").innerHTML = document.getElementById("otvetvnizu").innerHTML + "-";
      } else {
        document.getElementById("otvet").innerHTML = "-";
        document.getElementById("otvetvnizu").innerHTML = result + "-";
      }
    }
  });
  $("#delenie").click(function() {
    if (document.getElementById("otvet").innerHTML !== "/" && document.getElementById("otvet").innerHTML !== "X" && document.getElementById("otvet").innerHTML !== "-" && document.getElementById("otvet").innerHTML !== "+" && document.getElementById("otvet").innerHTML !== 0) {
      if ((document.getElementById("otvetvnizu").innerHTML).search("=") == -1) {
        //Verh
        document.getElementById("otvet").innerHTML = "/";
        g = 1;
        //Niz
        document.getElementById("otvetvnizu").innerHTML = document.getElementById("otvetvnizu").innerHTML + "/";
      } else {
        document.getElementById("otvet").innerHTML = "/";
        document.getElementById("otvetvnizu").innerHTML = result + "/";
      }
    }
  });
  $("#ce").click(function() {
    if (document.getElementById("otvetvnizu").innerHTML !== 0) {
      document.getElementById("otvet").innerHTML = 0;
      if (document.getElementById("otvetvnizu").innerHTML == 0) {

        document.getElementById("otvetvnizu").innerHTML = 0;

      } else {
        array1 = String(document.getElementById("otvetvnizu").innerHTML).split(regexr);
        if (array1.length > 1) {
          //array2=array1;
          last = array1.slice(-1).pop();
          dlina = last.length;
          document.getElementById("otvetvnizu").innerHTML = (document.getElementById("otvetvnizu").innerHTML).slice(0, document.getElementById("otvetvnizu").innerHTML.length - dlina);
        } else {
          document.getElementById("otvetvnizu").innerHTML = 0;
        }
      }
    }
  });
  $("#ac").click(function() {
    document.getElementById("otvet").innerHTML = 0;
    document.getElementById("otvetvnizu").innerHTML = 0;

  });
  $("#ravno").click(function() {
    if ((document.getElementById("otvetvnizu").innerHTML).search("=") == -1) {
      if (String(document.getElementById("otvetvnizu").innerHTML).length < 36 && document.getElementById("otvetvnizu").innerHTML !== "Digit Limit Met") {
        result = Math.round((eval(document.getElementById("otvetvnizu").innerHTML)) * 1000000) / 1000000;
        if ((document.getElementById("otvetvnizu").innerHTML + "=" + result).length < 36) {
          document.getElementById("otvet").innerHTML = result;
          document.getElementById("otvetvnizu").innerHTML = document.getElementById("otvetvnizu").innerHTML + "=" + result;
        } else {
          document.getElementById("otvet").innerHTML = 0;
          document.getElementById("otvetvnizu").innerHTML = "Digit Limit Met";
          k = 1;
        }
      } else {
        document.getElementById("otvet").innerHTML = 0;
        document.getElementById("otvetvnizu").innerHTML = "Digit Limit Met";
        k = 1;
      }
    }
    });
  $("#tochka").click(function() {
    if ((document.getElementById("otvetvnizu").innerHTML.slice((document.getElementById("otvetvnizu").innerHTML).length - 1)) == "+" || (document.getElementById("otvetvnizu").innerHTML.slice((document.getElementById("otvetvnizu").innerHTML).length - 1)) == "/" || (document.getElementById("otvetvnizu").innerHTML.slice((document.getElementById("otvetvnizu").innerHTML).length - 1)) == "*" || (document.getElementById("otvetvnizu").innerHTML.slice((document.getElementById("otvetvnizu").innerHTML).length - 1)) == "-") {
      document.getElementById("otvetvnizu").innerHTML = document.getElementById("otvetvnizu").innerHTML + "0" + ".";
      document.getElementById("otvet").innerHTML = "0" + ".";
    } else {
      document.getElementById("otvet").innerHTML = document.getElementById("otvet").innerHTML + ".";
      document.getElementById("otvetvnizu").innerHTML = document.getElementById("otvetvnizu").innerHTML + ".";
    }
  });
})