// ConvertInfo : FairlyLinguist 1.26.0.0
{
  var objTOC = new TocObject();
  objTOC.setTitle("Nintendo eShop Artwork Usage Manual");
  objTOC.setSmallSubtitle("");
  objTOC.setWindowTitle("Nintendo eShop Artwork Usage Manual");
  objTOC.disablePrintPage();
  objTOC.setSelectPackageEnabled(false);
  objTOC.setInsertTitlePage(true);
  objTOC.disableDisplayNumber();
  objTOC.disableViewFileIcon();
  objTOC.setBaselevel(0);
  objTOC.setSearchEnabled(true);
  objTOC.setLogoFile("template/img/logo.png");


// 1 How to Read This Documentation
  objTOC.addHeader("ID_220676525", 0, "1 How to Read This Documentation", "Pages/Page_220676525.html", "", false, "002");

// 2 Introduction
  objTOC.addHeader("ID_212927665", 0, "2 Introduction", "Pages/Page_212927665.html", "", false, "003");

// 3 For Switch
  objTOC.addHeader("ID_216212633", 0, "3 For Switch", "Pages/Page_216212633.html", "", false, "004");

// 3.1 Icons (for Switch)
  objTOC.addItem("ID_216212633", 1, "3.1 Icons (for Switch)", "Pages/Page_216215397.html", "", false, "004_001");

// 3.2 Logos (for Switch)
  objTOC.addItem("ID_216212633", 1, "3.2 Logos (for Switch)", "Pages/Page_216215409.html", "", false, "004_002");

// 4 For the Nintendo 3DS Family
  objTOC.addHeader("ID_216213046", 0, "4 For the Nintendo 3DS Family", "Pages/Page_216213046.html", "", false, "005");

// 4.1 Icons (for the Nintendo 3DS Family)
  objTOC.addItem("ID_216213046", 1, "4.1 Icons (for the Nintendo 3DS Family)", "Pages/Page_216215777.html", "", false, "005_001");

// 4.2 Logos (for the Nintendo 3DS Family)
  objTOC.addItem("ID_216213046", 1, "4.2 Logos (for the Nintendo 3DS Family)", "Pages/Page_216215795.html", "", false, "005_002");

// 5 For Wii U
  objTOC.addHeader("ID_216213267", 0, "5 For Wii U", "Pages/Page_216213267.html", "", false, "006");

// 5.1 Icons (for Wii U)
  objTOC.addItem("ID_216213267", 1, "5.1 Icons (for Wii U)", "Pages/Page_217451485.html", "", false, "006_001");

// 5.2 Logos (for Wii U)
  objTOC.addItem("ID_216213267", 1, "5.2 Logos (for Wii U)", "Pages/Page_217453420.html", "", false, "006_002");


  objTOC.addHeader("HISTORY", 0, "Revision History", "history.html", "", false, "991");

  Reassemble.objectTocData = objTOC;
}
