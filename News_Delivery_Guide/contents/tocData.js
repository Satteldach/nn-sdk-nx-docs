// ConvertInfo : FairlyLinguist 1.31.9.1
{
  var objTOC = new TocObject();
  objTOC.setTitle("Nintendo Switch News Delivery Guide");
  objTOC.setSmallSubtitle("");
  objTOC.setWindowTitle("Nintendo Switch News Delivery Guide");
  objTOC.disablePrintPage();
  objTOC.setSelectPackageEnabled(false);
  objTOC.setInsertTitlePage(true);
  objTOC.disableDisplayNumber();
  objTOC.disableViewFileIcon();
  objTOC.setBaselevel(0);
  objTOC.setSearchEnabled(true);
  objTOC.setLogoFile("template/img/logo.png");

// 1 Introduction
  objTOC.addHeader("ID_174237900", 0, "1 Introduction", "Pages/Page_174237900.html", "", false, "001");

// 2 News
  objTOC.addHeader("ID_192305616", 0, "2 News", "Pages/Page_192305616.html", "", false, "002");

// 3 UI Reference
  objTOC.addHeader("ID_192305634", 0, "3 UI Reference", "Pages/Page_192305634.html", "", false, "003");

// 4 Notes About Creating News
  objTOC.addHeader("ID_230133073", 0, "4 Notes About Creating News", "Pages/Page_230133073.html", "", false, "004");

// 5 Workflow for News Delivery
  objTOC.addHeader("ID_192305642", 0, "5 Workflow for News Delivery", "Pages/Page_192305642.html", "", false, "005");

// 5.1 Applying for a Channel
  objTOC.addItem("ID_192305642", 1, "5.1 Applying for a Channel", "Pages/Page_230132366.html", "", false, "005_001");

// 5.2 Creating News
  objTOC.addItem("ID_192305642", 1, "5.2 Creating News", "Pages/Page_202567888.html", "", false, "005_002");

// 5.3 Confirming Before Actual Delivery
  objTOC.addItem("ID_192305642", 1, "5.3 Confirming Before Actual Delivery", "Pages/Page_245260296.html", "", false, "005_003");

// 5.4 Actual Delivery
  objTOC.addItem("ID_192305642", 1, "5.4 Actual Delivery", "Pages/Page_245260303.html", "", false, "005_004");

// 5.5 Revisions After Delivery
  objTOC.addItem("ID_192305642", 1, "5.5 Revisions After Delivery", "Pages/Page_245260312.html", "", false, "005_005");

// 6 BCAT Management Tool: Setting Items and Setting Rules
  objTOC.addHeader("ID_192305655", 0, "6 BCAT Management Tool: Setting Items and Setting Rules", "Pages/Page_192305655.html", "", false, "006");


  objTOC.addHeader("HISTORY", 0, "Revision History", "history.html", "", false, "991");

  Reassemble.objectTocData = objTOC;
}
