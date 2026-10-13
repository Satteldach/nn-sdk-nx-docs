// ConvertInfo : FairlyLinguist 1.13.1.0
{
  var objTOC = new TocObject();
  objTOC.setTitle("Nintendo Switch UGC Guide");
  objTOC.setWindowTitle("Nintendo Switch UGC Guide");
  objTOC.disablePrintPage();
  objTOC.setSelectPackageEnabled(false);
  objTOC.setInsertTitlePage(true);
  objTOC.disableDisplayNumber();
  objTOC.disableViewFileIcon();
  objTOC.setBaselevel(0);
  objTOC.setSearchEnabled(true);
  objTOC.setLogoFile("template/img/logo.png");

// 1 Introduction
  objTOC.addHeader("ID_124018156", 0, "1 Introduction", "Pages/Page_124018156.html", "", false, "001");

// 2 What is UGC?
  objTOC.addHeader("ID_124921508", 0, "2 What is UGC?", "Pages/Page_124921508.html", "", false, "002");

// 2.1 Types of UGC
  objTOC.addItem("ID_124921508", 1, "2.1 Types of UGC", "Pages/Page_164713870.html", "", false, "002_001");

// 3 What is handled by Nintendo Switch features and what applications must handle
  objTOC.addHeader("ID_126201340", 0, "3 What is handled by Nintendo Switch features and what applications must handle", "Pages/Page_126201340.html", "", false, "003");

// 4 Recommended handling in line with the design of your application
  objTOC.addHeader("ID_124921518", 0, "4 Recommended handling in line with the design of your application", "Pages/Page_124921518.html", "", false, "004");

// 4.1 Preventing users from creating inappropriate UGC
  objTOC.addItem("ID_124921518", 1, "4.1 Preventing users from creating inappropriate UGC", "Pages/Page_165024779.html", "", false, "004_001");

// 4.2 Preventing users from spreading inappropriate UGC
  objTOC.addItem("ID_124921518", 1, "4.2 Preventing users from spreading inappropriate UGC", "Pages/Page_124921526.html", "", false, "004_002");

// 4.3 Preventing users from seeing inappropriate UGC
  objTOC.addItem("ID_124921518", 1, "4.3 Preventing users from seeing inappropriate UGC", "Pages/Page_124921531.html", "", false, "004_003");


  objTOC.addHeader("HISTORY", 0, "Revision History", "history.html", "", false, "991");

  Reassemble.objectTocData = objTOC;
}
