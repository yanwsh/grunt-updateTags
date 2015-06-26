/**
 * Created by wensheng.yan on 6/26/15.
 */

function AnalyzeEngine(){

}

String.prototype.contains = function(it) { return this.indexOf(it) != -1; };

exports.getUnitName = function(title){
    var unitname = null;
    if((title.contains("fwbb") || title.contains("full width billboard")) && title.contains("inline") && !title.contains("mobile")){
        unitname = "FWBB Inline";
    }else if(title.contains("inline") && title.contains("mobile")){
        unitname = "Mobile Inline";
    }else if(title.contains("fwbb")|| title.contains("full width billboard")){
        unitname = "FWBB";
    }else if(title.contains("toolbar") || title.contains("sharebar")){
        unitname = "Toolbar";
    }else if(title.contains("skin")){
        unitname = "Skin";
    }else if(title.contains("interstitial") && !title.contains("mobile")){
        unitname = "Desktop Interstitial";
    }
    return unitname;
};

exports.isDelimiter = function(s){
    var flag = true;
    if(s == null || s.length == 0) return false;
    var length = s.length;
    var p = s.charAt(0);
    for(var i = 1; i < length; i++){
        var c = s.charAt(i);
        if(p != c) return false;
        p = c;
    }
    return flag;
};

