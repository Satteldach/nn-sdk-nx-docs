var FileLoader = FileLoader || function(){};
FileLoader.supportFileAPI = (window.File && window.FileReader && window.FileList && window.Blob);
FileLoader.reader = null;
FileLoader.result = null;
FileLoader.state = "READY";
FileLoader.onloadCallback = null;
FileLoader.errorHandler = function(evt)
{
  switch (evt.target.error.code)
  {
    case evt.target.error.NOT_FOUND_ERR:
      alert("File Not Found!");
      break;
    case evt.target.error.NOT_READABLE_ERR:
      alert("File is not readable");
      break;
    case evt.target.error.ABORT_ERR:
      break;
    default:
      alert("An error occurred reading this file.")
  }
  FileLoader.reader = null;
  FileLoader.state = "ERROR"
};
FileLoader.onload = function(evt)
{
  FileLoader.result = FileLoader.reader.result;
  if (typeof(FileLoader.onloadCallback) == "function")
    FileLoader.onloadCallback(FileLoader.result);
  FileLoader.reader = null;
  FileLoader.state = "SUCCESS"
};
FileLoader.abort = function()
{
  if (FileLoader.reader)
    FileLoader.reader.abort();
  FileLoader.reset();
  FileLoader.state = "ABORT"
};
FileLoader.reset = function()
{
  FileLoader.result = null;
  FileLoader.reader = null;
  FileLoader.onloadCallback = null;
  FileLoader.state = "READY"
};
FileLoader.loadFile = function(fileObject, filetype, loadCallback, progressCallback)
{
  if (FileLoader.reader != null)
  {
    alert("FileLoader is busy!");
    return
  }
  FileLoader.reset();
  FileLoader.onloadCallback = loadCallback;
  FileLoader.reader = new FileReader;
  FileLoader.reader.onerror = FileLoader.errorHandler;
  if (typeof(progressCallback) == "function")
    FileLoader.reader.onprogress = progressCallback;
  FileLoader.reader.onload = FileLoader.onload;
  FileLoader.state = "LOADING";
  switch (filetype)
  {
    case"ArrayBuffer":
      FileLoader.reader.readAsArrayBuffer(fileObject);
      break;
    case"DataURL":
      FileLoader.reader.readAsDataURL(fileObject);
      break;
    case"Text":
    default:
      FileLoader.reader.readAsText(fileObject, "UTF-8");
      break
  }
};
var GuidelineN = GuidelineN || function(){};
GuidelineN.searchBaseUrl = "../";
GuidelineN.perpetuation = true;
GuidelineN.enableFloatingMenu = false;
GuidelineN.flipFloatingMenu = false;
GuidelineN.openFloatingMenu = !GuidelineN.flipFloatingMenu;
GuidelineN.openSettingPage = false;
GuidelineN.displayParamSetting = {
  backgrounder: true, testsection: true
};
GuidelineN.displayParamTarget = {
  fixed: [{
      name: "TestObject", flag: true
    }, {
      name: "Exclusion", flag: false
    }], backgrounder: [{
        name: "Backgrounder", flag: true
      }, {
        name: "Reference", flag: false
      }], testsection: [{
        name: "TestMethod", flag: true
      }, {
        name: "Criterion", flag: true
      }, {
        name: "Tips", flag: false
      }], idsection: [{
        name: "GuidelineId", flag: true
      }], tagsection: [{
        name: "Tags", flag: true
      }]
};
GuidelineN.guidelineIdList = [];
GuidelineN.globalindexContentWidth = -1;
GuidelineN.attrGlobalindexToggle = null;
GuidelineN.attrAutoindexToggle = null;
GuidelineN.initialize = function()
{
  if (typeof(GuidelineN.storagePath) == "undefined")
    GuidelineN.storagePath = "/";
  var forceNoIndex = false;
  var query = location.search;
  query = query.slice(query.lastIndexOf("?") + 1);
  var params = query.split("&");
  for (var i = 0; i < params.length; i++)
  {
    var param = params[i];
    var ind = param.indexOf("=");
    if (ind < 0)
      continue;
    var key = param.substring(0, ind);
    key = decodeURIComponent(key);
    key = key.replace(/\s/g, "");
    var data = decodeURIComponent(param.slice(ind + 1));
    if (data == null)
      data = "";
    data = data.replace(/\s/g, "");
    if (key.match(/^noindex$/i))
    {
      if (data.match(/^yes$|^true$/i))
        forceNoIndex = true;
      else if (data.match(/^no$|^false$/i))
        forceNoIndex = false
    }
  }
  GuidelineN.loadUserConfig();
  GuidelineN.filterGuideline();
  if (forceNoIndex)
  {
    GuidelineN.setupGuidelineTable(true);
    return
  }
  if (typeof(GuidelineN.setupSubTitle) === 'function')
    GuidelineN.setupSubTitle();
  GuidelineN.setupGuidelineTable(GuidelineN.initialOpen);
  GuidelineN.autoOpenGuidelineItem();
  GuidelineN.saveUserConfig();
  if (GuidelineN.enableFloatingMenu)
  {
    GuidelineN.setupFloatingMenu()
  }
  if (GuidelineN.openSettingPage)
  {
    GuidelineN.setupSettingPage()
  }
  GuidelineN.overwritePrintControllerSection();
  Reassemble.changePrintSettingButtonFace();
  GuidelineN.setupFilterButton();
  Reassemble.resizeHandler()
};
GuidelineN.setupGuidelineTable = function(initialOpen)
{
  $("tbody.guideline-item tr").each(function()
  {
    $(this).click(function(event)
    {
      if (event && event.target && event.target.localName == 'a' && event.target.href && event.target.title == "")
        return true;
      GuidelineN.toggleGuidelineItem(this, false, false, event)
    });
    if (initialOpen)
      GuidelineN.toggleGuidelineItem(this, true, true)
  });
  $("table.guideline-item tbody th.guidelineparam-header,table.guideline-item tbody td.guidelineparam-item").each(function()
  {
    $(this).click(function()
    {
      GuidelineN.toggleGuidelineParam(this)
    })
  })
};
GuidelineN.toggleGuidelineParam = function(obj)
{
  var tbody = $(obj).parentsUntil("table", "tbody");
  if (tbody.hasClass("guideline-item"))
    return;
  if (tbody.hasClass("guideline-fixed"))
    return;
  if (tbody.hasClass("guideline-idsection"))
    return;
  if (tbody.hasClass("guideline-tagsection"))
    return;
  if (tbody.hasClass("guideline-hidden"))
  {
    tbody.removeClass("guideline-hidden")
  }
  else
  {
    if (obj.localName == "td")
      return;
    tbody.addClass("guideline-hidden")
  }
};
GuidelineN.filterGuideline = function()
{
  $("#contents_tree span.header, #contents_tree span.item").each(function()
  {
    var visible = false;
    var w = $(this).children("a");
    if ((w != null) && (w.length > 0))
    {
      for (var n = 0; n < w.length; n++)
      {
        var href = w[n].href;
        if (typeof(href) != "string")
          continue;
        var ma = href.match(/Page_([0-9]+)\.html(#(GuidelineSectionLabel|GuidelineLabel|GuidelineDescLabel)_([0-9]+))?/i);
        if ((ma != null) && (ma.length > 1))
        {
          var pageid = ma[1];
          if ((ma.length > 4) && (ma[4] != null) && (ma[4] != ""))
            pageid = ma[4];
          var data = GuidelineN.pageIdToTagList[pageid];
          if (data == null)
            continue;
          for (var tag in data)
          {
            if (tag == "")
              continue;
            if (GuidelineN.enabledTagList[tag])
            {
              visible = true;
              break
            }
          }
        }
      }
    }
    if (visible)
    {
      $(this).addClass("guideline-highlighted")
    }
    else
    {
      $(this).removeClass("guideline-highlighted")
    }
    Reassemble.setFolderIconImage($(this).prev("img"))
  });
  $("table.guideline-item, div.pagetitle, h1").each(function()
  {
    GuidelineN.filterGuidelineItem(this)
  })
};
GuidelineN.filterGuidelineItem = function(obj)
{
  var visible = false;
  var tags = $(obj).data("tags");
  if (tags != null)
  {
    var taglist = tags.split(" ");
    for (var x = 0; x < taglist.length; x++)
    {
      var tag = taglist[x];
      if (tag == "")
        continue;
      if (GuidelineN.enabledTagList[tag])
      {
        visible = true;
        break
      }
    }
  }
  if (visible)
  {
    $(obj).addClass("guideline-highlighted")
  }
  else
  {
    $(obj).removeClass("guideline-highlighted")
  }
};
GuidelineN.toggleGuidelineItem = function(obj, forceOpen, toggleAll, evt)
{
  if (obj == null)
    return;
  if (!toggleAll && window.getSelection)
  {
    var selection = window.getSelection();
    if (!selection.isCollapsed)
      return
  }
  if ((typeof evt !== "undefined") && (evt != null))
  {
    if (evt.stopPropagation)
      evt.stopPropagation();
    if (evt.preventDefault)
      evt.preventDefault()
  }
  var frame = $(obj).parents("table.guideline-item");
  if (frame != undefined)
  {
    var filterClass = {
        "guideline-item": true, "guideline-fixed": true, "guideline-idsection": true, "guideline-tagsection": true
      };
    for (var filter in GuidelineN.displayParamSetting)
    {
      filterClass["guideline-" + filter] = GuidelineN.displayParamSetting[filter]
    }
    var collapsed = $(frame).data("collapsed") || forceOpen;
    var tbodys = $(frame).find("tbody[class^='guideline-']");
    for (var x = 0; x < tbodys.length; x++)
    {
      var tbody = tbodys[x];
      if (collapsed)
      {
        var classnamelist = tbody.className.split(" ");
        for (var y = 0; y < classnamelist.length; y++)
        {
          var classname = classnamelist[y];
          if (classname == "")
            continue;
          if (classname == "guideline-hidden")
            continue;
          if (classname.indexOf("guideline-") < 0)
            continue;
          if (filterClass[classname])
          {
            $(tbody).removeClass("guideline-hidden")
          }
          else
          {
            $(tbody).addClass("guideline-hidden")
          }
        }
      }
      else
      {
        if ($(tbody).hasClass("guideline-item"))
          continue;
        if ($(tbody).hasClass("guideline-id"))
          continue;
        $(tbody).addClass("guideline-hidden")
      }
    }
    if (collapsed)
    {
      $(frame).addClass("guideline-expand")
    }
    else
    {
      $(frame).removeClass("guideline-expand")
    }
    $(frame).data("collapsed", !collapsed)
  }
};
GuidelineN.autoOpenGuidelineItem = function()
{
  if (location.hash.length > 1)
  {
    var targetId = location.hash.substr(1);
    if (targetId.match(/^GuidelineDescLabel_/))
    {
      var obj = $("table.guideline-item#" + targetId + " tbody.guideline-item tr");
      if (obj.length > 0)
      {
        GuidelineN.toggleGuidelineItem(obj[0], true, false);
        window.scrollTo(0, $("table.guideline-item#" + targetId).offset().top - 32)
      }
    }
    else if (targetId.match(/^GuidelineLabel_/))
    {
      var obj = $("#" + targetId);
      if (obj.length > 0)
        window.scrollTo(0, $("#" + targetId).offset().top - 16)
    }
  }
};
GuidelineN.toggleAllGuidelineItem = function(open)
{
  if (open)
  {
    $("tbody.guideline-item td").each(function()
    {
      GuidelineN.toggleGuidelineItem(this, true, true)
    })
  }
  else
  {
    $("table.guideline-item").each(function()
    {
      var tbodys = $(this).find("tbody[class^='guideline-']");
      for (var x = 0; x < tbodys.length; x++)
      {
        var tbody = tbodys[x];
        if ($(tbody).hasClass("guideline-item"))
          continue;
        $(tbody).addClass("guideline-hidden")
      }
      $(this).removeClass("guideline-expand");
      $(this).data("collapsed", true)
    })
  }
};
GuidelineN.updateExpandedGuidelineItem = function()
{
  $("table.guideline-item.guideline-expand tbody.guideline-item tr").each(function()
  {
    GuidelineN.toggleGuidelineItem(this, true, false)
  })
};
GuidelineN.setupFloatingMenu = function()
{
  var menu = "";
  menu += "<div id=\"guideline-floatingmenu\">";
  menu += "<div id=\"guideline-floatingmenu-base\"" + (GuidelineN.openFloatingMenu ? " class=\"focused\"" : "") + ">";
  menu += "<div id=\"guideline-floatingmenu-left\">";
  menu += "</div>";
  menu += "<div id=\"guideline-floatingmenu-toggler\">";
  menu += "</div>";
  menu += "<div id=\"guideline-floatingmenu-right\">";
  if (!GuidelineN.flipFloatingMenu)
  {
    menu += "<div id=\"guideline-floatermenu\">";
    menu += "<input type=\"checkbox\" class=\"guideline-openclose-button\" id=\"guideline-openclose\" onclick=\"GuidelineN.toggleGuidelineOpenClose()\"" + (GuidelineN.initialOpen ? " checked" : "") + " /><label for=\"guideline-openclose\">" + Reassemble.escapeHtml(GuidelineN.guidelineButtonLabel) + "</label><br />";
    menu += "\n";
    menu += "<div id=\"guideline-section-filter-pane\">";
    for (var section in GuidelineN.displayParamTitle)
    {
      menu += "<input class=\"filter-section-button\" type=\"checkbox\" name=\"" + section + "\" id=\"section-" + section + "\" data-tag=\"" + section + "\" /><label for=\"section-" + section + "\"><span class=\"section-tag\">" + Reassemble.escapeHtml(GuidelineN.displayParamTitle[section]) + "</span></label><br />\n"
    }
    menu += "</div>";
    menu += "</div>"
  }
  menu += "</div>";
  menu += "</div>";
  menu += "</div>";
  if (GuidelineN.flipFloatingMenu)
  {
    menu += "<div id=\"guideline-floatermenu\">";
    menu += "<input type=\"checkbox\" class=\"guideline-openclose-button\" id=\"guideline-openclose\" onclick=\"GuidelineN.toggleGuidelineOpenClose()\"" + (GuidelineN.initialOpen ? " checked" : "") + " /><label for=\"guideline-openclose\">" + Reassemble.escapeHtml(GuidelineN.guidelineButtonLabel) + "</label><br />";
    menu += "\n";
    menu += "<div id=\"guideline-section-filter-pane\">";
    for (var section in GuidelineN.displayParamTitle)
    {
      menu += "<input class=\"filter-section-button\" type=\"checkbox\" name=\"" + section + "\" id=\"section-" + section + "\" data-tag=\"" + section + "\" /><label for=\"section-" + section + "\"><span class=\"section-tag\">" + Reassemble.escapeHtml(GuidelineN.displayParamTitle[section]) + "</span></label><br />\n"
    }
    menu += "</div>";
    menu += "</div>"
  }
  $("div.body_content").prepend(menu);
  $("input.filter-section-button").each(function()
  {
    var key = this.id.replace(/^section-/, "");
    if (typeof(GuidelineN.displayParamSetting[key]) != "undefined")
    {
      this.checked = GuidelineN.displayParamSetting[key];
      $(this).on("change", GuidelineN.changeDisplaySection)
    }
  });
  $("#guideline-floatingmenu-toggler").each(function()
  {
    $(this).on("click", GuidelineN.toggleFloatingMenu)
  })
};
GuidelineN.toggleFloatingMenu = function()
{
  GuidelineN.openFloatingMenu = !GuidelineN.openFloatingMenu;
  if (GuidelineN.openFloatingMenu)
  {
    $("#guideline-floatingmenu-base").addClass("focused");
    $("#guideline-floatermenu").addClass("focused")
  }
  else
  {
    $("#guideline-floatingmenu-base").removeClass("focused");
    $("#guideline-floatermenu").removeClass("focused")
  }
};
GuidelineN.setupSettingPage = function()
{
  var msg = "<p>";
  if (Reassemble.isLocalChrome())
    msg += Reassemble.escapeHtml(LocaleString.lcStrAlertPrintPageByChrome) + "<br /><br />";
  msg += Reassemble.escapeHtml(LocaleString.lcStrAlertGoPrintPage) + "<br />";
  msg += Reassemble.escapeHtml(LocaleString.lcStrLabelPrintSettingToolTip) + "<br />";
  msg += "</p>";
  $("#guidelinePrintCaution .note_new_right").html(msg)
};
GuidelineN.setupFilterButton = function()
{
  $("input.initialopen-button").each(function()
  {
    var key = this.id.replace(/^initial-/, "");
    this.checked = (GuidelineN.initialOpen && key == "open") || (!GuidelineN.initialOpen && key == "close");
    $(this).on("change", GuidelineN.changeInitialOpen)
  });
  $("input.filter-section-button").each(function()
  {
    var key = this.id.replace(/^section-/, "");
    if (typeof(GuidelineN.displayParamSetting[key]) != "undefined")
    {
      this.checked = GuidelineN.displayParamSetting[key];
      $(this).on("change", GuidelineN.changeDisplaySection)
    }
  });
  $("input.filter-function-button, input.filter-reader-button, input.filter-revision-button").each(function()
  {
    var tagname = $(this).data("tag");
    if (typeof(tagname) == "undefined")
      return;
    if (typeof(GuidelineN.enabledTagList[tagname]) != "undefined")
    {
      this.checked = GuidelineN.enabledTagList[tagname];
      $(this).on("change", GuidelineN.changeTagFilter)
    }
  })
};
GuidelineN.toggleGuidelineOpenClose = function()
{
  var obj = document.getElementById("guideline-openclose");
  if ((obj != null) && (typeof(obj.checked) == "boolean"))
    GuidelineN.changeAllOpenClose(obj.checked)
};
GuidelineN.changeAllOpenClose = function(open)
{
  GuidelineN.initialOpen = open;
  $("input.filter-section-button").each(function()
  {
    var key = this.id.replace(/^section-/, "");
    if (typeof(GuidelineN.displayParamSetting[key]) != "undefined")
    {
      this.checked = open;
      GuidelineN.applyUserConfig(this.id, (this.checked ? "true" : "false"))
    }
  });
  GuidelineN.saveUserConfig();
  GuidelineN.toggleAllGuidelineItem(GuidelineN.initialOpen);
  GuidelineN.updateExpandedGuidelineItem()
};
GuidelineN.changeInitialOpen = function(evt)
{
  var key = this.id.replace(/^initial-/, "");
  GuidelineN.initialOpen = (key == "open");
  GuidelineN.saveUserConfig();
  GuidelineN.toggleAllGuidelineItem(GuidelineN.initialOpen)
};
GuidelineN.changeDisplaySection = function(evt)
{
  var key = this.id.replace(/^section-/, "");
  if (typeof(GuidelineN.displayParamSetting[key]) != "undefined")
  {
    GuidelineN.applyUserConfig(this.id, (this.checked ? "true" : "false"));
    if (this.checked)
    {
      var obj = document.getElementById("guideline-openclose");
      if ((obj != null) && (typeof(obj.checked) == "boolean"))
        obj.checked = true;
      GuidelineN.initialOpen = true;
      GuidelineN.toggleAllGuidelineItem(true)
    }
    GuidelineN.saveUserConfig();
    GuidelineN.updateExpandedGuidelineItem()
  }
};
GuidelineN.changeTagFilter = function(evt)
{
  var tagname = $(this).data("tag");
  if (typeof(tagname) == "undefined")
    return;
  if (typeof(GuidelineN.enabledTagList[tagname]) != "undefined")
  {
    GuidelineN.applyUserConfig(tagname, (this.checked ? "true" : "false"));
    GuidelineN.saveUserConfig();
    var checked = this.checked;
    $("input[data-tag=\"" + tagname + "\"]").each(function()
    {
      this.checked = checked
    });
    GuidelineN.filterGuideline()
  }
};
GuidelineN.filterReset = function()
{
  $("input[type=checkbox]").each(function()
  {
    var tagname = $(this).data("tag");
    if (typeof(tagname) == "undefined")
      return;
    if (typeof(GuidelineN.enabledTagList[tagname]) != "undefined")
    {
      GuidelineN.applyUserConfig(tagname, "false");
      this.checked = false
    }
  });
  GuidelineN.saveUserConfig();
  GuidelineN.filterGuideline()
};
GuidelineN.hashchangeHandler = function()
{
  GuidelineN.autoOpenGuidelineItem()
};
GuidelineN.loadUserConfig = function()
{
  var keys = GuidelineN.loadKeyListFromStorage(GuidelineN.storagePath, GuidelineN.perpetuation);
  for (var n = 0; n < keys.length; n++)
  {
    var key = keys[n];
    if (key.match(/^userSettings/i))
    {
      var value = GuidelineN.loadFromStorage(key, GuidelineN.storagePath, GuidelineN.perpetuation);
      if (typeof(value) == "string")
      {
        try
        {
          var tmpObj = $.parseJSON(value);
          for (var paramName in tmpObj)
          {
            var value = tmpObj[paramName];
            if (typeof(value) == "boolean")
              value = (value ? "true" : "false");
            GuidelineN.applyUserConfig(paramName, value)
          }
        }
        catch(e)
        {
          GuidelineN.removeFromStorage(key, GuidelineN.storagePath, GuidelineN.perpetuation)
        }
      }
    }
  }
  if (typeof(GuidelineN.displayParamSetting["tagsection"]) != "undefined")
    delete GuidelineN.displayParamSetting["tagsection"]
};
GuidelineN.applyUserConfig = function(key, value)
{
  if (key.match(/^(function|reader|category|revision)-/))
  {
    if (typeof(GuidelineN.enabledTagList[key]) != "undefined")
    {
      GuidelineN.enabledTagList[key] = (value == "true")
    }
    else
    {
      GuidelineN.removeFromStorage(key, GuidelineN.storagePath, GuidelineN.perpetuation)
    }
  }
  else if (key.match(/^section-/))
  {
    key = key.replace(/^section-/, "");
    GuidelineN.displayParamSetting[key] = (value == "true")
  }
  else if (key == "initialOpen")
  {
    GuidelineN.initialOpen = (value == "true")
  }
};
GuidelineN.objectToJson = function(obj)
{
  if (typeof(JSON) == "object")
    return JSON.stringify(obj);
  return ""
};
GuidelineN.saveUserConfig = function()
{
  var settingCount = 0;
  var tmpObj = {};
  tmpObj["initialOpen"] = GuidelineN.initialOpen;
  for (var section in GuidelineN.displayParamSetting)
  {
    tmpObj["section-" + section] = GuidelineN.displayParamSetting[section]
  }
  var json = GuidelineN.objectToJson(tmpObj);
  GuidelineN.saveToStorage("userSettings" + settingCount, json, GuidelineN.storagePath, GuidelineN.perpetuation);
  var filterCount = 0;
  var filterLimit = 20;
  tmpObj = {};
  for (var tagname in GuidelineN.enabledTagList)
  {
    tmpObj[tagname] = GuidelineN.enabledTagList[tagname];
    filterCount++;
    if (filterCount >= filterLimit)
    {
      settingCount++;
      var json = GuidelineN.objectToJson(tmpObj);
      GuidelineN.saveToStorage("userSettings" + settingCount, json, GuidelineN.storagePath, GuidelineN.perpetuation);
      tmpObj = {};
      filterCount = 0
    }
  }
  if (filterCount > 0)
  {
    settingCount++;
    var json = GuidelineN.objectToJson(tmpObj);
    GuidelineN.saveToStorage("userSettings" + settingCount, json, GuidelineN.storagePath, GuidelineN.perpetuation)
  }
};
GuidelineN.loadFromStorage = function(name, path, eternal)
{
  if (eternal && window.localStorage)
  {
    for (var n = 0; n < window.localStorage.length; n++)
    {
      var key = window.localStorage.key(n);
      if (key == (path + name))
        return (window.localStorage.getItem(key))
    }
  }
  else if (window.sessionStorage)
  {
    for (var n = 0; n < window.sessionStorage.length; n++)
    {
      var key = window.sessionStorage.key(n);
      if (key == (path + name))
        return (window.sessionStorage.getItem(key))
    }
  }
  else
  {
    var settings = document.cookie.split(";");
    for (var n = 0; n < settings.length; n++)
    {
      var data = settings[n].split("=");
      var key = data[0].replace(/^ */, "");
      if (key == (path + name))
        return decodeURIComponent(data[1])
    }
  }
  return null
};
GuidelineN.loadKeyListFromStorage = function(path, eternal)
{
  var list = [];
  var regex = new RegExp("^" + Search.escapeRegex(path));
  if (eternal && window.localStorage)
  {
    for (var n = 0; n < window.localStorage.length; n++)
    {
      var key = window.localStorage.key(n);
      list.push(key.replace(regex, ""))
    }
  }
  else if (window.sessionStorage)
  {
    for (var n = 0; n < window.sessionStorage.length; n++)
    {
      var key = window.sessionStorage.key(n);
      list.push(key.replace(regex, ""))
    }
  }
  else
  {
    var settings = document.cookie.split(";");
    for (var n = 0; n < settings.length; n++)
    {
      var data = settings[n].split("=");
      var key = data[0].replace(/^ */, "");
      list.push(key.replace(regex, ""))
    }
  }
  return list
};
GuidelineN.saveToStorage = function(name, value, path, eternal)
{
  if (eternal && window.localStorage)
  {
    window.localStorage.setItem(path + name, (value))
  }
  else if (window.sessionStorage)
  {
    window.sessionStorage.setItem(path + name, (value))
  }
  else
  {
    var str = "";
    str += (path + name + "=" + encodeURIComponent(value));
    if (eternal)
      str += "; max-age=315360000; expires=Tue, 1-Jan-2030 00:00:00 GMT";
    document.cookie = str
  }
};
GuidelineN.removeFromStorage = function(name, path, eternal)
{
  if (eternal && window.localStorage)
  {
    window.localStorage.removeItem(path + name)
  }
  else if (window.sessionStorage)
  {
    window.sessionStorage.removeItem(path + name)
  }
  else
  {
    var str = "";
    str += (path + name + "=(remove!)");
    str += "; max-age=0; expires=Thr, 1-Jan-1970 00:00:00 GMT";
    document.cookie = str
  }
};
GuidelineN.exportUserConfig = function()
{
  var content = "# GuidelineConfig\n";
  content += "\n";
  content += "initialOpen=" + (GuidelineN.initialOpen ? "true" : "false") + "\n";
  content += "\n";
  for (var section in GuidelineN.displayParamSetting)
  {
    content += "section-" + section + "=" + (GuidelineN.displayParamSetting[section] ? "true" : "false") + "\n"
  }
  content += "\n";
  for (var tagname in GuidelineN.enabledTagList)
  {
    content += tagname + "=" + (GuidelineN.enabledTagList[tagname] ? "true" : "false") + "\n"
  }
  Reassemble.startDownload("exportGuidelineConfig", "GuidelineConfig.txt", "text/plain", content)
};
GuidelineN.fileSelectHandler = function(evt)
{
  var files = evt.target.files;
  if (files.length > 0)
  {
    FileLoader.loadFile(files[0], "Text", GuidelineN.importUserConfig)
  }
};
GuidelineN.dragStartHandler = function(obj, evt)
{
  $(obj).addClass("dragover")
};
GuidelineN.dragEndHandler = function(obj, evt)
{
  $(obj).removeClass("dragover")
};
GuidelineN.dragOverHandler = function(obj, evt)
{
  if (evt.preventDefault)
    evt.preventDefault();
  $(obj).addClass("dragover")
};
GuidelineN.fileDropHandler = function(obj, evt)
{
  evt.stopPropagation();
  evt.preventDefault();
  var files = evt.dataTransfer.files;
  if (files.length > 0)
  {
    FileLoader.loadFile(files[0], "Text", GuidelineN.importUserConfig)
  }
  $(obj).removeClass("dragover")
};
GuidelineN.importUserConfig = function(content)
{
  if (typeof(content) != "string")
  {
    alert("Invalid File");
    return
  }
  content = content.replace(/\r\n/g, "\n");
  if (!content.match(/^# GuidelineConfig\n/))
  {
    alert("Invalid File");
    return
  }
  var regex = new RegExp("^\\s*(#+)?\\s*([^=]*)=(.*?)$");
  var lines = content.replace("\r", "\n").split("\n");
  for (var n = 0; n < lines.length; n++)
  {
    var line = lines[n];
    if (line.match(regex))
    {
      if (RegExp.$1.length > 0)
        continue;
      GuidelineN.applyUserConfig(RegExp.$2, RegExp.$3)
    }
  }
  GuidelineN.saveUserConfig();
  GuidelineN.setupSettingPage();
  alert("Import Success!")
};
GuidelineN.resultCount = 0;
GuidelineN.resultData = [];
GuidelineN.guidelineSearchData = GuidelineN.guidelineSearchData || {};
GuidelineN.search = function(query, msgId, dstId, skip)
{
  var sobj = document.getElementById(msgId);
  var dobj = document.getElementById(dstId);
  if ((sobj == null) || (dobj == null))
    return;
  if ((typeof jQuery) != "function")
  {
    alert(LocaleString.lcStrMessageNeedJQuery);
    return
  }
  if (typeof(GuidelineN.guidelineSearchData) != "object")
  {
    return
  }
  if ($("#" + dstId).html() != "")
    return;
  GuidelineN.resultCount = 0;
  $("#" + msgId).html(LocaleString.lcStrMessageSearching);
  var queryArray = Search.parseQuery(query);
  var array = new Array(0);
  for (var id in GuidelineN.guidelineSearchData)
  {
    var ret = GuidelineN.matchQuery(queryArray, id);
    if (ret != null)
      array.push(ret)
  }
  array.sort(GuidelineN.resultSorter);
  while (skip > array.length)
    skip -= TemplateSettings.searchResultCountPerPage;
  if (skip < 0)
    skip = 0;
  var ext = "";
  for (var n = 0; n < array.length; n++)
  {
    var data = array[n];
    if (data == null)
      continue;
    if (n < skip)
      continue;
    var url = data["url"];
    var title = data["title"];
    var score = data["score"];
    title = title.replace(/&/ig, "&amp;").replace(/</ig, "&lt;").replace(/>/ig, "&gt;");
    url = Search.addQueryToURL(url, query, "highlighttext");
    if ((url.length > 1) && (url[0] == "/"))
      url = url.slice(1);
    ext += "<p class=\"search_result_title\">";
    ext += "<a href=\"" + url + "\">" + title + "</a>";
    ext += "<br />";
    ext += "</p>";
    ext += "<div class=\"search_result_line\">";
    ext += data["html"];
    ext += "</div>";
    GuidelineN.resultCount++;
    if (GuidelineN.resultCount >= TemplateSettings.searchResultCountPerPage)
      break
  }
  $("#" + dstId).append($(ext));
  var msgBtn = "";
  if (skip > 0)
    msgBtn += (" <input type=\"button\" onclick=\"btnClick('" + (skip - TemplateSettings.searchResultCountPerPage) + "')\" value=\"" + (LocaleString.lcStrLabelSearchPrev.replace("%c%", TemplateSettings.searchResultCountPerPage)) + "\">");
  if ((skip + TemplateSettings.searchResultCountPerPage) < array.length)
    msgBtn += (" <input type=\"button\" onclick=\"btnClick('" + (skip + TemplateSettings.searchResultCountPerPage) + "')\" value=\"" + (LocaleString.lcStrLabelSearchNext.replace("%c%", TemplateSettings.searchResultCountPerPage)) + "\">");
  var msg = "";
  msg += "<hr class=\"" + TemplateSettings.searchMessageLineStyle + "\">";
  msg += (LocaleString.lcStrLabelSearchResult.replace("%r%", "" + array.length));
  if (array.length > 0)
    msg += (LocaleString.lcStrLabelSearchView.replace("%s%", "" + (skip + 1)).replace("%e%", "" + (skip + GuidelineN.resultCount)));
  msg += msgBtn;
  msg += "<hr class=\"" + TemplateSettings.searchMessageLineStyle + "\">";
  $("#" + msgId).html(msg);
  if (msgBtn != "")
  {
    var html = $("#" + dstId).html() + ("<div>" + msg + "</div>");
    $("#" + dstId).html(html)
  }
  var strReg = "";
  for (var x = 0; x < queryArray.length; x++)
  {
    if (queryArray[x] == "")
      continue;
    if (queryArray[x].match(/^ +$/))
      continue;
    if (queryArray[x].charAt(0) == "\t")
      continue;
    var str = Search.escapeRegex(queryArray[x]);
    if (strReg != "")
      strReg += "|";
    strReg += str
  }
  if (strReg != "")
  {
    var objDivContent = document.getElementById(Reassemble.autoindexContentId);
    if (objDivContent != null)
    {
      $(document).ready(Reassemble.highlightText(document, objDivContent, strReg, "search_highlight"))
    }
    else
    {
      $(document).ready(Reassemble.highlightText(document, document.body, strReg, "search_highlight"))
    }
  }
  GuidelineN.filterGuideline();
  GuidelineN.setupFilterButton();
  GuidelineN.setupGuidelineTable(GuidelineN.initialOpen);
  GuidelineN.setupFloatingMenu();
  if (typeof(GuidelineN.setupSubTitle) === 'function')
    GuidelineN.setupSubTitle();
  var cursorType = "zoom-in";
  var UA = window.navigator.userAgent;
  if ((UA != null) && ((UA.match(/MSIE \d+.\d+/i) != null) || (UA.match(/Trident\/\d+.\d+/i) != null)))
    cursorType = "pointer";
  $("#" + dstId + " img").each(function()
  {
    if ($(this).parents("a").length == 0)
    {
      if (this.title.match(/^DoNotOpen(Image)?Viewer/i) != null)
      {
        this.title = this.title.replace(/^DoNotOpen(Image)?Viewer\s*/i, "")
      }
      else
      {
        this.title = LocaleString.lcStrOpenViewer;
        $(this).click(function()
        {
          Reassemble.viewImage(this)
        }).css("cursor", cursorType)
      }
    }
    else
    {
      this.title = LocaleString.lcStrLinkJump
    }
  });
  $("#" + dstId + " div.expand-container").each(function()
  {
    var expandId = this.id.replace("expander-", "");
    $("#expander-control-" + expandId).click(function()
    {
      Reassemble.expandMacro(this)
    })
  })
};
GuidelineN.resultSorter = function(dataA, dataB)
{
  if (dataA["type"] != dataB["type"])
    return (dataB["type"] - dataA["type"]);
  if (dataA["intitle"] != dataB["intitle"])
    return (dataB["intitle"] - dataA["intitle"]);
  if (dataA["score"] == dataB["score"])
  {
    if (dataA["title"] < dataB["title"])
      return -1;
    return 1
  }
  return (dataB["score"] - dataA["score"])
};
GuidelineN.matchQuery = function(queryArray, id)
{
  var data = GuidelineN.guidelineSearchData[id];
  if (typeof(data) == "undefind")
    return null;
  var find = false;
  var rst = "";
  var onlyInvert = true;
  var findInvert = false;
  var score = 0;
  var inGuidelineParam = false;
  var hitGuidelineParam = {};
  var reList = [];
  var isGuideline = (data["Type"] == "G");
  var reAttachments = new RegExp("\\.\\.\\/Attachments\\/", "ig");
  var rePages = new RegExp("\\.\\.\\/Pages\\/", "ig");
  var findTag = false;
  var tagList = [];
  if (isGuideline)
  {
    var tags = data["Tags_html"];
    var match = tags[0].match(/data-tag=\".*?\"/ig);
    if (match != null)
    {
      for (var n = 0; n < match.length; n++)
      {
        var tag = match[n].replace(/data-tag=/i, "");
        tag = tag.replace(/\"/g, "");
        tagList.push(tag)
      }
    }
  }
  var inTitle = false;
  var qCheck = true;
  for (var n = 0; n < queryArray.length; n++)
  {
    var qScore = 0;
    if (queryArray[n] == "")
      continue;
    if (queryArray[n].match(/^ +$/))
      continue;
    var invert = false;
    var str = queryArray[n];
    if (str.charAt(0) == "\t")
    {
      str = str.slice(1);
      if (str.match(/^ +$/))
        continue;
      invert = true
    }
    else
    {
      onlyInvert = false
    }
    str = Search.escapeRegex(str);
    var re = new RegExp(str, "i");
    var reS = new RegExp(str, "ig");
    if (!invert)
      reList.push(re);
    for (var param in GuidelineN.searchScoreSetting)
    {
      var temp = 0;
      var text = data[param];
      var paramType = typeof(text);
      if (paramType == "undefined")
        continue;
      if (paramType == "string")
      {
        temp = GuidelineN.calcSearchScore(reS, invert, text, GuidelineN.searchScoreSetting[param])
      }
      else
      {
        for (var x = 0; x < text.length; x++)
        {
          if (typeof(text[x]) == "string")
            temp = GuidelineN.calcSearchScore(reS, invert, text[x], GuidelineN.searchScoreSetting[param])
        }
      }
      if (temp < 0)
      {
        findInvert = true
      }
      else if (temp > 0)
      {
        qScore += temp;
        if (param == "Title")
          inTitle = true;
        if (typeof(GuidelineN.searchInParamSetting) == "object")
        {
          inGuidelineParam |= GuidelineN.searchInParamSetting[param];
          hitGuidelineParam[param] = GuidelineN.searchInParamSetting[param]
        }
      }
    }
    if (qScore > 0)
    {
      score += qScore
    }
    else if ((qScore == 0) && !invert)
    {
      qCheck = false
    }
  }
  find = qCheck;
  if (find && !findInvert && !onlyInvert)
  {
    var ret = {};
    ret["id"] = id;
    ret["title"] = data["Title"];
    ret["url"] = GuidelineN.searchBaseUrl + data["Url"];
    switch (data["Type"])
    {
      case"G":
        ret["type"] = 0;
        break;
      case"S":
        ret["type"] = 1;
        break;
      case"C":
        ret["type"] = 2;
        break;
      case"F":
      case"P":
        ret["type"] = 2;
        break;
      default:
        ret["type"] = 0;
        break
    }
    ret["intitle"] = (inTitle ? 1 : 0);
    var html = "";
    if (isGuideline)
    {
      html += "<table class=\"guideline-item\" id=\"GuidelineDescLabel_" + id + "\" data-tags=\"";
      for (var n = 0; n < tagList.length; n++)
      {
        if (n > 0)
          html += " ";
        html += tagList[n]
      }
      html += "\" data-collapsed=\"true\">";
      var param = data["Definition_html"];
      if (typeof(param) == "undefined")
        param = [""];
      var rowspan = param.length;
      var rowspanHtml = " rowspan=\"" + rowspan + "\"";
      html += "<tbody class=\"guideline-item\"><tr><th class=\"guidelineparam-spacer\"" + ((rowspan > 1) ? rowspanHtml : "") + "></th>";
      html += "<td colspan=\"2\"><div class=\"guideline-title\"><table class=\"layout-noborder\"><tr><td class=\"layout-noborder\"><div class=\"guideline-icon" + (inGuidelineParam ? " search-result-in-param" : "") + "\"></div></td><td class=\"layout-noborder\"><a href=\"" + GuidelineN.searchBaseUrl + data["Url"] + "\">" + data["GuidelineId"] + ": " + data["GuidelineTitle"] + "</a></td></tr></table></div><div class=\"guidelineparam-itemtext\">";
      for (var n = 0; n < rowspan; n++)
      {
        if (n > 0)
          html += "<tr><td colspan=\"2\"><div class=\"guidelineparam-itemtext\">";
        html += param[n].replace(reAttachments, GuidelineN.searchBaseUrl + "Attachments/").replace(rePages, GuidelineN.searchBaseUrl + "Pages/") + "</td></div>";
        html += "</tr>"
      }
      html += "</tbody>";
      html += GuidelineN.makeGuidelineItemHtml(data, "fixed", hitGuidelineParam);
      html += GuidelineN.makeGuidelineItemHtml(data, "backgrounder", hitGuidelineParam);
      html += GuidelineN.makeGuidelineItemHtml(data, "testsection", hitGuidelineParam);
      html += GuidelineN.makeGuidelineItemHtml(data, "tagsection", hitGuidelineParam);
      html += GuidelineN.makeGuidelineItemHtml(data, "changelogsection", hitGuidelineParam);
      html += "</table>"
    }
    else
    {
      html = data["Text"];
      var findPos = html.length;
      for (var n = 0; n < reList.length; n++)
      {
        var pos = html.search(reList[n]);
        if (pos < 0)
          continue;
        if (pos < findPos)
          findPos = pos
      }
      if (findPos >= html.length)
        findPos = 0;
      var start = 0;
      if (findPos < TemplateSettings.searchResultDigestLength)
      {
        start = 0
      }
      else if ((findPos + TemplateSettings.searchResultDigestLength) > html.length)
      {
        start = html.length - TemplateSettings.searchResultDigestLength * 2
      }
      else
      {
        start = findPos - TemplateSettings.searchResultDigestLength
      }
      if (start < 0)
        start = 0;
      html = (((start > 0) ? "..." : "") + html.substr(start, TemplateSettings.searchResultDigestLength * 2) + (((start + TemplateSettings.searchResultDigestLength * 2) < html.length) ? "..." : ""))
    }
    ret["html"] = html;
    ret["score"] = score;
    return ret
  }
  return null
};
GuidelineN.makeGuidelineItemHtml = function(data, section, hitparam)
{
  var reAttachments = new RegExp("\\.\\.\\/Attachments\\/", "ig");
  var rePages = new RegExp("\\.\\.\\/Pages\\/", "ig");
  var html = "";
  var hit = false;
  var paramList = GuidelineN.displayParamTarget[section];
  if ((typeof(paramList) == "object") && (paramList.length > 0))
  {
    for (var x = 0; x < paramList.length; x++)
    {
      var paramName = paramList[x]["name"];
      hit |= (typeof(hitparam[paramName]) != "undefined")
    }
  }
  html += "<tbody class=\"guideline-" + section + " guideline-hidden" + (hit ? " search-result-in-param" : "") + "\">";
  if ((typeof(paramList) == "object") && (paramList.length > 0))
  {
    for (var x = 0; x < paramList.length; x++)
    {
      var paramName = paramList[x]["name"];
      var paramFlag = paramList[x]["flag"];
      var param = data[paramName + "_html"];
      if ((typeof(param) == "undefined") || param.length == 0)
      {
        if (paramFlag)
          html += "<tr><th class=\"guidelineparam-spacer\"></th><th class=\"guidelineparam-header\">" + GuidelineN.guidelineParamTitle[paramName] + "</th><td class=\"guidelineparam-item\"><div class=\"guidelineparam-itemtext\"></div></td></tr>"
      }
      else
      {
        var rowspan = param.length;
        var rowspanHtml = " rowspan=\"" + rowspan + "\"";
        html += "<tr><th class=\"guidelineparam-spacer\"" + ((rowspan > 1) ? rowspanHtml : "") + "></th><th class=\"guidelineparam-header\">" + GuidelineN.guidelineParamTitle[paramName] + "</th>";
        for (var n = 0; n < rowspan; n++)
        {
          if (n > 0)
            html += "<tr>";
          html += "<td class=\"guidelineparam-item\"><div class=\"guidelineparam-itemtext\">" + param[n].replace(reAttachments, GuidelineN.searchBaseUrl + "Attachments/").replace(rePages, GuidelineN.searchBaseUrl + "Pages/") + "</div></td>";
          html += "</tr>"
        }
      }
    }
  }
  html += "</tbody>";
  return html
};
GuidelineN.calcSearchScore = function(reS, invert, text, mul)
{
  var match = text.match(reS);
  if (match != null)
  {
    if (!invert)
    {
      return (match.length * mul)
    }
    else
    {
      return -9999
    }
  }
  return 0
};
GuidelineN.exportGuideline = function(fullmode)
{
  if (typeof(GuidelineN.guidelineSearchData) != "object")
  {
    alert("No index data!");
    return
  }
  if ((typeof(GuidelineN.guidelineComponentList) == "undefined") || (GuidelineN.guidelineComponentList.length <= 0))
  {
    alert("No component data!");
    return
  }
  var workbook = ExcelBuilder.createWorkbook();
  var stylesheet = workbook.getStyleSheet();
  var borderStyle = {
      style: "thin", color: "FF000000"
    };
  var emptyStyle = stylesheet.createFormat({});
  var headerStyle = stylesheet.createFormat({
      font: {bold: true}, alignment: {horizontal: "center"}, border: {
          top: borderStyle, left: borderStyle, right: borderStyle, bottom: borderStyle
        }, fill: {
          type: "pattern", patternType: "solid", fgColor: "FFD3D3D3", bgColor: "FFD3D3D3"
        }
    });
  var dataStyle = stylesheet.createFormat({
      font: {bold: false}, alignment: {
          horizontal: "left", vertical: "top", wrapText: true
        }, border: {
          top: borderStyle, left: borderStyle, right: borderStyle, bottom: borderStyle
        }
    });
  var statusStyle = stylesheet.createFormat({
      font: {bold: false}, alignment: {
          horizontal: "left", vertical: "top", wrapText: true
        }, border: {
          top: borderStyle, left: borderStyle, right: borderStyle, bottom: borderStyle
        }, fill: {
          type: "pattern", patternType: "solid", fgColor: "FFC2EAFC", bgColor: "FFC2EAFC"
        }
    });
  var highlightStyle = stylesheet.createFormat({
      font: {bold: false}, alignment: {
          horizontal: "left", vertical: "top", wrapText: true
        }, border: {
          top: borderStyle, left: borderStyle, right: borderStyle, bottom: borderStyle
        }, fill: {
          type: "pattern", patternType: "solid", fgColor: "FFFCDD62", bgColor: "FFFCDD62"
        }
    });
  var columnStyles = {
      emptyStyle: emptyStyle, headerStyle: headerStyle, dataStyle: dataStyle, statusStyle: statusStyle, highlightStyle: highlightStyle
    };
  for (var n = 0; n < GuidelineN.guidelineComponentList.length; n++)
  {
    var component = GuidelineN.guidelineComponentList[n];
    if (typeof(component) == "undefined")
      continue;
    var worksheet = workbook.createWorksheet();
    worksheet.name = component.name;
    var columns = GuidelineN.getGuidelineColumnDefinition(columnStyles, fullmode);
    var workData = [];
    var workSheetData = [];
    workData = GuidelineN.getGuidelineExportEmptyRow(columnStyles, fullmode);
    workSheetData.push(workData);
    workData = GuidelineN.getGuidelineExportHeaderRow(columnStyles, fullmode);
    workSheetData.push(workData);
    for (var x = 0; x < component.list.length; x++)
    {
      var pid = GuidelineN.guidelineIdToPageIdList[component.list[x]];
      if (typeof(pid) == "undefined")
        continue;
      var data = GuidelineN.guidelineSearchData[pid];
      if (typeof(data) == "undefined")
        continue;
      if (data["Type"] != "G")
        continue;
      var findTag = false;
      var tags = data["Tags_html"];
      for (var tag in GuidelineN.enabledTagList)
      {
        if (tags[0].indexOf("\"" + tag + "\"") >= 0)
        {
          if (GuidelineN.enabledTagList[tag])
            findTag = true
        }
      }
      workData = GuidelineN.getGuidelineExportColumnData(pid, data, findTag, columnStyles, fullmode);
      workSheetData.push(workData)
    }
    worksheet.setData(workSheetData);
    worksheet.setColumns(columns);
    workbook.addWorksheet(worksheet)
  }
  var content = ExcelBuilder.createFile(workbook, {type: "blob"});
  var obj = Reassemble.objectTocData;
  var filename = "exportGuideline.xlsx";
  if (obj.getWindowTitle() != "")
  {
    filename = obj.getWindowTitle() + ".xlsx"
  }
  else if (obj.getTitle() != "")
  {
    filename = obj.getTitle() + ".xlsx"
  }
  filename = filename.replace(/[\/\\:\"<>\?\*]/g, "_");
  Reassemble.startDownload(fullmode ? "exportGuideline_full" : "exportGuideline", filename, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", content, "")
};
GuidelineN.makeCellValue = function(html)
{
  var ret = "";
  if (typeof(html) == "undefined")
    return ret;
  for (var n = 0; n < html.length; n++)
  {
    if (n > 0)
      ret += "<br/><br/>--------<br/><br/>";
    ret += html[n]
  }
  ret = GuidelineN.filterHtml(ret);
  ret = ret.replace(/</ig, "&lt;");
  ret = ret.replace(/>/ig, "&gt;");
  return Reassemble.unescapeHtml(ret)
};
GuidelineN.filterHtml = function(html)
{
  if (html == null)
    return "";
  if (typeof(html) != "string")
    return "";
  var ret = html;
  ret = Search.removeTagAndText(ret, "head");
  ret = Search.removeTagAndText(ret, "noscript");
  ret = Search.removeTagAndText(ret, "script");
  ret = Search.removeTagAndText(ret, "style");
  ret = Search.extractTextFromTag(ret, "pre", "", "", "", true);
  ret = ret.replace(/\n/g, "");
  ret = Search.extractTextFromTag(ret, "div", "class=\"(table|figure|code)\"", "", "\n", false);
  ret = ret.replace(/<!--(<!.*?>)-->/ig, "$1\n");
  ret = ret.replace(/<!--.*?-->/ig, "");
  ret = ret.replace(/<br( +[^>]*\/?>|>)/ig, "\n");
  ret = ret.replace(/<(th|td|dd)( +[^>]*>|>)/ig, "\t");
  ret = ret.replace(/<li( +[^>]*>|>)/ig, "\n\t\u00b7 ");
  ret = ret.replace(/<\/(h[1-6]|tr|p|ul|ol|dt|dd|div|li) *>/ig, "\n");
  ret = ret.replace(/<(?!!)[^>]*(?<!ここから|ここまで|from here|up to here)>/ig, "");
  ret = ret.replace(/&lt;/ig, "<");
  ret = ret.replace(/&gt;/ig, ">");
  ret = ret.replace(/&quot;/ig, "\"");
  ret = ret.replace(/&nbsp;/ig, " ");
  ret = ret.replace(/&amp;/ig, "&");
  ret = ret.replace(/\r/g, "");
  ret = ret.replace(/ +/g, " ");
  ret = ret.replace(/ \n/g, "\n");
  ret = ret.replace(/\n+/g, "\n");
  return ret
};
Reassemble.setEventHandler("load", GuidelineN.initialize);
Reassemble.setEventHandler("hashchange", GuidelineN.hashchangeHandler);
GuidelineN.overwritePrintControllerSection = function()
{
  $("form[name=" + TemplateSettings.searchBoxMiniFormName + "]").each(function()
  {
    this.action = TemplateSettings.getRootPath() + "Pages/" + TemplateSettings.searchFileName
  });
  var str = "";
  var tagNumber = 0;
  var url = location.pathname;
  var isHistory = (url.indexOf("history.html") >= 0);
  var reUrl = new RegExp("/Pages/Page_(.+?)\\.html?$");
  if (url.match(reUrl) || isHistory)
  {
    var objTitle = document.getElementById(TemplateSettings.printControllerTitleId);
    var objPane = document.getElementById(TemplateSettings.printControllerPaneId);
    if ((objTitle != null) && (objPane != null))
    {
      objTitle.innerHTML = Reassemble.escapeHtml(GuidelineN.functionFilterTitle);
      if (isHistory)
      {
        str += "<div class=\"guideline-filter-list\">";
        for (var x = 0; x < GuidelineN.revisionTagList.length; x++)
        {
          var tagname = GuidelineN.revisionTagList[x].label;
          var tagtext = GuidelineN.revisionTagList[x].text;
          str += "<input class=\"filter-revision-button\" type=\"checkbox\" name=\"" + Reassemble.escapeHtml(tagname) + "\" id=\"tagfilter" + tagNumber + "\" data-tag=\"" + Reassemble.escapeHtml(tagname) + "\" />";
          str += "<label for=\"tagfilter" + tagNumber + "\"><span class=\"revision-tag\">" + Reassemble.escapeHtml(tagtext) + "</span></label>";
          tagNumber++
        }
        str += "</div>"
      }
      else
      {
        var pageId = RegExp.$1;
        for (var n = 0; n < GuidelineN.guidelineComponentList.length; n++)
        {
          var component = GuidelineN.guidelineComponentList[n];
          if (component["pageid"] == pageId)
          {
            objTitle.innerHTML = Reassemble.escapeHtml(component["name"]);
            str += "<div class=\"guideline-filter-list\">";
            for (var x = 0; x < GuidelineN.functionTagList.length; x++)
            {
              var tagname = GuidelineN.functionTagList[x].label;
              var tagtext = GuidelineN.functionTagList[x].text;
              if (typeof(component["function-taglist"][tagname]) != "undefined")
              {
                str += "<input class=\"filter-function-button\" type=\"checkbox\" name=\"" + Reassemble.escapeHtml(tagname) + "\" id=\"tagfilter" + tagNumber + "\" data-tag=\"" + Reassemble.escapeHtml(tagname) + "\" />";
                str += "<label for=\"tagfilter" + tagNumber + "\"><span class=\"function-tag\">" + Reassemble.escapeHtml(tagtext) + "</span></label>";
                tagNumber++
              }
            }
            for (var x = 0; x < GuidelineN.revisionTagList.length; x++)
            {
              var tagname = GuidelineN.revisionTagList[x].label;
              var tagtext = GuidelineN.revisionTagList[x].text;
              if (typeof(component["revision-taglist"][tagname]) != "undefined")
              {
                str += "<input class=\"filter-revision-button\" type=\"checkbox\" name=\"" + Reassemble.escapeHtml(tagname) + "\" id=\"tagfilter" + tagNumber + "\" data-tag=\"" + Reassemble.escapeHtml(tagname) + "\" />";
                str += "<label for=\"tagfilter" + tagNumber + "\"><span class=\"revision-tag\">" + Reassemble.escapeHtml(tagtext) + "</span></label>";
                tagNumber++
              }
            }
            str += "</div>";
            break
          }
        }
      }
      str += "<div class=\"tag-filter-reset-base\"><span id=\"tag-filter-reset\" onclick=\"GuidelineN.filterReset()\">" + Reassemble.escapeHtml(GuidelineN.filterResetButtonLabel) + "</span></div>"
    }
    objPane.innerHTML = str;
    var objButton = $("#" + TemplateSettings.printControllerButtonId);
    if (objButton.length > 0)
    {
      objButton[0].title = GuidelineN.filterSettingTitle;
      objButton[0].value = GuidelineN.guidelineParamTitle["Tags"];
      Reassemble.togglePrintSettingButton = function()
      {
        Reassemble.viewPrintController = !Reassemble.viewPrintController;
        Reassemble.changePrintSettingButtonFace();
        Reassemble.saveSetting();
        Reassemble.resizeHandler()
      }
    }
    var objController = document.getElementById(TemplateSettings.printControllerId);
    if (objController != null)
    {
      if (tagNumber > 0)
        objController.style.display = "block"
    }
  }
  $("#guidelinePrintSetting").text(LocaleString.lcStrLabelPrintSetting);
  var selectObj = document.getElementById("guidelineSelectCategory");
  if (selectObj != null)
  {
    var optSelect = document.createElement("OPTION");
    optSelect.innerHTML = LocaleString.lcStrLabelSelectChapter;
    optSelect.value = "";
    selectObj.appendChild(optSelect);
    var objToc = Reassemble.objectTocData;
    if (objToc != null)
    {
      for (var i = 0; i < objToc.getDataCount(); i++)
      {
        var data = objToc.getData(i);
        if ((data != null) && (data.getType().match(/^(guideline_section|header|man_header)$/i)))
        {
          var optObj = document.createElement("OPTION");
          optObj.innerHTML = ((data.getType().match(/^man|^guideline/i) && objToc.isDisplayNumber() && (data.getLabel() != "")) ? (data.getLabel() + " ") : "") + data.getText();
          optObj.value = data.getCategory();
          selectObj.appendChild(optObj)
        }
      }
      var optObj = document.createElement("OPTION");
      optObj.innerHTML = LocaleString.lcStrLabelSelectAll;
      optObj.value = "*";
      selectObj.appendChild(optObj)
    }
  }
};
GuidelineN.viewPrintPage = function()
{
  var category = $("#guidelineSelectCategory option:selected").val();
  if ((category != null) && (category != ""))
  {
    if (Reassemble.isLocalChrome())
      alert(LocaleString.lcStrAlertPrintPageByChrome);
    var rootURL = $(TemplateSettings.selectorTocFile).attr("src").replace(TemplateSettings.templateTocFileName, "");
    location.href = rootURL + "printpage.html?category=" + encodeURIComponent(category)
  }
};
GuidelineN.currentGuidelineIcon = null;
GuidelineN.currentGuidelineParam = null;
GuidelineN.inGuidelineParam = false;
GuidelineN.inGuidelineParamHeader = false;
Reassemble.highlightText = function(objDocument, node, regex, className)
{
  if (node.nodeType == 3)
  {
    var val = node.nodeValue;
    var re = new RegExp(regex, "i");
    var pos = val.search(re);
    var text = re.exec(val);
    if (GuidelineN.inGuidelineParamHeader)
      return;
    if (pos >= 0 && !($(node.parentNode).hasClass(className)))
    {
      text = text[0];
      var span = objDocument.createElement("span");
      span.className = className;
      span.appendChild(objDocument.createTextNode(val.substr(pos, text.length)));
      var textNode = objDocument.createTextNode(val.substr(pos + text.length));
      node.parentNode.insertBefore(span, node.parentNode.insertBefore(textNode, node.nextSibling));
      node.nodeValue = val.substr(0, pos);
      Reassemble.highlightText(objDocument, textNode, regex, className);
      if (GuidelineN.inGuidelineParam && (GuidelineN.currentGuidelineIcon != null))
      {
        $(GuidelineN.currentGuidelineIcon).addClass("search-result-in-param");
        GuidelineN.currentGuidelineIcon = null
      }
      if (GuidelineN.currentGuidelineParam != null)
      {
        $(GuidelineN.currentGuidelineParam).addClass("search-result-in-param");
        GuidelineN.currentGuidelineParam = null
      }
    }
  }
  else
  {
    var name = (node.localName ? node.localName.toLowerCase() : node.nodeName ? node.nodeName.toLowerCase() : "");
    if (name == "img")
    {
      var alt = node.alt;
      if (alt != null)
      {
        var re = new RegExp(regex, "i");
        var pos = alt.search(re);
        if (pos >= 0)
        {
          var work = $(node);
          if (!(work.hasClass(className)))
            work.addClass(className)
        }
      }
    }
    if ((name == "button") || (name == "select") || (name == "textarea"))
      return;
    GuidelineN.inGuidelineParamHeader = false;
    if (name == "tbody")
    {
      var tmp = $(node);
      GuidelineN.currentGuidelineParam = null;
      GuidelineN.inGuidelineParam = false;
      for (var section in GuidelineN.displayParamTarget)
      {
        if (tmp.hasClass("guideline-" + section))
        {
          GuidelineN.inGuidelineParam = true;
          if (typeof(GuidelineN.displayParamSetting[section]) != "undefined")
            GuidelineN.currentGuidelineParam = node
        }
      }
    }
    else if (name == "div")
    {
      if (node.className.indexOf("guideline-icon") >= 0)
        GuidelineN.currentGuidelineIcon = node
    }
    else if (name == "th")
    {
      GuidelineN.inGuidelineParamHeader = (node.className.indexOf("guidelineparam-header") >= 0)
    }
    $(node.childNodes).each(function()
    {
      Reassemble.highlightText(objDocument, this, regex, className)
    })
  }
};
GuidelineN.setupTitlePicker = function()
{
  $("div.guideline-title").each(function()
  {
    $(this).append("<div class=\"guideline-title-picker\" onclick=\"GuidelineN.pickupTitle(this, event);\"></div>")
  });
  $("div.guideline-title-picker").each(function()
  {
    this.title = LocaleString.lcStrTitlePicker
  })
};
GuidelineN.pickupTitle = function(obj, evt)
{
  if (obj == null)
    return false;
  var parent = $(obj).parent();
  if (parent.length < 1)
    return false;
  if (window.getSelection)
  {
    window.getSelection().removeAllRanges();
    parent[0].focus();
    var range = document.createRange();
    range.selectNodeContents(parent[0]);
    window.getSelection().addRange(range)
  }
  else
  {
    return false
  }
  if (evt.stopPropagation)
    evt.stopPropagation();
  return false
};
Reassemble.changePackageImpl = function()
{
  if ((Reassemble.viewPackage != null) && (Reassemble.viewPackage != ""))
  {
    $("h1,h2,h3,h4,h5,h6,div.pagetitle,div.exclude").each(Reassemble.changePackageCss);
    $("div.openitem,table.guideline-item").each(Reassemble.changePackageCss2);
    $("a[href]").each(function()
    {
      Reassemble.changeIndexCssByPackage(this)
    })
  }
};
Reassemble.changePackageCss = function()
{
  var self = $(this);
  self.removeClass("guideline-disabled");
  self.next().removeClass("guideline-disabled");
  var pages = Reassemble.excludePages[Reassemble.viewPackage];
  var id = this.id.match(/_[0-9]+$/);
  if ((pages != null) && (id != null))
  {
    id = ("" + id).substr(1);
    if (pages[id] != null)
    {
      self.addClass("guideline-disabled");
      self.next().addClass("guideline-disabled")
    }
  }
};
Reassemble.changePackageCss2 = function()
{
  var self = $(this);
  self.removeClass("guideline-disabled");
  var pages = Reassemble.excludePages[Reassemble.viewPackage];
  var id = this.id.match(/_[0-9]+$/);
  if ((pages != null) && (id != null))
  {
    id = ("" + id).substr(1);
    if (pages[id] != null)
    {
      self.addClass("guideline-disabled")
    }
  }
};
Reassemble.setFolderIconImage = function(imgObj)
{
  if (imgObj == null)
    return;
  var spanObj = $(imgObj).next("span");
  if ($.isEmptyObject(spanObj))
    return;
  var isOpen = $(imgObj).hasClass(ExpandFolder.styleOpenImg);
  var isHL = spanObj.hasClass("guideline-highlighted");
  if (isHL)
  {
    if (isOpen)
    {
      $(imgObj).attr("src", TemplateSettings.getRootPath() + "template/img/icon_folder_open_tag.png")
    }
    else
    {
      $(imgObj).attr("src", TemplateSettings.getRootPath() + "template/img/icon_folder_close_tag.png")
    }
  }
  else
  {
    if (isOpen)
    {
      $(imgObj).attr("src", ExpandFolder.openIconPath)
    }
    else
    {
      $(imgObj).attr("src", ExpandFolder.closeIconPath)
    }
  }
};
ExpandFolder.initExpandFolder = function()
{
  $(ExpandFolder.selectorOpenItemDiv).each(function()
  {
    $(this).css("display", "block").attr(ExpandFolder.attributeFolded, false)
  });
  $(ExpandFolder.selectorCloseItemDiv).each(function()
  {
    $(this).css("display", "none").attr(ExpandFolder.attributeFolded, true)
  });
  $(ExpandFolder.selectorOpenItemImg).each(function()
  {
    Reassemble.setFolderIconImage(this)
  });
  $(ExpandFolder.selectorCloseItemImg).each(function()
  {
    Reassemble.setFolderIconImage(this)
  });
  $(ExpandFolder.selectorFileItemImg).each(function()
  {
    $(this).attr("src", ExpandFolder.fileIconPath)
  })
};
ExpandFolder.openAll = function()
{
  $(ExpandFolder.selectorOpenItemDiv + "," + ExpandFolder.selectorCloseItemDiv).each(function()
  {
    $(this).css("display", "block").attr(ExpandFolder.attributeFolded, false)
  });
  $(ExpandFolder.selectorCloseItemImg).each(function()
  {
    $(this).attr("src", ExpandFolder.openIconPath).attr("class", ExpandFolder.styleOpenImg);
    Reassemble.setFolderIconImage(this)
  })
};
ExpandFolder.closeAll = function()
{
  $(ExpandFolder.selectorOpenItemDiv + "," + ExpandFolder.selectorCloseItemDiv).each(function()
  {
    $(this).css("display", "none").attr(ExpandFolder.attributeFolded, true)
  });
  $(ExpandFolder.selectorOpenItemImg).each(function()
  {
    $(this).attr("src", ExpandFolder.closeIconPath).attr("class", ExpandFolder.styleCloseImg);
    Reassemble.setFolderIconImage(this)
  })
};
ExpandFolder.expand = function(id, objCaller, params)
{
  var fullopen = false;
  if (objCaller == null)
    return false;
  if ((params != null) && (params.length > 0))
  {
    if (params[0].ctrlKey)
      fullopen = true
  }
  else if (window.event != null)
  {
    if (window.event.ctrlKey)
      fullopen = true
  }
  if (!fullopen)
  {
    $("#" + id).each(function()
    {
      var isObjDisplay = ($(this).css("display") == "block");
      $(this).css("display", (isObjDisplay ? "none" : "block")).attr(ExpandFolder.attributeFolded, isObjDisplay);
      $(objCaller).attr("class", (isObjDisplay ? ExpandFolder.styleCloseImg : ExpandFolder.styleOpenImg));
      Reassemble.setFolderIconImage(objCaller)
    })
  }
  else
  {
    var divRoot = document.getElementById(id);
    if (divRoot == null)
      return false;
    $(divRoot).css("display", "block");
    var selector = "#" + id + ", #" + id + " div." + ExpandFolder.styleOpenDiv + ", #" + id + " div." + ExpandFolder.styleCloseDiv;
    $(selector).each(function()
    {
      $(this).css("display", "block").attr(ExpandFolder.attributeFolded, false)
    });
    $(objCaller).attr("src", ExpandFolder.openIconPath).attr("class", ExpandFolder.styleOpenImg);
    Reassemble.setFolderIconImage(objCaller);
    selector = "#" + id + " img." + ExpandFolder.styleOpenImg + ", #" + id + " img." + ExpandFolder.styleCloseImg;
    $(selector).each(function()
    {
      $(this).attr("class", ExpandFolder.styleOpenImg);
      Reassemble.setFolderIconImage(this)
    })
  }
}

GuidelineN.getGuidelineColumnDefinition = function(columnStyles, fullmode)
{
    // カラム定義
    var columns = [];

    columns.push({id: "EmptyColumn", name: "EmptyColumn", type: "string", style: columnStyles["emptyStyle"].id, width: 3});
    columns.push({id: "DisplayStatus", name: "DisplayStatus", type: "string", style: columnStyles["dataStyle"].id, width: 10});
    columns.push({id: "ItemName", name: "ItemName", type: "string", style: columnStyles["dataStyle"].id, width: 30});
    columns.push({id: "Definition", name: "Definition", type: "string", style: columnStyles["dataStyle"].id, width: 30});
    columns.push({id: "TestObject", name: "TestObject", type: "string", style: columnStyles["dataStyle"].id, width: 30});
    columns.push({id: "Exclusion", name: "Exclusion", type: "string", style: columnStyles["dataStyle"].id, width: 30});
    if (fullmode === true) columns.push({id: "Backgrounder", name: "Backgrounder", type: "string", style: columnStyles["dataStyle"].id, width: 30});
    if (fullmode === true) columns.push({id: "Reference", name: "Reference", type: "string", style: columnStyles["dataStyle"].id, width: 30});
    columns.push({id: "TestMethod", name: "TestMethod", type: "string", style: columnStyles["dataStyle"].id, width: 30});
    columns.push({id: "Criterion", name: "Criterion", type: "string", style: columnStyles["dataStyle"].id, width: 30});
    columns.push({id: "Tips", name: "Tips", type: "string", style: columnStyles["dataStyle"].id, width: 30});

    return columns;
}

GuidelineN.getGuidelineExportEmptyRow = function(columnStyles, fullmode)
{
    // 空行
    var workData = [];

    workData.push({ value: "", metadata: {style: columnStyles["emptyStyle"].id, type: "string"}});
    workData.push({ value: "", metadata: {style: columnStyles["emptyStyle"].id, type: "string"}});
    workData.push({ value: "", metadata: {style: columnStyles["emptyStyle"].id, type: "string"}});
    workData.push({ value: "", metadata: {style: columnStyles["emptyStyle"].id, type: "string"}});
    workData.push({ value: "", metadata: {style: columnStyles["emptyStyle"].id, type: "string"}});
    workData.push({ value: "", metadata: {style: columnStyles["emptyStyle"].id, type: "string"}});
    if (fullmode === true) workData.push({ value: "", metadata: {style: columnStyles["emptyStyle"].id, type: "string"}});
    if (fullmode === true) workData.push({ value: "", metadata: {style: columnStyles["emptyStyle"].id, type: "string"}});
    workData.push({ value: "", metadata: {style: columnStyles["emptyStyle"].id, type: "string"}});
    workData.push({ value: "", metadata: {style: columnStyles["emptyStyle"].id, type: "string"}});
    workData.push({ value: "", metadata: {style: columnStyles["emptyStyle"].id, type: "string"}});

    return workData;
}

GuidelineN.getGuidelineExportHeaderRow = function(columnStyles, fullmode)
{
    // ヘッダ
    var workData = [];
    workData.push({value: GuidelineN.guidelineParamTitle["EmptyColumn"], metadata: {style: columnStyles["headerStyle"].id, type: "string"}});
    workData.push({value: GuidelineN.guidelineParamTitle["DisplayStatus"], metadata: {style: columnStyles["headerStyle"].id, type: "string"}});
    workData.push({value: GuidelineN.guidelineParamTitle["ItemName"], metadata: {style: columnStyles["headerStyle"].id, type: "string"}});
    workData.push({value: GuidelineN.guidelineParamTitle["Definition"], metadata: {style: columnStyles["headerStyle"].id, type: "string"}});
    workData.push({value: GuidelineN.guidelineParamTitle["TestObject"], metadata: {style: columnStyles["headerStyle"].id, type: "string"}});
    workData.push({value: GuidelineN.guidelineParamTitle["Exclusion"], metadata: {style: columnStyles["headerStyle"].id, type: "string"}});
    if (fullmode === true) workData.push({value: GuidelineN.guidelineParamTitle["Backgrounder"], metadata: {style: columnStyles["headerStyle"].id, type: "string"}});
    if (fullmode === true) workData.push({value: GuidelineN.guidelineParamTitle["Reference"], metadata: {style: columnStyles["headerStyle"].id, type: "string"}});
    workData.push({value: GuidelineN.guidelineParamTitle["TestMethod"], metadata: {style: columnStyles["headerStyle"].id, type: "string"}});
    workData.push({value: GuidelineN.guidelineParamTitle["Criterion"], metadata: {style: columnStyles["headerStyle"].id, type: "string"}});
    workData.push({value: GuidelineN.guidelineParamTitle["Tips"], metadata: {style: columnStyles["headerStyle"].id, type: "string"}});

    return workData;
}

GuidelineN.getGuidelineExportColumnData = function(pid, data, findTag, columnStyles, fullmode)
{
    var workData = [];
    workData.push({value: "", metadata: {style: columnStyles["emptyStyle"].id, type: "string"}});
    workData.push({value: (findTag ? "\u2714" : ""), metadata: {style: (findTag ? columnStyles["highlightStyle"].id : columnStyles["statusStyle"].id), type: "string"}});
    workData.push({value: Search.filterHtml(data["GuidelineId"] + ": " + data["GuidelineTitle_html"]), metadata: {style: (findTag ? columnStyles["highlightStyle"].id : columnStyles["statusStyle"].id), type: "string"}});
    workData.push({value: GuidelineN.makeCellValue(data["Definition_html"]), metadata: {style: columnStyles["dataStyle"].id, type: "string"}});
    workData.push({value: GuidelineN.makeCellValue(data["TestObject_html"]), metadata: {style: columnStyles["dataStyle"].id, type: "string"}});
    workData.push({value: GuidelineN.makeCellValue(data["Exclusion_html"]), metadata: {style: columnStyles["dataStyle"].id, type: "string"}});
    if (fullmode === true) workData.push({value: GuidelineN.makeCellValue(data["Backgrounder_html"]), metadata: {style: columnStyles["dataStyle"].id, type: "string"}});
    if (fullmode === true) workData.push({value: GuidelineN.makeCellValue(data["Reference_html"]), metadata: {style: columnStyles["dataStyle"].id, type: "string"}});
    workData.push({value: GuidelineN.makeCellValue(data["TestMethod_html"]), metadata: {style: columnStyles["dataStyle"].id, type: "string"}});
    workData.push({value: GuidelineN.makeCellValue(data["Criterion_html"]), metadata: {style: columnStyles["dataStyle"].id, type: "string"}});
    workData.push({value: GuidelineN.makeCellValue(data["Tips_html"]), metadata: {style: columnStyles["dataStyle"].id, type: "string"}});

    return workData;
}
GuidelineN.setupSubTitle = function() {};
