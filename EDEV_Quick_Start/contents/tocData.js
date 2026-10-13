// ConvertInfo : FairlyLinguist 1.31.13.3
{
  var objTOC = new TocObject();
  objTOC.setTitle("Nintendo Switch EDEV Quick Start");
  objTOC.setSmallSubtitle("");
  objTOC.setWindowTitle("Nintendo Switch EDEV Quick Start");
  objTOC.disablePrintPage();
  objTOC.setSelectPackageEnabled(false);
  objTOC.setInsertTitlePage(true);
  objTOC.disableDisplayNumber();
  objTOC.disableViewFileIcon();
  objTOC.setBaselevel(0);
  objTOC.setSearchEnabled(true);
  objTOC.setLogoFile("template/img/logo.png");

// 1 Introduction
  objTOC.addHeader("ID_113817927", 0, "1 Introduction", "Pages/Page_113817927.html", "", false, "001");

// 2 EDEV Operating Environment
  objTOC.addHeader("ID_113817951", 0, "2 EDEV Operating Environment", "Pages/Page_113817951.html", "", false, "002");

// 3 Setting up the EDEV
  objTOC.addHeader("ID_126564928", 0, "3 Setting up the EDEV", "Pages/Page_126564928.html", "", false, "003");

// 4 Preparing Nintendo Dev Interface
  objTOC.addHeader("ID_124929515", 0, "4 Preparing Nintendo Dev Interface", "Pages/Page_124929515.html", "", false, "004");

// 5 Setting up NintendoSDK
  objTOC.addHeader("ID_124929520", 0, "5 Setting up NintendoSDK", "Pages/Page_124929520.html", "", false, "005");

// 6 Initializing the EDEV
  objTOC.addHeader("ID_124929523", 0, "6 Initializing the EDEV", "Pages/Page_124929523.html", "", false, "006");

// 6.1 When EDEV Initialization Fails
  objTOC.addItem("ID_124929523", 1, "6.1 When EDEV Initialization Fails", "Pages/Page_159244488.html", "", false, "006_001");

// 7 Setting up the Joy-Con
  objTOC.addHeader("ID_124929526", 0, "7 Setting up the Joy-Con", "Pages/Page_124929526.html", "", false, "007");

// 8 Building and Running Applications (For Developers)
  objTOC.addHeader("ID_178636895", 0, "8 Building and Running Applications (For Developers)", "Pages/Page_178636895.html", "", false, "008");

// 9 Installing Applications (For Non-Developers)
  objTOC.addHeader("ID_124929535", 0, "9 Installing Applications (For Non-Developers)", "Pages/Page_124929535.html", "", false, "009");

// 10 Running Applications (For Non-Developers)
  objTOC.addHeader("ID_124929546", 0, "10 Running Applications (For Non-Developers)", "Pages/Page_124929546.html", "", false, "010");


  objTOC.addHeader("HISTORY", 0, "Revision History", "history.html", "", false, "991");

  Reassemble.objectTocData = objTOC;
}
