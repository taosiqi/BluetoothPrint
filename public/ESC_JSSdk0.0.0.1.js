if (!window.ESC_JSSDK) {
    window.ESC_JSSDK = {}
}

ESC_JSSDK.Printer = function () {
    var args = arguments.length;
    this.ip = (args > 0) ? arguments[0] : "127.0.0.1";
    this.model = (args > 1) ? arguments[1] : "TP806";
    this.timeout = (args > 2) ? arguments[2] : 3000;
    this.port = (args > 3) ? arguments[3] : "";
    this.interfacePort = (args > 4) ? arguments[4] : "USB";
    this.tag = (args > 5) ? arguments[5] : "";
    this.tag_port = (args > 6) ? arguments[6] : "";
    this.E_TIMEOUT = -5;
    this.E_UNKNOWN = -1;
    this.onError = this.onComplete = null;
    this.sentSuccess = false;
    this.inTransaction = false;
    this.status = '';
};
ESC_JSSDK.Printer.prototype.setIp = function (ip) {
    this.ip = ip;
};
ESC_JSSDK.Printer.prototype.setPort = function (port) {
    this.port = port;
};
ESC_JSSDK.Printer.prototype.setModel = function (model) {
    this.model = model;
};

ESC_JSSDK.Printer.prototype.print = function () {
    var ip = this.ip;
    var port = this.port;
    var model = this.model;
    var interfacePort = this.interfacePort;
    var tag = this.tag;
    var tag_port = this.tag_port;
    if (!HPRT_PrintData) {
        return false;
    }
    return senddata(ip, port, model,HPRT_PrintData,interfacePort,tag,tag_port);
    // senddata(ip, port, model,HPRT_PrintData,interfacePort);
}

function senddata(ip, port, model,HPRT_PrintData,interfacePort,tag,tag_port) {

    var sendDataString = "{"+
        "\"model\":\""+model+"\","+
        "\"printerID\":\"ESC\","+
        "\"interface\":\""+interfacePort;
        tag !='' ? sendDataString+= ','+tag : '';
        tag_port !='' ? sendDataString+= ','+tag_port : '';
        sendDataString+= '\",'+
        "\"printers\":[{"+
        "\"Items\":[" + HPRT_PrintData+ "]}]"+
        "}";

    return sendDataString;
   // pushData(ip,port,decodeURIComponent(sendDataString));
};

ESC_JSSDK.Builder = function () {
    HPRT_PrintData = "";
    validateAlign = /^(left|center|right)$/;
    validateFont = /^(font_[ab]|special_[ab])$/;
    validateColor = /^(none|color_[1-4])$/;
    validateFeed = /^(peeling|cutting|current_tof|next_tof)$/;
    validateMode = /^(mono|gray16)$/;
    validateBarcode = /^(upc_[ae]|[ej]an13|[ej]an8|code(39|93|128)|itf|codabar|gs1_128|gs1_databar_(omnidirectional|truncated|limited|expanded))$/;
    validateHri = /^(none|above|below|both)$/;
    validateSymbol = /^(pdf417_(standard|truncated)|qrcode_model_[12]|maxicode_mode_[2-6]|gs1_databar_(stacked(_omnidirectional)?|expanded_stacked)|azteccode_(fullrange|compact)|datamatrix_(square|rectangle_(8|12|16)))$/;
    validateLevel = /^(level_[0-8lmqh]|default)$/;
    validateLine = /^(thin|medium|thick)(_double)?$/;
    validateDirection = /^(left_to_right|bottom_to_top|right_to_left|top_to_bottom)$/;
    validateCut = /^(Full Cut|Partial Cut)$/;
    validateDrawer = /^drawer_[12]$/;
    validatePulse = /^pulse_[1-5]00$/;
    validatePattern = /^(none|pattern_(10|[1-9a-e])|error|paper_end)$/;
    validateLayout = /^(receipt|label)(_bm)?$/;

};


function createTypeString(typeName) {
    return "\"itemtype\":\"" + typeName.toString() + "\"";
}

function createStr(paramNa, paramVa, valiString) {
    if (valiString && valiString.length > 0) {
        if (!valiString.test(paramVa)) {
            throw new Error('Parameter "' + paramNa + '" is invalid');
        } else {
            return ",\"" + paramNa.toString() + "\":\"" + paramVa.toString() + "\"";
        }
    } else {
        return ",\"" + paramNa.toString() + "\":\"" + paramVa.toString() + "\"";
    }
}
function createText(paramNa, paramVa, valiString) {
    if (valiString && valiString.length > 0) {
        if (!valiString.test(paramVa)) {
            throw new Error('Parameter "' + paramNa + '" is invalid');
        } else {
            return ",\"" + paramNa.toString() + "\":\"" + encodeURI(paramVa.toString()) + "\"";
        }
    } else {
        return ",\"" + paramNa.toString() + "\":\"" + encodeURI(paramVa.toString()) + "\"";
    }
}
function createUnStr(paramNa, paramVa, valiString) {
    if (valiString && valiString.length > 0) {
        if (!valiString.test(paramVa)) {
            throw new Error('Parameter "' + paramNa + '"is invalid');
        } else {
            return ",\"" + paramNa.toString() + "\":" + paramVa.toString();
        }
    } else {
        return ",\"" + paramNa.toString() + "\":" + paramVa.toString();
    }
}

//******************************************* */
//4.6
ESC_JSSDK.Builder.prototype.PrinterInitialize = function () {
    var d = "{";
    d += createTypeString("PrinterInitialize");
    d += "}";

    if (HPRT_PrintData !="") {
        HPRT_PrintData += ",\ ";
    }
    HPRT_PrintData += d;

    return d;
}


//4.13
ESC_JSSDK.Builder.prototype.FeedLine = function (lines) {
    var d = "{";
    d += createTypeString("FeedLine");
    d += createUnStr("lines", lines);
    d += "}";

    if (HPRT_PrintData !="") {
        HPRT_PrintData += ",\ ";
    }
    HPRT_PrintData += d;

    return d;
}
//4.47
ESC_JSSDK.Builder.prototype.SetAlign = function (align) {
    var d = "{";
    d += createTypeString("SetAlign");
    d += createUnStr("align", align);
    d += "}";

    if (HPRT_PrintData !="") {
        HPRT_PrintData += ",\ ";
    }
    HPRT_PrintData += d;

    return d;
}
//4.15
ESC_JSSDK.Builder.prototype.PrintText = function (data,alignment,attribute,textSize) {
    var d = "{";
    d += createTypeString("PrintText");
    d += createStr("data", data);
    d += createUnStr("alignment", alignment);
    d += createUnStr("attribute", attribute);
    d += createUnStr("textSize", textSize);
    d += "}";

    if (HPRT_PrintData !="") {
        HPRT_PrintData += ",\ ";
    }
    HPRT_PrintData += d;

    return d;
}
//4.16
ESC_JSSDK.Builder.prototype.PrintTextS = function (data) {
    var d = "{";
    d += createTypeString("PrintTextS");
    d += createStr("data", data);
    d += "}";

    if (HPRT_PrintData !="") {
        HPRT_PrintData += ",\ ";
    }
    HPRT_PrintData += d;

    return d;
}
//4.17
ESC_JSSDK.Builder.prototype.PrintBarCode = function (bcType,data,width,height,alignment,hriPosition) {
    var d = "{";
    d += createTypeString("PrintBarCode");
    d += createUnStr("bcType", bcType);
    d += createStr("data", data);
    d += createUnStr("width", width);
    d += createUnStr("height", height);
    d += createUnStr("alignment", alignment);
    d += createUnStr("hriPosition", hriPosition);
    d += "}";

    if (HPRT_PrintData !="") {
        HPRT_PrintData += ",\ ";
    }
    HPRT_PrintData += d;

    return d;
}
//4.18
ESC_JSSDK.Builder.prototype.PrintSymbol = function (type,data,errLevel,width,height,alignment) {
    var d = "{";
    d += createTypeString("PrintSymbol");
    d += createUnStr("type", type);
    d += createStr("data", data);
    d += createUnStr("errLevel", errLevel);
    d += createUnStr("width", width);
    d += createUnStr("height", height);
    d += createUnStr("alignment", alignment);
    d += "}";

    if (HPRT_PrintData !="") {
        HPRT_PrintData += ",\ ";
    }
    HPRT_PrintData += d;

    return d;
}
//4.12
ESC_JSSDK.Builder.prototype.CutPaper = function (cutMode,distance) {
    var d = "{";
    d += createTypeString("CutPaper");
    d += createUnStr("cutMode", cutMode);
    d += createUnStr("distance", distance);

    d += "}";

    if (HPRT_PrintData !="") {
        HPRT_PrintData += ",\ ";
    }
    HPRT_PrintData += d;

    return d;
}
//4.14
ESC_JSSDK.Builder.prototype.OpenCashDrawer = function (pin_mode,onTime,offTime) {
    var d = "{";
    d += createTypeString("OpenCashDrawer");
    d += createUnStr("pin_mode", pin_mode);
    d += createUnStr("onTime", onTime);
    d += createUnStr("offTime", offTime);

    d += "}";

    if (HPRT_PrintData !="") {
        HPRT_PrintData += ",\ ";
    }
    HPRT_PrintData += d;

    return d;
}
//4.28
ESC_JSSDK.Builder.prototype.SelectStandardMode = function () {
    var d = "{";
    d += createTypeString("SelectStandardMode");

    d += "}";

    if (HPRT_PrintData !="") {
        HPRT_PrintData += ",\ ";
    }
    HPRT_PrintData += d;

    return d;
}
//4.7
ESC_JSSDK.Builder.prototype.SetTextLineSpace = function (lineSpace) {
    var d = "{";
    d += createTypeString("SetTextLineSpace");
    d += createUnStr("lineSpace", lineSpace);
    d += "}";

    if (HPRT_PrintData !="") {
        HPRT_PrintData += ",\ ";
    }
    HPRT_PrintData += d;

    return d;
}
//4.48
ESC_JSSDK.Builder.prototype.SetTextBold = function (bold) {
    var d = "{";
    d += createTypeString("SetTextBold");
    d += createUnStr("bold", bold);
    d += "}";

    if (HPRT_PrintData !="") {
        HPRT_PrintData += ",\ ";
    }
    HPRT_PrintData += d;

    return d;
}
//4.49
ESC_JSSDK.Builder.prototype.SetTextFont = function (font) {
    var d = "{";
    d += createTypeString("SetTextFont");
    d += createUnStr("font", font);
    d += "}";

    if (HPRT_PrintData !="") {
        HPRT_PrintData += ",\ ";
    }
    HPRT_PrintData += d;

    return d;
}
//4.27
ESC_JSSDK.Builder.prototype.SelectPageMode = function () {
    var d = "{";
    d += createTypeString("SelectPageMode");
    d += "}";

    if (HPRT_PrintData !="") {
        HPRT_PrintData += ",\ ";
    }
    HPRT_PrintData += d;

    return d;
}
//4.32
ESC_JSSDK.Builder.prototype.SetPrintAreaInPageMode = function (horizontal,vertical,width,height) {
    var d = "{";
    d += createTypeString("SetPrintAreaInPageMode");
    d += createUnStr("horizontal", horizontal);
    d += createUnStr("vertical", vertical);
    d += createUnStr("width", width);
    d += createUnStr("height", height);
    d += "}";

    if (HPRT_PrintData !="") {
        HPRT_PrintData += ",\ ";
    }
    HPRT_PrintData += d;

    return d;
}
//4.8
ESC_JSSDK.Builder.prototype.CancelPrintDataInPageMode = function () {
    var d = "{";
    d += createTypeString("CancelPrintDataInPageMode");
    d += "}";

    if (HPRT_PrintData !="") {
        HPRT_PrintData += ",\ ";
    }
    HPRT_PrintData += d;

    return d;
}
//4.29
ESC_JSSDK.Builder.prototype.SelectPrintDirectionInPageMode = function (direction) {
    var d = "{";
    d += createTypeString("SelectPrintDirectionInPageMode");
    d += createUnStr("direction", direction);
    d += "}";

    if (HPRT_PrintData !="") {
        HPRT_PrintData += ",\ ";
    }
    HPRT_PrintData += d;

    return d;
}
//4.35
ESC_JSSDK.Builder.prototype.SetAbsolutePrintPosition = function (position) {
    var d = "{";
    d += createTypeString("SetAbsolutePrintPosition");
    d += createUnStr("position", position);
    d += "}";

    if (HPRT_PrintData !="") {
        HPRT_PrintData += ",\ ";
    }
    HPRT_PrintData += d;

    return d;
}
//4.30
ESC_JSSDK.Builder.prototype.SetAbsoluteVerticalPrintPositionInPageMode = function (position) {
    var d = "{";
    d += createTypeString("SetAbsoluteVerticalPrintPositionInPageMode");
    d += createUnStr("position", position);
    d += "}";

    if (HPRT_PrintData !="") {
        HPRT_PrintData += ",\ ";
    }
    HPRT_PrintData += d;

    return d;
}
//4.31
ESC_JSSDK.Builder.prototype.PrintAndReturnStandardMode = function () {
    var d = "{";
    d += createTypeString("PrintAndReturnStandardMode");
    d += "}";

    if (HPRT_PrintData !="") {
        HPRT_PrintData += ",\ ";
    }
    HPRT_PrintData += d;

    return d;
}
//4.36
ESC_JSSDK.Builder.prototype.PositionNextLabel = function () {
    var d = "{";
    d += createTypeString("PositionNextLabel");
    d += "}";

    if (HPRT_PrintData !="") {
        HPRT_PrintData += ",\ ";
    }
    HPRT_PrintData += d;

    return d;
}
//4.33
ESC_JSSDK.Builder.prototype.PrintDataInPageMode = function () {
    var d = "{";
    d += createTypeString("PrintDataInPageMode");
    d += "}";

    if (HPRT_PrintData !="") {
        HPRT_PrintData += ",\ ";
    }
    HPRT_PrintData += d;

    return d;
}
//4.9
ESC_JSSDK.Builder.prototype.GetPrinterState = function (printerStatus) {
    var d = "{";
    d += createTypeString("GetPrinterState");
    d += createUnStr("printerStatus", printerStatus);
    d += "}";

    if (HPRT_PrintData !="") {
        HPRT_PrintData += ",\ ";
    }
    HPRT_PrintData += d;

    return d;
}
//4.52
ESC_JSSDK.Builder.prototype.SetHorizontalAndVerticalMotionUnits = function (horizontal,vertical) {
    var d = "{";
    d += createTypeString("SetHorizontalAndVerticalMotionUnits");
    d += createUnStr("horizontal", horizontal);
    d += createUnStr("vertical", vertical);
    d += "}";

    if (HPRT_PrintData !="") {
        HPRT_PrintData += ",\ ";
    }
    HPRT_PrintData += d;

    return d;
}
//4.10
ESC_JSSDK.Builder.prototype.SetCodePage = function (codepage,type) {
    var d = "{";
    d += createTypeString("SetCodePage");
    d += createUnStr("codepage", codepage);
    d += createUnStr("type", type);
    d += "}";

    if (HPRT_PrintData !="") {
        HPRT_PrintData += ",\ ";
    }
    HPRT_PrintData += d;

    return d;
}
//4.50
ESC_JSSDK.Builder.prototype.SetBuzzer = function (enable) {
    var d = "{";
    d += createTypeString("SetBuzzer");
    d += createUnStr("enable", enable);
    d += "}";

    if (HPRT_PrintData !="") {
        HPRT_PrintData += ",\ ";
    }
    HPRT_PrintData += d;

    return d;
}
//4.11
ESC_JSSDK.Builder.prototype.SetInternationalCharacter = function (characterSet) {
    var d = "{";
    d += createTypeString("SetInternationalCharacter");
    d += createUnStr("characterSet", characterSet);
    d += "}";

    if (HPRT_PrintData !="") {
        HPRT_PrintData += ",\ ";
    }
    HPRT_PrintData += d;

    return d;
}
//4.22
ESC_JSSDK.Builder.prototype.DefineNVImageCompatible = function (fileNameList,imageQty) {
    var d = "{";
    d += createTypeString("DefineNVImageCompatible");
    d += createStr("fileNameList", fileNameList);
    d += createUnStr("imageQty", imageQty);
    d += "}";

    if (HPRT_PrintData !="") {
        HPRT_PrintData += ",\ ";
    }
    HPRT_PrintData += d;

    return d;
}
//4.24
ESC_JSSDK.Builder.prototype.DefineDownloadedImageCompatible = function (fileName) {
    var d = "{";
    d += createTypeString("DefineDownloadedImageCompatible");
    d += createStr("fileNameList", fileName);
    d += "}";

    if (HPRT_PrintData !="") {
        HPRT_PrintData += ",\ ";
    }
    HPRT_PrintData += d;

    return d;
}
//4.20
ESC_JSSDK.Builder.prototype.PrintImage = function (imagePath,scaleMode) {
    var d = "{";
    d += createTypeString("PrintImage");
    d += createStr("imagePath", imagePath);
    d += createUnStr("scaleMode", scaleMode);
    d += "}";

    if (HPRT_PrintData !="") {
        HPRT_PrintData += ",\ ";
    }
    HPRT_PrintData += d;

    return d;
}
//4.37
ESC_JSSDK.Builder.prototype.DefineNVImage = function (imagePath,kc1,kc2) {
    var d = "{";
    d += createTypeString("DefineNVImage");
    d += createStr("imagePath", imagePath);
    d += createUnStr("kc1", kc1);
    d += createUnStr("kc2", kc2);
    d += "}";

    if (HPRT_PrintData !="") {
        HPRT_PrintData += ",\ ";
    }
    HPRT_PrintData += d;

    return d;
}
//4.39
ESC_JSSDK.Builder.prototype.DefineDownloadedImage = function (imagePath,kc1,kc2) {
    var d = "{";
    d += createTypeString("DefineDownloadedImage");
    d += createStr("imagePath", imagePath);
    d += createUnStr("kc1", kc1);
    d += createUnStr("kc2", kc2);
    d += "}";

    if (HPRT_PrintData !="") {
        HPRT_PrintData += ",\ ";
    }
    HPRT_PrintData += d;

    return d;
}
//4.40
ESC_JSSDK.Builder.prototype.PrintDownloadedImage = function (kc1,kc2) {
    var d = "{";
    d += createTypeString("PrintDownloadedImage");
    d += createUnStr("kc1", kc1);
    d += createUnStr("kc2", kc2);
    d += "}";

    if (HPRT_PrintData !="") {
        HPRT_PrintData += ",\ ";
    }
    HPRT_PrintData += d;

    return d;
}
//4.41
ESC_JSSDK.Builder.prototype.DefineBufferedImage = function (imagePath) {
    var d = "{";
    d += createTypeString("DefineBufferedImage");
    d += createStr("imagePath", imagePath);
    d += "}";

    if (HPRT_PrintData !="") {
        HPRT_PrintData += ",\ ";
    }
    HPRT_PrintData += d;

    return d;
}
//4.42
ESC_JSSDK.Builder.prototype.PrintBufferedImage = function () {
    var d = "{";
    d += createTypeString("PrintBufferedImage");
    d += "}";

    if (HPRT_PrintData !="") {
        HPRT_PrintData += ",\ ";
    }
    HPRT_PrintData += d;

    return d;
}
//4.43
ESC_JSSDK.Builder.prototype.DeleteAllNVImages = function () {
    var d = "{";
    d += createTypeString("DeleteAllNVImages");
    d += "}";

    if (HPRT_PrintData !="") {
        HPRT_PrintData += ",\ ";
    }
    HPRT_PrintData += d;

    return d;
}
//4.26
ESC_JSSDK.Builder.prototype.GetFirmwareVersion = function (version,versionLen) {
    var d = "{";
    d += createTypeString("GetFirmwareVersion");
    d += createUnStr("version", version);
    d += createUnStr("versionLen", versionLen);
    d += "}";

    if (HPRT_PrintData !="") {
        HPRT_PrintData += ",\ ";
    }
    HPRT_PrintData += d;

    return d;
}
//4.44
ESC_JSSDK.Builder.prototype.GetCashDrawerState = function (drawerState) {
    var d = "{";
    d += createTypeString("GetCashDrawerState");
    d += createUnStr("drawerState", drawerState);
    d += "}";

    if (HPRT_PrintData !="") {
        HPRT_PrintData += ",\ ";
    }
    HPRT_PrintData += d;

    return d;
}
//4.45
ESC_JSSDK.Builder.prototype.ClearBuffer = function () {
    var d = "{";
    d += createTypeString("ClearBuffer");
    d += "}";

    if (HPRT_PrintData !="") {
        HPRT_PrintData += ",\ ";
    }
    HPRT_PrintData += d;

    return d;
}
//4.21
ESC_JSSDK.Builder.prototype.PrintBitMapData = function (scaleMode,width,height,data) {
    var d = "{";
    d += createTypeString("PrintBitMapData");
    d += createUnStr("scaleMode", scaleMode);
    d += createUnStr("width", width);
    d += createUnStr("height", height);
    d += createStr("data", data);
    d += "}";

    if (HPRT_PrintData !="") {
        HPRT_PrintData += ",\ ";
    }
    HPRT_PrintData += d;

    return d;
}
//4.19
ESC_JSSDK.Builder.prototype.PrintTwoQRCode = function (data1,width1,hAlign1,vAlign1,data2,width2,hAlign2,vAlign2) {
    var d = "{";
    d += createTypeString("PrintTwoQRCode");
    d += createStr("data1", data1);
    d += createUnStr("width1", width1);
    d += createUnStr("hAlign1", hAlign1);
    d += createUnStr("vAlign1", vAlign1);
    d += createStr("data2", data2);
    d += createUnStr("width2", width2);
    d += createUnStr("hAlign2", hAlign2);
    d += createUnStr("vAlign2", vAlign2);
    d += "}";

    if (HPRT_PrintData !="") {
        HPRT_PrintData += ",\ ";
    }
    HPRT_PrintData += d;

    return d;
}
//4.53
ESC_JSSDK.Builder.prototype.DrawLine = function (xStart,yStart,xEnd,yEnd,lineWidth) {
    var d = "{";
    d += createTypeString("DrawLine");
    d += createUnStr("xStart", xStart);
    d += createUnStr("yStart", yStart);
    d += createUnStr("xEnd", xEnd);
    d += createUnStr("yEnd", yEnd);
    d += createUnStr("data2", data2);
    d += createUnStr("lineWidth", lineWidth);
    d += "}";

    if (HPRT_PrintData !="") {
        HPRT_PrintData += ",\ ";
    }
    HPRT_PrintData += d;

    return d;
}
//4.54
ESC_JSSDK.Builder.prototype.DrawRectangle = function (xStart,yStart,xArea,yArea,lineWidth) {
    var d = "{";
    d += createTypeString("DrawRectangle");
    d += createUnStr("xStart", xStart);
    d += createUnStr("yStart", yStart);
    d += createUnStr("xArea", xArea);
    d += createUnStr("yEnd", yEnd);
    d += createUnStr("yArea", yArea);
    d += createUnStr("lineWidth", lineWidth);
    d += "}";

    if (HPRT_PrintData !="") {
        HPRT_PrintData += ",\ ";
    }
    HPRT_PrintData += d;

    return d;
}

//add by wjz 20210528
ESC_JSSDK.Builder.prototype.DirectIO = function (readNum, customid, writedata) {
    var d = "{";
    d += createTypeString("DirectIO");
    d += createStr("writedata", writedata);
    d += createUnStr("readNum", readNum);			//这个字段会影响等待时间，请根据实际需要设置，当没有返回时设置0即可。
	d += createStr("customid", customid);			//自定义id标记，会跟随放到返回消息中，可选填
	d += createUnStr("datatype", datatype);			//输入数据类型（0：十六进制（默认），1：字符串），可选填
	d += createUnStr("converttype", converttype);	//若输入数据有文本内容（当输入数据类型为十六进制时，此参数将被忽略），还能控制输入数据将要转码的类型（0：utf8编码（默认），1：gbk编码）（例如最终想要转成GBK的内容），可选填
    d += "}";

    if (this.PrintData != "") {
        this.PrintData += ",\ ";
    }
    this.PrintData += d;

    return d;
}

ESC_JSSDK.Builder.prototype.ReadData = function (readNum, customid) {
    var d = "{";
    d += createTypeString("ReadData");
    d += createUnStr("readNum", readNum);
	d += createStr("customid", customid);		//自定义id标记，会跟随放到返回消息中，可以为空
    // d += createUnStr("preadedNum", preadedNum);
    d += "}";

    if (this.PrintData != "") {
        this.PrintData += ",\ ";
    }
    this.PrintData += d;
    return d;
}





