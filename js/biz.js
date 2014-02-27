/*
 * @description : \业务处理
 * @author : sherlock
 * @update : 14-2-27
 */

$(function(){

    var example01 = $("#example01");
    var example02 = $("#example02");
    var example03 = $("#example03");
    var example06 = $("#example06");
    var example07 = $("#example07");
    var example08 = $("#example08");

    //改变背景颜色
    example02.find("[type='change']").click(function(){
        var $this = $(this);
        example02.find(".example-main").css("background","darkmagenta");

    });

    //奇数改变偶数
    example01.find(".example-util [type='change']").click(function(){
        var $this = $(this);
        var status = $this.attr("status");
        //alert(status);
        var width =  example01.find(".out").width();
        //console.log(width);
        if(status == "0"){
            example01.find(".out").css("width",width+1);
            $this.html("改变奇数");
            status = "1";
        }
        else{
            example01.find(".out").css("width",width-1);
            $this.html("改变偶数");
            status = "0";
        }
        $this.attr("status",status);
    });


    example03.find(".example-util [type='changeFloat']").click(function(){
        example03.find(".main ").css("float","left");
    });

    example03.find(".example-util [type='changeMargin']").click(function(){
        example03.find(".slide ").css("margin-right","-3px");
    });

    example03.find(".example-util [type='restore']").click(function(){
        example03.find(".main ").css("float","");
        example03.find(".slide ").css("margin-right","0px");
    });



    example06.find(".example-util [type='changeZoom']").click(function(){
        example06.find(".example-main li a").css("zoom","1");
    });

    example06.find(".example-util [type='changeMargin']").click(function(){
        example06.find(".example-main li").css("display","inline");
    });

    example06.find(".example-util [type='restore']").click(function(){
        example06.find(".example-main li a").css("zoom","");
        example06.find(".example-main li ").css("display","");

    });


    example07.find(".example-util [type='changeZoom']").click(function(){
        example07.find(".main").css("height","200px");
    });

    example07.find(".example-util [type='changeMargin']").click(function(){
        example07.find(".main > div").css("left:","-20px");
    });

    example07.find(".example-util [type='restore']").click(function(){
        example07.find(".main").css("height","");
        example07.find(".main div").css("_left:","");

    });


    example08.find(".example-util [type='changeZoom']").click(function(){
        example08.find(".filter01 a").css("position","relative");
    });

    example08.find(".example-util [type='restore']").click(function(){
        example08.find(".filter01 a").css("position","");
    });


});
