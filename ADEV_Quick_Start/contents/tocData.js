// ConvertInfo : FairlyLinguist 1.31.13.3
{
  var objTOC = new TocObject();
  objTOC.setTitle("Nintendo Switch ADEV Quick Start");
  objTOC.setSmallSubtitle("");
  objTOC.setWindowTitle("Nintendo Switch ADEV Quick Start");
  objTOC.disablePrintPage();
  objTOC.setSelectPackageEnabled(false);
  objTOC.setInsertTitlePage(true);
  objTOC.disableDisplayNumber();
  objTOC.disableViewFileIcon();
  objTOC.setBaselevel(0);
  objTOC.setSearchEnabled(true);
  objTOC.setLogoFile("template/img/logo.png");

// 1 Introduction
  objTOC.addHeader("ID_1137766828", 0, "1 Introduction", "Pages/Page_1137766828.html", "", false, "001");

// 2 ADEV Operating Environment
  objTOC.addHeader("ID_1137766830", 0, "2 ADEV Operating Environment", "Pages/Page_1137766830.html", "", false, "002");

// 3 Setting up the ADEV
  objTOC.addHeader("ID_1137766832", 0, "3 Setting up the ADEV", "Pages/Page_1137766832.html", "", false, "003");

// 4 Preparing Nintendo Dev Interface
  objTOC.addHeader("ID_1137766835", 0, "4 Preparing Nintendo Dev Interface", "Pages/Page_1137766835.html", "", false, "004");

// 5 Setting Up NintendoSDK
  objTOC.addHeader("ID_1137766851", 0, "5 Setting Up NintendoSDK", "Pages/Page_1137766851.html", "", false, "005");

// 6 Initializing the ADEV
  objTOC.addHeader("ID_1137766887", 0, "6 Initializing the ADEV", "Pages/Page_1137766887.html", "", false, "006");

// 6.1 When ADEV Initialization Fails
  objTOC.addItem("ID_1137766887", 1, "6.1 When ADEV Initialization Fails", "Pages/Page_1137766909.html", "", false, "006_001");

// 7 Setting up the Joy-Con
  objTOC.addHeader("ID_1137766913", 0, "7 Setting up the Joy-Con", "Pages/Page_1137766913.html", "", false, "007");

// 8 Building and Running Applications (For Developers)
  objTOC.addHeader("ID_1137766921", 0, "8 Building and Running Applications (For Developers)", "Pages/Page_1137766921.html", "", false, "008");

// 9 Installing Applications (For Non-Developers)
  objTOC.addHeader("ID_1137766935", 0, "9 Installing Applications (For Non-Developers)", "Pages/Page_1137766935.html", "", false, "009");

// 10 Running Applications (For Non-Developers)
  objTOC.addHeader("ID_1137766950", 0, "10 Running Applications (For Non-Developers)", "Pages/Page_1137766950.html", "", false, "010");


  objTOC.addHeader("HISTORY", 0, "Revision History", "history.html", "", false, "991");

  Reassemble.objectTocData = objTOC;
}
