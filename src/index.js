$(document).ready(function(){
    var url = "Motorcycle Make_Model.xlsx";
    var oReq = new XMLHttpRequest();
    oReq.open("GET", url , true);
    oReq.responseType = "arraybuffer";

    oReq.onload = function(e)
    {
        var info=readData();
        console.log(info);

        function readData()
        {
            var arraybuffer = oReq.response;
            var data = new Uint8Array(ArrayBuffer);
            var arr = new Array();
            for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
            var bstr = arr.join("");
        }
    }
})