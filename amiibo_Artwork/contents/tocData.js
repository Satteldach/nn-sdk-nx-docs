// ConvertInfo : FairlyLinguist 1.23.2.1
{
  var objTOC = new TocObject();
  objTOC.setTitle("amiibo Artwork Usage Manual");
  objTOC.setWindowTitle("amiibo Artwork Usage Manual");
  objTOC.disablePrintPage();
  objTOC.setSelectPackageEnabled(false);
  objTOC.setInsertTitlePage(true);
  objTOC.disableDisplayNumber();
  objTOC.disableViewFileIcon();
  objTOC.setBaselevel(0);
  objTOC.setSearchEnabled(true);
  objTOC.setLogoFile("template/img/logo.png");


// 1 Introduction
  objTOC.addHeader("ID_158289652", 0, "1 Introduction", "Pages/Page_158289652.html", "", false, "002");

// 2 Logos and Icons
  objTOC.addHeader("ID_163418625", 0, "2 Logos and Icons", "Pages/Page_163418625.html", "", false, "003");

// 3 NFC Touchpoint Icon
  objTOC.addHeader("ID_161297893", 0, "3 NFC Touchpoint Icon", "Pages/Page_161297893.html", "", false, "004");

// 4 Touchpoint Locator Image
  objTOC.addHeader("ID_161297947", 0, "4 Touchpoint Locator Image", "Pages/Page_161297947.html", "", false, "005");

// 5 Sound Effects
  objTOC.addHeader("ID_161298795", 0, "5 Sound Effects", "Pages/Page_161298795.html", "", false, "006");


  objTOC.addHeader("HISTORY", 0, "Revision History", "history.html", "", false, "991");

  Reassemble.objectTocData = objTOC;
}
