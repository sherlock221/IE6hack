/*
 * @description : 浏览器识别工具类
 * @author : sherlock
 * @update : 14-2-26
 * @version : 1.0.0
 * @support : IE6+ chrome firefox safari opera
 * @user  : Browser.name 以及 Browser.version 获得浏览器信息
 */

var Browser = {

 core : function(){
     var Sys = {};
     var ua = navigator.userAgent.toLowerCase();
     if (window.ActiveXObject)
         Sys.ie = ua.match(/msie ([\d.]+)/)[1];
     else if (document.getBoxObjectFor)
         Sys.firefox = ua.match(/firefox\/([\d.]+)/)[1];
     else if (window.MessageEvent && !document.getBoxObjectFor)
         Sys.chrome = ua.match(/chrome\/([\d.]+)/)[1];
     else if (window.opera)
         Sys.opera = ua.match(/opera.([\d.]+)/)[1];
     else if (window.openDatabase)
         Sys.safari = ua.match(/version\/([\d.]+)/)[1];
     return Sys;
 },

    check : function(){
        var Sys = Browser.core();
        var  result = {};
        if(Sys.ie){
            result.name = "IE";
            result.version = Sys.ie;
        }
        else if(Sys.firefox){
            result.name = "Firefox";
            result.version = Sys.firefox;
        }
        else if(Sys.chrome){
            result.name = "Chrome";
            result.version = Sys.chrome;
        }
        else if(Sys.opera){
            result.name = "Opera";
            result.version = Sys.opera;
        }
        else if(Sys.safari){
            result.name = "Safari";
            result.version = Sys.safari;
        }

        //方便设置属性
        Browser.name = result.name;
        Browser.version = result.version;
        return result;
    }

};

//初始化一次Browser
Browser.check();







